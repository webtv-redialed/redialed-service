var minisrv_service_file = true;

const {
    getByStateCity,
    getByCityState,
    getByZip,
    zipLookAhead,
    cityLookAhead,
    stateLookAhead,
} = require("zcs");

var accounts = session_data.listPrimaryAccountUsers();
var wtvcache = new WTVCache(minisrv_config);

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
    case "Intro":
        request_is_async = true; // Make us async

    function renderToday() {
		const clubWebTVTitle = fs.readFileSync(
			"./ServiceDeps/clubWebTVTitle.txt",
			{encoding: "utf8", flag: "r"}
		);
        data = `<html>
	<body onLoad="CustomEmbedLoaded()" bgcolor=13142e>
	<table border=0 cellspacing=0 cellpadding=0>
	<tr>
		<td width=422 height=22>
		<table background="wtv-home:/ROMCache/teaser-News.gif" border=0 cellspacing=0 cellpadding=0 bgcolor=313657 gradcolor=13142e gradangle=90>
		<tr>
			<td width=422 height=2 colspan=2 bgcolor=FFFFFF transparency=80%>
			<img src=wtv-home:/ROMCache/PromotionLeftEdge.gif width=7 height=2><tr><td width=7 height=20 rowspan=2 background=wtv-home:/ROMCache/PromotionLeftEdge.gif><td width=7 height=2>
			<tr>
				<td width=415 height=18 align=left valign=center><font color=bdbd8d>
				<blackface> WebTV Today</blackface>
			</font>
		</table>
		<tr>
			<td width=422 height=62>
			<table border=0 cellspacing=0 cellpadding=0>
			<tr>
			<td width=7 height=62 background=wtv-home:/ROMCache/PromotionLeftEdge.gif>
			<td width=415 height=62 align=left valign=center>
			<font color=bdbdbd size=-1> ${clubWebTVTitle}</font></table></table></body></html>`;
        return data;
    }

        (async () => {
            sendToClient(socket, headers, renderToday());
        })();
        break;

    case "News":
        request_is_async = true; // Make us async

    function renderNews(newsData) {
        data = `<html>
	<body onLoad="CustomEmbedLoaded()" bgcolor=13142e><table cellspacing=0 cellpadding=0>
	<tr>
		<td width=422 height=22><table cellspacing=0 cellpadding=0 background=wtv-home:/ROMCache/teaser-News.gif><tr><td width=422 height=2 colspan=2 bgcolor=FFFFFF transparency=80%>
		<img src=wtv-home:/ROMCache/PromotionLeftEdge.gif width=7 height=2>
		<tr>
			<td width=7 height=20 rowspan=2 background=wtv-home:/ROMCache/PromotionLeftEdge.gif><td width=7 height=2>
			<tr>
				<td width=415 height=18 align=left valign=center><font color=6d6d7d>
				<blackface>News</blackface>
			</font>
		</table>
		<tr>
			<td width=422 height=62>
			<table cellspacing=0 cellpadding=0><tr><td width=7 height=62 background=wtv-home:/ROMCache/PromotionLeftEdge.gif><td width=120 height=62 align=left valign=center><font color=bdbd8d size=-1>Headlines</font><td width=305 height=62 align=left valign=center><font color=bdbdbd size=-1>`;
        try {
            data += newsData.newsHeadlines[0].title;
        } catch (e) {
            data += "News information is temporarily unavailable.";
        }
        data += `</font></table></table></body></html>`;
        return data;
    }

        (async () => {
            let newsData = await wtvcache.getNewsCache();
            sendToClient(socket, headers, renderNews(newsData));
        })();
        break;

    case "Weather":
        request_is_async = true; // Make us async

    function renderWeather(weatherData) {
		console.log(weatherData)
        const {getByZip} = require("zcs");
        let cityZIP = getByZip(
            accounts.subscriber.subscriber_zip_code || "98052"
        );
        let cityname = titleCase(cityZIP.city);
        data = `<html>
	<body onLoad="CustomEmbedLoaded()" bgcolor=13142e><table cellspacing=0 cellpadding=0>
	<tr>
		<td width=422 height=22><table cellspacing=0 cellpadding=0 background=wtv-home:/ROMCache/teaser-Weather.gif><tr><td width=422 height=2 colspan=2 bgcolor=FFFFFF transparency=80%>
		<img src=wtv-home:/ROMCache/PromotionLeftEdge.gif width=7 height=2>
		<tr>
			<td width=7 height=20 rowspan=2 background=wtv-home:/ROMCache/PromotionLeftEdge.gif><td width=7 height=2>
			<tr>
				<td width=415 height=18 align=left valign=center><font color=6d9d9d>
				<blackface>Weather</blackface>
			</font>
		</table>
		<tr>
			<td width=422 height=62>
			<table cellspacing=0 cellpadding=0><tr><td width=7 height=62 background=wtv-home:/ROMCache/PromotionLeftEdge.gif><td width=190 height=62 align=left valign=center><font color=bdbd8d size=-1>${cityname}</font><td width=225 height=62 align=left valign=center><table cellspacing=0 cellpadding=0><tr><td width=300 height=16 align=left valign=center><form name=weatherForm>
			<font color=bdbdbd size=-1><blackface>
			<input id=disp1 type=text size=28 usestyle nobackground border=0 marginheight=3 nocursor noselect value="CURRENT">
</blackface>
		</font>
		<tr>
			<td width=300 height=20 align=left valign=center>
			<font color=bdbdbd size=-1>
			<input id=disp2 type=text size=25 usestyle nobackground border=0 marginheight=3 nocursor noselect value="${weatherData.cond}, ${weatherData.temp}">
</font>
			<!-- Weekday and forecast for current day (this is given values from disp1 and disp2) -->
			<input type=hidden name=disp1a value="">
				<input type=hidden name=disp2a value="">
					<!-- Weekday and humidity level for current day (weekday is always "CURRENT"?) -->
					<input type=hidden name=disp1b value="CURRENT">
						<input type=hidden name=disp2b value="humidity: ${weatherData.humid}%">
							<!-- Weekday and forecast for a day after the current day (likely the next day, IDK) -->
							<!-- sorry WNI, i'm not implementing forecasts for a page that like two people will see -->
							<input type=hidden name=disp1c value="CURRENT">
								<input type=hidden name=disp2c value="${weatherData.cond}, ${weatherData.temp}">
</form>
							</table>
						</table>
					</table>
				</body>
			</html>`;
        return data;
    }

        (async () => {
            let weatherData = await wtvcache.getWeatherCache(accounts.subscriber.subscriber_zip_code || "98052");
            sendToClient(socket, headers, renderWeather(weatherData));
        })();
        break;

    case "Stocks":
        request_is_async = true; // Make us async

    function renderStocks() {
        data = `<html>
	<body onLoad="CustomEmbedLoaded()" bgcolor=13142e>
	<table border=0 cellspacing=0 cellpadding=0>
	<tr>
		<td width=422 height=22>
		<table background="wtv-home:/ROMCache/teaser-Stocks.gif" border=0 cellspacing=0 cellpadding=0 bgcolor=313657 gradcolor=13142e gradangle=90>
		<tr>
			<td width=422 height=2 colspan=2 bgcolor=FFFFFF transparency=80%>
			<img src=wtv-home:/ROMCache/PromotionLeftEdge.gif width=7 height=2><tr><td width=7 height=20 rowspan=2 background=wtv-home:/ROMCache/PromotionLeftEdge.gif><td width=7 height=2>
			<tr>
				<td width=415 height=18 align=left valign=center><font color=1b691d>
				<blackface> stocks</blackface>
			</font>
		</table>
		<tr>
			<td width=422 height=62>
			<table border=0 cellspacing=0 cellpadding=0>
			<tr>
			<td width=7 height=62 background=wtv-home:/ROMCache/PromotionLeftEdge.gif>
			<td width=415 height=62 align=left valign=center>
			<font color=bdbdbd size=-1> Stocks information is temporarily unavailable.</font></table></table></body></html>`;
        return data;
    }

        (async () => {
            sendToClient(socket, headers, renderStocks());
        })();
        break;

    case "Entertainment":
        request_is_async = true; // Make us async

    function renderEntertainment(newsData) {
        data = `<html>
	<body onLoad="CustomEmbedLoaded()" bgcolor=13142e>
	<table border=0 cellspacing=0 cellpadding=0>
	<tr>
		<td width=422 height=22>
		<table background="wtv-home:/ROMCache/teaser-News.gif" border=0 cellspacing=0 cellpadding=0 bgcolor=313657 gradcolor=13142e gradangle=90>
		<tr>
			<td width=422 height=2 colspan=2 bgcolor=FFFFFF transparency=80%>
			<img src=wtv-home:/ROMCache/PromotionLeftEdge.gif width=7 height=2><tr><td width=7 height=20 rowspan=2 background=wtv-home:/ROMCache/PromotionLeftEdge.gif><td width=7 height=2>
			<tr>
				<td width=415 height=18 align=left valign=center><font color=40475A>
				<blackface> entertainment</blackface>
			</font>
		</table>
		<tr>
			<td width=422 height=62>
			<table border=0 cellspacing=0 cellpadding=0>
			<tr>
			<td width=7 height=62 background=wtv-home:/ROMCache/PromotionLeftEdge.gif>
			<td width=415 height=62 align=left valign=center>
			<font color=bdbdbd size=-1> `;
        try {
            data += newsData.entertainmentHeadlines[0].title;
        } catch (e) {
            data += "Entertainment information is temporarily unavailable.";
        }
        data += `</font></table></table></body></html>`;
        return data;
    }

        (async () => {
            let newsData = await wtvcache.getNewsCache();
            sendToClient(socket, headers, renderEntertainment(newsData));
        })();
        break;

    case "Sports":
        request_is_async = true; // Make us async

    function renderSports(newsData) {
        data = `<html>
	<body onLoad="CustomEmbedLoaded()" bgcolor=13142e>
	<table border=0 cellspacing=0 cellpadding=0>
	<tr>
		<td width=422 height=22>
		<table background="wtv-home:/ROMCache/teaser-Sports.gif" border=0 cellspacing=0 cellpadding=0 bgcolor=313657 gradcolor=13142e gradangle=90>
		<tr>
			<td width=422 height=2 colspan=2 bgcolor=FFFFFF transparency=80%>
			<img src=wtv-home:/ROMCache/PromotionLeftEdge.gif width=7 height=2><tr><td width=7 height=20 rowspan=2 background=wtv-home:/ROMCache/PromotionLeftEdge.gif><td width=7 height=2>
			<tr>
				<td width=415 height=18 align=left valign=center><font color=453C95>
				<blackface> sports</blackface>
			</font>
		</table>
		<tr>
			<td width=422 height=62>
			<table border=0 cellspacing=0 cellpadding=0>
			<tr>
			<td width=7 height=62 background=wtv-home:/ROMCache/PromotionLeftEdge.gif>
			<td width=415 height=62 align=left valign=center>
			<font color=bdbdbd size=-1> `;
        try {
            data += newsData.sportsHeadlines[0].title;
        } catch (e) {
            data += "Entertainment information is temporarily unavailable.";
        }
        data += `</font></table></table></body></html>`;
        return data;
    }

        (async () => {
            let newsData = await wtvcache.getNewsCache();
            sendToClient(socket, headers, renderSports(newsData));
        })();
        break;
}
