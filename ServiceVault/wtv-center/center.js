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

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;

var wtvc = new WTVCache(minisrv_config);

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
// TODO: This is really awful. Split the center pages into their own separate template files.
switch (infoCenter) {
	case "WebTVToday":
		request_is_async = true; // Make us async

		function renderToday(newsData, weatherData) {
			const clubWebTVTitle = fs.readFileSync(
				"./ServiceDeps/clubWebTVTitle.txt",
				{ encoding: "utf8", flag: "r" }
			);
			const clubWebTVDesc = fs.readFileSync(
				"./ServiceDeps/clubWebTVDesc.txt",
				{ encoding: "utf8", flag: "r" }
			);
			// Get state and city name from user's account
			var cityZIP = getByZip(
				accounts.subscriber.subscriber_zip_code || "98052"
			);
			var cityname = cityZIP.city;
			// Fix city name case
			var citycase = titleCase(cityname);
			data = `<html> 
<head> 
<title>WebTV Today</title> 
<META HTTP-EQUIV="Expires" CONTENT="0"> 
</head> 
<display> 
<body bgcolor=#734A42 text=cccccc link=aaaaaa vlink=aaaaaa fontsize=${session_data.isJapaneseClient() ? `small` : `medium`} hspace=0 vspace=0> <table height=80 width=560 cellspacing=0 cellpadding=0> <tr> 
<td width=394 background=wtv-center:/images/centers/webtvtoday/bg_topleft.jpg bgcolor=#B5948C gradcolor=#2F1816 gradangle=90 novtilebg nohtilebg> <table height=80 width=394 cellspacing=0 cellpadding=0> <tr> <td width=98 height=67 align=center valign=middle> <a href="wtv-home:/home"><img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width=87 height=67></a> <td width=296 align=right valign=top> <spacer type=vertical size=10><br> <!--<font size=-3 color=FFFFFF><shadow>sponsored&nbsp;</shadow></font> </table> <td width=166 bgcolor=#2F1816 gradcolor=#000000 gradangle=90 valign=top> <table cellspacing=0 cellpadding=0> 
<tr> 
<td valign=top> 
<spacer type=vertical size=10><br> 
<font size=-3 color=FFFFFF><shadow>by</shadow></font> 
<td valign=top> 
<spacer type=vertical size=10><br> 
<spacer type=horizontal size=6> 
<a href="/ad-clickthrough?ad-click-ref=000015d6eabda04300000000"> <img src=/shared/ads/infocenter/centers/msnbc_ad01.jpg width=120 height=60> </a> --></table> </table>
<table cellspacing=0 cellpadding=0> 
<td width=21 bgcolor=#B5948C> 
<td width=373 valign=bottom bgcolor=#B5948C gradcolor=#2F1816 gradangle=90> <table height=25 cellspacing=0 cellpadding=0>
</table> 
<tr> 
<td height=130 bgcolor=#B5948C gradcolor=#734A42 gradangle=0> <td bgcolor=#9C9C8C valign=top> 
<table cellspacing=0 cellpadding=0> 
<tr> 
<td abswidth=8> 
<td abswidth=357> 
<td abswidth=8> 
<tr> 
<td valign="middle" height="25" bgcolor="B5948C">
<img src="wtv-center:/images/CornerTopLeft.gif" width="8" height="25">
</td>
<td valign=middle bgcolor=#182121 gradcolor=#B2B3A1 gradangle=90> <spacer type=vertical size=3><br> 
<blackface><font color=#FFFFFF 
><a name=features>Features</a> 
</font></blackface> 
<td bgcolor=#B2B3A1> 
<tr> 
<td bgcolor=#B2B3A1> 
<td abswidth=357 valign=top bgcolor=#B2B3A1> 
<table abswidth=357 cellspacing=0 cellpadding=0 href="wtv-center:/cwtv/redirect"> <tr> 
<td width=79 valign=top> 
<spacer type=vertical size=8><br> 
<img src="wtv-center:/images/wtvt_clubwtv.swf" width=68 height=66> <td valign=top> 
<br> 
<font color=""><b>Club WebTV: ${clubWebTVTitle}</b></font><br> 
<spacer type=vertical size=17> 
<font size=-1 color="#5A5A52"><b>${clubWebTVDesc}</b></font> </table> 
<spacer type=vertical size=10> <td bgcolor=#B2B3A1> </table> <table cellspacing=0 cellpadding=0> <tr> <td abswidth=8> 
<td abswidth=357> 
<td abswidth=8> 
<td bgcolor=#B2B3A1> 
<tr> 
<td bgcolor=#B2B3A1> 
<td abswidth=357 valign=top bgcolor=#B2B3A1> 
<spacer type=vertical size=8><br> 
<table abswidth=357 cellspacing=0 cellpadding=0 href="wtv-center:/programming/tips/tips.hangup.tmpl"> <tr> 
<td width=79 valign=top> 
<img src="wtv-center:/images/wtvt_wtvtoday_tip.swf" width=68 height=66> <td> 
<font color="#000000"><b>Hang up and hang on</b></font><br> 
<spacer type=vertical size=17> 
<font size=-1 color="#5A5A52"><b>Find out how to disconnect without losing your place.</b></font> </table> 
<td bgcolor=#B2B3A1> 
<tr> <td abswidth=8> 
<td abswidth=357> 
<td abswidth=8> 
<tr> 
<td height=25 valign=middle bgcolor=#182121 valign=top> 
<td valign=middle bgcolor=#182121 gradcolor=#979988 gradangle=90> <spacer type=vertical size=3><br> 
<blackface><font color=#FFFFFF 
><a name=summary>Summary</a> 
</font></blackface> 
<td bgcolor=#979988> 
<tr> 
<td bgcolor=#979988> 
<td abswidth=357 valign=top bgcolor=#979988> 
<spacer type=vertical size=8><br> 
<blackface><font color=000000 size=5>today in </font><font color=314252 size=5>news</font></blackface><br>
<table abswidth=357 cellspacing=0 cellpadding=0> <tr> 
<td width=75 valign=top> 
<img src="wtv-center:/images/arrow_news.gif"> <td> 
<font size=-1 color="#000000">
`;
			try {
				data += newsData.newsHeadlines[0].title;
			} catch (e) {
				data += "Today's news is unavailable";
			}
			data += `
</font> </table> 
<spacer type=horizontal width=72><blackface><font color=#000000>Weather</font><font color=#734A42> for ${citycase}</font></blackface><br>
<table abswidth=357 cellspacing=0 cellpadding=0> <tr> 
<td width=75 valign=top> 
<img src="wtv-center:/images/arrow_news.gif"> <td> 
`;
			try {
				data += `<blackface><font color="#734A42">${weatherData.temp
					} &#176;F<br>${weatherData.cond}</font></blackface>
<spacer type=horizontal width=5><td><img src="wtv-center:/images/${weatherData.icon
					}.gif" height=60 width=68>`;
			} catch (e) {
				data += `<font size=-1 color="#000000">
Weather info is unavailable`;
			}
			data += `
</td></table> 
<spacer type=vertical size=18><br> 
<blackface><font color=000000 size=5>today in </font><font color=4A635A size=5>money</font></blackface><br>
<table abswidth=357 cellspacing=0 cellpadding=0> <tr> 
<td width=75 valign=top> 
<img src="wtv-center:/images/arrow_money.gif"> <td> 
<font size=-1 color="#000000">Stock quotes are unavailable.</font> </table> 
<spacer type=vertical size=18><br><br>
<blackface><font color=000000 size=5>today in </font><font color=4A3121 size=5>sports</font></blackface><br>
<table abswidth=357 cellspacing=0 cellpadding=0> <tr> 
<td width=75 valign=top> 
<img src="wtv-center:/images/arrow_sports.gif"> <td> 
<font size=-1 color="#000000">
`;
			try {
				data += newsData.sportsHeadlines[0].title;
			} catch (e) {
				data += "Sports headlines are temporarily unavailable";
			}
			data += `</font> </table> 
<spacer type=vertical size=18><br>
<blackface><font color=000000 size=5>today in </font><font color=4A4252 size=5>entertainment</font></blackface><br>
<table abswidth=357 cellspacing=0 cellpadding=0> <tr> 
<td width=75 valign=top> 
<img src="wtv-center:/images/arrow_entertainment.gif"> <td> 
<font size=-1 color="#000000">
`;
			try {
				data += newsData.entertainmentHeadlines[0].title;
			} catch (e) {
				data += "Today's news is unavailable";
			}
			data += `</font> </table> 
<spacer type=vertical size=18><br><br>
<blackface><font color=000000 size=5>today in </font><font color=7B6342 size=5>shopping</font></blackface><br>
<table abswidth=357 cellspacing=0 cellpadding=0> <tr> 
<td width=75 valign=top> 
<img src="wtv-center:/images/arrow_shopping.gif"> <td> 
<font size=-1 color="#000000">No shopping offers are available</font> </table> 
<table width=357 cellspacing=0 cellpadding=0> 
<tr> 
<td height=5> 
<tr> 
<td align=right> 
<tr> 
<td height=8> 
</table> 
<td bgcolor=#979988> 
</table> 
<table cellspacing=0 cellpadding=0> 
<tr> 
<td abswidth=8> 
<td abswidth=357> 
<td abswidth=8> 
</table> 
<td background=wtv-center:/images/centers/infocenter_right_bg.gif bgcolor=#000000 gradcolor=#4A2929 gradangle=0 valign=top> <table cellspacing=0 cellpadding=0 width=166> <tr><td height=4> <tr><td height=22 colspan=3 valign=middle bgcolor=#000000 transparency=70 gradcolor=#734A42 gradangle=90> <spacer type=horizontal size=6> <font size=-1 color=#A8937E><blackface>WebTV Links</blackface></font> <tr><td height=4> <tr><td width=25 height=23 align=left valign=top> <spacer type=horizontal size=4> <img src=images/centers/webtvtoday/related_circlearrow.gif width=19 height=19> <td width=4> <td width=137 valign=top> 
<spacer type=vertical size=3><br> 
<a href=wtv-center:/cwtv/redirect><font size=-1 color=#C6BDA5><B>Club WebTV</B></a> <tr><td height=2> <tr><td width=25 height=23 align=left valign=top> 
<spacer type=horizontal size=4> 
<img src=images/centers/webtvtoday/related_circlearrow.gif width=19 height=19> <td width=4> 
<td width=137 valign=top> 
<spacer type=vertical size=3><br> 
<a href=wtv-center:/tips/TipsIndex.tmpl><font size=-1 color=#C6BDA5><B>WebTV Tips</B></a> <tr><td height=2> <tr><td height=6> 
 <!--<tr><td width=166 height=64 colspan=3 align=center valign=middle><a href=/ad-clickthrough?ad-click-ref=000012bdeabda04300000000><img src=/shared/ads/amazon/1999.07.01/amazon_buycd120x60st.gif width=120 height=60></a> <tr><td width=166 height=64 colspan=3 align=center valign=middle> <a href=/ad-clickthrough?ad-click-ref=00001ca9eabda04300000000><img src=/shared/ads/dickies/00.10.03/denim_topical2.gif width=120 height=60></a> <tr><td height=10> <tr><td height=4> --> <tr><td height=22 colspan=3 valign=middle bgcolor=#000000 transparency=70 gradcolor=#734A42 gradangle=90> <spacer type=horizontal size=6> <font size=-1 color=#A8937E><blackface>Things to Try</blackface></font> <tr><td height=8> <tr><td height=23 width=25 valign=top ALIGN=LEFT> <spacer type=horizontal size=10>
<font size=-1 color=#DED6BD>&#128;</font><spacer type=horizontal size=0> <td colspan=2 valign=top> 
<a href=http://theoldnet.com/get?url=webtv.astroadvice.com/default.htm&year=1999&scripts=false&decode=false><font size=-1 color=#DED6BD>Check horoscopes</font></a><br> <spacer type=vertical size=7> <tr><td height=23 width=25 valign=top ALIGN=LEFT> <spacer type=horizontal size=10> 
<font size=-1 color=#DED6BD>&#128;</font><spacer type=horizontal size=0> <td colspan=2 valign=top> 
<a href=http://theoldnet.com/get?url=features.yahoo.com/lottery&year=1999&scripts=false&decode=false><font size=-1 color=#DED6BD>Get lottery results</font></a><br> <spacer type=vertical size=7> <tr><td height=23 width=25 valign=top ALIGN=LEFT> <spacer type=horizontal size=10> 
<font size=-1 color=#DED6BD>&#128;</font><spacer type=horizontal size=0> <td colspan=2 valign=top> 
<a href=http://theoldnet.com/get?url=www.whowhere.com/tv/phone&year=1999&scripts=false&decode=false><font size=-1 color=#DED6BD>Search white pages</font></a><br> <spacer type=vertical size=7> <tr><td height=23 width=25 valign=top ALIGN=LEFT> <spacer type=horizontal size=10> 
<font size=-1 color=#DED6BD>&#128;</font><spacer type=horizontal size=0> <td colspan=2 valign=top> 
<a href=wtv-center:/center?info=AroundTown#yellowpages><font size=-1 color=#DED6BD>Use yellow pages</font></a><br> <spacer type=vertical size=7> <tr><td height=23 width=25 valign=top ALIGN=LEFT> <spacer type=horizontal size=10> 
<font size=-1 color=#DED6BD>&#128;</font><spacer type=horizontal size=0> <td colspan=2 valign=top> 
<a href=http://theoldnet.com/get?url=www.zip2.com/webtv/scripts/staticpage.dll?ep=8200&year=1999&scripts=false&decode=false><font size=-1 color=#DED6BD>Get directions</font></a><br> <spacer type=vertical size=7> <tr><td height=23 width=25 valign=top ALIGN=LEFT> <spacer type=horizontal size=10> <font size=-1 color=#DED6BD>&#128;</font><spacer type=horizontal size=0> <td colspan=2 valign=top> <a href=http://theoldnet.com/get?url=www.classifieds2000.com&year=1999&scripts=false&decode=false><font size=-1 color=#DED6BD>Search classifieds</font></a><br> <spacer type=vertical size=7> <tr><td height=23 width=25 valign=top ALIGN=LEFT> <spacer type=horizontal size=10> <font size=-1 color=#DED6BD>&#128;</font><spacer type=horizontal size=0> <td colspan=2 valign=top> <a href=wtv-center:/time-savers><font size=-1 color=#DED6BD>More</font></a><br> <spacer type=vertical size=7> </table> <tr> 
<td bgcolor=#734A42> 
<td bgcolor=#979988 > 
<table cellspacing=0 cellpadding=0> 
<tr> 
<td width=8> 
<td width=357 height=6> 
<tr> 
<td width=8 height=8 bgcolor=#979988> 
<img src=wtv-center:/images/centers/webtvtoday/BottomRoundedCorner.gif width=8 height=8> </table> <td background=wtv-center:/images/centers/infocenter_right_bg.gif bgcolor=#4A2929> </table> <table cellspacing=0 cellpadding=0 valign=top> <tr><td bgcolor=#734A42> 
<table cellspacing=0 cellpadding=0 valign=top> 
<tr><td width=21> 
<td width=524 height=120 valign=top> 
<table cellspacing=0 cellpadding=0> 
<tr><td width=524 height=16> 
<tr><td> 
<table cellspacing=0 cellpadding=0> 
<tr><td width=16> 
<td width=156> 
<font size=+1 color=#4A2929>&#128; </font><font color=#4A2929><b>WebTV Today</b></font> <td width=100> 
<font size=+1 color=#f7e7bd>&#128; </font><a href=wtv-center:/center?info=News><font color=#f7e7bd>News</font></a> <td width=110> <font size=+1 color=#f7e7bd>&#128; </font><a href=wtv-center:/center?info=Shopping><font color=#f7e7bd>Shopping</font></a> <td width=1> <spacer type=horizontal width=35><FONT SIZE=+1 COLOR=#FFFFFF>&#128; </font><a href="wtv-guide:/help"><font color=#FFFFFF>Help</font></a> <tr><td><spacer type=vertical size=4><td><td><td><td> <tr><td width=16> <td> <font size=+1 color=#f7e7bd>&#128; </font><a href=wtv-center:/center?info=Entertainment><font color=#f7e7bd>Entertainment</font></a> <td> <font size=+1 color=#f7e7bd>&#128; </font><a href=wtv-center:/center?info=Sports><font color=#f7e7bd>Sports</font></a> <td> <font size=+1 color=#f7e7bd>&#128; </font><a href=wtv-center:/center?info=Money><font color=#f7e7bd>Money</font></a> <td> 
<spacer type=horizontal width=35><FONT SIZE=+1 COLOR=#FFFFFF>&#128; </font><a href="wtv-center:/search-page"><font color=#FFFFFF>Search</font></a> <tr><td><spacer type=vertical size=5><td><td><td><td> <tr><td width=16> <TD> 
<TD> 
<td> 
<td> 
</table> </table> 
</table> 
</table> 
</body> 
</html> 
`;
			return data;
		}

		(async () => {
			// Load the RSS data
			let newsData = await wtvc.getNewsCache();
			let weatherData = await wtvc.getWeatherCache(accounts.subscriber.subscriber_zip_code || "98052");
			sendToClient(
				socket,
				headers,
				renderToday(newsData, weatherData)
			);
		})();
		break;

	case "Entertainment":
		request_is_async = true; // Make us async

		function renderEntertainment(
			newsData,
			releasesData
		) {
			data = `
<html><head>
<title>Entertainment</title>
</head>
<body vspace="0" hspace="0" fontsize="${session_data.isJapaneseClient() ? `small` : `medium`}" vlink="#000000" text="#000000" link="#000000" bgcolor="73637B"><display>

<table width="560" height="80" cellspacing="0" cellpadding="0">
<tbody><tr>
<td gradcolor="4A4252" gradangle="90" novtilebg="" nohtilebg="" width="394" bgcolor="8C8494" background="images/centers/entertainment/bg_topleft.jpg">
<table width="394" height="80" cellspacing="0" cellpadding="0">
<tbody><tr>
<td width="98" valign="middle" height="67" align="center">
<a href="wtv-home:/home"><img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width="87" height="67"></a>
</td><td width="296" valign="top" align="right">
</td></tr></tbody></table>
</td><td gradcolor="000000" gradangle="90" width="166" valign="top" bgcolor="4A4252">
<table cellspacing="0" cellpadding="0">
<tbody><tr>
<td valign="top">
<spacer type="vertical" size="10"><br>
</spacer></td><td valign="top">
<spacer type="vertical" size="10"><br>
<spacer type="horizontal" size="6">
</spacer></spacer></td></tr></tbody></table>
</td></tr></tbody></table>
<table cellspacing="0" cellpadding="0">
<tbody><tr>
<td gradcolor="73637B" gradangle="0" width="21" height="130" bgcolor="8C8494">
</td><td width="373" valign="top" bgcolor="#4A4252">
<table cellspacing="0" cellpadding="0">
<tbody><tr>
<td abswidth="8">
</td><td abswidth="357">
</td><td abswidth="8">
</td></tr><tr>
<td valign="middle" height="25" bgcolor="8C8494">
<img src="wtv-center:/images/CornerTopLeft.gif" width="8" height="25">
</td><td gradcolor="#4A4252" gradangle="90" valign="middle" bgcolor="#182121">
<spacer type="vertical" size="3"><br>
<blackface><font color="#FFFFFF"><a name="news">Top Stories</a>
</font></blackface>
</spacer></td><td bgcolor="#4A4252">
</td></tr><tr>
<td bgcolor="#9C9C8C">
</td><td abswidth="357" valign="top" bgcolor="#9C9C8C">
<table cellspacing="0" cellpadding="0">
<tbody><tr><td width="100%" height="10">
</td></tr><tr><td valign="top">
</td></tr><tr><td width="100%">
`;
			try {
				data += `<b><font color=#4A4252>&#128;</font>&nbsp;<a href="${newsData.entertainmentHeadlines[0].link}">${newsData.entertainmentHeadlines[0].title}</a></b><br><spacer type=vertical height=18>${newsData.entertainmentHeadlines[0].content}<br><br>`;
				for (let i = 1; i < 3; i++) {
					data += `<b><font color=#4A4252>&#128;</font>&nbsp;<a href="${newsData.entertainmentHeadlines[i].link}">${newsData.entertainmentHeadlines[i].title}</a></b><br><br>`;
				}
			} catch (e) {
				data += "Entertainment news is not available right now.";
			}
			data += `
</td></tr><tr><td height="10">
</td></tr><tr><td valign="middle" height="46" align="right"> <font size="-1" color="#4A4252">&#128; </font><a href="client:showalert?message=This%20feature%20is%20not%20yet%20available."><font color=#4A4252 size=-1><b>provided by New York Times</b></font></a>
</td></tr><tr><td gradcolor="#9C9C8C" gradangle="90" height="5" bgcolor="#B5B5A5">
</td></tr><tr><td gradcolor="#9C9C8C" gradangle="90" bgcolor="#B5B5A5">
<spacer type="HORIZONTAL" size="5">
<font size="-2" color="#000000">
<b>FIND A CELEBRITY:</b>
</font>
</spacer></td></tr><tr><td gradcolor="#9C9C8C" gradangle="90" valign="middle" height="30" bgcolor="#B5B5A5" align="RIGHT">
<form method="POST" action="http://www.eonline.com/Search/Results/1,1049,,00.html">
<input type="hidden" name="mpos" value="begin">
<font size="-1" color="#E6CD4A">
<input bgcolor="#191919" autocaps="" text="#FFFFFF" cursor="#cc9933" type="text" usestyle="" maxlength="125" name="pt_query" width="262" height="30">
</font>
<font size="-1" color="#FFFFFF"><shadow>
<spacer type="horizontal" size="5">
<input type="submit" borderimage="file://ROM/Borders/ButtonBorder2.bif" value="Find" name="FindCelebrity" usestyle="" width="80">
</spacer></shadow></font>
<spacer type="horizontal" size="5">

</spacer></form></td></tr><tr><td height="10"> </td></tr><tr><td>
<font size="-1" color="#4A4252">&#128; </font><a href="http://www.eonline.com/Eticket/?webtv"><font size="-1"><b>What's Hot? Find Out in the Hit List</b></font></a>
</td></tr><tr><td height="10">
</td></tr></tbody></table>
</td><td bgcolor="#9C9C8C">
</td></tr></tbody></table>
<table cellspacing="0" cellpadding="0">
<tbody><tr>
<td abswidth="8">
</td><td abswidth="357">
</td><td abswidth="8">
</td></tr><tr>
<td valign="middle" height="25" bgcolor="#182121">
</td><td gradcolor="#8C8494" gradangle="90" valign="middle" bgcolor="#182121">
<spacer type="vertical" size="3"><br>
<blackface><font color="#FFFFFF"><a name="movies">Upcoming Movies in Theaters</a>
</font></blackface>
</spacer></td><td bgcolor="#8C8494">
</td></tr><tr>
<td bgcolor="#8C8494">
</td><td abswidth="357" valign="top" bgcolor="#8C8494">
<table width="100%" cellspacing="0" cellpadding="0">
<tbody><tr><td width="100%" height="10">
</td></tr><tr><td valign="top">
`;
			try {
				if (releasesData.theaterReleases != null) {
					for (let i = 0; i < releasesData.theaterReleases.length; i++) {
						data += `<b><font color=#4A4252>&#128;</font>&nbsp;<a href="${releasesData.theaterReleases[i].link}">${releasesData.theaterReleases[i].title}</a></b> (${releasesData.theaterReleases[i].genre})<br><br>`;
					}
				} else {
					data += "Movie information is not available right now.";
					console.log(" # ah crap the theater releases API died");
				}
			} catch (e) {
				data += "Movie information is not available right now.";
				console.log("oh shit something really bad happened when trying to pull theater releases: " + e)
			}
			data += `
<table width="100%" cellspacing="0" cellpadding="0">
<tbody><tr><td colspan="2" transition="light" valign="top">
<table width="100%" cellspacing="0" cellpadding="0">
<tbody><tr><td valign="middle">
</td></tr><tr><td height="5">
</td></tr><tr><td valign="middle" align="right">
<font size="-1" color="#4A4252">&#128; </font><a href=""><font size="2" color="#4A4252"><b>Get local showtimes</b></font></a><p>
</p></td></tr></tbody></table>
</td></tr></tbody></table>
</td></tr><tr><td valign="middle">
<font size="-1" color="#000000">&#128; </font><a href="http://www.zap2it.com/webtv/movielist/0,2345,28715,00.html"><font size="-1" color="#000000"><b>More movies at zap2it.com</b></font></a>
</td></tr><tr><td height="10">
</td></tr><tr><td>
<font size="-1" color="#000000">&#128; </font><a href="http://www.zap2it.com/movies/news/boxoffice"><font size="-1" color="#000000"><b>Hot at the box office</b></font></a>
</td></tr><tr><td height="10">
</td></tr><tr><td gradcolor="#8C8494" gradangle="90" height="5" bgcolor="#9C9CA5">
</td></tr><tr><td gradcolor="#8C8494" gradangle="90" bgcolor="#9C9CA5">
<spacer type="HORIZONTAL" size="5">
<font size="-2" color="#000000">
<b>FIND A MOVIE:</b>
</font>
</spacer></td></tr><tr><td gradcolor="#8C8494" gradangle="90" valign="middle" height="30" bgcolor="#9C9CA5" align="RIGHT">
<form method="POST" action="http://www.zap2it.com/webtv/searchresults/1,2333,28715,00.html">
<input type="hidden" name="mpos" value="begin">
<font size="-1" color="#E6CD4A">
<input bgcolor="#191919" autocaps="" text="#FFFFFF" cursor="#cc9933" type="text" usestyle="" maxlength="125" name="search" width="262" height="30">
</font>
<font size="-1" color="#FFFFFF"><shadow>
<spacer type="horizontal" size="5">
<input type="submit" borderimage="file://ROM/Borders/ButtonBorder2.bif" value="Find" name="FindMovie" usestyle="" width="80">
</spacer></shadow></font>
<spacer type="horizontal" size="5">

</spacer></form></td></tr><tr><td height="10">
</td></tr><tr><td height="5">
</td></tr><tr><td align="right">
<img src="wtv-center:/images/centers/help_arrow.gif">&nbsp;<a href="wtv-center:/personalize?info=city&amp;template=/personalize/AroundTown.tmpl"><font size="-1" color="#4A4252"><b>Change city in Around Town</b></font></a>
</td></tr><tr><td height="10">
</td></tr></tbody></table>
</td><td bgcolor="#8C8494">
</td></tr></tbody></table>
<table cellspacing="0" cellpadding="0">
<tbody><tr>
<td abswidth="8">
</td><td abswidth="357">
</td><td abswidth="8">
</td></tr><tr>
<td valign="middle" height="25" bgcolor="#182121">
</td><td gradcolor="#8C8494" gradangle="90" valign="middle" bgcolor="#182121">
<spacer type="vertical" size="3"><br>
<blackface><font color="#FFFFFF"><a name="videos">New Movies on Video</a>
</font></blackface>
</spacer></td><td bgcolor="#8C8494">
</td></tr><tr>

<td bgcolor="#8C8494">
</td><td abswidth="357" valign="top" bgcolor="#8C8494">
<spacer type=vertical height=25><table cellspacing="0" cellpadding="0" border="0" align="right">
`;
			try {
				if (releasesData.dvdReleases != null) {
					for (let i = 0; i < releasesData.dvdReleases.length; i++) {
						data += `<b><font color=#4A4252>&#128;</font>&nbsp;<a href="${releasesData.dvdReleases[i].link}">${releasesData.dvdReleases[i].title}</a></b><br><spacer type=vertical height=18>${releasesData.dvdReleases[i].content}<br><br>`;
					}
				} else {
					data += "Video information is not available right now.";
					console.log(" # ah crap the DVD releases API died");
				}
			} catch (e) {
				data += "Video information is not available right now.";
				console.log("oh shit something really bad happened when trying to pull DVD releases: " + e)
			}
			data += `
<tbody><tr>

<td>
<font size="-1" color="#4A4252">&#128; </font><a href="http://www.amazon.com/exec/obidos/tg/browse/-/130/ref%3Dtab%5Fgw%5Fd%5F3/104-9272128-6379133"><font size="-1" color="#4A4252"><b>more videos and DVDs at Amazon</b></font></a><font size="-1" color="#4A4252"><br><br>
</font></td></tr></tbody></table>

<table cellspacing="0" cellpadding="0" border="0">
<tbody><tr><td gradcolor="#8C8494" gradangle="90" height="5" bgcolor="#9C9CA5">
</td></tr><tr><td gradcolor="#8C8494" gradangle="90" bgcolor="#9C9CA5">
<spacer type="HORIZONTAL" size="5">
<font size="-2" color="#000000">
<b>FIND A VIDEO OR DVD:</b>
</font>
</spacer></td></tr><tr><td gradcolor="#8C8494" gradangle="90" valign="middle" height="30" bgcolor="#9C9CA5" align="RIGHT">
<form method="post" action="http://www.amazon.com/exec/obidos/generic-quicksearch-query/002-2299035-5914866">
<input type="hidden" name="mode" value="video">
<font size="-1" color="#E6CD4A">
<input bgcolor="#191919" autocaps="" text="#FFFFFF" cursor="#cc9933" type="text" usestyle="" maxlength="125" name="keyword-query" width="262" height="30">
</font>
<font size="-1" color="#FFFFFF"><shadow>
<spacer type="horizontal" size="5">
<input type="submit" borderimage="file://ROM/Borders/ButtonBorder2.bif" value="Find" name="FindVideo" usestyle="" width="80">
</spacer></shadow></font>
<spacer type="horizontal" size="5">

</spacer></form></td></tr><tr><td height="10">
</td></tr><tr><td>
<table cellspacing="0" cellpadding="0" border="0">
<tbody><tr>
<td width="50%" valign="middle">
<font size="-1" color="#4A4252">&#128; </font><a href="http://www.amazon.com/exec/obidos/tg/browse/-/139452/ref=v_tn_bg/002-3991660-1583239"><font size="-1"><b>Browse Genres</b></font></a>
</td><td width="50%" valign="middle">
<font size="-1" color="#4A4252">&#128; </font><a href="http://www.amazon.com/exec/obidos/redirect?tag=wtv-promo&amp;path=subst/video/sellers/amazon-top-100-video.html"><font size="-1"><b>Top Sellers</b></font></a>
</td></tr></tbody></table>
</td></tr><tr><td height="10">
</td></tr></tbody></table>
</td><td bgcolor="#8C8494">
</td></tr></tbody></table>
<table cellspacing="0" cellpadding="0">
<tbody><tr>
<td abswidth="8">
</td><td abswidth="357">
</td><td abswidth="8">
</td></tr><tr>

<td valign="middle" height="25" bgcolor="#182121">
</td><td gradcolor="#4A4252" gradangle="90" valign="middle" bgcolor="#182121">
<spacer type="vertical" size="3"><br>
<blackface><font color="#FFFFFF"><a name="cds">Upcoming Album Releases</a>
</font></blackface>
</spacer></td><td bgcolor="#4A4252">
</td></tr><tr>
<td bgcolor="#4A4252">
</td><td abswidth="357" valign="top" bgcolor="#4A4252">
<spacer type=vertical height=25><table cellspacing="0" cellpadding="0" border="0" align="right">
`;
			try {
				if (releasesData.cdReleases != null) {
					for (let i = 0; i < releasesData.cdReleases.length; i++) {
						data += `<b><font color=#DED6BD>&#128;</font>&nbsp;<a href="${releasesData.cdReleases[i].link}"><font color=#DED6BD>${releasesData.cdReleases[i].title}</a></b><br><spacer type=vertical height=18><font color=#FFFFFF>${releasesData.cdReleases[i].content}<br><br>`;
					}
				} else {
					data += "Music CD information is not available right now.";
					console.log(" # ah crap the CD releases API died");
				}
			} catch (e) {
				data += "Music CD information is not available right now.";
				console.log("oh shit something really bad happened when trying to pull CD releases: " + e)
			}
			data += `
<tbody><tr><td gradcolor="#4A4252" gradangle="90" height="5" bgcolor="73637B">
</td></tr><tr><td height="10">
</td></tr><tr><td>
</td></tr><tr><td valign="middle" height="10" align="right">
</td></tr></tbody></table>
</td><td bgcolor="#4A4252">
</td></tr></tbody></table>
</td><td gradcolor="#4A4252" gradangle="0" width="166" valign="top" bgcolor="#000000" background="images/centers/infocenter_right_bg.gif">
<table gradcolor="000000" gradangle="90" width="166" cellspacing="0" cellpadding="0" bgcolor="4A4252">
<tbody><tr>
<td width="106">
</td><td valign="top">
<spacer type="vertical" height="5"><br>
<img src="wtv-center:/images/centers/help_arrow.gif" width="13" height="13">
</spacer></td><td valign="top">
<spacer type="vertical" height="5"><br>
<a href="wtv-guide:/help?topic=Entertainment&amp;subtopic=Instructions"><font size="-1" color="#D1D3D3"><b>Help</b></font></a><font size="-1" color="#D1D3D3">
</font></spacer></td></tr><tr>
<td colspan="99" height="3">
</td></tr></tbody></table>
<select name="myLinks" width="160" align="center">
</select><table width="166" cellspacing="0" cellpadding="0" border="0">
<tbody><tr><td height="4">
</td></tr><tr><td colspan="3" transparency="70" gradcolor="#4A4252" gradangle="90" valign="middle" height="22" bgcolor="#000000">
<spacer type="horizontal" size="6">
<font size="-1" color="#8C8494"><blackface>Related Links</blackface></font>
</spacer></td></tr><tr><td height="4">
</td></tr><tr><td width="25" valign="top" height="23" align="left">
<spacer type="horizontal" size="4">
<img src="images/centers/entertainment/related_circlearrow.gif" width="19" height="19">
</spacer></td><td width="4">
</td><td width="137" valign="top">
<spacer type="vertical" size="3"><br>
<a href="http://search.msn.com/results.asp?q=WebTVEntertainment&amp;FORM=WEBTV&amp;cfg=WEBTVBROWSE&amp;rn=1266051&amp;dp=0&amp;v=1"><font size="-1" color="#C6BDA5"><b>Web Sites</b></font></a><font size="-1" color="#C6BDA5">
</font></spacer></td></tr><tr><td height="2">
</td></tr><tr><td width="25" valign="top" height="23" align="left">
<spacer type="horizontal" size="4">
<img src="images/centers/entertainment/related_circlearrow.gif" width="19" height="19">
</spacer></td><td width="4">
</td><td width="137" valign="top">
<spacer type="vertical" size="3"><br>
<a href="wtv-center:/community?info=Entertainment"><font size="-1" color="#C6BDA5"><b>Chat &amp; Discuss</b></font></a><font size="-1" color="#C6BDA5">
</font></spacer></td></tr><tr><td height="2">
</td></tr><tr><td height="6">
</td></tr><tr><td height="10">
</td></tr><tr><td height="4">
</td></tr><tr><td colspan="3" transparency="70" gradcolor="#4A4252" gradangle="90" valign="middle" height="22" bgcolor="#000000">
<spacer type="horizontal" size="6">
<font size="-1" color="#8C8494"><blackface>Things to Try</blackface></font>
</spacer></td></tr><tr><td height="8">
</td></tr><tr><td width="25" valign="top" height="23" align="LEFT">
<spacer type="horizontal" size="10">
<font size="-1" color="#DED6BD">&#128;</font><spacer type="horizontal" size="0">
</spacer></spacer></td><td colspan="2" valign="top">
<a href=http://theoldnet.com/get?url=webtv.astroadvice.com/default.htm&year=1999&scripts=false&decode=false><font size="-1" color="#DED6BD">Check horoscopes</font></a><br>
<spacer type="vertical" size="7">
</spacer></td></tr><tr><td width="25" valign="top" height="23" align="LEFT">
<spacer type="horizontal" size="10">
<font size="-1" color="#DED6BD">&#128;</font><spacer type="horizontal" size="0">
</spacer></spacer></td><td colspan="2" valign="top">
<a href="client:showalert?message=Sorry,%20you're%20a%20WebTV%20user"><font size="-1" color="#DED6BD">Find a date</font></a><br>
<spacer type="vertical" size="7">
</spacer></td></tr><tr><td width="25" valign="top" height="23" align="LEFT">
<spacer type="horizontal" size="10">
<font size="-1" color="#DED6BD">&#128;</font><spacer type="horizontal" size="0">
</spacer></spacer></td><td colspan="2" valign="top">
<a href="http://webtv.buzztime.com"><font size="-1" color="#DED6BD">Play trivia</font></a><br>
<spacer type="vertical" size="7">
</spacer></td></tr><tr><td width="25" valign="top" height="23" align="LEFT">
<spacer type="horizontal" size="10">
<font size="-1" color="#DED6BD">&#128;</font><spacer type="horizontal" size="0">
</spacer></spacer></td><td colspan="2" valign="top">
<a href="client:showalert?message=strawberry%20poptart"><font size="-1" color="#DED6BD">Get gourmet treats</font></a><br>
<spacer type="vertical" size="7">
</spacer></td></tr><tr><td width="25" valign="top" height="23" align="LEFT">
<spacer type="horizontal" size="10">
<font size="-1" color="#DED6BD">&#128;</font><spacer type="horizontal" size="0">
</spacer></spacer></td><td colspan="2" valign="top">
<a href="wtv-center:/time-savers"><font size="-1" color="#DED6BD">More</font></a><br>
<spacer type="vertical" size="7">
</spacer></td></tr><tr><td colspan="3" height="4">
</td></tr><tr><td colspan="3" transparency="70" gradcolor="#4A4252" gradangle="90" valign="middle" height="22" bgcolor="#000000">
<spacer type="horizontal" size="6">
<font size="-1" color="#8C8494"><blackface>Local Links</blackface></font>
</spacer></td></tr><tr><td colspan="3" height="8">
</td></tr><tr><td width="25" valign="top" height="23" align="LEFT">
<spacer type="horizontal" size="10">
<font size="-1" color="#DED6BD">&#128;</font><spacer type="horizontal" size="0">
</spacer></spacer></td><td colspan="2" valign="top">
<a href="wtv-center:/center?info=aroundtown/Dining"><font size="-1" color="#DED6BD">Dining</font></a><br>
<spacer type="vertical" size="7">
</spacer></td></tr><tr><td width="25" valign="top" height="23" align="LEFT">
<spacer type="horizontal" size="10">
<font size="-1" color="#DED6BD">&#128;</font><spacer type="horizontal" size="0">
</spacer></spacer></td><td colspan="2" valign="top">
<a href="wtv-center:/center?info=aroundtown/Events"><font size="-1" color="#DED6BD">Events</font></a><br>
<spacer type="vertical" size="7">
</spacer></td></tr><tr><td width="25" valign="top" height="23" align="LEFT">
<spacer type="horizontal" size="10">
<font size="-1" color="#DED6BD">&#128;</font><spacer type="horizontal" size="0">
</spacer></spacer></td><td colspan="2" valign="top">
<a href="http://yellowpages.msn.com/simplesearch.aspx?City=Candler&amp;State=NC&amp;KWD=Festivals"><font size="-1" color="#DED6BD">Festivals and Events</font></a><br>
<spacer type="vertical" size="7">
</spacer></td></tr><tr><td width="25" valign="top" height="23" align="LEFT">
<spacer type="horizontal" size="10">
<font size="-1" color="#DED6BD">&#128;</font><spacer type="horizontal" size="0">
</spacer></spacer></td><td colspan="2" valign="top">
<a href="http://yellowpages.msn.com/simplesearch.aspx?City=Candler&amp;State=NC&amp;KWD=Brew+pubs"><font size="-1" color="#DED6BD">Brew Pubs</font></a><br>
<spacer type="vertical" size="7">
</spacer></td></tr><tr><td width="25" valign="top" height="23" align="LEFT">
<spacer type="horizontal" size="10">
<font size="-1" color="#DED6BD">&#128;</font><spacer type="horizontal" size="0">
</spacer></spacer></td><td colspan="2" valign="top">
<a href="http://yellowpages.msn.com/simplesearch.aspx?City=Candler&amp;State=NC&amp;KWD=Entertainment+Tickets"><font size="-1" color="#DED6BD">Ticket Sales</font></a><br>
<spacer type="vertical" size="7">
</spacer></td></tr><tr><td width="25" valign="top" height="23" align="LEFT">
<spacer type="horizontal" size="10">
<font size="-1" color="#DED6BD">&#128;</font><spacer type="horizontal" size="0">
</spacer></spacer></td><td colspan="2" valign="top">
<a href="http://yellowpages.msn.com/simplesearch.aspx?City=Candler&amp;State=NC&amp;KWD=Museums"><font size="-1" color="#DED6BD">Museums</font></a><br>
<spacer type="vertical" size="7">
</spacer></td></tr></tbody></table>
</td></tr><tr>
<td bgcolor="73637B">
</td><td bgcolor="#4A4252">
<table cellspacing="0" cellpadding="0">
<tbody><tr>
<td width="8">
</td><td width="357" height="6">
</td></tr><tr>
<td width="8" height="8" bgcolor="#4A4252">
<img src="wtv-center:/images/CornerBottomLeftEntertain.gif" width="8" height="8">
</td></tr></tbody></table>
</td><td bgcolor="#4A4252" background="images/centers/infocenter_right_bg.gif">
 </table> <table cellspacing=0 cellpadding=0 valign=top> <tr><td bgcolor=#73637B> 
<table cellspacing=0 cellpadding=0 valign=top> 
<tr><td width=21> 
<td width=524 height=120 valign=top> 
<table cellspacing=0 cellpadding=0> 
<tr><td width=524 height=16> 
<tr><td> 
<table cellspacing=0 cellpadding=0> 
<tr><td width=16> 
<td width=156> 
<font size=+1 color=#f7e7bd>&#128; </font><a href=wtv-center:/center?info=WebTVToday><font color=#f7e7bd>WebTV Today</font> <td width=100> 
<font size=+1 color=#f7e7bd>&#128; </font><a href=wtv-center:/center?info=News><font color=#f7e7bd>News</font></a> <td width=110> <font size=+1 color=#f7e7bd>&#128; </font><a href=wtv-center:/center?info=Shopping><font color=#f7e7bd>Shopping</font></a> <td width=1> <spacer type=horizontal width=35><FONT SIZE=+1 COLOR=#FFFFFF>&#128; </font><a href="wtv-guide:/help"><font color=#FFFFFF>Help</font></a> <tr><td><spacer type=vertical size=4><td><td><td><td> <tr><td width=16> <td> <font color="4A4252">&#128; <b>Entertainment</font></b></a> <td> <font size=+1 color=#f7e7bd>&#128; </font><a href=wtv-center:/center?info=Sports><font color=#f7e7bd>Sports</font></a> <td> <font size=+1 color=#f7e7bd>&#128; </font><a href=wtv-center:/center?info=Money><font color=#f7e7bd>Money</font></a> <td> 
<spacer type=horizontal width=35><FONT SIZE=+1 COLOR=#FFFFFF>&#128; </font><a href="wtv-center:/search-page"><font color=#FFFFFF>Search</font></a> <tr><td><spacer type=vertical size=5><td><td><td><td> <tr><td width=16> <TD> 
<TD> 
<td> 
<td> 
</table> </table> 
</table> 
</table> 
</body> 
</html> 
`;
			return data;
		}

		(async () => {
			// Load the RSS data
			let newsData = await wtvc.getNewsCache();
			let releasesData = await wtvc.getReleaseCache();
			sendToClient(
				socket,
				headers,
				renderEntertainment(newsData, releasesData)
			);
		})();
		break;

	case "News":
		request_is_async = true; // Make us async

		function renderPage(newsData, weatherData) {
			// Get state and city name from user's account
			var cityZIP = getByZip(
				accounts.subscriber.subscriber_zip_code || "98052"
			);
			var cityname = cityZIP.city;
			// Fix city name case
			var citycase = titleCase(cityname);
			data = `
<html>
   <head>
	  <title>News</title>
   </head>
   <display>
   <body bgcolor=5A737B text=000000 link=000000 vlink=000000 fontsize=${session_data.isJapaneseClient() ? `small` : `medium`} hspace=0 vspace=0>
	  <table height=80 width=560 cellspacing=0 cellpadding=0>
		 <tr>
			<td width=394 background=images/centers/news/news_masthead.jpg bgcolor=84949C gradcolor=384952 gradangle=90 novtilebg nohtilebg>
			   <table height=80 width=394 cellspacing=0 cellpadding=0>
				  <tr>
					 <td width=98 height=67 align=center valign=middle>
						<a href="wtv-home:/home"><img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width=87 height=67></a>
					 <td width=296 align=right valign=top>
			   </table>
			<td width=166 bgcolor=384952 gradcolor=000000 gradangle=90 valign=top>
			   <table cellspacing=0 cellpadding=0>
				  <tr>
					 <td valign=top>
						<spacer type=vertical size=10>
						<br>
					 <td valign=top>
						<spacer type=vertical size=10>
						<br>
						<spacer type=horizontal size=6>
			   </table>
	  </table>
	  <table cellspacing=0 cellpadding=0>
		 <tr>
			<td width=21 height=130 bgcolor=84949C gradcolor=5A737B gradangle=0>
			<td bgcolor=84949C width=373 valign=top>
			   <table cellspacing=0 cellpadding=0>
				  <tr>
					 <td abswidth=8>
					 <td abswidth=357>
					 <td abswidth=8>
				  <tr>
					 <td height=25 valign=middle bgcolor=84949C valign=top>
						<img src=wtv-center:/images/CornerTopLeft.gif width=8 height=25>
					 <td valign=middle bgcolor=#182121 gradcolor=#5B5B53 gradangle=90>
						<spacer type=vertical size=3>
						<br>
						<blackface><font color=#FFFFFF
						   ><a name=topstories>Top Stories</a>
						   </font>
						</blackface>
						<spacer type=horizontal size=90>
						<font color=#CECEBE>
						&#128;<A HREF=wtv-center:/personalize?info=News&template=/personalize/News.tmpl&redirect=wtv-tricks:/news><FONT SIZE=-1 COLOR=#CECEBE>
						<B>choose&nbsp;topics</B></FONT></A>
					 <td bgcolor=#5B5B53>
				  <tr>
					 <td bgcolor=#9C9C8C>
					 <td abswidth=357 valign=top bgcolor=#9C9C8C>
						<table cellspacing=0 cellpadding=0>
						   <tr>
							  <td HEIGHT=10>
						   <tr>
							  <td WIDTH=357 valign=top>
								 <table cellspacing=0 cellpadding=0><tr><td>
`;
			try {
				if (newsData.newsHeadlines != null) {
					data += `<b><font color=#345463>&#128;</font>&nbsp;<a href="${newsData.newsHeadlines[0].link}">${newsData.newsHeadlines[0].title}</a></b><br><spacer type=vertical height=18>${newsData.newsHeadlines[0].content}<br><br>`;
					for (let i = 1; i < newsData.newsHeadlines.length; i++) {
						data += `<b><font color=#345463>&#128;</font>&nbsp;<a href="${newsData.newsHeadlines[i].link}">${newsData.newsHeadlines[i].title}</a></b><br><br>`;
					}
				} else {
					data += "News headlines are temporarily unavailable.";
					console.log(" # ah crap the news API died");
				}
			} catch (e) {
				data += "News headlines are temporarily unavailable";
				console.log("oh shit something really bad happened when trying to pull news headlines: " + e)
			}
			data += `
		</td>
		</tr>
		</table>
		</td>
		</tr>
						   <tr>
							  <td HEIGHT=46 align=right valign=MIDDLE>
								 <font color=#345463 size=-1>&#128;&nbsp;</font><a href="client:showalert?message=This%20feature%20is%20not%20yet%20available."><font color=#345463 size=-1><b>provided by New York Times</b></font></a>
						   <tr>
							  <td height=5>
						</table>
					 <td width=8 bgcolor=#9C9C8C>
			   </table>
			   <table cellspacing=0 cellpadding=0>
				  <tr>
					 <td abswidth=8 bgcolor=#B5BDBD>
					 <td abswidth=357 height=25 valign=middle bgcolor=#B5BDBD gradcolor=#9C9C8C gradangle=90>
						<spacer type=block width=1 height=3>
						<br>
						<blackface><font color=#000000><a name=weather>Local News & Weather</a></font></blackface>
						<spacer type=horizontal size=10>`;
			if (session_data.user_id == 0) {
				data += `
						<font color=#3C5E6F>
						&#128;<A HREF=wtv-center:/personalize?info=AroundTown&template=/personalize/AroundTown.tmpl&redirect=wtv-tricks:/news><FONT SIZE=-1 COLOR=#3C5E6F>
						<B>change&nbsp;city</B></FONT></A>`;
			}
			data += `
					 <td width=8 bgcolor=#9C9C8C>
				  <tr>
					 <td height=10 bgcolor=#9C9C8C>
					 <td bgcolor=#9C9C8C>
					 <td bgcolor=#9C9C8C>
				  <tr>
					 <td width=8 bgcolor=#9C9C8C>
					 <td width=357 valign=top bgcolor=#9C9C8C>
						<spacer type=vertical height=5>
						<br>
						<table cellspacing=0 cellpadding=0>
						   <tr>
							  <td width=357 align=left valign=middle>
								 <blackface><font color=#000000 size=-1>Current Weather</font><spacer type=horizontal width=15><font color=#6B6B63 size=-1>${citycase}</font></blackface><br><br>
								`;
			try {
				data += `<font color=#000000 size=-1><b>Temperature</b></font><spacer type=horizontal width=10><blackface><font color=#6B6B63 size=-1>${weatherData.temp} &#176;F<spacer type=horizontal width=20>${weatherData.cond}</font></blackface><br><br>
<font color=#000000 size=-1><b>Humidity</b></font><spacer type=horizontal width=10><blackface><font color=#6B6B63 size=-1>${weatherData.humid}%</font></blackface>`;
			} catch (e) {
				data += "Current weather conditions are temporarily unavailable";
			}
			data += `<br><br>
								 <blackface><font color=#000000 size=-1>Forecast</font></blackface><br><br>
						   <tr>
							  <td align="center" valign=middle href="proto://www.weather.com">
							  <table cellspacing=0 cellpadding=0 transition=light>
							  <tr>`;

			try {
				let weatherDays = Object.getOwnPropertyNames(weatherData.forecast);
				for (let i = 0; i < 5; i++) {
					let weatherDay = weatherDays[i];

					data += `
		<td align=center valign=top width=71>
			<table HEIGHT=108 WIDTH=68 cellspacing=0 cellpadding=0 bgcolor=#9C9C8C GRADCOLOR=#B5B5A5 GRADANGLE=0>
				<tr>
				<td height=3></td>
				</tr>
				<tr>
				<td valign=top align=center>
					<img src="images/${weatherData.forecast[weatherDay].icon
						}.gif" height=60 width=68>
				</td>
				<tr>
				<td height=3></td>
				</tr>
				<tr>
				<td valign=top align=center>
					<font color="08302F">
						<blackface>${weatherDay}</blackface>
					</font>
				</td>
				<tr>
				<td height=3></td>
				</tr>
				<tr>
				<td valign=top align=center>
					<font color="08302F"><b>${weatherData.forecast[weatherDay].high}</b></font>
					<font color="08302F">/</font>
					<font color="595748"><b>${weatherData.forecast[weatherDay].low}</b></font>
				</td>
			</tr>
			<tr>
			<td height=3></td>
			</tr>
			</table>
			</td>
			`;
				}
			} catch (e) {
				console.log(e)
				data += "Weather info is unavailable";
			}

			data += `</td>
		</tr>
		</table>
		</td>
		</tr>
						   <tr>
							  <td HEIGHT=46 align=right valign=MIDDLE>
								 <font color=#345463 size=-1>&#128;&nbsp;</font><a href="proto://www.weather.com"><font color=#345463 size=-1><b>more weather from Weather Channel</b></font></a>
						   <tr>
							  <td height=5>
						</table>
						<blackface><font color=#000000 size=-1>Regional News</font></blackface><br><br>
						`;
			try {
				if (newsData.regionalHeadlines.length != null) {
					data += `<b><font color=#345463>&#128;</font>&nbsp;<a href="${newsData.regionalHeadlines[0].link}">${newsData.regionalHeadlines[0].title}</a></b><br><spacer type=vertical height=18>${newsData.regionalHeadlines[0].content}<br><br>`;
					for (let i = 1; i < newsData.regionalHeadlines.length; i++) {
						data += `<b><font color=#345463>&#128;</font>&nbsp;<a href="${newsData.regionalHeadlines[i].link}">${newsData.regionalHeadlines[i].title}</a></b><br><br>`;
					}
				} else {
					data += `Regional news for ${citycase} is unavailable.`;
					console.log(" # ah crap the regional headlines API died");
				}
			} catch (e) {
				data += `Regional news for ${citycase} is unavailable.`;
				console.log("oh shit something really bad happened when trying to pull regional headlines: " + e)
			}
			data += `
					 <td width=8 bgcolor=#9C9C8C>
			   </table>
			   <table cellspacing=0 cellpadding=0>
				  <tr>
					 <td bgcolor=#9C9C8C>
					 <td width=8 bgcolor=#9C9C8C>
			   </table>`;
			if (session_data.getSessionData("topic_sports_enabled") == true) {
				data += `
			   <table cellspacing=0 cellpadding=0>
				  <tr>
					 <td width=8 height=25 bgcolor=#B5BDBD>
					 <td width=357 valign=middle bgcolor=#B5BDBD gradcolor=#9C9C8C gradangle=90>
						<font color=#000000>
						   <blackface>Sports</blackface>
						</font>
						<spacer type=block height=10 width=52>
					 <td width=8 bgcolor=#9C9C8C>
				  <tr>
					 <td height=15 bgcolor=#9C9C8C>
					 <td bgcolor=#9C9C8C>
					 <td bgcolor=#9C9C8C>
				  <tr>
					 <td bgcolor=#9C9C8C>
					 <td valign=top bgcolor=#9C9C8C>
						<table cellspacing=0 cellpadding=0>
						   <tr>
							  <td width=357 valign=top>
								 `;
				try {
					if (newsData.sportsHeadlines != null) {
						data += `<b><font color=#345463>&#128;</font>&nbsp;<a href="${newsData.sportsHeadlines[0].link}">${newsData.sportsHeadlines[0].title}</a></b><br><spacer type=vertical height=18>${newsData.sportsHeadlines[0].content}<br><br>`;
						for (let i = 1; i < newsData.sportsHeadlines.length; i++) {
							data += `<b><font color=#345463>&#128;</font>&nbsp;<a href="${newsData.sportsHeadlines[i].link}">${newsData.sportsHeadlines[i].title}</a></b><br><br>`;
						}
					} else {
						data += "Sports headlines are unavailable.";
						console.log(" # ah crap the sports headlines API died");
					}
				} catch (e) {
					data += "Sports headlines are unavailable.";
					console.log("oh shit something really bad happened when trying to pull sports headlines: " + e)
				}
				data += `
						   <tr>
							  <td height=6>
						</table>
					 <td bgcolor=#9C9C8C>
				  <tr>
					 <td height=12 bgcolor=#9C9C8C>
					 <td bgcolor=#9C9C8C>
					 <td bgcolor=#9C9C8C>
			   </table>`;
			}

			if (session_data.getSessionData("topic_business_enabled") == true) {
				data += `
			   <table cellspacing=0 cellpadding=0>
				  <tr>
					 <td width=8 height=25 bgcolor=#B5BDBD>
					 <td width=357 valign=middle bgcolor=#B5BDBD gradcolor=#9C9C8C gradangle=90>
						<font color=#000000>
						   <blackface>Business</blackface>
						</font>
						<spacer type=block height=10 width=52>
					 <td width=8 bgcolor=#9C9C8C>
				  <tr>
					 <td height=15 bgcolor=#9C9C8C>
					 <td bgcolor=#9C9C8C>
					 <td bgcolor=#9C9C8C>
				  <tr>
					 <td bgcolor=#9C9C8C>
					 <td valign=top bgcolor=#9C9C8C>
						<table cellspacing=0 cellpadding=0>
						   <tr>
							  <td width=357 valign=top>
								 `;
				try {
					if (newsData.businessHeadlines != null) {
						data += `<b><font color=#345463>&#128;</font>&nbsp;<a href="${newsData.businessHeadlines[0].link}">${newsData.businessHeadlines[0].title}</a></b><br><spacer type=vertical height=18>${newsData.businessHeadlines[0].content}<br><br>`;
						for (let i = 1; i < newsData.businessHeadlines.length; i++) {
							data += `<b><font color=#345463>&#128;</font>&nbsp;<a href="${newsData.businessHeadlines[i].link}">${newsData.businessHeadlines[i].title}</a></b><br><br>`;
						}
					} else {
						data += "Business headlines are temporarily unavailable";
						console.log(" # ah crap the business headlines API died");
					}
				} catch (e) {
					data += "Business headlines are temporarily unavailable";
					console.log("oh shit something really bad happened when trying to pull business headlines: " + e)
				}
				data += `
						   <tr>
							  <td height=6>
						</table>
					 <td bgcolor=#9C9C8C>
				  <tr>
					 <td height=12 bgcolor=#9C9C8C>
					 <td bgcolor=#9C9C8C>
					 <td bgcolor=#9C9C8C>
			   </table>`;
			}

			if (session_data.getSessionData("topic_tech_enabled") == true) {
				data += `
			   <table cellspacing=0 cellpadding=0>
				  <tr>
					 <td width=8 height=25 bgcolor=#B5BDBD>
					 <td width=357 valign=middle bgcolor=#B5BDBD gradcolor=#9C9C8C gradangle=90>
						<font color=#000000>
						   <blackface>Technology</blackface>
						</font>
						<spacer type=block height=10 width=52>
					 <td width=8 bgcolor=#9C9C8C>
				  <tr>
					 <td height=15 bgcolor=#9C9C8C>
					 <td bgcolor=#9C9C8C>
					 <td bgcolor=#9C9C8C>
				  <tr>
					 <td bgcolor=#9C9C8C>
					 <td valign=top bgcolor=#9C9C8C>
						<table cellspacing=0 cellpadding=0>
						   <tr>
							  <td width=357 valign=top>
								 `;
				try {
					if (newsData.techHeadlines != null) {
						data += `<b><font color=#345463>&#128;</font>&nbsp;<a href="${newsData.techHeadlines[0].link}">${newsData.techHeadlines[0].title}</a></b><br><spacer type=vertical height=18>${newsData.techHeadlines[0].content}<br><br>`;
						for (let i = 1; i < newsData.techHeadlines.length; i++) {
							data += `<b><font color=#345463>&#128;</font>&nbsp;<a href="${newsData.techHeadlines[i].link}">${newsData.techHeadlines[i].title}</a></b><br><br>`;
						}
					} else {
						data += "Technology headlines are temporarily unavailable";
						console.log(" # ah crap the tech headlines API died");
					}
				} catch (e) {
					data += "Technology headlines are temporarily unavailable";
					console.log("oh shit something really bad happened when trying to pull tech headlines: " + e)
				}
				data += `
						   <tr>
							  <td height=6>
						</table>
					 <td bgcolor=#9C9C8C>
				  <tr>
					 <td height=12 bgcolor=#9C9C8C>
					 <td bgcolor=#9C9C8C>
					 <td bgcolor=#9C9C8C>
			   </table>`;
			}

			if (session_data.getSessionData("topic_liver_enabled") == true) {
				data += `
			   <table cellspacing=0 cellpadding=0>
				  <tr>
					 <td width=8 height=25 bgcolor=#B5BDBD>
					 <td width=357 valign=middle bgcolor=#B5BDBD gradcolor=#9C9C8C gradangle=90>
						<font color=#000000>
						   <blackface>Living & Travel</blackface>
						</font>
						<spacer type=block height=10 width=52>
					 <td width=8 bgcolor=#9C9C8C>
				  <tr>
					 <td height=15 bgcolor=#9C9C8C>
					 <td bgcolor=#9C9C8C>
					 <td bgcolor=#9C9C8C>
				  <tr>
					 <td bgcolor=#9C9C8C>
					 <td valign=top bgcolor=#9C9C8C>
						<table cellspacing=0 cellpadding=0>
						   <tr>
							  <td width=357 valign=top>
								 `;
				try {
					if (newsData.liverHeadlines != null) {
						data += `<b><font color=#345463>&#128;</font>&nbsp;<a href="${newsData.liverHeadlines[0].link}">${newsData.liverHeadlines[0].title}</a></b><br><spacer type=vertical height=18>${newsData.liverHeadlines[0].content}<br><br>`;
						for (let i = 1; i < newsData.liverHeadlines.length; i++) {
							data += `<b><font color=#345463>&#128;</font>&nbsp;<a href="${newsData.liverHeadlines[i].link}">${newsData.liverHeadlines[i].title}</a></b><br><br>`;
						}
					} else {
						data += "Living & Travel headlines are temporarily unavailable";
						console.log(" # ah crap the liver headlines API died");
					}
				} catch (e) {
					data += "Living & Travel headlines are temporarily unavailable";
					console.log("oh shit something really bad happened when trying to pull liver headlines: " + e)
				}
				data += `
						   <tr>
							  <td height=6>
						</table>
					 <td bgcolor=#9C9C8C>
				  <tr>
					 <td height=12 bgcolor=#9C9C8C>
					 <td bgcolor=#9C9C8C>
					 <td bgcolor=#9C9C8C>
			   </table>`;
			}

			if (session_data.getSessionData("topic_health_enabled") == true) {
				data += `
			   <table cellspacing=0 cellpadding=0>
				  <tr>
					 <td width=8 height=25 bgcolor=#B5BDBD>
					 <td width=357 valign=middle bgcolor=#B5BDBD gradcolor=#9C9C8C gradangle=90>
						<font color=#000000>
						   <blackface>Health</blackface>
						</font>
						<spacer type=block height=10 width=52>
					 <td width=8 bgcolor=#9C9C8C>
				  <tr>
					 <td height=15 bgcolor=#9C9C8C>
					 <td bgcolor=#9C9C8C>
					 <td bgcolor=#9C9C8C>
				  <tr>
					 <td bgcolor=#9C9C8C>
					 <td valign=top bgcolor=#9C9C8C>
						<table cellspacing=0 cellpadding=0>
						   <tr>
							  <td width=357 valign=top>
								 `;
				try {
					if (newsData.healthHeadlines != null) {
						data += `<b><font color=#345463>&#128;</font>&nbsp;<a href="${newsData.healthHeadlines[0].link}">${newsData.healthHeadlines[0].title}</a></b><br><spacer type=vertical height=18>${newsData.healthHeadlines[0].content}<br><br>`;
						for (let i = 1; i < newsData.healthHeadlines.length; i++) {
							data += `<b><font color=#345463>&#128;</font>&nbsp;<a href="${newsData.healthHeadlines[i].link}">${newsData.healthHeadlines[i].title}</a></b><br><br>`;
						}
					} else {
						data += "Health headlines are temporarily unavailable";
						console.log(" # ah crap the health headlines API died");
					}
				} catch (e) {
					data += "Health headlines are temporarily unavailable";
					console.log("oh shit something really bad happened when trying to pull health headlines: " + e)
				}
				data += `
						   <tr>
							  <td height=6>
						</table>
					 <td bgcolor=#9C9C8C>
				  <tr>
					 <td height=12 bgcolor=#9C9C8C>
					 <td bgcolor=#9C9C8C>
					 <td bgcolor=#9C9C8C>
			   </table>`;
			}

			if (session_data.getSessionData("topic_opinion_enabled") == true) {
				data += `
			   <table cellspacing=0 cellpadding=0>
				  <tr>
					 <td width=8 height=25 bgcolor=#B5BDBD>
					 <td width=357 valign=middle bgcolor=#B5BDBD gradcolor=#9C9C8C gradangle=90>
						<font color=#000000>
						   <blackface>Opinion</blackface>
						</font>
						<spacer type=block height=10 width=52>
					 <td width=8 bgcolor=#9C9C8C>
				  <tr>
					 <td height=15 bgcolor=#9C9C8C>
					 <td bgcolor=#9C9C8C>
					 <td bgcolor=#9C9C8C>
				  <tr>
					 <td bgcolor=#9C9C8C>
					 <td valign=top bgcolor=#9C9C8C>
						<table cellspacing=0 cellpadding=0>
						   <tr>
							  <td width=357 valign=top>
								 `;
				try {
					if (newsData.nytOpinionHeadlines != null) {
						data += `<b><font color=#345463>&#128;</font>&nbsp;<a href="${newsData.nytOpinionHeadlines[0].link}">${newsData.nytOpinionHeadlines[0].title}</a></b><br><spacer type=vertical height=18>${newsData.nytOpinionHeadlines[0].content}<br><br>`;
						for (let i = 1; i < newsData.nytOpinionHeadlines.length; i++) {
							data += `<b><font color=#345463>&#128;</font>&nbsp;<a href="${newsData.nytOpinionHeadlines[i].link}">${newsData.nytOpinionHeadlines[i].title}</a></b><br><br>`;
						}
					} else {
						data += "Opinion headlines are temporarily unavailable";
						console.log(" # ah crap the NYT opinion headlines API died");
					}
				} catch (e) {
					data += "Opinion headlines are temporarily unavailable";
					console.log("oh shit something really bad happened when trying to pull NYT opinion headlines: " + e)
				}
				data += `
						   <tr>
							  <td height=6>
						</table>
					 <td bgcolor=#9C9C8C>
				  <tr>
					 <td height=12 bgcolor=#9C9C8C>
					 <td bgcolor=#9C9C8C>
					 <td bgcolor=#9C9C8C>
			   </table>`;
			}
			data += `
			   <table cellspacing=0 cellpadding=0 border=0 width=100%>
				  <tr>
					 <td bgcolor=#9C9C8C>
					 <td bgcolor=#9C9C8C>
			   </table>
			   <table cellspacing=0 cellpadding=0>
				  <tr>
					 <td abswidth=8>
					 <td abswidth=357>
					 <td abswidth=8>
				  <tr>
					 <td height=25 valign=middle bgcolor=#182121 valign=top>
					 <td valign=middle bgcolor=#182121 gradcolor=#84949C gradangle=90>
						<spacer type=vertical size=3>
						<br>
						<blackface><font color=#FFFFFF
						   ><a name=commentary>Commentary</a>
						   </font>
						</blackface>
					 <td bgcolor=#84949C>
				  <tr>
					 <td bgcolor=#84949C>
					 <td abswidth=357 valign=top bgcolor=#84949C>
						<table cellspacing=0 cellpadding=0>
						   <tr>
							  <td width=357 height=10>
						   <tr>
							  <td>
								 `;
			try {
				if (newsData.opinionHeadlines != null) {
					for (let i = 0; i < newsData.opinionHeadlines.length; i++) {
						data += `<b><font color=#345463>&#128;</font>&nbsp;<a href="${newsData.opinionHeadlines[i].link}">${newsData.opinionHeadlines[i].title}</a></b><br><br>`;
					}
				} else {
					data += "Opinion is unavailable right now.";
					console.log(" # ah crap the slate opinion headlines API died");
				}
			} catch (e) {
				data += "Opinion is unavailable right now.";
				console.log("oh shit something really bad happened when trying to pull slate opinion headlines: " + e)
			}
			data += `
						   <tr>
							  <td>
								 <table cellspacing=0 cellpadding=0>
									<tr>
									   <td width=357 HEIGHT=46 align=right valign=MIDDLE> <font size=-1 color=#345463>&#128; </font><a href=http://slate.msn.com><font size=-1 color=#345463><b>more news and opinion at Slate</b></font></a>
									   <td width=5>
								 </table>
						</table>
					 <td bgcolor=#84949C>
			   </table>
			<td width=166 background=images/centers/infocenter_right_bg.gif bgcolor=#000000 gradcolor=#314252 gradangle=0 valign=top>
			   <table cellspacing=0 cellpadding=0 width=166 border="0">
				  <tr>
					 <td height=4>
				  <tr>
					 <td height=22 colspan=3 valign=middle bgcolor=#000000 transparency=70 gradcolor=#5A737B gradangle=90>
						<spacer type=horizontal size=6>
						<font size=-1 color=84949C>
						   <blackface>News Links</blackface>
						</font>
				  <tr>
					 <td height=4>
				  <tr>
					 <td width=25 height=23 align=left valign=top>
						<spacer type=horizontal size=4>
						<img src=images/centers/news/related_circlearrow.gif width=19 height=19>
					 <td width=4>
					 <td width=137 valign=top>
						<spacer type=vertical size=3>
						<br>
						<a href=http://search.msn.com/results.asp?q=WebTVNews&FORM=WEBTV&cfg=WEBTVBROWSE&rn=96598&dp=1266870.1129410.0&v=1&ver=26><font size=-1 color=#C6BDA5><B>Web Sites</B></a>
				  <tr>
					 <td height=2>
				  <tr>
					 <td width=25 height=23 align=left valign=top>
						<spacer type=horizontal size=4>
						<img src=images/centers/news/related_circlearrow.gif width=19 height=19>
					 <td width=4>
					 <td width=137 valign=top>
						<spacer type=vertical size=3>
						<br>
						<a href=wtv-center:/community?info=News><font size=-1 color=#C6BDA5><B>Chat &amp; Discuss</B></a>
				  <tr>
					 <td height=2>
				  <tr>
					 <td height=6>
				  <tr>
					 <td height=10>
				  <tr>
					 <td height=4>
				  <tr>
					 <td height=22 colspan=3 valign=middle bgcolor=#000000 transparency=70 gradcolor=#5A737B gradangle=90>
						<spacer type=horizontal size=6>
						<font size=-1 color=84949C>
						   <blackface>Things to Try</blackface>
						</font>
				  <tr>
					 <td height=8>
				  <tr>
					 <td height=23 width=25 valign=top ALIGN=LEFT>
						<spacer type=horizontal size=10>
						<font size=-1 color=#DED6BD>&#128;</font>
						<spacer type=horizontal size=0>
					 <td colspan=2 valign=top>
						<a href=http://www.msnbc.com/find.asp><font size=-1 color=#DED6BD>Search MSNBC</font></a><br>
						<spacer type=vertical size=7>
				  <tr>
					 <td height=23 width=25 valign=top ALIGN=LEFT>
						<spacer type=horizontal size=10>
						<font size=-1 color=#DED6BD>&#128;</font>
						<spacer type=horizontal size=0>
					 <td colspan=2 valign=top>
						<a href=http://www.classifieds2000.com><font size=-1 color=#DED6BD>Search classifieds</font></a><br>
						<spacer type=vertical size=7>
				  <tr>
					 <td height=23 width=25 valign=top ALIGN=LEFT>
						<spacer type=horizontal size=10>
						<font size=-1 color=#DED6BD>&#128;</font>
						<spacer type=horizontal size=0>
					 <td colspan=2 valign=top>
						<a href=http://theoldnet.com/get?url=webtv.astroadvice.com/default.htm&year=1999&scripts=false&decode=false><font size=-1 color=#DED6BD>Check horoscopes</font></a><br>
						<spacer type=vertical size=7>
				  <tr>
					 <td height=23 width=25 valign=top ALIGN=LEFT>
						<spacer type=horizontal size=10>
						<font size=-1 color=#DED6BD>&#128;</font>
						<spacer type=horizontal size=0>
					 <td colspan=2 valign=top>
						<a href=wtv-center:/center?info=Games&tab=2><font size=-1 color=#DED6BD>Get lottery results</font></a><br>
						<spacer type=vertical size=7>
				  <tr>
					 <td height=23 width=25 valign=top ALIGN=LEFT>
						<spacer type=horizontal size=10>
						<font size=-1 color=#DED6BD>&#128;</font>
						<spacer type=horizontal size=0>
					 <td colspan=2 valign=top>
						<a href="client:showalert?message=you%20are%20now%20homeschooled"><font size=-1 color=#DED6BD>Find high<br>school friends</font></a><br>
						<spacer type=vertical size=7>
				  <tr>
					 <td height=23 width=25 valign=top ALIGN=LEFT>
						<spacer type=horizontal size=10>
						<font size=-1 color=#DED6BD>&#128;</font>
						<spacer type=horizontal size=0>
					 <td colspan=2 valign=top>
						<a href=wtv-center:/time-savers><font size=-1 color=#DED6BD>More</font></a><br>
						<spacer type=vertical size=7>
				  <tr>
					 <td height=4 colspan=3>
						<spacer type=horizontal size=6>
			   </table>
		 <tr>
			<td bgcolor=5A737B>
			<td bgcolor=84949C>
			   <table cellspacing=0 cellpadding=0>
				  <tr>
					 <td width=8>
					 <td width=357 height=6>
				  <tr>
					 <td width=8 height=8 bgcolor=84949C>
						<img src=wtv-center:/images/CornerBottomLeftNews.gif width=8 height=8>
			   </table>
			<td background=images/centers/infocenter_right_bg.gif bgcolor=#314252>
 </table> <table cellspacing=0 cellpadding=0 valign=top> <tr><td bgcolor=#5A737B> 
<table cellspacing=0 cellpadding=0 valign=top> 
<tr><td width=21> 
<td width=524 height=120 valign=top> 
<table cellspacing=0 cellpadding=0> 
<tr><td width=524 height=16> 
<tr><td> 
<table cellspacing=0 cellpadding=0> 
<tr><td width=16> 
<td width=156> 
<font size=+1 color=#f7e7bd>&#128; </font><a href=wtv-center:/center?info=WebTVToday><font color=#f7e7bd>WebTV Today</font> <td width=100> 
<font color=#314252>&#128; <b>News</b></font> <td width=110> <font size=+1 color=#f7e7bd>&#128; </font><a href=wtv-center:/center?info=Shopping><font color=#f7e7bd>Shopping</font></a> <td width=1> <spacer type=horizontal width=35><FONT SIZE=+1 COLOR=#FFFFFF>&#128; </font><a href="wtv-guide:/help"><font color=#FFFFFF>Help</font></a> <tr><td><spacer type=vertical size=4><td><td><td><td> <tr><td width=16> <td> <font color=#f7e7bd>&#128; </font><a href=wtv-center:/center?info=Entertainment><font color=#f7e7bd>Entertainment</font></a> <td> <font size=+1 color=#f7e7bd>&#128; </font><a href=wtv-center:/center?info=Sports><font color=#f7e7bd>Sports</font></a> <td> <font size=+1 color=#f7e7bd>&#128; </font><a href=wtv-center:/center?info=Money><font color=#f7e7bd>Money</font></a> <td> 
<spacer type=horizontal width=35><FONT SIZE=+1 COLOR=#FFFFFF>&#128; </font><a href="wtv-center:/search-page"><font color=#FFFFFF>Search</font></a> <tr><td><spacer type=vertical size=5><td><td><td><td> <tr><td width=16> <TD> 
<TD> 
<td> 
<td> 
</table> </table> 
</table> 
</table> 
</body> 
</html> 
`;
			return data;
		}

		(async () => {
			// Load the RSS data
			let newsData = await wtvc.getNewsCache();
			let weatherData = await wtvc.getWeatherCache(accounts.subscriber.subscriber_zip_code || "98052");
			sendToClient(
				socket,
				headers,
				renderPage(
					newsData,
					weatherData,
				)
			);
		})();
		break;

	case "Sports":
		request_is_async = true; // Make us async

		function renderSports(newsData) {
			data = `
<html>
<head>
<title>Sports</title>
<META HTTP-EQUIV="Refresh" CONTENT="900">
</head>
<display>
<body bgcolor=#845A42 text=cccccc link=aaaaaa vlink=aaaaaa fontsize=${session_data.isJapaneseClient() ? `small` : `medium`} hspace=0 vspace=0>
<table height=80 width=560 cellspacing=0 cellpadding=0>
<tr>
<td width=394 background=images/centers/sports/sports_masthead.jpg bgcolor=#946F57 gradcolor=#4A3121 gradangle=90 novtilebg nohtilebg>
<table height=80 width=394 cellspacing=0 cellpadding=0>
<tr>
<td width=98 height=67 align=center valign=middle>
<a href="wtv-home:/home"><img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width=87 height=67></a>
<td width=296 align=right valign=top>
</table>
<td width=166 bgcolor=#4A3121 gradcolor=#000000 gradangle=90 valign=top>
<table cellspacing=0 cellpadding=0>
<tr>
<td valign=top>
<spacer type=vertical size=10><br>
<td valign=top>
<spacer type=vertical size=10><br>
<spacer type=horizontal size=6>
</table>
</table>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=21 height=130 bgcolor=#946F57 gradcolor=845A42 gradangle=0>
<td bgcolor=84949C width=373 valign=top>
<table cellspacing=0 cellpadding=0>
<tr>
<td abswidth=8>
<td abswidth=357>
<td abswidth=8>
<tr>
<td height=25 valign=middle bgcolor=946F57 valign=top>
<img src=wtv-center:/images/CornerTopLeft.gif width=8 height=25>
<td valign=middle bgcolor=#182121 gradcolor=#6B6B63 gradangle=90>
<spacer type=vertical size=3><br>
<blackface><font color=#FFFFFF
><a name=topstories>Top Stories</a>
</font></blackface>
<td bgcolor=#6B6B63>
<tr>
<td bgcolor=#9C9C8C>
<td abswidth=357 valign=top bgcolor=#9C9C8C>
<table cellspacing=0 cellpadding=0>
<tr><td width=357 height=10>
<tr><td>	<table cellspacing=0 cellpadding=0>
`;
			try {
				if (newsData.sportsHeadlines != null) {
					data += `<b><font color=#4A3121>&#128;</font>&nbsp;<a href="${newsData.sportsHeadlines[0].link}"><font color=#000000>${newsData.sportsHeadlines[0].title}</a></b><br><spacer type=vertical height=18></b><font color=#000000>${newsData.sportsHeadlines[0].content}<b><br><br>`;
					for (let i = 1; i < newsData.sportsHeadlines.length; i++) {
						data += `<b><font color=#4A3121>&#128;</font>&nbsp;<a href="${newsData.sportsHeadlines[i].link}"><font color=#000000>${newsData.sportsHeadlines[i].title}</a></b><br><br>`;
					}
				} else {
					data += "Sports headlines are temporarily unavailable";
					console.log(" # ah crap the sports headlines API died");
				}
			} catch (e) {
				data += "Sports headlines are temporarily unavailable";
				console.log("oh shit something really bad happened when trying to pull sports headlines: " + e)
			}
			data += `
</table>
</font>
<tr><td HEIGHT=46 align=right valign=MIDDLE>
<font size=-1 color=#4A3121>&#128; </font><a href=http://www.msnbc.com/news/SPT_Front.asp?a><font size=-1 color=#4A3121><b>more headlines at MSNBC</b></font></a>
<tr><td height=5>
</table>
<td bgcolor=#9C9C8C>
</table>
<table cellspacing=0 cellpadding=0>
<tr>
<td abswidth=8>
<td abswidth=357>
<td abswidth=8>
<tr>
<td height=25 valign=middle bgcolor=#182121 valign=top>
<td valign=middle bgcolor=#182121 gradcolor=#6B6B63 gradangle=90>
<spacer type=vertical size=3><br>
<table width=357 cellspacing=0 cellpadding=0>
<tr>
<td align=left valign=middle maxlines=1>
<blackface><font
color=#FFFFFF
><a name=myteams>My Teams</a>
</font></blackface>
<td align=right maxlines=1 width=>
&#128;
<a href=/personalize?info=Sports&template=/personalize/Sports.tmpl><font size=-1 color=#D1D3D3><b><shadow>Change teams</shadow></b></font></a>
</table>
<td bgcolor=#6B6B63>
<tr>
<td bgcolor=#8C7B63>
<td abswidth=357 valign=top bgcolor=#8C7B63>
<spacer type=vertical height=15>
<table cellpadding=0 cellspacing=0>
<tr>
<td width=215>
<font size=-1 color=#000000>Select <b>Change teams</b> to get scores and schedules for your favorite pro teams.</font>
<td width=140 valign=middle>
<spacer type=horizontal size=8> <font color=#FFFFFF size=-1>
<form>
<input type=button usestyle borderimage="file://ROM/Borders/ButtonBorder2.bif"
action="wtv-center:/center?info=Sports&tab=1#"
value="Update Scores">
</form>
</font>
<spacer type=horizontal size=8>
</table>
<spacer type=vertical height=15>
<table cellpadding=0 cellspacing=0>
<tr><td width=357>
<table cellspacing=0 cellpadding=0>	<tr>
<td width=230 align=left valign=bottom maxlines=1>
<font color=#000000><blackface>MLB</blackface> - <font color=#000000 size=-1>Detroit Tigers</font>
</font>
<td width=125 align=right>
<font color=#000000><b></b></font>
</table>
<tr><td height=1>
<tr><td height=4 bgcolor=#6B3118>
<tr><td height=3>
<tr><td>
<table cellspacing=0 cellpadding=0>
<tr><td height=4>
<tr><td width=357>
<font color=000000 size=-1>
Tigers scores are currently unavailable.
</font>
</table>
<tr><td height=8>
<tr><td>
<table cellspacing=0 cellpadding=0>
<td width=215>
<font size=-1 color=#4A3121>&#128; </font><a href=wtv-center:/center?info=Sports&tab=3#mlb_scores><font size=-1 color=#4A3121><b>Get more MLB scores</b></font></a>
<td width=140>
<font size=-1 color=#4A3121>&#128; </font><a href=wtv-center:/center?info=Sports&tab=3#mlb_notes><font size=-1 color=#4A3121><b>Get Team Info</b></font></a>
</table>
<tr><td height=15>
</table>
<table cellpadding=0 cellspacing=0>
<tr><td width=357>
<table cellspacing=0 cellpadding=0>	<tr>
<td width=230 align=left valign=bottom maxlines=1>
<font color=#000000><blackface>NBA</blackface> - <font color=#000000 size=-1>Detroit Pistons</font>
</font>
<td width=125 align=right>
<font color=#000000><b></b></font>
</table>
<tr><td height=1>
<tr><td height=4 bgcolor=#6B3118>
<tr><td height=3>
<tr><td>
<table cellspacing=0 cellpadding=0>
<tr><td height=4>
<tr><td width=357>
<font color=000000 size=-1>
Pistons scores are currently unavailable.
</font>
</table>
<tr><td height=8>
<tr><td>
<table cellspacing=0 cellpadding=0>
<td width=215>
<font size=-1 color=#4A3121>&#128; </font><a href=wtv-center:/center?info=Sports&tab=4#nba_scores><font size=-1 color=#4A3121><b>Get more NBA scores</b></font></a>
<td width=140>
<font size=-1 color=#4A3121>&#128; </font><a href=wtv-center:/center?info=Sports&tab=4#nba_notes><font size=-1 color=#4A3121><b>Get Team Info</b></font></a>
</table>
<tr><td height=15>
</table>
<table cellpadding=0 cellspacing=0>
<tr><td width=357>
<table cellspacing=0 cellpadding=0>	<tr>
<td width=230 align=left valign=bottom maxlines=1>
<font color=#000000><blackface>NHL</blackface> - <font color=#000000 size=-1>Detroit Red Wings</font>
</font>
<td width=125 align=right>
<font color=#000000><b></b></font>
</table>
<tr><td height=1>
<tr><td height=4 bgcolor=#6B3118>
<tr><td height=3>
<tr><td>
<table cellspacing=0 cellpadding=0>
<tr><td height=4>
<tr><td width=357>
<font color=000000 size=-1>
Red Wings scores are currently unavailable.
</font>
</table>
<tr><td height=8>
<tr><td>
<table cellspacing=0 cellpadding=0>
<td width=215>
<font size=-1 color=#4A3121>&#128; </font><a href=wtv-center:/center?info=Sports&tab=5#nhl_scores><font size=-1 color=#4A3121><b>Get more NHL scores</b></font></a>
<td width=140>
<font size=-1 color=#4A3121>&#128; </font><a href=wtv-center:/center?info=Sports&tab=5#nhl_notes><font size=-1 color=#4A3121><b>Get Team Info</b></font></a>
</table>
<tr><td height=15>
</table>
<table cellpadding=0 cellspacing=0>
<tr><td width=357>
<table cellspacing=0 cellpadding=0>	<tr>
<td width=230 align=left valign=bottom maxlines=1>
<font color=#000000><blackface>NFL</blackface> - <font color=#000000 size=-1>Detroit Lions</font>
</font>
<td width=125 align=right>
<font color=#000000><b></b></font>
</table>
<tr><td height=1>
<tr><td height=4 bgcolor=#6B3118>
<tr><td height=3>
<tr><td>
<table cellspacing=0 cellpadding=0>
<tr><td height=4>
<tr><td width=357>
<font color=#000000 size=-1>Lions - off-season.</font>
</table>
<tr><td height=8>
<tr><td>
<table cellspacing=0 cellpadding=0>
<td width=215>
<font color=#000000 size=-1>Off-season.</font>
<td width=140>
<font size=-1 color=#4A3121>&#128; </font><a href=wtv-center:/center?info=Sports&tab=2#nfl_notes><font size=-1 color=#4A3121><b>Get Team Info</b></font></a>
</table>
<tr><td height=15>
</table>
<spacer type=vertical height=10>
<table cellpadding=0 cellspacing=0>
<tr>
<td width=357 align=right>
<font size=-1 color=#4A3121>&#128; </font><a href="http://www.msnbc.com/news/spt_summary.asp"><font size=-1 color=#4A3121><b>scores provided by MSNBC</b></font></a>
<spacer type=horizontal size=8>
</table>
<spacer type=vertical height=15>
<td bgcolor=#8C7B63>
</table>
<table cellspacing=0 cellpadding=0>
<tr>
<td abswidth=8>
<td abswidth=357>
<td abswidth=8>
<tr>
<td height=25 valign=middle bgcolor=#182121 valign=top>
<td valign=middle bgcolor=#182121 gradcolor=#8C7B63 gradangle=90>
<spacer type=vertical size=3><br>
<blackface><font color=#FFFFFF
><a name=guides>Inside Sports</a>
</font></blackface>
<td bgcolor=#8C7B63>
<tr>
<td bgcolor=#8C7B63>
<td abswidth=357 valign=top bgcolor=#8C7B63>
<table cellspacing=0 cellpadding=0>
<tr><td height=15>
<tr>
<td width=175>
<table cellspacing=0 cellpadding=0>
<tr><td height=24>
<font color=#6B3118>&#128; </font>
<a href=http://www.msnbc.com/news/GOLF1_Front.asp><font color=#000000 size=-1><B>Golf</B></font></a>
<tr><td height=24>
<font color=#6B3118>&#128; </font>
<a href=http://www.msnbc.com/news/TENNIS_Front.asp><font color=#000000 size=-1><B>Tennis</B></font></a>
<tr><td height=24>
<font color=#6B3118>&#128; </font>
<a href=http://www.msnbc.com/news/MOTORSPORTS_Front.asp><font color=#000000 size=-1><B>Motor Sports</B></font></a>
<tr><td height=24>
<font color=#6B3118>&#128; </font>
<a href=http://www.scoreboard.msnbc.com/msnbc/mls/scoreboards/sb_20020720.asp?pne=msntv><font color=#000000 size=-1><B>Soccer</B></font></a>
<tr><td height=24>
<font color=#6B3118>&#128; </font>
<a href=http://cbs.sportsline.com/u/women/><font color=#000000 size=-1><B>Women's Sports</B></font></a>
</table>
<td width=175>
<table cellspacing=0 cellpadding=0>
<tr><td height=24>
<font color=#6B3118>&#128; </font>
<a href=http://www.msnbc.com/news/horseracing_front.asp?pne=msntv><font color=#000000 size=-1><B>Horse Racing</B></font></a>
<tr><td height=24>
<font color=#6B3118>&#128; </font>
<a href=http://www.msnbc.com/news/WNBAMAIN_Front.asp?pne=msntv><font color=#000000 size=-1><B>WNBA</B></font></a>
<tr><td height=24>
<font color=#6B3118>&#128; </font>
<a href=http://sl.sports.com><font color=#000000 size=-1><B>World Sports</B></font></a>
<tr><td height=24>
<font color=#6B3118>&#128; </font>
<a href=http://covers.msnbc.com/data/mlb/game/mlb_lines.html><font color=#000000 size=-1><B>Sports Odds</B></font></a>
<tr><td height=24>
<font color=#6B3118>&#128; </font>
<a href=http://www.msnbc.com/news/XMORESPORTS_Front.asp><font color=#000000 size=-1><B>Other Sports</B></font></a>
</table>
<tr>
<td height=10>
<tr>
<td colspan=2 align=right valign=MIDDLE>
<font size=-1 color=#4A3121>&#128; </font><a href="http://www.msnbcsports.com"><font size=-1 color=#4A3121><b>more sports at MSNBC</b></font></a>
<tr>
<td height=15>
</table>
<td bgcolor=#8C7B63>
</table>
<table cellspacing=0 cellpadding=0>
<tr>
<td abswidth=8>
<td abswidth=357>
<td abswidth=8>
<tr>
<td height=25 valign=middle bgcolor=#182121 valign=top>
<td valign=middle bgcolor=#182121 gradcolor=#4A3121 gradangle=90>
<spacer type=vertical size=3><br>
<blackface><font color=#FFFFFF
>Play Sports Trivia
</font></blackface>
<td bgcolor=#4A3121>
<tr>
<td bgcolor=#4A3121>
<td abswidth=357 valign=top bgcolor=#4A3121>
<spacer type=vertical size=9><br>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=357 colspan=2>
<font color=000000 size=-1>The trivia question is not available right now.</font>
</table>	<td bgcolor=#4A3121>
</table>
<td background=images/centers/infocenter_right_bg.gif bgcolor=#000000 gradcolor=#4A3121 gradangle=0 valign=top>
<select name="myLinks" width=160 align=center>
<table cellspacing=0 cellpadding=0 width=166 border="0">
<tr><td height=4>
<tr><td height=22 colspan=3 valign=middle bgcolor=#000000 transparency=70 gradcolor=#845A42 gradangle=90>
<spacer type=horizontal size=6>
<font size=-1 color=#A8937E><blackface>Sports Links</blackface></font>
<tr><td height=4>
<tr><td width=25 height=23 align=left valign=top>
<spacer type=horizontal size=4>
<img src=images/centers/sports/related_circlearrow.gif width=19 height=19>
<td width=4>
<td width=137 valign=top>
<spacer type=vertical size=3><br>
<a href=http://search.msn.com/results.asp?q=WebTVSports&FORM=WEBTV&cfg=WEBTVBROWSE&rn=1266867&dp=0&v=1><font size=-1 color=#C6BDA5><B>Web Sites</B></a>
<tr><td height=2>
<tr><td width=25 height=23 align=left valign=top>
<spacer type=horizontal size=4>
<img src=images/centers/sports/related_circlearrow.gif width=19 height=19>
<td width=4>
<td width=137 valign=top>
<spacer type=vertical size=3><br>
<a href=wtv-center:/community?info=Sports><font size=-1 color=#C6BDA5><B>Chat &amp; Discuss</B></a>
<tr><td height=2>
<tr><td height=6>
<tr><td height=10>
<tr><td height=4>
<tr><td height=22 colspan=3 valign=middle bgcolor=#000000 transparency=70 gradcolor=#845A42 gradangle=90>
<spacer type=horizontal size=6>
<font size=-1 color=#A8937E><blackface>Things to Try</blackface></font>
<tr><td height=8>
<tr><td height=23 width=25 valign=top ALIGN=LEFT>
<spacer type=horizontal size=10>
<font size=-1 color=#DED6BD>&#128;</font><spacer type=horizontal size=0>
<td colspan=2 valign=top>
<a href="client:showalert?message=caring%20about%20sports%20is%20odd%20enough,%20don't%20double%20dip"><font size=-1 color=#DED6BD>Sports Odds</font></a><br>
<spacer type=vertical size=7>
<tr><td height=23 width=25 valign=top ALIGN=LEFT>
<spacer type=horizontal size=10>
<font size=-1 color=#DED6BD>&#128;</font><spacer type=horizontal size=0>
<td colspan=2 valign=top>
<a href=wtv-center:/programming/ITV/guide/index.tmpl><font size=-1 color=#DED6BD>Try Interactive TV</font></a><br>
<spacer type=vertical size=7>
<tr><td height=23 width=25 valign=top ALIGN=LEFT>
<spacer type=horizontal size=10>
<font size=-1 color=#DED6BD>&#128;</font><spacer type=horizontal size=0>
<td colspan=2 valign=top>
<a href="client:showalert?message=space%20jam%203%20will%20be%20real%20in%202026"><font size=-1 color=#DED6BD>Sports trivia</font></a><br>
<spacer type=vertical size=7>
<tr><td height=23 width=25 valign=top ALIGN=LEFT>
<spacer type=horizontal size=10>
<font size=-1 color=#DED6BD>&#128;</font><spacer type=horizontal size=0>
<td colspan=2 valign=top>
<a href="client:showalert?message=one%20morbillion%20dollar%20baseball%20card%20collection"><font size=-1 color=#DED6BD>Find memorabilia</font></a><br>
<spacer type=vertical size=7>
<tr><td height=23 width=25 valign=top ALIGN=LEFT>
<spacer type=horizontal size=10>
<font size=-1 color=#DED6BD>&#128;</font><spacer type=horizontal size=0>
<td colspan=2 valign=top>
<a href="client:showalert?message=Why%20You%20Suck%20At%20Golf%20by%20Clive%20Scraff"><font size=-1 color=#DED6BD>Browse books</font></a><br>
<spacer type=vertical size=7>
<tr><td height=23 width=25 valign=top ALIGN=LEFT>
<spacer type=horizontal size=10>
<font size=-1 color=#DED6BD>&#128;</font><spacer type=horizontal size=0>
<td colspan=2 valign=top>
<a href=wtv-center:/time-savers><font size=-1 color=#DED6BD>More</font></a><br>
<spacer type=vertical size=7>
<tr><td height=4 colspan=3>
<tr><td height=22 colspan=3 valign=middle bgcolor=#000000 transparency=70 gradcolor=#845A42 gradangle=90>
<spacer type=horizontal size=6>
<font size=-1 color=#A8937E><blackface>Local Links</blackface></font>
<tr><td height=8 colspan=3>
<tr><td height=23 width=25 valign=top ALIGN=LEFT>
<spacer type=horizontal size=10>
<font size=-1 color=#DED6BD>&#128;</font><spacer type=horizontal size=0>
<td colspan=2 valign=top>
<a href=http://yellowpages.msn.com/simplesearch.aspx?City=Detroit&State=MI&KWD=Campgrounds><font size=-1 color=#DED6BD>Campgrounds</font></a><br>
<spacer type=vertical size=7>
<tr><td height=23 width=25 valign=top ALIGN=LEFT>
<spacer type=horizontal size=10>
<font size=-1 color=#DED6BD>&#128;</font><spacer type=horizontal size=0>
<td colspan=2 valign=top>
<a href=http://yellowpages.msn.com/simplesearch.aspx?City=Detroit&State=MI&KWD=Public+golf+courses><font size=-1 color=#DED6BD>Golf Courses</font></a><br>
<spacer type=vertical size=7>
<tr><td height=23 width=25 valign=top ALIGN=LEFT>
<spacer type=horizontal size=10>
<font size=-1 color=#DED6BD>&#128;</font><spacer type=horizontal size=0>
<td colspan=2 valign=top>
<a href=http://yellowpages.msn.com/simplesearch.aspx?City=Detroit&State=MI&KWD=Health+clubs><font size=-1 color=#DED6BD>Health Clubs</font></a><br>
<spacer type=vertical size=7>
<tr><td height=23 width=25 valign=top ALIGN=LEFT>
<spacer type=horizontal size=10>
<font size=-1 color=#DED6BD>&#128;</font><spacer type=horizontal size=0>
<td colspan=2 valign=top>
<a href=http://yellowpages.msn.com/simplesearch.aspx?City=Detroit&State=MI&KWD=sporting+goods><font size=-1 color=#DED6BD>Sporting Goods</font></a><br>
<spacer type=vertical size=7>
<tr><td height=23 width=25 valign=top ALIGN=LEFT>
<spacer type=horizontal size=10>
<font size=-1 color=#DED6BD>&#128;</font><spacer type=horizontal size=0>
<td colspan=2 valign=top>
<a href=http://yellowpages.msn.com/simplesearch.aspx?City=Detroit&State=MI&KWD=Sports+clubs+%26+organizations><font size=-1 color=#DED6BD>Sports Clubs</font></a><br>
<spacer type=vertical size=7>
<tr><td height=23 width=25 valign=top ALIGN=LEFT>
<spacer type=horizontal size=10>
<font size=-1 color=#DED6BD>&#128;</font><spacer type=horizontal size=0>
<td colspan=2 valign=top>
<a href=http://yellowpages.msn.com/simplesearch.aspx?City=Detroit&State=MI&KWD=Yoga><font size=-1 color=#DED6BD>Yoga & Meditation</font></a><br>
<spacer type=vertical size=7>
</table>
<tr>
<td bgcolor=#845A42>
<td bgcolor=#4A3121 >
<table cellspacing=0 cellpadding=0>
<tr>
<td width=8>
<td width=357 height=6>
<tr>
<td width=8 height=8 bgcolor=#4A3121>
<img src=wtv-center:/images/CornerBottomLeftSports.gif width=8 height=8>
</table>
<td background=images/centers/infocenter_right_bg.gif bgcolor=#4A3121>
</table>
<table cellspacing=0 cellpadding=0 valign=top> 
<tr><td width=21> 
<td width=524 height=120 valign=top> 
<table cellspacing=0 cellpadding=0> 
<tr><td width=524 height=16> 
<tr><td> 
<table cellspacing=0 cellpadding=0> 
<tr><td width=16> 
<td width=156> 
<font size=+1 color=#f7e7bd>&#128; </font><a href=wtv-center:/center?info=WebTVToday><font color=#f7e7bd>WebTV Today</font> <td width=100> 
<font size=+1 color=#f7e7bd>&#128; </font><a href=wtv-center:/center?info=News><font color=#f7e7bd>News</font></a> <td width=110> <font color="f7e7bd">&#128; </font><a href=wtv-center:/center?info=Shopping><font color=#f7e7bd>Shopping</font></a> <td width=1> <spacer type=horizontal width=35><FONT SIZE=+1 COLOR=#FFFFFF>&#128; </font><a href="wtv-guide:/help"><font color=#FFFFFF>Help</font></a> <tr><td><spacer type=vertical size=4><td><td><td><td> <tr><td width=16> <td> <font color="f7e7bd">&#128; </font><a href=wtv-center:/center?info=Entertainment><font color=#f7e7bd>Entertainment</font></a> <td> <font size=+1 color=#4A3121>&#128; </font><b><font color=#4A3121>Sports</font></b> <td> <font size=+1 color=#f7e7bd>&#128; </font><a href=wtv-center:/center?info=Money><font color=#f7e7bd>Money</font></a> <td> 
<spacer type=horizontal width=35><FONT SIZE=+1 COLOR=#FFFFFF>&#128; </font><a href="wtv-center:/search-page"><font color=#FFFFFF>Search</font></a> <tr><td><spacer type=vertical size=5><td><td><td><td> <tr><td width=16> <TD> 
<TD> 
<td> 
<td> 
</table> </table> 
</table> 
</table> 
</body> 
</html> 
`;
			return data;
		}

		(async () => {
			// Load the RSS data
			let newsData = await wtvc.getNewsCache();
			sendToClient(socket, headers, renderSports(newsData));
		})();
		break;

	case "Shopping":
		data = `
<html><head>
<title>Shopping</title>
</head>
<body vspace="0" hspace="0" fontsize="${session_data.isJapaneseClient() ? `small` : `medium`}" vlink="#000000" text="#000000" link="#000000" bgcolor="846232"><display>

<table width="560" height="80" cellspacing="0" cellpadding="0">
<tbody><tr>
<td gradcolor="BFA55B" gradangle="90" novtilebg="" nohtilebg="" width="394" bgcolor="BFA55B" background="images/centers/shopping/main_bg_top.jpg">
<table width="394" height="80" cellspacing="0" cellpadding="0">
<tbody><tr>
<td width="98" valign="middle" height="67" align="center">
<a href="wtv-home:/home"><img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width="87" height="67"></a>
</td><td width="296" valign="top" align="right">
</td></tr></tbody></table>
</td><td gradcolor="000000" gradangle="90" width="166" valign="top" bgcolor="BFA55B" gradcolor="BFA55B">
<table cellspacing="0" cellpadding="0">
<tbody><tr>
<td valign="top">
<spacer type="vertical" size="10"><br>
</spacer></td><td valign="top">
<spacer type="vertical" size="10"><br>
<spacer type="horizontal" size="6">
</spacer></spacer></td></tr></tbody></table>
</td></tr></tbody></table>
<table cellspacing="0" cellpadding="0">
<tbody><tr>
<td gradcolor="846232" gradangle="0" width="21" height="130" bgcolor="977933">
</td><td width="373" valign="top" bgcolor="#BFA55B">
<table cellspacing="0" cellpadding="0">
<tbody><tr>
<td abswidth="8">
</td><td abswidth="357">
</td><td abswidth="8">
</td></tr><tr>
<td valign="middle" height="25" bgcolor="977933">
<img src="wtv-center:/images/CornerTopLeft.gif" width="8" height="25">
</td><td gradcolor="#6B6B6B" gradangle="90" valign="middle" bgcolor="#182121">
<spacer type="vertical" size="3"><br>
<blackface><font color="#FFFFFF"><a name="specials">Specials</a>
</font></blackface>
</spacer></td><td bgcolor="#6B6B6B">
</td></tr><tr>
<td bgcolor="#9C9C8C">
</td><td abswidth="357" valign="top" bgcolor="#9C9C8C">
<table cellspacing="0" cellpadding="0">
<tbody><tr><td width="100%" height="10">
</td></tr><tr><td valign="top">
</td></tr><tr><td href="client:showalert?message=Sorry, eBay isn't responding to my messages. I think they blocked me" width="100%">
<font size=3 color="000000"><blackface>WebTV Receiver special deal!</blackface></font><br>
<font color="000000">Buy one, get one 0% off!</font>
</td></tr><tr><td width="350">
</td></tr><tr><td valign="middle" height="46" align="right"> <font size="-1" color="#947B4A">&#128; </font><a href="client:showalert?message=You will get your info stolen. Guaranteed, or we'll personally take your money instead."><font size="-1" color="#947B4A"><b>WebTV Shopping Guarantee</b></font></a>
</td></tr></tbody></table>
</td><td bgcolor="#9C9C8C">
</td></tr></tbody></table>
<table cellspacing="0" cellpadding="0">
<tbody><tr>
<td abswidth="8">
</td><td abswidth="357">
</td><td abswidth="8">
</td></tr><tr>
<td valign="middle" height="25" bgcolor="#182121">
</td><td gradcolor="#6B6B6B" gradangle="90" valign="middle" bgcolor="#182121">
<spacer type="vertical" size="3"><br>
<blackface><font color="#FFFFFF"><a name="categories">Categories</a>
</font></blackface>
</spacer></td><td bgcolor="#6B6B6B">
</td></tr><tr>
<td bgcolor="#AD977B">
</td><td abswidth="357" valign="top" bgcolor="#AD977B">
<br><br><table cellspacing="0" cellpadding="0" border="0" align="right">
<tbody><tr><td gradcolor="#6B5A39" gradangle="90" height="5" bgcolor="6B5A39">
</td></tr><tr><td gradcolor="#AD977B" gradangle="90" bgcolor="6B5A39">

</td></tr><tr><td valign="middle" height="10" align="right">
</td></tr></tbody></table>
</td><td bgcolor="#AD977B">
</td></tr></tbody></table>
</td><td gradcolor="#6B5A39" gradangle="0" width="166" valign="top" bgcolor="#000000" background="images/centers/infocenter_right_bg.gif">
<select name="myLinks" width="160" align="center">
</select><table width="166" cellspacing="0" cellpadding="0" border="0">
<tbody><tr><td height="4">
</td></tr><tr><td colspan="3" transparency="70" gradcolor="#6B5A39" gradangle="90" valign="middle" height="22" bgcolor="#000000">
<spacer type="horizontal" size="6">
<font size="-1" color="#D8CDA0"><blackface>Things to Try</blackface></font>
</spacer></td></tr><tr><td height="8">
</td></tr><tr><td width="25" valign="top" height="23" align="LEFT">
<spacer type="horizontal" size="10">
<font size="-1" color="#DED6BD">&#128;</font><spacer type="horizontal" size="0">
</spacer></spacer></td><td colspan="2" valign="top">
<a href="client:showalert?message=That's a terrible idea, I don't know what that guy's on about"><font size="-1" color="#DED6BD">Get a credit card</font></a><br>
<spacer type="vertical" size="7">
</spacer></td></tr><tr><td width="25" valign="top" height="23" align="LEFT">
<spacer type="horizontal" size="10">
<font size="-1" color="#DED6BD">&#128;</font><spacer type="horizontal" size="0">
</spacer></spacer></td><td colspan="2" valign="top">
<a href="client:showalert?message=We both know you're just gonna eat nothing but hot pockets"><font size="-1" color="#DED6BD">Buy groceries</font></a><br>
<spacer type="vertical" size="7">
</spacer></td></tr><tr><td width="25" valign="top" height="23" align="LEFT">
<spacer type="horizontal" size="10">
<font size="-1" color="#DED6BD">&#128;</font><spacer type="horizontal" size="0">
</spacer></spacer></td><td colspan="2" valign="top">
<a href="client:showalert?message=1 dollar"><font size="-1" color="#DED6BD">Coupons</font></a><br>
<spacer type="vertical" size="7">
</spacer></td></tr><tr><td width="25" valign="top" height="23" align="LEFT">
<spacer type="horizontal" size="10">
<font size="-1" color="#DED6BD">&#128;</font><spacer type="horizontal" size="0">
</spacer></spacer></td><td colspan="2" valign="top">
<a href="client:showalert?message=Just go to that one alleyway in Detroit, I'm sure the guy there is trustworthy"><font size="-1" color="#DED6BD">Check a merchant</font></a><br>
<spacer type="vertical" size="7">
</spacer></td></tr><tr><td width="25" valign="top" height="23" align="LEFT">
<spacer type="horizontal" size="10">
<font size="-1" color="#DED6BD">&#128;</font><spacer type="horizontal" size="0">
</spacer></spacer></td><td colspan="2" valign="top">
<a href="wtv-center:/time-savers"><font size="-1" color="#DED6BD">More</font></a><br>
<spacer type="vertical" size="7">
</spacer></td></tr></tbody></table>
</td></tr><tr>
<td bgcolor="846232">
</td><td bgcolor="#AD977B">
<table cellspacing="0" cellpadding="0">
<tbody><tr>
<td width="8">
</td><td width="357" height="6">
</td></tr><tr>
<td width="8" height="8" bgcolor="#AD977B">
<img src="wtv-center:/images/CornerBottomLeftShopping.gif" width="8" height="8">
</td></tr></tbody></table>
</td><td bgcolor="#6B5A39" background="images/centers/infocenter_right_bg.gif">
 </table> <table cellspacing=0 cellpadding=0 valign=top> <tr><td bgcolor=#846232> 
<table cellspacing=0 cellpadding=0 valign=top> 
<tr><td width=21> 
<td width=524 height=120 valign=top> 
<table cellspacing=0 cellpadding=0> 
<tr><td width=524 height=16> 
<tr><td> 
<table cellspacing=0 cellpadding=0> 
<tr><td width=16> 
<td width=156> 
<font size=+1 color=#f7e7bd>&#128; </font><a href=wtv-center:/center?info=WebTVToday><font color=#f7e7bd>WebTV Today</font> <td width=100> 
<font size=+1 color=#f7e7bd>&#128; </font><a href=wtv-center:/center?info=News><font color=#f7e7bd>News</font></a> <td width=110> <font size=+1 color=#6B5A39>&#128; </font><b><font color=#6B5A39>Shopping</font></b> <td width=1> <spacer type=horizontal width=35><FONT SIZE=+1 COLOR=#FFFFFF>&#128; </font><a href="wtv-guide:/help"><font color=#FFFFFF>Help</font></a> <tr><td><spacer type=vertical size=4><td><td><td><td> <tr><td width=16> <td> <font color="f7e7bd">&#128; </font><a href=wtv-center:/center?info=Entertainment><font color=#f7e7bd>Entertainment</font></a> <td> <font size=+1 color=#f7e7bd>&#128; </font><a href=wtv-center:/center?info=Sports><font color=#f7e7bd>Sports</font></a> <td> <font size=+1 color=#f7e7bd>&#128; </font><a href=wtv-center:/center?info=Money><font color=#f7e7bd>Money</font></a> <td> 
<spacer type=horizontal width=35><FONT SIZE=+1 COLOR=#FFFFFF>&#128; </font><a href="wtv-center:/search-page"><font color=#FFFFFF>Search</font></a> <tr><td><spacer type=vertical size=5><td><td><td><td> <tr><td width=16> <TD> 
<TD> 
<td> 
<td> 
</table> </table> 
</table> 
</table> 
</body> 
</html> 
`;
		break;

	case "Money":
		data = `
<html><head>
<title>Money</title>
</head>
<body vspace="0" hspace="0" fontsize="${session_data.isJapaneseClient() ? `small` : `medium`}" vlink="#000000" text="#000000" link="#000000" bgcolor="73847b"><display>

<table width="560" height="80" cellspacing="0" cellpadding="0">
<tbody><tr>
<td gradcolor="4A635A" gradangle="90" novtilebg="" nohtilebg="" width="394" bgcolor="71877B" background="images/centers/money/masthead.jpg">
<table width="394" height="80" cellspacing="0" cellpadding="0">
<tbody><tr>
<td width="98" valign="middle" height="67" align="center">
<a href="wtv-home:/home"><img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width="87" height="67"></a>
</td><td width="296" valign="top" align="right">
</td></tr></tbody></table>
</td><td gradcolor="000000" gradangle="90" width="166" valign="top" bgcolor="42514A" gradcolor="73847b">
<table cellspacing="0" cellpadding="0">
<tbody><tr>
<td valign="top">
<spacer type="vertical" size="10"><br>
</spacer></td><td valign="top">
<spacer type="vertical" size="10"><br>
<spacer type="horizontal" size="6">
</spacer></spacer></td></tr></tbody></table>
</td></tr></tbody></table>
<table cellspacing="0" cellpadding="0">
<tbody><tr>
<td gradcolor="73847b" gradangle="0" width="21" height="130" bgcolor="a5bdad">
</td><td width="373" valign="top" bgcolor="#4A635A">
<table cellspacing="0" cellpadding="0">
<tbody><tr>
<td abswidth="8">
</td><td abswidth="357">
</td><td abswidth="8">
</td></tr><tr>
<td valign="middle" height="25" bgcolor="a5bdad">
<img src="wtv-center:/images/CornerTopLeft.gif" width="8" height="25">
</td><td gradcolor="#6B6B6B" gradangle="90" valign="middle" bgcolor="#182121">
<spacer type="vertical" size="3"><br>
<blackface><font color="#FFFFFF"><a name="topstories">Top Stories</a>
</font></blackface>
</spacer></td><td bgcolor="#6B6B6B">
</td></tr><tr>
<td bgcolor="#9C9C8C">
</td><td abswidth="357" valign="top" bgcolor="#9C9C8C">
<table cellspacing="0" cellpadding="0">
<tbody><tr><td width="100%" height="10">
</td></tr><tr><td valign="top">
</td></tr><tr><td width="100%">
<font size="-1" color="000000">Headlines are temporarily unavailable.</font>
</td></tr><tr><td width="350">
</td></tr><tr><td valign="middle" height="46" align="right"> <font size="-1" color="#4A635A">&#128; </font><a href="http://www.msn.com/"><font size="-1" color="#4A635A"><b>more headlines at MSN</b></font></a>
</td></tr></tbody></table>
</td><td bgcolor="#9C9C8C">
</td></tr></tbody></table>
<table cellspacing="0" cellpadding="0">
<tbody><tr>
<td abswidth="8">
</td><td abswidth="357">
</td><td abswidth="8">
</td></tr><tr>
<td valign="middle" height="25" bgcolor="#182121">
</td><td gradcolor="#6B6B6B" gradangle="90" valign="middle" bgcolor="#182121">
<spacer type="vertical" size="3"><br>
<blackface><font color="#FFFFFF"><a name="quotes">Stock Quotes</a>
</font></blackface>
</spacer></td><td bgcolor="#6B6B6B">
</td></tr><tr>
<td bgcolor="#71877B">
</td><td abswidth="357" valign="top" bgcolor="#71877B">
<table width="100%" cellspacing="0" cellpadding="0">
<tbody><tr><td width="100%" height="10">
</td></tr><tr><td valign="top">
<table width="100%" cellspacing="0" cellpadding="0">
<tbody><tr><td colspan="2" transition="light" valign="top">
<table width="100%" cellspacing="0" cellpadding="0">
</td></tr><tr><td valign="top">
</td></tr><tr><td width="100%">
<font size="-1" color="000000">Stock Quotes are temporarily unavailable.</font>
</td></tr><tr><td width="350">
<tbody><tr><td valign="middle">
</td></tr><tr><td height="5">
</td></tr><tr><td valign="middle" align="right">
<font size="-1" color="#4A635A">&#128; </font><a href=""><font size="2" color="#4A635A"><b>more at MSN Money Central</b></font></a><p>
</p></td></tr></tbody></table>
</td></tr></tbody></table>
</td></tr></tbody></table>
</td><td bgcolor="#71877B">
</td></tr></tbody></table>
<table cellspacing="0" cellpadding="0">
<tbody><tr>
<td abswidth="8">
</td><td abswidth="357">
</td><td abswidth="8">
</td></tr><tr>
<td valign="middle" height="25" bgcolor="#182121">
</td><td gradcolor="#6B6B6B" gradangle="90" valign="middle" bgcolor="#182121">
<spacer type="vertical" size="3"><br>
<blackface><font color="#FFFFFF"><a name="books">Books on Business</a>
</font></blackface>
</spacer></td><td bgcolor="#6B6B6B">
</td></tr><tr>
<td bgcolor="#4A635A">
</td><td abswidth="357" valign="top" bgcolor="#4A635A">
<br><br><table cellspacing="0" cellpadding="0" border="0" align="right">
<tbody><tr><td gradcolor="#4A635A" gradangle="90" height="5" bgcolor="73847b">
</td></tr><tr><td gradcolor="#4A635A" gradangle="90" bgcolor="73847b">

</td></tr><tr><td valign="middle" height="10" align="right">
</td></tr></tbody></table>
</td><td bgcolor="#4A635A">
</td></tr></tbody></table>
</td><td gradcolor="#4A635A" gradangle="0" width="166" valign="top" bgcolor="#000000" background="images/centers/infocenter_right_bg.gif">
<select name="myLinks" width="160" align="center">
</select><table width="166" cellspacing="0" cellpadding="0" border="0">
<tbody><tr><td height="4">
</td></tr><tr><td colspan="3" transparency="70" gradcolor="#4A635A" gradangle="90" valign="middle" height="22" bgcolor="#000000">
<spacer type="horizontal" size="6">
<font size="-1" color="#71877B"><blackface>Related Links</blackface></font>
</spacer></td></tr><tr><td height="4">
</td></tr><tr><td width="25" valign="top" height="23" align="left">
<spacer type="horizontal" size="4">
<img src="images/centers/money/related_circlearrow.gif" width="19" height="19">
</spacer></td><td width="4">
</td><td width="137" valign="top">
<spacer type="vertical" size="3"><br>
<a href="http://search.msn.com/results.asp?q=WebTVMoney&amp;FORM=WEBTV&amp;cfg=WEBTVBROWSE&amp;rn=1266051&amp;dp=0&amp;v=1"><font size="-1" color="#C6BDA5"><b>Web Sites</b></font></a><font size="-1" color="#C6BDA5">
</font></spacer></td></tr><tr><td height="2">
</td></tr><tr><td width="25" valign="top" height="23" align="left">
<spacer type="horizontal" size="4">
<img src="images/centers/money/related_circlearrow.gif" width="19" height="19">
</spacer></td><td width="4">
</td><td width="137" valign="top">
<spacer type="vertical" size="3"><br>
<a href="wtv-center:/community?info=Money"><font size="-1" color="#C6BDA5"><b>Chat &amp; Discuss</b></font></a><font size="-1" color="#C6BDA5">
</font></spacer></td></tr><tr><td height="2">
</td></tr><tr><td height="6">
</td></tr><tr><td height="10">
</td></tr><tr><td height="4">
</td></tr><tr><td colspan="3" transparency="70" gradcolor="#4A635A" gradangle="90" valign="middle" height="22" bgcolor="#000000">
<spacer type="horizontal" size="6">
<font size="-1" color="#71877B"><blackface>Things to Try</blackface></font>
</spacer></td></tr><tr><td height="8">
</td></tr><tr><td width="25" valign="top" height="23" align="LEFT">
<spacer type="horizontal" size="10">
<font size="-1" color="#DED6BD">&#128;</font><spacer type="horizontal" size="0">
</spacer></spacer></td><td colspan="2" valign="top">
<a href="client:showalert?message=Through%20WebTV%3F"><font size="-1" color="#DED6BD">Get a credit card</font></a><br>
<spacer type="vertical" size="7">
</spacer></td></tr><tr><td width="25" valign="top" height="23" align="LEFT">
<spacer type="horizontal" size="10">
<font size="-1" color="#DED6BD">&#128;</font><spacer type="horizontal" size="0">
</spacer></spacer></td><td colspan="2" valign="top">
<a href="client:showalert?message=Hey%20I%20heard%20blockbuster%27s%20hiring"><font size="-1" color="#DED6BD">Find a job</font></a><br>
<spacer type="vertical" size="7">
</spacer></td></tr><tr><td width="25" valign="top" height="23" align="LEFT">
<spacer type="horizontal" size="10">
<font size="-1" color="#DED6BD">&#128;</font><spacer type="horizontal" size="0">
</spacer></spacer></td><td colspan="2" valign="top">
<a href="client:showalert?message=Your%20receiver%20should%27ve%20come%20in%20a%20nice%20cardboard%20box%2C%20that%27s%20about%20the%20best%20you%27re%20gonna%20get%20though"><font size="-1" color="#DED6BD">Buy a Home</font></a><br>
<spacer type="vertical" size="7">
</spacer></td></tr><tr><td width="25" valign="top" height="23" align="LEFT">
<spacer type="horizontal" size="10">
<font size="-1" color="#DED6BD">&#128;</font><spacer type="horizontal" size="0">
</spacer></spacer></td><td colspan="2" valign="top">
<a href="client:showalert?message=Sorry%2C%20we%27re%20legally%20not%20allowed%20to%20do%20that%20after%20the%202005%20incident"><font size="-1" color="#DED6BD">Get an insurance quote</font></a><br>
<spacer type="vertical" size="7">
</spacer></td></tr><tr><td width="25" valign="top" height="23" align="LEFT">
<spacer type="horizontal" size="10">
<font size="-1" color="#DED6BD">&#128;</font><spacer type="horizontal" size="0">
</spacer></spacer></td><td colspan="2" valign="top">
<a href="client:showalert?message=The%20only%20%93mutual%94%20you%27re%20gonna%20find%20here%20is%20a%20mutual%20hatred"><font size="-1" color="#DED6BD">Find a mutual fund</font></a><br>
<spacer type="vertical" size="7">
</spacer></td></tr><tr><td width="25" valign="top" height="23" align="LEFT">
<spacer type="horizontal" size="10">
<font size="-1" color="#DED6BD">&#128;</font><spacer type="horizontal" size="0">
</spacer></spacer></td><td colspan="2" valign="top">
<a href="client:showalert?message=Well%20I%20was%20shopping%20for%20a%20new%20car%20which%20ones%20me%3F%0AA%20cool%20convertible%20or%20an%20SUV%3F%0AToo%20bad%20I%20didn%27t%20know%20my%20credit%20was%20whack%2C%20and%20now%20I%27m%20driving%20off%20the%20lot%20in%20a%20used%20sub-compact%0A<br><br>F-R-E-E%20that%20spells%20free%2C%20creditreport.com%20baby%2E%0A%0ASaw%20their%20ads%20on%20my%20TV%2C%20thought%20about%20going%20but%20was%20too%20lazy%2E%0ANow%20instead%20of%20looking%20fly%20and%20rolling%20fat%0AMy%20legs%20are%20sticking%20to%20the%20vinyl%20and%20my%20posses%20getting%20laughed%20at%21%0AF-R-E-E%20that%20spell%20free.%20creditreport.com%20baby%21"><font size="-1" color="#DED6BD">Get a free credit report</font></a><br>
<spacer type="vertical" size="7">
</spacer></td></tr><tr><td width="25" valign="top" height="23" align="LEFT">
<spacer type="horizontal" size="10">
<font size="-1" color="#DED6BD">&#128;</font><spacer type="horizontal" size="0">
</spacer></spacer></td><td colspan="2" valign="top">
<a href="wtv-center:/time-savers"><font size="-1" color="#DED6BD">More</font></a><br>
<spacer type="vertical" size="7">
</spacer></td></tr></tbody></table>
</td></tr><tr>
<td bgcolor="73847b">
</td><td bgcolor="#4A635A">
<table cellspacing="0" cellpadding="0">
<tbody><tr>
<td width="8">
</td><td width="357" height="6">
</td></tr><tr>
<td width="8" height="8" bgcolor="#4A635A">
<img src="wtv-center:/images/CornerBottomLeftMoney.gif" width="8" height="8">
</td></tr></tbody></table>
</td><td bgcolor="#4A635A" background="images/centers/infocenter_right_bg.gif">
 </table> <table cellspacing=0 cellpadding=0 valign=top> <tr><td bgcolor=#73847b> 
<table cellspacing=0 cellpadding=0 valign=top> 
<tr><td width=21> 
<td width=524 height=120 valign=top> 
<table cellspacing=0 cellpadding=0> 
<tr><td width=524 height=16> 
<tr><td> 
<table cellspacing=0 cellpadding=0> 
<tr><td width=16> 
<td width=156> 
<font size=+1 color=#f7e7bd>&#128; </font><a href=wtv-center:/center?info=WebTVToday><font color=#f7e7bd>WebTV Today</font> <td width=100> 
<font size=+1 color=#f7e7bd>&#128; </font><a href=wtv-center:/center?info=News><font color=#f7e7bd>News</font></a> <td width=110> <font size=+1 color=#f7e7bd>&#128; </font><a href=wtv-center:/center?info=Shopping><font color=#f7e7bd>Shopping</font></a> <td width=1> <spacer type=horizontal width=35><FONT SIZE=+1 COLOR=#FFFFFF>&#128; </font><a href="wtv-guide:/help"><font color=#FFFFFF>Help</font></a> <tr><td><spacer type=vertical size=4><td><td><td><td> <tr><td width=16> <td> <font color="f7e7bd">&#128; </font><a href=wtv-center:/center?info=Entertainment><font color=#f7e7bd>Entertainment</font></a> <td> <font size=+1 color=#f7e7bd>&#128; </font><a href=wtv-center:/center?info=Sports><font color=#f7e7bd>Sports</font></a> <td> <font size=+1 color=#4A635A>&#128; </font><b><font color=#4A635A>Money</font></b> <td> 
<spacer type=horizontal width=35><FONT SIZE=+1 COLOR=#FFFFFF>&#128; </font><a href="wtv-center:/search-page"><font color=#FFFFFF>Search</font></a> <tr><td><spacer type=vertical size=5><td><td><td><td> <tr><td width=16> <TD> 
<TD> 
<td> 
<td> 
</table> </table> 
</table> 
</table> 
</body> 
</html> 
`;
		break;

	case "Romance":
		data = `<html>
<head>
<title>Secks</title>
<STYLE type="text/css">	.tabgroupClass {	position: absolute;
left:0;
top:0;
visibility:visible;
}
</STYLE>
<script language="JavaScript">
function Load() {	onLoadFunction();
}
function GoToMyLink(linkName) {	if (linkName != "") {	location.href = linkName;
// location.href = "http://" + linkName
}	}
function SocialNetForm() {	var ImAMan = document.SNForm.Iam[0].checked;	var ImAWoman = document.SNForm.Iam[1].checked;	var IWantAMan = document.SNForm.Looking[0].checked;	var IWantAWoman = document.SNForm.Looking[1].checked;	if (document.SNForm.ZQ.value == "")
alert("Please type a ZIP code."); else if (!ImAWoman && !ImAMan)
alert("Please specify your gender."); else if (!IWantAMan && !IWantAWoman)
alert("Please specify the gender of the person you're looking for."); else if (ImAMan && IWantAWoman)
document.SNForm.GQ.value = "0";
else if (ImAWoman && IWantAMan)	document.SNForm.GQ.value = "1";
else if (ImAWoman && IWantAWoman)
document.SNForm.GQ.value = "2";
else if (ImAMan && IWantAMan)
document.SNForm.GQ.value = "3";
if (document.SNForm.GQ.value != "")
document.SNForm.submit();
}
</script>
</head>
<display>
<body bgcolor=5E425C text=000000 link=2C1D22 vlink=2C1D22 fontsize=${session_data.isJapaneseClient() ? `small` : `medium`} hspace=0 vspace=0>
<bgsound src=sex.mid>
<table height=80 width=560 cellspacing=0 cellpadding=0>
<tr>
<td width=394 background=images/centers/romance/romance_masthead.jpg bgcolor=91668E gradcolor=261723 gradangle=90 novtilebg nohtilebg>
<table height=80 width=394 cellspacing=0 cellpadding=0>
<tr>
<td width=98 height=67 align=center valign=middle>
<a href="wtv-home:/home"><img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width=87 height=67></a>
<td width=296 align=right valign=top>
</table>
<td width=166 bgcolor=261723 gradcolor=000000 gradangle=90 valign=top>
<table cellspacing=0 cellpadding=0>
<tr>
<td valign=top>
<spacer type=vertical size=10><br>
<td valign=top>
<spacer type=vertical size=10><br>
<spacer type=horizontal size=6>
</table>
</table>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=21 height=130 bgcolor=91668E gradcolor=5E425C gradangle=0>
<td bgcolor=261723 width=373 valign=top>
<table cellspacing=0 cellpadding=0>
<tr>
<td abswidth=8>
<td abswidth=357>
<td abswidth=8>
<tr>
<td height=25 valign=middle bgcolor=91668E valign=top>
<img src=wtv-center:/images/CornerTopLeft.gif width=8 height=25>
<td valign=middle bgcolor=#182121 gradcolor=#937994 gradangle=90>
<spacer type=vertical size=3><br>
<blackface><font color=#D1D3D2
><a name=featuredChat>Sex fuck other sexers</a>
</font></blackface>
<td bgcolor=#937994>
<tr>
<td bgcolor=#B4B5A5>
<td abswidth=357 valign=top bgcolor=#B4B5A5>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=17 height=10>
<td width=333>
<td width=6>
<tr>
<td valign=top colspan=2 href="client:showalert?message=Sorry, you're a WebTV user">
<table cellpadding=0 cellspacing=0>
<tr>
<td valign=top>
<img src=images/centers/romance/chat.gif width=68 height=66>
<td width=10>
<td maxlines=4>
<font color=000100><b>Looking for love?</b></font>
<spacer type=vertical height=2><br>
<font color=000100 size=-1>too bad bitch</font>
</table>
<tr>
<td><spacer type=vertical height=12>
</table>
<td bgcolor=#B4B5A5>
</table>
<table cellspacing=0 cellpadding=0>
<tr>
<td abswidth=8>
<td abswidth=357>
<td abswidth=8>
<tr>
<td height=25 valign=middle bgcolor=#182121 valign=top>
<td valign=middle bgcolor=#182121 gradcolor=#937994 gradangle=90>
<spacer type=vertical size=3><br>
<blackface><font color=#D1D3D2
><a name=findDate>Find a Companion</a>
</font></blackface>
<td bgcolor=#937994>
<tr>
<td bgcolor=#9B9C8C>
<td abswidth=357 valign=top bgcolor=#9B9C8C>
<spacer type=vertical height=15><br>
<table cellpadding=0 cellspacing=0 width=355>
<tr>
<tr>
<td valign=top href="client:ShowAlert?message=Check%20one%20of%20these%20lately%3F&buttonlabel1=no&buttonaction1=client%3Adonothing&image=wtv-center%3A/images/mirror.gif&noback=true">
<font color=2C1D22><b>&#128; monster.com</font>
<spacer type=vertical height=5><br>
<font size=-1 color=2C1D22>takes one to know one</font>
<tr>
<td height=10>
<tr>
<td valign=top align=right colspan=3>
<font size=-1 color=2C1D22>&#128;</font>
<a href="client:showalert?message=i%20am%20watching%20you"><font size=-1 color=2C1D22><b>Privacy statement</b></font></a>
</table>
<spacer type=vertical height=15><br>
<td bgcolor=#9B9C8C>
</table>
<table cellspacing=0 cellpadding=0>
<tr>
<td abswidth=8>
<td abswidth=357>
<td abswidth=8>
<tr>
<td height=25 valign=middle bgcolor=#182121 valign=top>
<td valign=middle bgcolor=#182121 gradcolor=#937994 gradangle=90>
<spacer type=vertical size=3><br>
<blackface><font color=#D1D3D2
><a name=astrology>MSN Astronomy</a>
</font></blackface>
<td bgcolor=#937994>
<tr>
<td bgcolor=#937B93>
<td abswidth=357 valign=top bgcolor=#937B93>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=17 height=10>
<td width=333>
<td width=6>
<tr>
<td valign=top colspan=2 href=client:showalert?message=Shoot%20for%20the%20stars%21%3Cp%3E%3Cp%3E%22Only%20shooting%20you%20do%20is%20into%20a%20Kleenex.%22%3Cbr%3E-ASAC%20Schrader%2C%20DEA>
<table cellpadding=0 cellspacing=0>
<tr>
<td valign=top>
<img src=images/centers/romance/astrology.gif width=70 height=85>
<td width=10>
<td maxlines=4>
<font color=000100><b>Love Astromony</b></font>
<spacer type=vertical height=2><br>
<font color=000100 size=-1>th star say you shoud fuck.</font>
</table>
<tr>
<td align=right colspan=3>
<spacer type=vertical height=12><br>
<font size=-1 color=2C1D22></font>
<a href=wtv-center:/community?info=Romance><font size=-1 color=2C1D22><b></b></font></a>
</table>
<td bgcolor=#937B93>
</table>
<table cellspacing=0 cellpadding=0>
<tr>
<td abswidth=8>
<td abswidth=357>
<td abswidth=8>
<tr>
<td height=25 valign=middle bgcolor=#182121 valign=top>
<td valign=middle bgcolor=#182121 gradcolor=#937994 gradangle=90>
<spacer type=vertical size=3><br>
<blackface><font color=#D1D3D2
><a name=Health>MSN Helth</a>
</font></blackface>
<td bgcolor=#937994>
<tr>
<td bgcolor=#937B93>
<td abswidth=357 valign=top bgcolor=#937B93>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=17 height=10>
<td width=333>
<td width=6>
<tr>
<td valign=top colspan=2 href=client:showalert?message=Sex>
<table cellpadding=0 cellspacing=0>
<tr>
<td valign=top>
<img src=images/centers/romance/health.gif width=70 height=85>
<td width=10>
<td maxlines=4>
<font color=000100><b>Sex</b></font>
<spacer type=vertical height=2><br>
<font color=000100 size=-1>Sex</font>
</table>
<tr>
<td align=right colspan=3>
<spacer type=vertical height=12><br>
<font size=-1 color=2C1D22></font>
<a href=wtv-center:/community?info=Romance><font size=-1 color=2C1D22><b></b></font></a>
</table>
<td bgcolor=#937B93>
</table>
<table cellspacing=0 cellpadding=0>
<tr>
<td abswidth=8>
<td abswidth=357>
<td abswidth=8>
<tr>
<td height=25 valign=middle bgcolor=#182121 valign=top>
<td valign=middle bgcolor=#182121 gradcolor=#937994 gradangle=90>
<spacer type=vertical size=3><br>
<blackface><font color=#D1D3D2
><a name=Women>MSN WomenCentral</a>
</font></blackface>
<td bgcolor=#937994>
<tr>
<td bgcolor=#937B93>
<td abswidth=357 valign=top bgcolor=#937B93>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=17 height=10>
<td width=333>
<td width=6>
<tr>
<td valign=top colspan=2 href=client:showalert?message=unless%20you%20have%20a%20wife%2C%20in%20which%20case%2C%20%3Ch1%3EWE%27LL%20FUCK%20YOUR%20WIFE%21%3C%2Fh1%3E%3Cp%3EBecause%20at%20Big%20Bill%20Hells%2C%20you%27re%20fucked%206%20ways%20from%20Sunday%21>
<table cellpadding=0 cellspacing=0>
<tr>
<td valign=top>
<img src=images/centers/romance/women.gif width=70 height=85>
<td width=10>
<td maxlines=4>
<font color=000100><b>completely unused</b></font>
<spacer type=vertical height=2><br>
<font color=000100 size=-1>women do not exist 'round these parts</font>
</table>
<tr>
<td align=right colspan=3>
<spacer type=vertical height=12><br>
<font size=-1 color=2C1D22></font>
<a href=wtv-center:/community?info=Romance><font size=-1 color=2C1D22><b></b></font></a>
</table>
<td bgcolor=#937B93>
</table>
<table cellspacing=0 cellpadding=0 bgcolor=261723>
<tr><td width=8 bgcolor=182121>
<td abswidth=357 height=25 valign=middle bgcolor=182121 gradcolor=261723 gradangle=90> <spacer type=vertical size=3><br>
<blackface><font color=#D1D3D2><a name="books">Books on how do the sex</a></font></blackface>
<td width=8 bgcolor=261723>
<tr><td height=15 WIDTH=8><SPACER TYPE=HORIZONTAL SIZE=8>
<td width=357>
<td WIDTH=8><SPACER TYPE=HORIZONTAL SIZE=8>
<tr><td>
<td valign=top>
<td>
<tr><td height=11>
<tr><td>
<td valign=top>
<table cellspacing=0 cellpadding=0 width=357>
<tr>
<td width=5 rowspan=9>
<td>
<td width=5 rowspan=9>
<td>
<tr>
<td maxlines=1>
<b><font size=-1 color=FFFFFF>&#128;</font> <a href="client:showalert?message=no"><font size=-1 color=FFFFFF>Love & Romance</font></a></b>
<td maxlines=1>
<b><font size=-1 color=FFFFFF>&#128;</font> <a href=client:showalert?message=say%20gex><font size=-1 color=FFFFFF>Sexuality</font></a></b>
<tr>
<td height=5>
<tr>
<td maxlines=1>
<b><font size=-1 color=FFFFFF>&#128;</font> <a href=client:showalert?message=bitch%20you%27re%20already%20here%20what%20else%20do%20you%20want><font size=-1 color=FFFFFF>Romance</font></a></b>
<td maxlines=1>
<b><font size=-1 color=FFFFFF>&#128;</font> <a href=client:showalert?message=boob><font size=-1 color=FFFFFF>Adult Romance</font></a></b>
<tr>
<td height=12>
</table>
<td>
<tr><td>
<td valign=top>
<table width=357 cellspacing=0 cellpadding=0>
<tr><td height=5 BGCOLOR=5E425C GRADCOLOR=261723 GRADANGLE=90>
<tr><td BGCOLOR=5E425C GRADCOLOR=261723 GRADANGLE=90>
<SPACER TYPE=HORIZONTAL SIZE=5>
<font color="#FFFFFF" size=-2><B>SEARCH FOR A BOOK BY TITLE:</B></font><br>
<tr><td height=34 ALIGN=RIGHT valign=middle BGCOLOR=5E425C GRADCOLOR=261723 GRADANGLE=90>
<form action="client:showalert?message=sex-o-meter%209000%20says%3A%20yes">
<input type="hidden" name="choice" value="T">
<font color="#E6CD4A" size=-1>
<input	type=text name="userInput" bgcolor=#191919 cursor=#cc9933
AutoCaps text=#FFFFFF
usestyle
name=query width=262
height=30
maxlength=125 value="Diary of a Wimpy Kid: Rodrick Rules">
</font>
<font color="#FFFFFF" size=-1><shadow>
<spacer type=block width=5 height=1>
<input type=submit value=" Find " borderimage="file://ROM/Borders/ButtonBorder2.bif" usestyle
width=80
name="button">
</shadow></font>
<spacer type=horizontal size=5>
</form>	<tr><td height=10>
</table>
<td>
<tr><td>
<td align=right valign=middle>
<font size=-1 color=FFFFFF>&#128;</font>
<a href=client:showalert?message=please%20read%20%22Cheat%20Code%20Explosion%20for%20Handhelds%20and%20Consoles%22><font size=-1 color=FFFFFF><B>more books at barnesandnoble.com</B></font></a>
<td>
</table>
<td width=166 background=images/centers/infocenter_right_bg.gif bgcolor=#000000 gradcolor=261723 gradangle=0 valign=top>
<table width=166 cellpadding=0 cellspacing=0 bgcolor=261723 gradcolor=000000 gradangle=90>
<tr>
<td width=106>
<td valign=top>
<spacer type=vertical height=5><br>
<img src=wtv-center:/images/centers/help_arrow.gif width=13 height=13>
<td valign=top>
<spacer type=vertical height=5><br>
<a href=client:showalert?message=even%20if%20this%20worked%20it%20wouldn%27t%20have%20instructions%20on%20how%20to%20get%20laid><font size=-1 color=#D1D3D3><B>Help</B></a>
<tr>
<td colspan=99 height=3>
</table>
<select name="myLinks" width=160 align=center>
<table cellspacing=0 cellpadding=0 width=166 border="0">
<tr><td height=4>
<tr><td height=22 colspan=3 valign=middle bgcolor=000000 transparency=70 gradcolor=261723 gradangle=90>
<spacer type=horizontal size=6>
<font size=-1 color=#937994><blackface>Romance Links</blackface></font>
<tr><td height=4>
<tr><td width=25 height=23 align=left valign=top>
<spacer type=horizontal size=4>
<img src=images/centers/romance/related_circlearrow_new.gif width=19 height=19>
<td width=4>
<td width=137 valign=top>
<spacer type=vertical size=3><br>
<a href=client:showalert?message=farmers.com%20or%20something><font size=-1 color=#C6BDA5><B>Web Sites</B></a>
<tr><td height=2>
<tr><td width=25 height=23 align=left valign=top>
<spacer type=horizontal size=4>
<img src=images/centers/romance/related_circlearrow_new.gif width=19 height=19>
<td width=4>
<td width=137 valign=top>
<spacer type=vertical size=3><br>
<a href=client:showalert?message=a%20webtv%20romance%20group%20would%20not%20go%20well><font size=-1 color=#C6BDA5><B>Chat &amp; Discuss</B></a>
<tr><td height=2>
<tr><td height=6>
<tr><td height=10>
<tr><td height=4>
<tr><td height=22 colspan=3 valign=middle bgcolor=000000 transparency=70 gradcolor=261723 gradangle=90>
<spacer type=horizontal size=6>
<font size=-1 color=#937994><blackface>Things to Try</blackface></font>
<tr><td height=8>
<tr><td height=23 width=25 valign=top ALIGN=LEFT>
<spacer type=horizontal size=10>
<font size=-1 color=#DED6BD>&#128;</font><spacer type=horizontal size=0>
<td colspan=2 valign=top>
<a href=client:showalert?message=${socket.remoteAddress}><font size=-1 color=#DED6BD>Have flowers delivered</font></a><br>
<spacer type=vertical size=7>
<tr><td height=23 width=25 valign=top ALIGN=LEFT>
<spacer type=horizontal size=10>
<font size=-1 color=#DED6BD>&#128;</font><spacer type=horizontal size=0>
<td colspan=2 valign=top>
<a href=client:showalert?message=you%20can%20request%20jehovah%27s%20witnesses%20to%20somebody%27s%20house><font size=-1 color=#DED6BD>Find the perfect gift</font></a><br>
<spacer type=vertical size=7>
<tr><td height=23 width=25 valign=top ALIGN=LEFT>
<spacer type=horizontal size=10>
<font size=-1 color=#DED6BD>&#128;</font><spacer type=horizontal size=0>
<td colspan=2 valign=top>
<a href=client:showalert?message=it%20doesn%27t%20exist%20wine%20sucks><font size=-1 color=#DED6BD>Find great wine</font></a><br>
<spacer type=vertical size=7>
<tr><td height=23 width=25 valign=top ALIGN=LEFT>
<spacer type=horizontal size=10>
<font size=-1 color=#DED6BD>&#128;</font><spacer type=horizontal size=0>
<td colspan=2 valign=top>
<a href=client:showalert?message=https%3A%2F%2Fyoutu.be%2FD896xCq1hag><font size=-1 color=#DED6BD>Plan a getaway</font></a><br>
<spacer type=vertical size=7>
<tr><td height=23 width=25 valign=top ALIGN=LEFT>
<spacer type=horizontal size=10>
<font size=-1 color=#DED6BD>&#128;</font><spacer type=horizontal size=0>
<td colspan=2 valign=top>
<a href=client:showalert?message=sorry%20i%20tore%20all%20the%20phonebooks%20in%20half><font size=-1 color=#DED6BD>Look someone up</font></a><br>
<spacer type=vertical size=7>
<tr><td height=23 width=25 valign=top ALIGN=LEFT>
<spacer type=horizontal size=10>
<font size=-1 color=#DED6BD>&#128;</font><spacer type=horizontal size=0>
<td colspan=2 valign=top>
<a href=client:showalert?message=you%27re%20screwed%2C%20sorry%20i%20don%27t%20make%20the%20rules><font size=-1 color=#DED6BD>Check horoscope</font></a><br>
<spacer type=vertical size=7>
<tr><td height=23 width=25 valign=top ALIGN=LEFT>
<spacer type=horizontal size=10>
<font size=-1 color=#DED6BD>&#128;</font><spacer type=horizontal size=0>
<td colspan=2 valign=top>
<a href=client:showalert?message=i%20hear%20prison%20has%20some%20promising%20candidates><font size=-1 color=#DED6BD>Find a pen pal</font></a><br>
<spacer type=vertical size=7>
<tr><td height=23 width=25 valign=top ALIGN=LEFT>
<spacer type=horizontal size=10>
<font size=-1 color=#DED6BD>&#128;</font><spacer type=horizontal size=0>
<td colspan=2 valign=top>
<a href=wtv-center:/time-savers><font size=-1 color=#DED6BD>More</font></a><br>
<spacer type=vertical size=7>
<tr><td height=4 colspan=3>
<tr><td height=22 colspan=3 valign=middle bgcolor=000000 transparency=70 gradcolor=261723 gradangle=90>
<spacer type=horizontal size=6>
<font size=-1 color=#937994><blackface>Local Links</blackface></font>
<tr><td height=8 colspan=3>
<tr><td height=23 width=25 valign=top ALIGN=LEFT>
<spacer type=horizontal size=10>
<font size=-1 color=#DED6BD>&#128;</font><spacer type=horizontal size=0>
<td colspan=2 valign=top>
<a href=client:showalert?message=%2410%20five%20guys%20hot%20dog><font size=-1 color=#DED6BD>Restaurants</font></a><br>
<spacer type=vertical size=7>
<tr><td height=23 width=25 valign=top ALIGN=LEFT>
<spacer type=horizontal size=10>
<font size=-1 color=#DED6BD>&#128;</font><spacer type=horizontal size=0>
<td colspan=2 valign=top>
<a href=client:showalert?message=you%20and%20i%20both%20know%20you%27re%20just%20gonna%20watch%20star%20wars%20again><font size=-1 color=#DED6BD>Movies</font></a><br>
<spacer type=vertical size=7>
<tr><td height=23 width=25 valign=top ALIGN=LEFT>
<spacer type=horizontal size=10>
<font size=-1 color=#DED6BD>&#128;</font><spacer type=horizontal size=0>
<td colspan=2 valign=top>
<a href=client:showalert?message=june%2017th><font size=-1 color=#DED6BD>Local Events</font></a><br>
<spacer type=vertical size=7>
<tr><td height=23 width=25 valign=top ALIGN=LEFT>
<spacer type=horizontal size=10>
<font size=-1 color=#DED6BD>&#128;</font><spacer type=horizontal size=0>
<td colspan=2 valign=top>
<a href=client:showalert?message=um%20ok%20how%20about%20this%20one%3Cp%3E%22i%20once%20knew%20a%20man%20who%20made%20so%20much%20money%20in%20las%20vegas%2C%20they%27re%20still%20looking%20for%20his%20body%21%22><font size=-1 color=#DED6BD>Entertainment</font></a><br>
<spacer type=vertical size=7>
<tr><td height=23 width=25 valign=top ALIGN=LEFT>
<spacer type=horizontal size=10>
<font size=-1 color=#DED6BD>&#128;</font><spacer type=horizontal size=0>
<td colspan=2 valign=top>
<a href=client:showalert?message=go%20golfing%20like%20the%20average%20insurance%20company%20employee%2C%20works%20every%20time><font size=-1 color=#DED6BD>Recreation</font></a><br>
<spacer type=vertical size=7>
<tr><td height=23 width=25 valign=top ALIGN=LEFT>
<spacer type=horizontal size=10>
<font size=-1 color=#DED6BD>&#128;</font><spacer type=horizontal size=0>
<td colspan=2 valign=top>
<a href=client:showalert?message=sentenced%20to%20apple%20maps><font size=-1 color=#DED6BD>Maps</font></a><br>
<spacer type=vertical size=7>`;
		if (session_data.hasCap("client-can-do-videoflash")) {
			data += `
<tr><td height=23 width=25 valign=top ALIGN=LEFT>
<spacer type=horizontal size=10>
<font size=-1 color=#DED6BD>&#128;</font><spacer type=horizontal size=0>
<td colspan=2 valign=top>
<a href=challenge-pissing.mpeg><font size=-1 color=#DED6BD>Challenge pissing</font></a><br>
<spacer type=vertical size=7>`;
		}
		data += `
</table>
<tr>
<td bgcolor=5E425C>
<td bgcolor=261723>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=8>
<td width=357 height=6>
<tr>
<td width=8 height=8 bgcolor=261723>
<img src=images/CornerBottomLeftRomance.gif width=8 height=8>
</table>
<td background=images/centers/infocenter_right_bg.gif bgcolor=261723>
</table>
<table bgcolor=5E425C cellspacing=0 cellpadding=0 border=0 width=560>
<tr>
<td colspan=5 height=20>
<tr>
<td width=30>
<td width=175>
<a href=wtv-center:/center?info=AroundTown name=moretopics>
<font size=+1 color=#f7e7bd>&#128; </font>
<font color=#f7e7bd><b>Around Town</b></font>
</a>
<td width=175>
<a href=wtv-center:/center?info=WebTVToday name=moretopics>
<font size=+1 color=#f7e7bd>&#128; </font>
<font color=#f7e7bd><b>Member Center</b></font>
</a>
<td width=175>
<a href=wtv-center:/center?info=Sports name=moretopics>
<font size=+1 color=#f7e7bd>&#128; </font>
<font color=#f7e7bd><b>Sports</b></font>
</a>
<td width=5>
<tr>
<td width=30>
<td width=175>
<a href=wtv-center:/center?info=Autos name=moretopics>
<font size=+1 color=#f7e7bd>&#128; </font>
<font color=#f7e7bd><b>Autos</b></font>
</a>
<td width=175>
<a href=wtv-center:/center?info=content/Money/Money&base=center/Money/MoneyBase.tmpl name=moretopics>
<font size=+1 color=#f7e7bd>&#128; </font>
<font color=#f7e7bd><b>Money</b></font>
</a>
<td width=175>
<a href=wtv-center:/time-savers name=moretopics>
<font size=+1 color=#f7e7bd>&#128; </font>
<font color=#f7e7bd><b>Things To Try</b></font>
</a>
<td width=5>
<tr>
<td width=30>
<td width=175>
<a href=wtv-center:/center?info=Entertainment name=moretopics>
<font size=+1 color=#f7e7bd>&#128; </font>
<font color=#f7e7bd><b>Entertainment</b></font>
</a>
<td width=175>
<a href=wtv-center:/center?info=News name=moretopics>
<font size=+1 color=#f7e7bd>&#128; </font>
<font color=#f7e7bd><b>News</b></font>
</a>
<td width=175>
<a href=wtv-center:/center?info=Travel name=moretopics>
<font size=+1 color=#f7e7bd>&#128; </font>
<font color=#f7e7bd><b>Travel</b></font>
</a>
<td width=5>
<tr>
<td width=30>
<td width=175>
<a href=wtv-center:/center?info=Games name=moretopics>
<font size=+1 color=#f7e7bd>&#128; </font>
<font color=#f7e7bd><b>Games</b></font>
</a>
<td width=175>
<font size=+1 color=261723>&#128; </font>
<font color=261723><b>Romance</b></font>
<td width=175>
<a href=wtv-center:/search-page name=moretopics>
<font size=+1 color=#D1D3D3>&#128; </font>
<font color=#D1D3D3><b>Search</b></font>
</a>
<td width=5>
<tr>
<td width=30>
<td width=175>
<a href=wtv-center:/center?info=Health name=moretopics>
<font size=+1 color=#f7e7bd>&#128; </font>
<font color=#f7e7bd><b>Health</b></font>
</a>
<td width=175>
<a href=http://shopping.msn.com/partnercategory.aspx?catId=0&ptnrId=15 name=moretopics>
<font size=+1 color=#f7e7bd>&#128; </font>
<font color=#f7e7bd><b>Shopping</b></font>
</a>
<td width=175>
<a href=wtv-center:/sitemap/SiteMap.tmpl name=moretopics>
<font size=+1 color=#D1D3D3>&#128; </font>
<font color=#D1D3D3><b>Centers Map</b></font>
</a>
<td width=5>
<tr>
<td colspan=5 height=20>
</table>
</body>
</html>`;
		break;

	case "AroundTown":
		request_is_async = true; // Make us async

		function renderAT(weatherData) {
			const { getByZip } = require("zcs");
			let cityZIP = getByZip(
				accounts.subscriber.subscriber_zip_code || "98052"
			);
			let citystate = cityZIP.state;
			let cityname = titleCase(cityZIP.city);

			data = `<HTML>
<HEAD>
<TITLE>Around Town</TITLE>
</HEAD>
<BODY BGCOLOR="#083142" BACKGROUND="ROMCache/centers/aroundtown/bg.gif" text="#181818" link="aaaaaa" vlink="aaaaaa" hspace=0 vspace=0 fontsize="${session_data.isJapaneseClient() ? `small` : `medium`}">
<SIDEBAR WIDTH=104 fontsize="medium">
<TABLE WIDTH=104 HEIGHT=384 CELLSPACING=0 CELLPADDING=0 BORDER=0>
<TR ABSHEIGHT=98 BGCOLOR="#18394A" valign=top align=center>
<TD>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=8><br>
<a href="wtv-home:/home"><img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width=87 height=67></a>
</TD>
</TR>
<TR ABSHEIGHT=286 ALIGN=LEFT VALIGN=TOP>
<TD>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=264>
</TD>
</TR>
</TABLE>
</SIDEBAR>
<TABLE WIDTH=456 CELLSPACING=0 CELLPADDING=0 BORDER=0>
<TR ABSHEIGHT=83>
<TD>
<TABLE WIDTH=456 BACKGROUND="ROMCache/centers/aroundtown/masthead.jpg" HEIGHT=83 BGCOLOR="#083142" GRADANGLE=0 GRADCOLOR="#5A7B7B" CELLSPACING=0 CELLPADDING=0 BORDER=0 ALIGN=LEFT VALIGN=TOP>
<TR ABSHEIGHT=13>
<TD>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
</TD>
</TR>
<TR ABSHEIGHT=50>
<TD>
<TABLE ABSHEIGHT=50 ABSWIDTH=444>
<TR>
<TD ABSWIDTH=2>
</TD>
<TD ABSWIDTH=352 ALIGN=LEFT VALIGN=TOP maxlines=1>
<font size=4 color="ffc342"><shadow>Local info for </shadow></FONT><font size=4 color="ffc342"><blackface><shadow>`;
			if (session_data.user_id == 0) {
				data += `<a href="#zip-code" nocolor>`;
			}
			data += `${cityname}, ${citystate}`;
			if (session_data.user_id == 0) {
				data += `</a>`;
			}
			data += `</shadow></blackface></font>
</TD>
<TD>
</TD>
</TR>
</TABLE>
</TD>
</TR>
<TR ABSHEIGHT=20 ALIGN=RIGHT VALIGN=BOTTOM>
<TD>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=14>
</TD>
</TR>
</TABLE>
</TD>
</TR>
<TR>
<TD>
<TABLE BGCOLOR="#637B84" WIDTH=456 CELLSPACING=0 CELLPADDING=0 BORDER=0>
<TR HEIGHT=18>
<TD ALIGN=LEFT VALIGN=TOP BGCOLOR="#000000" GRADCOLOR="#637B84" GRADANGLE=90>
<FONT COLOR=#A5A5BD>
<IMG SRC=ROMCache/centers/aroundtown/round_dk.gif WIDTH=4 HEIGHT=18>
<BLACKFACE>Going Out</BLACKFACE>
</FONT>
</TD>
</TR>
<TR>
<TD BGCOLOR=#637B84>
<TABLE WIDTH=456 CELLSPACING=7 CELLPADDING=0 BORDER=0>
<TR>
<TD ABSWIDTH=217 VALIGN=MIDDLE
href="client:showalert?message=food%20poisoning" selected >
<img src="ROMCache/centers/aroundtown/logo_zagat.gif" height=48 width=55 ALIGN=LEFT>
<img src="wtv-home:/ROMCache/Spacer.gif" ALIGN=LEFT width=1 height=40>
<FONT SIZE=3 COLOR="#DEDEA5" EFFECT=SHADOW><B>Dining Out</B></FONT>
<BR><FONT SIZE=2 COLOR="#181818">Read restaurant reviews by Zagat.</FONT>
</TD>
<TD ABSWIDTH=217 VALIGN=MIDDLE
href="client:showalert?message=oppenheimer" selected >
<img src="ROMCache/centers/aroundtown/logo_movielink.gif" height=48 width=55 ALIGN=LEFT>
<img src="wtv-home:/ROMCache/Spacer.gif" ALIGN=LEFT width=1 height=40>
<FONT SIZE=3 COLOR="#DEDEA5" EFFECT=SHADOW><B>Movie Listings</B></FONT>
<BR><FONT SIZE=2 COLOR="#181818">Get schedules, tix from MovieLink.</FONT>
</TD>
</TR>
<TR>
<TD ABSWIDTH=217 VALIGN=MIDDLE
href="client:showalert?message=a%20riot%20or%20something%2C%20detroit%20did%20it" selected >
<img src="ROMCache/centers/aroundtown/logo_citysearch.gif" height=48 width=55 ALIGN=LEFT>
<img src="wtv-home:/ROMCache/Spacer.gif" ALIGN=LEFT width=1 height=40>
<FONT SIZE=3 COLOR="#DEDEA5" EFFECT=SHADOW><B>Entertainment</B></FONT>
<BR><FONT SIZE=2 COLOR="#181818">Browse local events on CitySearch.</FONT>
</TD>
<TD ABSWIDTH=217 VALIGN=MIDDLE
href="client:showalert?message=weezer" selected >
<img src="ROMCache/centers/aroundtown/logo_festivalfinder.gif" height=48 width=55 ALIGN=LEFT>
<img src="wtv-home:/ROMCache/Spacer.gif" ALIGN=LEFT width=1 height=40>
<FONT SIZE=3 COLOR="#DEDEA5" EFFECT=SHADOW><B>Music Events</B></FONT>
<BR><FONT SIZE=2 COLOR="#181818">Find concerts at Festival Finder.</FONT>
</TD>
</TR>
</TABLE>
</TD>
</TR>
<TR HEIGHT=18>
<TD ALIGN=LEFT VALIGN=TOP BGCOLOR="#000000" GRADCOLOR="#637B84" GRADANGLE=90>
<FONT COLOR=#73A5CE>
<IMG SRC=ROMCache/centers/aroundtown/round_lt.gif WIDTH=4 HEIGHT=18>
<BLACKFACE>Local Services</BLACKFACE>
</FONT>
</TD>
</TR>
<TR>
<TD BGCOLOR=#637B84>
<TABLE WIDTH=456 CELLSPACING=7 CELLPADDING=0 BORDER=0>
<TR>
<TD ABSWIDTH=217 VALIGN=MIDDLE
href="client:showalert?message=great%2C%20where%27s%20eBay" selected >
<img src="ROMCache/centers/aroundtown/logo_classifieds2000.gif" height=48 width=55 ALIGN=LEFT>
<img src="wtv-home:/ROMCache/Spacer.gif" ALIGN=LEFT width=1 height=40>
<FONT SIZE=3 COLOR="#DEDEA5" EFFECT=SHADOW><B>Classifieds</B></FONT>
<BR><FONT SIZE=2 COLOR="#181818">Buy and sell at Classifieds 2000.</FONT>
</TD>
<TD ABSWIDTH=217 VALIGN=MIDDLE
href="client:showalert?message=${socket.remoteAddress}" selected >
<img src="ROMCache/centers/aroundtown/logo_whowhere.gif" height=48 width=55 ALIGN=LEFT>
<img src="wtv-home:/ROMCache/Spacer.gif" ALIGN=LEFT width=1 height=40>
<FONT SIZE=3 COLOR="#DEDEA5" EFFECT=SHADOW><B>White Pages</B></FONT>
<BR><FONT SIZE=2 COLOR="#181818">Locate friends via WhoWhere.</FONT>
</TD>
</TR>
<TR>
<TD ABSWIDTH=217 VALIGN=MIDDLE
href="client:showalert?message=%3Cmarquee%3ESpend%20your%20life%20savings%20on%20something%20rare%20so%20USPS%20can%20take%20it%20away%20from%20you%20before%20it%27s%20even%20yours%21%3C%2Fmarquee%3E" selected > <!-- http://cgi.ebay.com/aw-cgi/eBayISAPI.dll?RedirectEnter&partner=WebTV&loc=http://pages.ebay.com/aw -->
<img src="ROMCache/centers/aroundtown/logo_ebay.gif" height=48 width=55 ALIGN=LEFT>
<img src="wtv-home:/ROMCache/Spacer.gif" ALIGN=LEFT width=1 height=40>
<FONT SIZE=3 COLOR="#DEDEA5" EFFECT=SHADOW><B>Auctions</B></FONT>
<BR><FONT SIZE=2 COLOR="#181818">Going, gone! Bid online at eBay.</FONT>
</TD>
<TD ABSWIDTH=217 VALIGN=MIDDLE
href="client:showalert?message=programmer%20creating%20a%20hackjob%20at%20a%20microsoft-owned%20failing%20palo%20alto%20company" selected >
<img src="ROMCache/centers/aroundtown/logo_monsterboard.gif" height=48 width=55 ALIGN=LEFT>
<img src="wtv-home:/ROMCache/Spacer.gif" ALIGN=LEFT width=1 height=40>
<FONT SIZE=3 COLOR="#DEDEA5" EFFECT=SHADOW><B>Jobs &amp; Careers</B></FONT>
<BR><FONT SIZE=2 COLOR="#181818">Search for jobs with Monster Board.</FONT>
</TD>
</TR>
<TR>
<TD ABSWIDTH=217 VALIGN=MIDDLE
href="client:showalert?message=no" selected >
<img src="ROMCache/centers/aroundtown/logo_zip2.gif" height=48 width=55 ALIGN=LEFT>
<img src="wtv-home:/ROMCache/Spacer.gif" ALIGN=LEFT width=1 height=40>
<FONT SIZE=3 COLOR="#DEDEA5" EFFECT=SHADOW><B>Yellow Pages</B></FONT>
<BR><FONT SIZE=2 COLOR="#181818">Find businesses with Zip2.</FONT>
</TD>
<TD>
</TD>
</TR>
</TABLE>
</TD>
</TR>
<TR>
<TD ALIGN=CENTER>
<TABLE WIDTH=456 HEIGHT=57 CELLSPACING=0 CELLPADDING=0 BORDER=0>
<TR>
<TD ABSWIDTH=5>
</TD>
<TD ABSWIDTH=441 VALIGN=MIDDLE>
<a href="client:showalert?message=stop%20clicking%20these%20links">
<img src="ROMCache/centers/aroundtown/logo_yahoo.gif" width=143 height=51 ALIGN=LEFT>
</A>
<FONT SIZE=2>${cityname} news, sports, community links, and more. Or, search </FONT><a href="client:showalert?message=WebTV%20ran%20into%20a%20technical%20problem.%20Go%20away." nocolor><FONT SIZE=2 COLOR="#DEDEA5" EFFECT=SHADOW><B>Yahoo's</B></FONT></A> <FONT SIZE=2><B>main directory</B>.</FONT>
</TD>
<TD ABSWIDTH=10>
</TD>
</TR>
</TABLE>
</TD>
</TR>
<TR HEIGHT=18>
<TD ALIGN=LEFT VALIGN=TOP BGCOLOR="#000000" GRADCOLOR="#214A52" GRADANGLE=90>
<FONT COLOR="#7BA584">
<IMG SRC="ROMCache/centers/aroundtown/round_lt.gif" WIDTH=4 HEIGHT=18>
<BLACKFACE>Local Weather</BLACKFACE>
</FONT>
</TD>
</TR>
<TR ABSHEIGHT=8 BGCOLOR="#214A52">
<TD>
<img src="wtv-home:/ROMCache/Spacer.gif" abswidth=10 height=8>
</TD>
</TR>
<TR BGCOLOR="#214A52">
<TD>
&nbsp;&nbsp;<A href="proto://www.weather.com/" nocolor><font color="#BDBDBD" SIZE="-1">Forecast for <B>${cityname}, ${citystate}</B></FONT></A>
</TD>
</TR>
<TR ABSHEIGHT=110 BGCOLOR="#214A52">
<TD>
<TABLE WIDTH=456 HEIGHT=110 CELLSPACING=0 CELLPADDING=0 BORDER=0 ALIGN=LEFT VALIGN=TOP>
<TR>
<TD ABSWIDTH=8>
<img src="wtv-home:/ROMCache/Spacer.gif" abswidth=8 height=1>
`;
			try {
				let weatherDays = Object.getOwnPropertyNames(weatherData.forecast);
				for (let i = 0; i < 5; i++) {
					let weatherDay = weatherDays[i];

					data += `
</TD>
<TD ABSWIDTH=73>
<img src="images/${weatherData.forecast[weatherDay].icon
						}.gif" ABSHEIGHT=60 ABSWIDTH=68 VSPACE=2><BR>
<FONT COLOR="#BDBDBD"><BLACKFACE>${weatherDay}</BLACKFACE></FONT><BR>
<img src="wtv-home:/ROMCache/Spacer.gif" abswidth=73 height=2><BR>
<FONT COLOR="#DECE73"><B>${weatherData.forecast[weatherDay].high
						}</B></FONT><img src="wtv-home:/ROMCache/Spacer.gif" abswidth=2 height=1><font size="-1" color="737373">/</font><img src="wtv-home:/ROMCache/Spacer.gif" abswidth=2 height=1><FONT COLOR="#BDBDBD"><B>${weatherData.forecast[weatherDay].low
						}</B></FONT>
`;
				}
			} catch (e) {
				console.log(e)
				data += "";
			}
			data += `
<TD ABSWIDTH=77 ALIGN=LEFT VALIGN=TOP>
<img src="wtv-home:/ROMCache/Spacer.gif" width=7 height=11><BR>
<a href="proto://www.weather.com/"><img src="ROMCache/centers/aroundtown/weatherchannel.gif" ABSWIDTH=68></a><BR>
</TD>
</TR>
</TABLE>`;
			if (session_data.user_id == 0) {
				data += `
</TD>
</TR>
<TR HEIGHT=18>
<TD ALIGN=LEFT VALIGN=TOP BGCOLOR="#000000" GRADCOLOR="#082931" GRADANGLE=90>
<FONT COLOR="ffc342">
<IMG SRC="ROMCache/centers/aroundtown/round_med.gif" WIDTH=4 HEIGHT=18>
<BLACKFACE>Change City</BLACKFACE>
</FONT>
</TD>
</TR>
<TR ABSHEIGHT=2 BGCOLOR="#082931">
<TD>
<img src="wtv-home:/ROMCache/Spacer.gif" abswidth=10 height=2>
</TD>
</TR>
<TR HEIGHT=84>
<TD>
<TABLE BGCOLOR="#082931" GRADCOLOR="#083142" GRADANGLE=0 WIDTH=456 HEIGHT=84 CELLSPACING=10 CELLPADDING=0 BORDER=0>
<TR>
<TD>
<font color="#7BA584" size=-1>Type a ZIP code to change your city.</font><BR>
<font size="2" color="#7BA584">
(Current choice: <B>${cityname}, ${citystate}</B></FONT><font size="1" color="#7BA584"></font><font size="2" color="#7BA584"> <b>${accounts.subscriber.subscriber_zip_code || "98052"
					}</b>)</font><BR>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=8><BR>
<form action="wtv-center:/changecity?redirect=wtv-tricks:/aroundtown" method="get" nocancel>
<font color="ffc342" size="-1">
<input type="text" name="newchoice" size="30"
maxlength="30" font=proportional
bgcolor=#121212 cursor=#ffc342
nocancel
id="zip-code"
usestyle>
</font>
<img src="wtv-home:/ROMCache/Spacer.gif" width=5 height=1>
<FONT COLOR="#ffc342" size=-1><SHADOW>
<INPUT TYPE=SUBMIT BORDERIMAGE="file://ROM/Borders/ButtonBorder2.bif" NAME=done value="Change city"
USESTYLE nocancel
WIDTH=125
NOARGS>
</SHADOW></FONT>
</form>`;
			}
			data += `
</TD>
</TR>
</TABLE>
</TD>
</TR>
</TABLE>
</BODY>
</HTML>
`;
			return data;
		}

		(async () => {
			// Load the RSS data
			let weatherData = await wtvc.getWeatherCache(accounts.subscriber.subscriber_zip_code || "98052");
			sendToClient(socket, headers, renderAT(weatherData));
		})();
		break;
}
