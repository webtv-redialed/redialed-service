var minisrv_service_file = true;

var accounts = session_data.listPrimaryAccountUsers();
var wtvc = new WTVCache(minisrv_config);

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;

function titleCase(str) {
    // ZCS returns all uppercase, so we manually make the first character of each word uppercase

    return str
        .toLowerCase()
        .split(" ")
        .map(function (item) {
            return item[0].toUpperCase() + item.substring(1);
        })
        .join(" ");
}

var infoCenter = request_headers.query.info;

switch (infoCenter) {
    case "WebTVToday":
        request_is_async = true; // Make us async

    function renderToday() {
		const clubWebTVTitle = fs.readFileSync(
			"./ServiceDeps/clubWebTVTitle.txt",
			{encoding: "utf8", flag: "r"}
		);
        data = engine.renderFileSync('wtv-center/WebTVTodayTeaser', { clubWebTVTitle });
        return data;
    }

        (async () => {
            sendToClient(socket, headers, renderToday());
        })();
        break;

    case "News":
        request_is_async = true; // Make us async

    function renderNews(newsData) {
		data = engine.renderFileSync('wtv-center/NewsTeaser', { newsData, newsProviderShort: this.minisrv_config.services["wtv-center"].newsProviderShort });
        return data;
    }

        (async () => {
            let newsData = await wtvc.getNewsCache();
            sendToClient(socket, headers, renderNews(newsData));
        })();
        break;

    case "Weather":
        request_is_async = true; // Make us async

    function renderWeather(weatherData) {
        const {getByZip} = require("zcs");
        let cityZIP = getByZip(accounts.subscriber.subscriber_zip_code || "98052");
        let cityName = titleCase(cityZIP.city);
		data = engine.renderFileSync('wtv-center/WeatherTeaser', { weatherData, cityName, wxProviderLong: this.minisrv_config.services["wtv-center"].wxProviderLong });
        return data;
    }

        (async () => {
            try {
				var weatherData = await wtvc.getWeatherCache(accounts.subscriber.subscriber_zip_code || "98052");
			} catch (error) {
				var weatherData;
				console.error('Failed to get external data:', error.message);
			}
            sendToClient(socket, headers, renderWeather(weatherData));
        })();
        break;

    case "Shopping":
        request_is_async = true; // Make us async

    function renderShopping() {
        data = engine.renderFileSync('wtv-center/ShoppingTeaser');
        return data;
    }

        (async () => {
            sendToClient(socket, headers, renderShopping());
        })();
        break;

    case "Entertainment":
        request_is_async = true; // Make us async

    function renderEntertainment(newsData) {
		data = engine.renderFileSync('wtv-center/EntertainmentTeaser', { newsData, newsProviderShort: this.minisrv_config.services["wtv-center"].newsProviderShort });
        return data;
    }

        (async () => {
            let newsData = await wtvc.getNewsCache();
            sendToClient(socket, headers, renderEntertainment(newsData));
        })();
        break;

    case "Sports":
        request_is_async = true; // Make us async

    function renderSports(newsData) {
		data = engine.renderFileSync('wtv-center/SportsTeaser', { newsData, newsProviderShort: this.minisrv_config.services["wtv-center"].newsProviderShort });
        return data;
    }

        (async () => {
            let newsData = await wtvc.getNewsCache();
            sendToClient(socket, headers, renderSports(newsData));
        })();
        break;

    case "Stocks":
        request_is_async = true; // Make us async

    function renderStocks(stocksData) {
        data = `<html>
		<head>
			<display info=News teaser1=WebTVToday>
		</head>
	
		<body background="wtv-content:/ROMCache/BackgroundCorner.gif" BGCOLOR=949484
			onLoad="CustomEmbedLoaded()"
		
			<table cellspacing=0 cellpadding=0 width=357 height=193 background="wtv-content:/ROMCache/BackgroundMoneyFlat.swf" valign=top novtilebg>
			<tr>
				<td colspan=2 width=357 height=44>
					<spacer>

			<tr>
				<td width=12>
					<spacer>

				<td valign=TOP align=LEFT width=361 height=149>
					<spacer><table cellspacing=0 cellpadding=0>
					
						<tr height=23>
						<td>
							<spacer type=vertical size=23>

								
						`;
        if (stocksData) {
            data += `<tr height=84 valign=top align=left>
		<td width=361>
			<table cellspacing=0 cellpadding=0 VALIGN=TOP ALIGN=LEFT>
				<tr>
					<td width=6>
						<spacer type=block width=6 height=84>
						<td width=131 maxlines=3>
						<table cellspacing=0 cellpadding=0>
						<tr ALIGN=LEFT VALIGN=TOP>
							<td rowspan=3 width=4>
							<td align=left>
							<font size=3 color=#DEDECE><blackface>AMC</blackface></font>
							<td rowspan=3 width=4>
						<tr><td align=left>
						<font size=2 color=000000>no quote</font>
						<tr><td align=left VALIGN=MIDDLE>
						<font size=2 color=000000>available</font>
					</table>
						<td width=112 maxlines=3>
						<table cellspacing=0 cellpadding=0>
						<tr ALIGN=LEFT VALIGN=TOP>
							<td rowspan=3 width=4>
							<td align=left>
							<font size=3 color=#DEDECE><blackface>GME</blackface></font>
							<td rowspan=3 width=4>
						<tr><td align=left>
						<font size=2 color=000000>no quote</font>
						<tr><td align=left VALIGN=MIDDLE>
						<font size=2 color=000000>available</font>
					</table>
						<td width=112 maxlines=3>
						<table cellspacing=0 cellpadding=0>
						<tr ALIGN=LEFT VALIGN=TOP>
							<td rowspan=3 width=4>
							<td align=left>
							<font size=3 color=#DEDECE><blackface>TWTR</blackface></font>
							<td rowspan=3 width=4>
						<tr><td align=left>
						<font size=2 color=000000>no quote</font>
						<tr><td align=left VALIGN=MIDDLE>
						<font size=2 color=000000>available</font>
					</table>
			</table>`;
        } else {
            data += `<table cellspacing=0 cellpadding=0>
		<tr>
			<td valign=top maxlines=2>
				<font color=111111 size=+2><b>Stock quotes are temporarily unavailable.</b></font>
	</table>`;
        }
        data += `

					<tr height=42>
						<td align=right valign=top>
							<spacer type=vertical size=9><br>
							<font size=-1 color=#183131><b>quotes provided by MSN</b></font><spacer type=horizontal size=10>

			</table>
			</table>
		</body>
	</html>`;
        return data;
    }

        (async () => {
            let stocksData;
            sendToClient(socket, headers, renderStocks(stocksData));
        })();
        break;
}
