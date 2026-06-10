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
        data = `<html>
		<head>
			<display info=News teaser1=WebTVToday>
		</head>
	
		<body background="wtv-content:/ROMCache/BackgroundCorner.gif" BGCOLOR=949484
			onLoad="CustomEmbedLoaded()"
		
			<table cellspacing=0 cellpadding=0 width=357 height=193 background="wtv-content:/ROMCache/BackgroundWebTVToday_a.swf" valign=top novtilebg>
			<tr>
				<td colspan=2 width=357 height=44>
					<spacer>

			<tr>
				<td width=12>
					<spacer>

				<td valign=TOP align=LEFT width=361 height=149>
					<spacer><table cellspacing=0 cellpadding=0>

					<tr height=40>
		<td width=88>
			<spacer type=block width=88 height=40>
		<td width=263>
		<td width=10>

	<tr height=60>
		<td width=88>
			<spacer type=block width=88 height=60>
		<td maxlines=2 valign=top align=left width=263>
			<table cellspacing=0 cellpadding=0>
				<tr>
					<td valign=top maxlines=2>
						<font size=+2 color="#000000"><b>${clubWebTVTitle}</b></font>
			</table>
		<td width=10>

	<tr height=49>

		<td width=88>
		<spacer type=block width=88 height=49>
		<td width=263 valign=middle align=right>
			<font size=-1 color=#563333><B>find out more in WebTV Today</B></FONT>
		<td width=10>

			</table>
			</table>
		</body>
	</html>`;
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
		<head>
			<display info=News teaser1=WebTVToday>
		</head>
	
		<body background="wtv-content:/ROMCache/BackgroundCorner.gif" BGCOLOR=949484
			onLoad="CustomEmbedLoaded()"
		
			<table cellspacing=0 cellpadding=0 width=357 height=193 background="wtv-content:/ROMCache/BackgroundNews.swf" valign=top novtilebg>
			<tr>
				<td colspan=2 width=357 height=44>
					<spacer>

			<tr>
				<td width=12>
					<spacer>

				<td valign=TOP align=LEFT width=361 height=149>
					<spacer><table cellspacing=0 cellpadding=0>

					<tr height=40>
		<td width=88>
			<spacer type=block width=88 height=40>
		<td width=263>
		<td width=10>

	<tr height=60>
		<td width=88>
			<spacer type=block width=88 height=60>
		<td maxlines=2 valign=top align=left width=263>
			<table cellspacing=0 cellpadding=0>
				<tr>
					<td valign=top maxlines=2>
						<font size=+2 color="#000000"><b>`;
        try {
            data += newsData.newsHeadlines[0].title;
        } catch (e) {
            data += "News headlines are temporarily unavailable.";
        }
        data += `</b></font>
			</table>
		<td width=10>

	<tr height=49>

		<td width=88>
		<spacer type=block width=88 height=49>
		<td width=263 valign=middle align=right>
			<font size=-1 color=#313939><B>news provided by NYT</B></FONT>
		<td width=10>

			</table>
			</table>
		</body>
	</html>`;
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
        let cityZIP = getByZip(
            accounts.subscriber.subscriber_zip_code || "98052"
        );
        let cityname = titleCase(cityZIP.city);
        data = `<html>
		<head>
			<display info=Weather teaser1=WebTVToday>
		</head>
	
		<body background="wtv-content:/ROMCache/BackgroundCorner.gif" BGCOLOR=949484
			onLoad="CustomEmbedLoaded()"
		
			<table cellspacing=0 cellpadding=0 width=357 height=193 background="wtv-content:/ROMCache/BackgroundNews.swf" valign=top novtilebg>
			<tr>
				<td colspan=2 width=357 height=44>
					<spacer>

			<tr>
				<td width=12>
					<spacer>

				<td valign=TOP align=LEFT width=361 height=149>
					<spacer><table cellspacing=0 cellpadding=0>
					
					<script language="JavaScript">
						function RotateCustomTeaserContent()
{{
	var str1;
	var str2;
	var icon;
	var doc;
	
	doc = document.teaserEmbed.document;

	if ((doc.teaserForm != nil) && 
		(typeof doc.teaserForm == "object")) {{
 		gTeaserSubIndex += 1;
 		
		if (gTeaserSubIndex > 2)
			gTeaserSubIndex = 0;

		if (gTeaserSubIndex == 1) {{
			str1 = doc.teaserForm.disp1b.value;
			str2 = doc.teaserForm.disp2b.value;
			icon = doc.teaserForm.dispIcon1.value;
		}} else if (gTeaserSubIndex == 2) {{
			str1 = doc.teaserForm.disp1c.value;
			str2 = doc.teaserForm.disp2c.value;
			icon = doc.teaserForm.dispIcon2.value;
		}} else {{
			str1 = doc.teaserForm.disp1a.value;
			str2 = doc.teaserForm.disp2a.value;
			icon = doc.teaserForm.dispIcon1.value;
		}}
		
		doc.weather_icon.src = "wtv-home:/ROMCache/" + icon + ".gif";

		doc.teaserForm.disp1.value = str1;
		doc.teaserForm.disp2.value = str2;

		if (gTeaserSubIndex != 2 || gTeaserCount == 1)
			gTeaserSubTimeout = setTimeout(RotateWeather, 2900);

	}}
}}
					</script>
					<tr>
	    <td rowspan=4 width=80>
	    <td height=16>
					
						<tr>
		<td width=140 colspan=2>
			<table border=0 cellspacing=0 cellpadding=0>
				<tr>
					<td valign=BOTTOM align=left MAXLINES=1 HEIGHT=20>
						<font color=#313939><b>Weather for ${cityname}</b></font>
					<td width=10>
			</table>
	<tr>
		<td HEIGHT=60>
			<table border=0 cellspacing=0 cellpadding=0>
				<tr><br>
					<td width=68 VALIGN=MIDDLE ALIGN=LEFT><img name="weather_icon" src="wtv-home:/ROMCache/weather/${
            weatherData.icon
        }.gif" width=68 height=60>
					<td valign=middle align=left>
					<form name=weatherForm>
						<font color="#000000"><blackface><input id=disp1 type=text size=20 usestyle nobackground border=0 marginheight=3 nocursor noselect value="CURRENT"></blackface></font><br>
						<font color="#000000"><b>        <input id=disp2 type=text size=25 usestyle nobackground border=0 marginheight=3 nocursor noselect value="${
            weatherData.cond
        }, ${weatherData.temp}"></b></font>

						<!-- these aren't for display -- they just hold information until the Javascript -->
						<!-- comes along and copies it into the one that does display.                   -->
						<input id=disp1a type=hidden value="CURRENT">
						<input id=disp2a type=hidden value="humidity: ${weatherData.humid}%">

						<input id=dispIcon1 type=hidden value="${weatherData.icon}">
						<input id=dispIcon2 type=hidden value="${weatherData.icon}">
						<input id=disp1b type=hidden value="CURRENT">
						<input id=disp2b type=hidden value="${weatherData.cond}, ${weatherData.temp}">
						<input id=disp1c type=hidden value="CURRENT">
						<input id=disp2c type=hidden value="humidity: ${weatherData.humid}%">
					</form>
			</table>
			<tr>
		<td align=right VALIGN=MIDDLE HEIGHT=30>
				<font size=-1 color=#313939><b>forecast from Weather Channel<SPACER TYPE=HORIZONTAL SIZE=10>

			</table>
			</table>
		</body>
	</html>`;
        return data;
    }

        (async () => {
            let weatherData = await wtvc.getWeatherCache(accounts.subscriber.subscriber_zip_code || "98052");
            sendToClient(socket, headers, renderWeather(weatherData));
        })();
        break;

    case "Shopping":
        request_is_async = true; // Make us async

    function renderShopping() {
        data = `<html>
		<head>
			<display info=Shopping teaser1=WebTVToday>
		</head>
	
		<body background="wtv-content:/ROMCache/BackgroundCorner.gif" BGCOLOR=949484
			onLoad="CustomEmbedLoaded()"
		
			<table cellspacing=0 cellpadding=0 width=357 height=193 background="wtv-content:/ROMCache/BackgroundShopping.swf" valign=top novtilebg>
			<tr>
				<td colspan=2 width=357 height=44>
					<spacer>

			<tr>
				<td width=12>
					<spacer>

				<td valign=TOP align=LEFT width=361 height=149>
					<spacer><table cellspacing=0 cellpadding=0>
					
						<tr>
							<td rowspan=2 width=2>
							<td height=10>
						<tr>
								<td>
										<table cellspacing=0 cellpadding=0 WIDTH=100% border=0>
										<tr>
										<td valign=middle width=80>
											<img src=wtv-center:/shared/ads/default/webtv.gif width=80 height=80>
										<td width=10 valign=middle>
										<td valign=top width=260>
											<table cellspacing=0 cellpadding=0 border=0 width=260>
												<tr><td maxlines=2><font color=#000000 size=4><b>Buy two WebTV boxes, get two 0% off!</b></font><BR>
													<tr><td maxlines=1>
														<font color=#000000 size=3>$249.99
															&nbsp;Sale!
														</font>
													<tr><td maxlines=1><font color=#422F17 size=3>&#128; Circuit City</font>
											</table>
									<tr>
										<td height=25 colspan=3>
									<tr>
										<td align=right colspan=3><font size=2 color=#5A4A18><b>find more deals in Shopping</b></font><spacer type=horizontal width=5>
									<tr>
										<td height=6>
										</table>

			</table>
			</table>
		</body>
	</html>`;
        return data;
    }

        (async () => {
            sendToClient(socket, headers, renderShopping());
        })();
        break;

    case "Entertainment":
        request_is_async = true; // Make us async

    function renderEntertainment(newsData) {
        data = `<html>
		<head>
			<display info=Entertainment teaser1=WebTVToday>
		</head>
	
		<body background="wtv-content:/ROMCache/BackgroundCorner.gif" BGCOLOR=949484
			onLoad="CustomEmbedLoaded()"
		
			<table cellspacing=0 cellpadding=0 width=357 height=193 background="wtv-content:/ROMCache/BackgroundEntertainment.swf" valign=top novtilebg>
			<tr>
				<td colspan=2 width=357 height=44>
					<spacer>

			<tr>
				<td width=12>
					<spacer>

				<td valign=TOP align=LEFT width=361 height=149>
					<spacer><table cellspacing=0 cellpadding=0>
					
						<tr>
						<td height=26>
					<tr>
						<td height=80>
							<table cellspacing=0 cellpadding=0>
								<tr><td>
`;
        if (newsData) {
            data += `<tr><td valign=middle transition=light>
		<table cellspacing=0 cellpadding=0>
			<tr><td height=5>
			<tr><td>
				<table cellspacing=0 cellpadding=0>
					<tr><td valign=middle>
						<td width=10 valign=middle>
						<td valign=middle maxlines=3>
							<font color=000000 size=+2><b>${newsData.entertainmentHeadlines[0].title}</b></font><BR>
							<font color=000000 size=3>${newsData.entertainmentHeadlines[0].content}</font>
						<td width=10 valign=middle>
				</table>
		</table>
	<tr><td height=6>`;
        } else {
            data += `<tr><td width=100%>
				<font color=000000 size=-1>Entertainment news is not available right now.</font>`;
        }
        data += `
							</table>
					<tr>
						<td align=right valign=middle height=43>
							<font size=-1 color=#312931><b>news provided by NYT</b></font><br>
							<spacer type=vertical size=4>
						<td width=10>

			</table>
			</table>
		</body>
	</html>`;
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
        data = `<html>
		<head>
			<display info=Sports teaser1=WebTVToday>
		</head>
	
		<body background="wtv-content:/ROMCache/BackgroundCorner.gif" BGCOLOR=949484
			onLoad="CustomEmbedLoaded()"
		
			<table cellspacing=0 cellpadding=0 width=357 height=193 background="wtv-content:/ROMCache/BackgroundSports.swf" valign=top novtilebg>
			<tr>
				<td colspan=2 width=357 height=44>
					<spacer>

			<tr>
				<td width=12>
					<spacer>

				<td valign=TOP align=LEFT width=361 height=149>
					<spacer><table cellspacing=0 cellpadding=0>

					<tr height=40>
		<td width=88>
			<spacer type=block width=88 height=40>
		<td width=263>
		<td width=10>

	<tr height=60>
		<td width=88>
			<spacer type=block width=88 height=60>
		<td maxlines=2 valign=top align=left width=263>
			<table cellspacing=0 cellpadding=0>
				<tr>
					<td valign=top maxlines=2>
						<font size=+2 color="#000000"><b>`;
        try {
            data += newsData.sportsHeadlines[0].title;
        } catch (e) {
            data += "Sports scores are temporarily unavailable.";
        }
        data += `</b></font>
			</table>
		<td width=10>

	<tr height=49>

		<td width=88>
		<spacer type=block width=88 height=49>
		<td width=263 valign=middle align=right>
			<font size=-1 color=#6B3118><B>news provided by NYT</B></FONT>
		<td width=10>

			</table>
			</table>
		</body>
	</html>`;
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
