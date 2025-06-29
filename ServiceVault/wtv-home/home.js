// TODO: holy SHIT clean this up
var minisrv_service_file = true;

var ismybirthday = false;
const date = new Date();
const birthday = session_data.getSessionData("subscriber_birthday");
const birthmonth = birthday.month.toString();
const birthdate = birthday.day.toString();
const todmonth = date.getMonth().toString();
const toddate = date.getDate().toString();

const todaydate = todmonth + toddate;
const thebirthday = birthmonth + birthdate;
var ismybirthday = todaydate == thebirthday;

const ads = wtvshared.getDynamicConfig(`ads`); //pull ads from DynamicConfig/ads.json
var randad = ads[Math.floor(Math.random() * ads.length)];
let preEtudeEnabled = true;

headers = `200 OK
Connection: Keep-Alive
wtv-expire-all: wtv-home:/splash
wtv-expire-all: wtv-flashrom:
Content-Type: text/html`;

if (session_data.getSessionData("subscriber_username"))
	if (request_headers.query.url)
		headers += "\nwtv-visit: " + request_headers.query.url;

var title;

if (ismybirthday) {
	title = "Happy Birthday, ";
	if (session_data.getSessionData("subscriber_first_name")) {
		title += `${session_data.getSessionData("subscriber_first_name")}!`;
	} else {
		title += `${session_data.getSessionData("subscriber_username")}!`;
	}
} else {
	title = "Home for " + session_data.getSessionData("subscriber_username");
}

// Old style home page globals for the clients that need them
let helpUrl = `wtv-guide:/help?topic=Index&subtopic=Main&page=1`;
let exploreUrl = `wtv-center:/sitemap/SiteMap.tmpl`;

/* ========================================================== DREAMCAST (CLASSIC) ========================================================== */

if (session_data.get("wtv-client-rom-type") == "JP-Fiji") {
	if (session_data.getSessionData("alt_home") == '1') {
		data = `<html>
		<head>
		<display hspace=0 vspace=0 fontsize=medium noscroll showwhencomplete>
		<meta http-equiv="Content-Type" content="text/html">
		<title>${title}</title>
		</head>

		<body bgcolor=13142E hspace=0 vspace=0>
		`;
			if (ismybirthday) {
				data += `<bgsound src = "sounds/happybirthday.mid"/>`;
			}
			data += `

		<sidebar width=138>
		<table cellspacing=0 cellpadding=0 bgcolor=30364D>
		<tr><td valign=top colspan=3>
		<table cellspacing=0 cellpadding=0 height=110 href="wtv-home:/Credits-Introduction" insetselection>
		<tr><td height=7>
		<tr><td width=10>
		<td colspan=2 valign=top align=center>
		<spacer type=block height=3><img src="file://ROM/Cache/WebTVLogoJewel.gif" width=127 height=98>
		</table>
		<tr><td height=2 colspan=3 bgcolor=252834>
		<spacer>
		<tr><td height=1 colspan=3>
		<spacer>
		<tr><td height=2 colspan=3 bgcolor=4D5573>
		<spacer>
		<tr><td valign=top>
		<tr><td abswidth=7>
		<td abswidth=125 height=28>
		<table cellspacing=0 cellpadding=0 href="wtv-setup:/setup">
		<tr><td height=4>
		<tr><td valign=middle>
		<table cellspacing=0 cellpadding=0>
		<tr><td valign=middle><shadow><font size=2.5 color=E7D694>&nbsp;Setup</font></shadow>
		<!--i know this isn't the right font size just shut the fuck up about it-->
		</table>
		<tr><td height=1>
		</table>
		<td abswidth=6>
		<tr><td height=2 colspan=3 bgcolor=252834>
		<spacer>
		<tr><td height=1 colspan=3>
		<spacer>
		<tr><td height=2 colspan=3 bgcolor=4D5573>
		<spacer>
		<tr><td abswidth=7>
		<td abswidth=125 height=28>
		<table cellspacing=0 cellpadding=0 href="${helpUrl}">
		<tr><td height=4>
		<tr><td valign=middle>
		<table cellspacing=0 cellpadding=0>
		<tr><td valign=middle><shadow><font size=2.5 color=E7D694>&nbsp;Using WebTV</font></shadow>
		</table>
		<tr><td height=1>
		</table>
		<td abswidth=6>
		<tr><td height=2 colspan=3 bgcolor=252834>
		<spacer>
		<tr><td height=1 colspan=3>
		<spacer>
		<tr><td height=2 colspan=3 bgcolor=4D5573>
		<spacer>
		<tr><td abswidth=7>
		<td abswidth=125 height=28>
		<table cellspacing=0 cellpadding=0 href="wtv-home:/community">
		<tr><td height=4>
		<tr><td valign=middle>
		<table cellspacing=0 cellpadding=0>
		<tr><td valign=middle><shadow><font size=2.5 color=E7D694>&nbsp;Community</font></shadow>
		</table>
		<tr><td height=1>
		</table>
		<td abswidth=6>
		<tr><td height=2 colspan=3 bgcolor=252834>
		<spacer>
		<tr><td height=1 colspan=3>
		<spacer>
		<tr><td height=2 colspan=3 bgcolor=4D5573>
		<spacer>
		<tr><td abswidth=7>
		<td abswidth=125 height=28>
		<table cellspacing=0 cellpadding=0 href="wtv-setup:/serve-billing-overview">
		<tr><td height=4>
		<tr><td valign=middle>
		<table cellspacing=0 cellpadding=0>
		<tr><td valign=middle><shadow><font size=2.5 color=E7D694>&nbsp;Users</font></shadow>
		</table>
		<tr><td height=1>
		</table>
		<td abswidth=6>
		<tr><td height=2 colspan=3 bgcolor=252834>
		<spacer>
		<tr><td height=1 colspan=3>
		<spacer>
		<tr><td height=2 colspan=3 bgcolor=4d5573>
		<spacer>
		<tr><td valign=bottom align=right height=140 colspan=3>
		<img src="file://cdrom/OFFLINE_DEMO/IMAGES/HomeBanner.gif">
		</table>
		</sidebar>

		<table cellspacing=0 cellpadding=0 width=486 height=378 border=0>
			<tr>
			<td colspan=2>
				<table cellspacing=0 cellpadding=0 border=0 background="file://cdrom/OFFLINE_DEMO/IMAGES/TopRowGradient.gif">
					<tr>
					<td width=115 height=142>

		<!--mail navi-->
						<table cellspacing=0 cellpadding=0 width=115 href="wtv-mail:/listmail" transition=light selected insetselection>
						<tr><td width=115 align=center>
						<table border=0 cellspacing=0 cellpadding=0>
						<tr><td height=16>
						<tr><td align=center>
						<spacer type=block width=12><img src="wtv-mail:/mailbox-image" border=0 width=68 height=57 NObackground>
						<tr><td height=6>
						</table>
						<tr><td width=115 align=center>
							<table border=0 cellspacing=0 cellpadding=0>
							<tr><td height=5>
							<tr><td width=20>
							<td align=center>
							<font color=000000 size=2>Mail</font>
						<tr><td height=8>
						</table></table>
					<td width=123 height=142>

		<!--fav navi-->
						<table cellspacing=0 cellpadding=0 width=123 href="wtv-favorite:/favorite" transition=light insetselection>
						<tr><td width=123 align=center>
		<table border=0 cellspacing=0 cellpadding=0>
						<tr>
						<td height=22>
						<tr>
						<td align=center>
						<spacer type=block width=6><img src=file://ROM/Cache/TreasureChest1.gif border=0 width=92 height=52>
						<tr>
						<td height=5>
						</table>
						<tr><td width=123 align=center>
							<table border=0 cellspacing=0 cellpadding=0>
							<tr>
							<td height=5>
							<tr>
							<td width=9>
							<td align=center>
							<font color=000000 size=2>Favorites</font>
							<tr>
							<td height=8>
							</table>
						</table>
					<td width=115 height=142>
					
		<!--Explore navi-->
						<table cellspacing=0 cellpadding=0 width=115 href="${exploreUrl}" transition=light insetselection>
						<tr><td width=115 align=center>
						<table border=0 cellspacing=0 cellpadding=0>
						<tr>
						<td height=15>
						<tr>
						<td align=center>
						<spacer type=block width=9><img src=file://ROM/Cache/NavigationGlobe0.gif border=0 width=68 height=59>
						<tr>
						<td height=5>
						</table>
						<tr>
						<td width=115 align=center>
							<table border=0 cellspacing=0 cellpadding=0>
							<tr>
							<td height=5>
							<tr>
							<td width=11>
							<td align=center>
							<font color=000000 size=2>Explore</font>
							<tr>
							<td height=8>
							</table>
						</table>
					<td width=128 height=142>
					
		<!--Search navi-->
						<table cellspacing=0 cellpadding=0 width=128 href=wtv-center:/search-page transition=light insetselection>
						<tr><td width=128 align=center>
						<table border=0 cellspacing=0 cellpadding=0>
						<tr>
						<td height=19>
						<tr>
						<td align=center>
						<spacer type=block width=8><img src="file://ROM/Cache/Binoculars0.gif" width=86 height=54>
						<tr>
						<td height=6>
						</table>
						<tr><td width=128 align=center>
							<table border=0 cellspacing=0 cellpadding=0>
							<tr>
							<td height=5>
							<tr>
							<td width=17>
							<td align=center>
							<font color=000000 size=2>Search</font>
							<tr>
							<td height=8>
							</table>
						</table>
					<td width=5 height=142>

		<!--Navigation Bar(right-top) End-->

		<!--News bar Start-->

		</table>


		<!--News bar End-->

		<tr>
		<td width=280 height=242 href="client:showalert?message=nah you don't want a webtv mug" insetselection>
		<!-- for cdrom image, use <img src="file://cdrom/OFFLINE_DEMO/IMAGES/tile60.gif" width=280 height=242> -->
		<img src="wtv-home:/images/dynamic/0326_webtvstore_sean_hp.jpg" width=280 height=242>
		<td width=206 height=242 href="client:showalert?message=what do you mean dreamcast" insetselection>
		<img src="file://cdrom/OFFLINE_DEMO/IMAGES/tile40.gif" width=206 height=242>
		</table>
		</body>
		</html>`;
	/* ========================================================== DREAMCAST (GRUNGE) ========================================================== */
	} else {
		data = `<html>
		<head>
		<display hspace=0 vspace=0 fontsize=medium noscroll showwhencomplete>
		<meta http-equiv="Content-Type" content="text/html">
		<title>${title}
		</title>
		`;
			if (ismybirthday) {
				data += `<bgsound src = "sounds/happybirthday.mid"/>`;
			}
			data += `
		</head>
		<body onLoad="Initialize()" bgcolor=303a45 text=e6daa0 link=e6daa0 alink=e6daa0 vlink=e6daa0>
		<script language="JavaScript">
		var gEmbedTag;
		var gNumCategories = 0; // how many categories does the user like?
		var gCurrentIndex; // index of current teaser
		var gNextIndex; // index of next teaser for preloading
		var gNextNextIndex; // index of subsequent teaser for preparing to preload. Really.
		var gEmbedURL; // prefix of URL to point embed to (minus category name)
		var gLinkURL; // prefix of URL that embed should link to (minus category name)
		var gCategories = new Array(); // Names of info categories
		var gTeaserBlacklisted = new Array(); // 1 iff we've tried to load this teaser and timed out
		var gTimeoutHandle; // handle to timer for timeout so we can cancel it if we succeed
		var gRotateTimerHandle = nil; // handle to timer for rotation so we can cancel it when going to generic teaser
		var gStale; // 1 iff we've reverted to generic teaser
		var gWeather = new Array(); // array of weather predictions to rotate through
		var gWeatherIndex; // index of which weather prediction we're showing
		var gFirstWeatherIndex;	// index of first slot in weather rotation
		var gWeatherTimeout;
		var gNumLoaded=0; // 1 for home page, 1 for loading teaser; 2 required to start rotation
		var gRemainderOfScriptLoaded = false;

		function Initialize()
		{
		++gNumLoaded;
		if (gNumLoaded < 2)
		return;
		var i;
		gEmbedURL = "wtv-center:/custom-info-teaser?quotesPerTeaser=5&template=GrungeTeasers.tmpl&info=";
		gLinkURL = "wtv-center:/custom-info-page#";
		if ("WebTVToday" != "") { gCategories[0] = "WebTVToday";
		gNumCategories += 1;
		}
		if ("News" != "") { gCategories[1] = "News";
		gNumCategories += 1;
		}
		if ("Weather" != "") { gCategories[2] = "Weather";
		gNumCategories += 1;
		}
		if ("Shopping" != "") { gCategories[3] = "Shopping";
		gNumCategories += 1;
		}
		if ("Entertainment" != "") { gCategories[4] = "Entertainment";
		gNumCategories += 1;
		}
		if ("Sports" != "") { gCategories[5] = "Sports";
		gNumCategories += 1;
		}
		if ("Stocks" != "") { gCategories[6] = "Stocks";
		gNumCategories += 1;
		}
		if ("Intro" != "") { gCategories[7] = "Intro";
		gNumCategories += 1;
		}
		for (i=0; i < gNumCategories; ++i) {	gTeaserBlacklisted[i] = 0;
		}
		gCurrentIndex = 0;
		gNextIndex = 0;
		gStale = 0;
		gEmbedTag = document.customInfoEmbed;
		gLinkTag = document.customInfoLink;
		if (typeof gEmbedTag.document == "undefined") {	setTimeout(Initialize, 100); // wait 0.1 seconds and try again
		return;
		}
		if (gRemainderOfScriptLoaded != "true") {	setTimeout(Initialize, 100); // wait 0.1 seconds and try again
		return;
		}
		if (typeof gRotateTimerHandler != "undefined" && gRotateTimerHandler != null) {	return;
		}
		gRotateTimerHandle = setTimeout(RotateToNextTeaser, 6000);
		setTimeout(CheckConnectionStatus, 600000);
		}

		function CheckConnectionStatus()
		{	var nextPoll;
		// Did we just reconnect?
		if (navigator.networkOnline() && gStale == 1) {	ResumeRotation();
		nextPoll = 600000;
		}
		// Are we disconnected?
		else if (!navigator.networkOnline()) {	// Did we just disconnect recently?
		if (gStale == 0)
		RevertToGenericTeaser();
		nextPoll = 1000;
		}
		// We're still connected...
		else {	nextPoll = 60000;
		}
		setTimeout(CheckConnectionStatus, nextPoll);
		}

		function RevertToGenericTeaser()
		{	gStale = 1;
		gCurrentIndex = -1;
		clearTimeout(gTimeoutHandle);
		clearTimeout(gRotateTimerHandle);
		gEmbedTag.src = gEmbedURL + gCategories[0] + "&i1=" + gCategories[0] + "&i2=" + gCategories[1] + "&i3=" + gCategories[2] + "&i4=" + gCategories[3] + "&i5=" + gCategories[4] + "&i6=" + gCategories[5] + "&i7=" + gCategories[6] + "&i8=" + gCategories[7];
		if (typeof gEmbedTag.document == "undefined") {	WriteEvergreenTeaser();
		}
		}

		function WriteEvergreenTeaser()
		{	gEmbedTag.document.open();
		gEmbedTag.document.write("<html><head><display showwhencomplete></head> " +
		"<body background=wtv-content:/ROMCache/BackgroundWebTVToday_a.swf bgcolor=949484>" +
		"<table cellspacing=0 cellpadding=0 width=373 height=193>" +
		"<tr><td valign=middle align=center>" +
		"<table cellspacing=0 cellpadding=0>" +
		"<tr height=44><td width=100><spacer type=block width=100 height=44>" +
		"<tr height=40><td width=100><spacer type=block width=100 height=40><td width=267><spacer type=block width=267 height=40><td width=6>" +
		"<tr height=60><td width=100><spacer type=block width=100 height=60><td maxlines=2 valign=top align=left width=267><font size=+2><B>Get the latest in</B></font><br><font size=+2><b>WebTV Today</b></font><td width=6>" +
		"<tr height=49><td width=100><spacer type=block width=100 height=49><td width=267 valign=middle align=right><td width=6>" +
		"</table></table>" +
		"</body></html>");
		gEmbedTag.document.close();
		gLinkTag.href = "wtv-center:/center?info=WebTVToday";
		}

		function ResumeRotation()
		{	gStale = 0;
		RotateToNextTeaser();
		}

		function FindNext(startHere)
		{ var nextIndex = startHere + 1;
		nextIndex = nextIndex % gNumCategories;
		// If the next teaser is blacklisted, go to the following one
		if (gTeaserBlacklisted[nextIndex] == 1) { ++nextIndex;
		nextIndex = nextIndex % gNumCategories;
		}
		while (gCategories[nextIndex] == null) { ++nextIndex;
		nextIndex = nextIndex % gNumCategories;
		}
		return nextIndex;
		}
		function RotateToNextTeaser()
		{	if (gStale == 0) {	gCurrentIndex = FindNext(gCurrentIndex);
		// Point the embed to the proper URL
		if (gNumCategories > 1) { gTimeoutHandle = setTimeout(Timeout, 40000);
		}
		if (gCategories[gCurrentIndex] == "Intro") { CustomEmbedLoaded();
		} else { gEmbedTag.src = gEmbedURL + gCategories[gCurrentIndex] + "&i1=" + gCategories[0] + "&i2=" + gCategories[1] + "&i3=" + gCategories[2] + "&i4=" + gCategories[3] + "&i5=" + gCategories[4] + "&i6=" + gCategories[5]+ "&i7=" + gCategories[6]+ "&i8=" + gCategories[7];
		if (gCategories[gCurrentIndex] == "Sports") { gLinkTag.href = "wtv-center:/center?info=Sports";
		} else if (gCategories[gCurrentIndex] == "SportsNews") { gLinkTag.href = "wtv-center:/center?info=Sports";
		} else if (gCategories[gCurrentIndex] == "Entertainment") { gLinkTag.href = "wtv-center:/center?info=Entertainment";
		} else if (gCategories[gCurrentIndex] == "News") { gLinkTag.href = "wtv-center:/center?info=News";
		} else if (gCategories[gCurrentIndex] == "Stocks") { gLinkTag.href = "wtv-center:/center?info=Money#quotes";
		} else if (gCategories[gCurrentIndex] == "Weather") { gLinkTag.href = "wtv-center:/center?info=News#weather";
		} else if (gCategories[gCurrentIndex] == "Shopping") { gLinkTag.href = "wtv-center:/center?info=Shopping";
		} else { gLinkTag.href = "wtv-center:/center?info=WebTVToday";
		}
		}
		}
		}

		function Timeout()
		{	if (!navigator.networkOnline()) {	RevertToGenericTeaser();
		}
		else {	gTeaserBlacklisted[gCurrentIndex] = 1;
		SetRotateTimer();
		}
		}

		function SetRotateTimer()
		{	var delay;
		if (gCategories[gCurrentIndex] == "Weather")
		delay = 8700;
		else
		delay = 7000;
		if (gNumCategories > 1) {	gRotateTimerHandle = setTimeout(RotateToNextTeaser, delay);
		}
		}

		function CustomEmbedLoaded()
		{	var doc;
		clearTimeout(gWeatherTimeout);
		doc = document.customInfoEmbed.document;
		if (gCategories[gCurrentIndex] == "Weather" && doc.weatherForm == nil) {	setTimeout(CustomEmbedLoaded(), 100);
		return;
		}
		if (gStale == 0) {	clearTimeout(gTimeoutHandle);
		SetRotateTimer();
		}
		if (gCategories[gCurrentIndex] == "Weather" && typeof doc.weatherForm == "object") {	doc.weatherForm.disp1a.value = doc.weatherForm.disp1.value;
		doc.weatherForm.disp2a.value = doc.weatherForm.disp2.value;
		gFirstWeatherIndex = 0;
		gWeatherIndex = gFirstWeatherIndex;
		gWeatherTimeout = setTimeout(RotateWeather, 2900);
		}
		}

		function RotateWeather()
		{	var doc;
		var str1;
		var str2;
		doc = document.customInfoEmbed.document;
		if ((gCategories[gCurrentIndex] == "Weather")
		&& (doc.weatherForm != nil)
		&& (typeof doc.weatherForm == "object")) { gWeatherIndex += 1;
		if (gWeatherIndex > 2) {	gWeatherIndex = gFirstWeatherIndex;
		}
		if (gWeatherIndex == 1) {	str1 = doc.weatherForm.disp1b.value;
		str2 = doc.weatherForm.disp2b.value;
		} else if (gWeatherIndex == 2) {	str1 = doc.weatherForm.disp1c.value;
		str2 = doc.weatherForm.disp2c.value;
		} else {	str1 = doc.weatherForm.disp1a.value;
		str2 = doc.weatherForm.disp2a.value;
		}
		doc.weatherForm.disp1.value = str1;
		doc.weatherForm.disp2.value = str2;
		if (gWeatherIndex != 2 || gNumCategories == 1) {	gWeatherTimeout = setTimeout(RotateWeather, 2900);
		}
		}
		}
		gRemainderOfScriptLoaded = "true";
		</script>
		<table cellspacing=0 cellpadding=0 border=0 width=624 height=384>
		<tr>
		<td colspan=3 height=100 width=624>
		<table cellspacing=0 cellpadding=0 height=100 width=624 background="wtv-content:/ROMCache/TopBackground_Classic.gif" bgcolor=424a6b GRADcolor=73849c GRADANGLE=0>
		<tr><td valign=bottom>
		<table cellspacing=0 cellpadding=0 height=100>
		<tr><td height=1>
		<tr><td colspan=3 valign=middle align=center>
		<spacer type=block width=10>
		<a href=wtv-home:/Credits-Introduction><spacer type=block height=3><img src=wtv-home:/ROMCache/WebTVLogoJewel.gif width=111 height=87></a>
		</table>
		<td width=128 height=100 valign=middle>
		<table cellspacing=0 cellpadding=0 width=120 href=wtv-mail:/listmail transition=light selected insetselection>
		<tr><td width=120>
		<table cellspacing=0 cellpadding=0>
		<tr><td height=14>
		<tr><td align=left valign=bottom abswidth=80 absheight=61>
		<spacer type=block width=30><embed src=wtv-mail:/mailbox-image?mailbox-icon=true width=54 height=47 nobackground>
		<br><spacer type=vertical height=0>
		<tr><td width=120>
		<table cellspacing=0 cellpadding=0>
		<tr>
		<td height=3>
		<tr>
		<td width=39>
		<td align=center>
		<font color=000000>Mail</font>
		</table>
		</table>
		<tr>
		<td height=4>
		</table>
		<td width=128 height=100 valign=middle>
		<table cellspacing=0 cellpadding=0 width=112 href="wtv-favorite:/favorite" transition=light
		insetselection>
		<tr><td width=112>
		<table cellspacing=0 cellpadding=0>
		<tr>
		<td height=25>
		<tr><td align=left valign=bottom absheight=50>
		<spacer type=block width=16><img src=wtv-home:/ROMCache/TreasureChest1.gif width=75 height=42>
		<br><spacer type=vertical height=2>
		<tr><td width=112>
		<table cellspacing=0 cellpadding=0>
		<tr><td height=3>
		<tr><td width=15>
		<td align=center>
		<font color=000000>Favorites</font>
		</table>
		</table>
		<tr><td height=4>
		</table>
		<td width=128 height=100 valign=middle>
		<table cellspacing=0 cellpadding=0 width=112 href=wtv-home:/community transition=light
		insetselection>
		<tr><td width=112>
		<table cellspacing=0 cellpadding=0>
		<tr><td height=12>
		<tr><td align=left valign=bottom absheight=63>
		<spacer type=block width=19><img src=wtv-content:/ROMCache/Community.gif width=63 height=47>
		<br><spacer type=vertical height=0>
		<tr><td width=112>
		<table cellspacing=0 cellpadding=0>
		<tr><td height=3>
		<tr><td width=3>
		<td align=center>
		<font color=000000>Community</font>
		</table>
		</table>
		<tr><td height=4>
		</table>
		<td width=112 height=100 valign=middle>
		<table cellspacing=0 cellpadding=0 width=112 href="wtv-center:/search-page" transition=light
		insetselection>
		<tr><td width=112>
		<table cellspacing=0 cellpadding=0>
		<tr><td height=21>
		<tr><td align=left valign=bottom absheight=54>
		<spacer type=block width=12><img src=wtv-home:/ROMCache/Binoculars0.gif width=73 height=45>
		<br><spacer type=vertical height=0>
		<tr><td width=112>
		<table cellspacing=0 cellpadding=0>
		<tr><td height=3>
		<tr><td width=19>
		<td align=center>
		<font color=000000>Search</font>
		</table>
		</table>
		<tr><td height=4>
		</table>
		</table>
		<tr><td colspan=3 height=31 width=624>
		<table cellspacing=0 cellpadding=0 bgcolor=303a45 height=31 width=624">
		<tr><td colspan=3 height=5 width=624>
		<tr>
		`;
		if (session_data.getNumberOfUserAccounts() == 1) {
					data += `
		<td width=20>
		<td align=left valign=middle width=127><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href="wtv-content:/redirect?req-id=tvguide"><font size=2 color=c6e7f7>What's on TV</font></a>
		<td align=center valign=middle width=117><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href=wtv-setup:/accounts><font size=2 color=c6e7f7>Add User</font></a>
		<td align=center valign=middle width=110><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href=wtv-setup:/setup><font size=2 color=c6e7f7>Settings</font></A>
		<td align=center valign=middle width=85><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href=wtv-setup:/serve-billing-overview><font size=2 color=c6e7f7>Account</font></a>
		<td align=center valign=middle width=84><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href=wtv-guide:/help?topic=Index&subtopic=Main&page=1><font size=2 color=c6e7f7>Help</font></A>
		<td width=17>`;
				} else if (session_data.user_id == 0) {
					data += `
		<td width=20>
		<td align=left valign=middle width=127><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href="wtv-content:/redirect?req-id=tvguide"><font size=2 color=c6e7f7>What's on TV</font></a>
		<td align=center valign=middle width=117><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href=client:relogin><font size=2 color=c6e7f7>Switch User</font></a>
		<td align=center valign=middle width=110><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href=wtv-setup:/setup><font size=2 color=c6e7f7>Settings</font></A>
		<td align=center valign=middle width=85><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href=wtv-setup:/serve-billing-overview><font size=2 color=c6e7f7>Account</font></a>
		<td align=center valign=middle width=84><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href=wtv-guide:/help?topic=Index&subtopic=Main&page=1><font size=2 color=c6e7f7>Help</font></A>
		<td width=17>`;
				} else {
					data += `
		<td width=20>
		<td align=left valign=middle width=135><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href="wtv-content:/redirect?req-id=tvguide"><font size=2 color=c6e7f7>What's on TV</font></a>
		<td align=center valign=middle width=158><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href=client:relogin><font size=2 color=c6e7f7>Switch User</font></a>
		<td align=center valign=middle width=104><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href=wtv-setup:/setup><font size=2 color=c6e7f7>Settings</font></A>
		<td align=center valign=middle width=75><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href=wtv-guide:/help?topic=Index&subtopic=Main&page=1><font size=2 color=c6e7f7>Help</font></A>
		<td align=center valign=middle width=74><spacer type=horizontal size=65>
		<td width=25>`;
				}
		data += `</table>
		<tr><td>
		<table cellspacing=0 cellpadding=0 bgcolor=b5b5a5 gradcolor=848473 gradangle=90>
		<tr><td width=18 bgcolor=303a45>
		<td width=32 bgcolor=303a45></td>
		<td width=373 height=193>
		<a name=customInfoLink href=wtv-center:/center?info=WebTVToday insetselection><embed name=customInfoEmbed src=wtv-center:/templates/en-US/CustomInfoLoadingGrunge.tmpl abswidth=373 absheight=193></a>
		</table>
		<td width=169 height=193 bgcolor=181818 align=right valign=bottom>
		<a href="${randad.url}" insetselection>
		<img width=166 height=190 name=promoEmbed bgcolor=191919 src="${randad.img}">
		</a>
		<tr><td height=60>
		<table width=455 height=60 cellspacing=0 cellpadding=0 bgcolor=313942 gradcolor=5a5a5a gradangle=90>
		<tr><td rowspan=4 width=18 bgcolor=303a45>
		<spacer>
		<td rowspan=4 width=3 bgcolor=212129>
		<spacer>
		<td rowspan=4 width=12>
		<spacer>
		<td height=10>
		<tr><td valign=middle align=left width=154>
		<font size=3>&#128;<spacer type=horizontal width=8><a href="wtv-center:/center?info=WebTVToday"><shadow>WebTV Today</shadow></font></A>
		<td valign=middle align=left width=90>
		<font size=3>&#128;<spacer type=horizontal width=8><a href="wtv-center:/center?info=News"><shadow>News</shadow></font></A>
		<td valign=middle align=left width=114>
		<font size=3>&#128;<spacer type=horizontal width=8><a href="wtv-center:/center?info=Shopping"><shadow>Shopping</shadow></font></A>
		<tr><td valign=middle align=left>
		<font size=3>&#128;<spacer type=horizontal width=8><a href="wtv-center:/center?info=Entertainment"><shadow>Entertainment</shadow></font></A>
		<td valign=middle align=left>
		<font size=3>&#128;<spacer type=horizontal width=8><a href="wtv-center:/center?info=Sports"><shadow>Sports</shadow></font></A>
		<td valign=middle align=left>
		<font size=3>&#128;<spacer type=horizontal width=8><a href="wtv-center:/center?info=Money"><shadow>Money</shadow></font></A>
		<tr><td height=6>
		</table>
		<td width=169 height=60 insetselection bgcolor=181818 align=right valign=ABSbottom>
		<img src="wtv-home:/ROMCache/affinity_none.jpg" width=166 height=60>
		</table>
		</body>
		</html>`;
	}
	/* ========================================================== OLD SHIT ========================================================== */
} else if (!session_data.hasCap("client-supports-etude-service") && preEtudeEnabled || session_data.getSessionData("alt_home") == '1' || request_headers.query.force_old_home) {
	data = `<html>
<head>
<script language="JavaScript">
var gEmbedTag;
var gLinkTag;
var gNumCategories = 6; // how many categories does the user like?
var gCurrentIndex; // index of current teaser
var gEmbedURL; // prefix of URL to point embed to (minus category name)
var gLinkURL; // prefix of URL that embed should link to (minus category name)
var gCategories = new Array(); // Names of info categories
var gTeaserBlacklisted = new Array(); // 1 iff we've tried to load this teaser and timed out
var gTimeoutHandle; // handle to timer for timeout so we can cancel it if we succeed
var gRotateTimerHandle; // handle to timer for rotation so we can cancel it when going to generic teaser
var gStale; // 1 iff we've reverted to generic teaser
var gWeather = new Array(); // array of weather predictions to rotate through
var gWeatherIndex; // index of which weather prediction we're showing
var gFirstWeatherIndex;	// index of first slot in weather rotation
var gWeatherTimeout;
var gNumLoaded=0; // 1 for home page, 1 for loading teaser; 2 required to start rotation
// --------------------------------------------------------------------
// --------------------------------------------------------------------
function Initialize()
{	++gNumLoaded;
if (gNumLoaded < 2)
return;
var i;
gEmbedURL = "wtv-center:/legacy-info-teaser?info=";
gLinkURL = "wtv-center:/center?info=";
gCategories[0] = "News";
gCategories[1] = "Weather";
gCategories[2] = "Stocks";
gCategories[3] = "Sports";
gCategories[4] = "Entertainment";
gCategories[5] = "Intro";
for (i=0; i<=5; ++i)
gTeaserBlacklisted[i] = 0;
gCurrentIndex = -1; // so when we first increment it, it points to the first teaser
gStale = 0;
gEmbedTag = document.customInfoEmbed;
gLinkTag = document.customInfoLink;
if (typeof gEmbedTag.document == "undefined") {	setTimeout(Initialize, 100); // wait 0.1 seconds and try again
return;
}
gRotateTimerHandle = setTimeout(RotateToNextTeaser, 4000);
setTimeout(CheckConnectionStatus, 600000);
}
// --------------------------------------------------------------------
// Checks to see if the box is connected or not. If we're disconnected,
// we should run our generic "evergreen" teaser... if connected, we // should rotate.
// --------------------------------------------------------------------
function CheckConnectionStatus()
{	var nextPoll;
// Did we just reconnect?
if (navigator.networkOnline() && gStale == 1) {	ResumeRotation();
nextPoll = 600000;
}
// Are we disconnected?
else if (!navigator.networkOnline()) {	// Did we just disconnect recently?
if (gStale == 0)
RevertToGenericTeaser();
nextPoll = 1000;
}
// We're still connected...
else {	nextPoll = 60000;
}
setTimeout(CheckConnectionStatus, nextPoll);
}
// --------------------------------------------------------------------
// If box disconnects, replace information with long-shelf-life teaser
// so user doesn't see old information.
// --------------------------------------------------------------------
function RevertToGenericTeaser()
{	gStale = 1;
gCurrentIndex = -1;
clearTimeout(gTimeoutHandle);
clearTimeout(gRotateTimerHandle);
WriteEvergreenTeaser();
}
// --------------------------------------------------------------------
// This HTML is a duplicate of CustomInfoEvergreen.
// --------------------------------------------------------------------
function WriteEvergreenTeaser()
{
gEmbedTag.document.open();
gEmbedTag.document.write(	"<html><body bgcolor=13142e>
<table cellspacing=0 cellpadding=0>" +
"<tr><td width=422 height=22><table cellspacing=0 cellpadding=0 " +
"bgcolor=313657 gradcolor=13142e gradangle=90><tr><td width=422 height=2 " +
"colspan=2 bgcolor=FFFFFF transparency=80%>" +
"<img src=wtv-home:/ROMCache/PromotionLeftEdge.gif width=7 height=2>" +
"<tr><td width=7 height=20 rowspan=2 " +
"background=wtv-home:/ROMCache/PromotionLeftEdge.gif><td width=7 height=2>" +
"<tr><td width=415 height=18 align=left valign=center><font color=bdbd8d>" +
"<blackface>My WebTV</blackface></font></table><tr><td width=422 height=62>" +
"<table cellspacing=0 cellpadding=0><tr><td width=7 height=62 " +
"background=wtv-home:/ROMCache/PromotionLeftEdge.gif><td width=415 height=62 " +
"align=left valign=center><font color=bdbdbd size=-1>Choose the news and entertainment topics, sports,<br>and " +
"stocks that you want to see here.</font></table></table></body></html>");
gLinkTag.href = "wtv-center:/center?info=WebTVToday";
gEmbedTag.document.close();
}
// --------------------------------------------------------------------
// --------------------------------------------------------------------
function ResumeRotation()
{	gStale = 0;
RotateToNextTeaser();	}
// --------------------------------------------------------------------
// --------------------------------------------------------------------
function RotateToNextTeaser()
{	if (gStale == 0) {	++gCurrentIndex;
gCurrentIndex = gCurrentIndex % gNumCategories;
// If the next teaser is blacklisted, write out our standard sorry message
if (gTeaserBlacklisted[gCurrentIndex] == 1) {	PostSorryMessage();
}
// Otherwise, point the embed to the proper URL
else {	if (gNumCategories > 1) {	gTimeoutHandle = setTimeout(Timeout, 40000);
}
if (gCategories[gCurrentIndex] == "Intro") {	WriteEvergreenTeaser();
CustomEmbedLoaded();
gLinkTag.href = gLinkURL;
}
else {	gEmbedTag.src = gEmbedURL + gCategories[gCurrentIndex];
// This code made the My WebTV page scroll automatically
// to the category that was showing when you hit the teaser.
// gLinkTag.href = gLinkURL + gCategories[gCurrentIndex];
}
}
}
}
// --------------------------------------------------------------------
// The HTML that this function writes out must be kept in synch with
// the framework in CustomCellEmbedded and the text in TeaserMessage.
// --------------------------------------------------------------------
function PostSorryMessage()
{	gEmbedTag.document.open();
gEmbedTag.document.write(	"<html><body bgcolor=13142e><table border=0 cellspacing=0 cellpadding=0>" +
"<tr><td width=422 height=22><table border=0 cellspacing=0 cellpadding=0 " +
"bgcolor=313657 gradcolor=13142e gradangle=90><tr><td width=422 height=2 " +
"colspan=2 bgcolor=FFFFFF transparency=80%><img src=wtv-home:/ROMCache/PromotionLeftEdge.gif " +
"width=7 height=2><tr><td width=7 height=20 rowspan=2 " +
"background=wtv-home:/ROMCache/PromotionLeftEdge.gif><td width=7 height=2>" +
"<tr><td width=415 height=18 align=left valign=center><font color=bdbd8d>" +
"<blackface>" + gCategories[gCurrentIndex] + "</blackface></font></table><tr>" +
"<td width=422 height=62>" +
"<table border=0 cellspacing=0 cellpadding=0><tr><td width=7 height=62 " +
"background=wtv-home:/ROMCache/PromotionLeftEdge.gif><td width=415 height=62 " +
"align=left valign=center><font color=bdbdbd size=-1>" + gCategories[gCurrentIndex] +
" information is temporarily unavailable.</font></table></table></body></html>");
gEmbedTag.document.close();
gLinkTag.href = "wtv-center:/center?info=WebTVToday";
SetRotateTimer();
}
// --------------------------------------------------------------------
// This gets called if we fail to load a particular teaser after a
// timeout period. If we load it successfully, we cancel the timer
// timer so this doesn't get called.
// --------------------------------------------------------------------
function Timeout()
{	if (!navigator.networkOnline()) {	RevertToGenericTeaser();
}
else {	gTeaserBlacklisted[gCurrentIndex] = 1;
PostSorryMessage();
}
}
// --------------------------------------------------------------------
// --------------------------------------------------------------------
function SetRotateTimer(){
var delay;
if (gCategories[gCurrentIndex] == "Weather") delay = 8600;
else if (gCategories[gCurrentIndex] == "News") delay = 7000;
else if (gCategories[gCurrentIndex] == "Stocks") delay = 7000;
else if (gCategories[gCurrentIndex] == "Sports") delay = 5000;
else if (gCategories[gCurrentIndex] == "Entertainment") delay = 5000;
//else if (gCategories[gCurrentIndex] == "Intro")
//delay = 7000;
else
delay = 6000;
if (gNumCategories > 1)
gRotateTimerHandle = setTimeout(RotateToNextTeaser, delay);
}
// --------------------------------------------------------------------
// --------------------------------------------------------------------
function CustomEmbedLoaded(){
var doc;
clearTimeout(gWeatherTimeout);
if (gStale == 0) { clearTimeout(gTimeoutHandle); SetRotateTimer(); }
doc = document.customInfoEmbed.document;
if (gCategories[gCurrentIndex] == "Weather" && doc.weatherForm == nil) { setTimeout(CustomEmbedLoaded, 100); return; }
if (gCategories[gCurrentIndex] == "Weather" && typeof doc.weatherForm == "object") {
doc.weatherForm.disp1a.value = doc.weatherForm.disp1.value;
doc.weatherForm.disp2a.value = doc.weatherForm.disp2.value;
gFirstWeatherIndex = 0;
gWeatherIndex = gFirstWeatherIndex;
gWeatherTimeout = setTimeout(RotateWeather, 2900);
}
}
// --------------------------------------------------------------------
// --------------------------------------------------------------------
function RotateWeather(){
var doc;
var str1, str2;
doc = document.customInfoEmbed.document;
if (gCategories[gCurrentIndex] == "Weather" && doc.weatherForm != nil && typeof doc.weatherForm == "object") {
++gWeatherIndex;
if (gWeatherIndex > 2)
gWeatherIndex = gFirstWeatherIndex; if (gWeatherIndex == 1) {	str1 = doc.weatherForm.disp1b.value; str2 = doc.weatherForm.disp2b.value; }
else if (gWeatherIndex == 2) { str1 = doc.weatherForm.disp1c.value; str2 = doc.weatherForm.disp2c.value; }
else { str1 = doc.weatherForm.disp1a.value; str2 = doc.weatherForm.disp2a.value; }
doc.weatherForm.disp1.value = str1;
doc.weatherForm.disp2.value = str2;
if (gWeatherIndex != 2 || gNumCategories == 1) gWeatherTimeout = setTimeout(RotateWeather, 2900);
}
}
</script>
<display hspace=0 vspace=0 fontsize=medium noscroll showwhencomplete>
<title>${title}</title>
</head>
<sidebar width=138>
<table cellspacing=0 cellpadding=0 bgcolor=30364d>
<tr><td valign=top colspan=3>
<table cellspacing=0 cellpadding=0 height=105>
<tr>
<td height=7>
<tr><td colspan=3 valign=top align=center>
<spacer type=block width=6>
<a href=wtv-home:/Credits-Introduction><spacer type=block height=3><img src=wtv-home:/ROMCache/WebTVLogoJewel.gif width=127 height=98></a>
</table>
<tr><td height=2 colspan=3 bgcolor=252834>
<tr><td height=1 colspan=3>
<tr><td height=2 colspan=3 bgcolor=4d5573>
<tr><td valign=top>
<tr><td abswidth=7>
<td abswidth=125 height=24>
<table cellspacing=0 cellpadding=0 href=wtv-setup:/setup>
<tr><td height=4>
<tr><td valign=middle>
<table cellspacing=0 cellpadding=0>
<tr><td valign=middle><shadow><font size=3 color=e7d694>&nbsp;${session_data.hasCap('client-has-tv-experience') ? 'Settings' : 'Setup'}</font></shadow>
</table>
<tr><td height=1>
</table>
<td abswidth=6>
<tr><td height=2 colspan=3 bgcolor=252834>
<tr><td height=1 colspan=3>
<tr><td height=2 colspan=3 bgcolor=4d5573>
<tr><td abswidth=7>
<td abswidth=125 height=24>
<table cellspacing=0 cellpadding=0 href="wtv-guide:/help">
<tr><td height=4>
<tr><td valign=middle>
<table cellspacing=0 cellpadding=0>
<tr><td valign=middle><shadow><font size=3 color=e7d694>&nbsp;Using WebTV</font></shadow>
</table>
<tr><td height=1>
</table>
<td abswidth=6>
<tr><td height=2 colspan=3 bgcolor=252834>
<spacer>
<tr><td height=1 colspan=3>
<spacer>
<tr><td height=2 colspan=3 bgcolor=4d5573>
<spacer>
<tr><td abswidth=7>
<td abswidth=125 height=24>
<table cellspacing=0 cellpadding=0 href="wtv-home:/community">
<tr><td height=4>
<tr><td valign=middle>
<table cellspacing=0 cellpadding=0>
<tr><td valign=middle><shadow><font size=3 color=e7d694>&nbsp;Community</font></shadow>
</table>
`;	
	// TODO: make this suck less
	if (session_data.getNumberOfUserAccounts() == 1) {
		data += `
<tr><td height=1>
</table>
<td abswidth=6>
<tr><td height=2 colspan=3 bgcolor=252834>
<tr><td height=1 colspan=3>
<tr><td height=2 colspan=3 bgcolor=4d5573>
<tr><td abswidth=7>
<td abswidth=125 height=24>
<table cellspacing=0 cellpadding=0 href="wtv-setup:/accounts">
<tr><td height=4>
<tr><td valign=middle>
<table cellspacing=0 cellpadding=0>
<tr><td valign=middle><shadow><font size=3 color=e7d694>&nbsp;Add User</font></shadow>
</table>
<tr><td height=1>
</table>
<td abswidth=6>
<tr><td height=2 colspan=3 bgcolor=252834>
<spacer>
<tr><td height=1 colspan=3>
<tr><td height=2 colspan=3 bgcolor=4d5573>
<tr><td abswidth=7>
<td abswidth=125 height=24>
<table cellspacing=0 cellpadding=0 href="wtv-setup:/serve-billing-overview">
<tr><td height=4>
<tr><td valign=middle>
<table cellspacing=0 cellpadding=0>
<tr><td valign=middle><shadow><font size=3 color=e7d694>&nbsp;Account</font></shadow>
</table>
<tr><td height=1>
</table>
<td abswidth=6>
<tr>`;
} else if (session_data.user_id == 0) {
		data += `
<tr><td height=1>
</table>
<td abswidth=6>
<tr><td height=2 colspan=3 bgcolor=252834>
<tr><td height=1 colspan=3>
<tr><td height=2 colspan=3 bgcolor=4d5573>
<tr><td abswidth=7>
<td abswidth=125 height=24>
<table cellspacing=0 cellpadding=0 href="client:relogin">
<tr><td height=4>
<tr><td valign=middle>
<table cellspacing=0 cellpadding=0>
<tr><td valign=middle><shadow><font size=3 color=e7d694>&nbsp;Switch User</font></shadow>
</table>
<tr><td height=1>
</table>
<td abswidth=6>
<tr><td height=2 colspan=3 bgcolor=252834>
<tr><td height=1 colspan=3>
<tr><td height=2 colspan=3 bgcolor=4d5573>
<tr><td abswidth=7>
<td abswidth=125 height=24>
<table cellspacing=0 cellpadding=0 href="wtv-setup:/accounts">
<tr><td height=4>
<tr><td valign=middle>
<table cellspacing=0 cellpadding=0>
<tr><td valign=middle><shadow><font size=3 color=e7d694>&nbsp;Account</font></shadow>
</table>
<tr><td height=1>
</table>
<td abswidth=6>
<tr>`;
	} else {
		data += `
<tr><td height=1>
</table>
<td abswidth=6>
<tr><td height=2 colspan=3 bgcolor=252834>
<tr><td height=1 colspan=3>
<tr><td height=2 colspan=3 bgcolor=4d5573>
<tr><td abswidth=7>
<td abswidth=125 height=24>
<table cellspacing=0 cellpadding=0 href="client:relogin">
<tr><td height=4>
<tr><td valign=middle>
<table cellspacing=0 cellpadding=0>
<tr><td valign=middle><shadow><font size=3 color=e7d694>&nbsp;Switch User</font></shadow>
</table>
<tr><td height=1>
</table>
<td abswidth=6>
<tr><td height=2 colspan=3 bgcolor=252834>
<spacer>
<tr><td height=1 colspan=3>
<spacer>
<tr><td height=2 colspan=3 bgcolor=4d5573>
<spacer>
<tr><td abswidth=7>
<td abswidth=125 height=24>
<table cellspacing=0 cellpadding=0 href="wtv-content:/redirect?req-id=tvguide">
<tr><td height=4>
<tr><td valign=middle>
<table cellspacing=0 cellpadding=0>
<tr><td valign=middle><shadow><font size=3 color=e7d694>&nbsp;What's on TV</font></shadow> <!-- temporary -->
</table>
<tr><td height=1>
</table>
<td abswidth=6>
<tr>`
}
data += ` 
<td height=2 colspan=3 bgcolor=252834>
<tr><td height=1 colspan=3>
<tr><td height=2 colspan=3 bgcolor=4d5573>
<tr><td valign=bottom align=right height=130 colspan=3>
<img src="wtv-home:/ROMCache/HomeBanner.gif">
</table>
</sidebar>
<body onLoad="Initialize()" bgcolor=13142e>
<table cellspacing=0 cellpadding=0 border=0 abswidth=422 absheight=384>
<tr><td colspan=2>
<table cellspacing=0 cellpadding=0 border=0 bgcolor=31365d gradcolor=9eaacd>
<tr><td abswidth=95 absheight=110>
<table cellspacing=0 cellpadding=0 width=95 href="wtv-mail:/listmail" transition=light selected insetselection>
<tr><td width=95>
<table border=0 cellspacing=0 cellpadding=0>
<tr><td height=16>
<tr><td align=left abswidth=80 absheight=57>
<spacer type=block width=12><embed src=wtv-mail:/mailbox-image?mailbox-icon=true border=0 width=68 height=57 nobackground>
<tr><td height=6>
</table>
<tr><td width=95>
<table border=0 cellspacing=0 cellpadding=0>
<tr><td height=5>
<tr><td width=32>
<td align=center>
<font color=000000>Mail</font>
<tr><td height=8>
</table>
</table>
<td abswidth=103 absheight=110>
<table cellspacing=0 cellpadding=0 width=103 href="wtv-favorite:/favorite" transition=light insetselection>
<tr><td width=103>
<table border=0 cellspacing=0 cellpadding=0>
<tr><td height=22>
<tr><td align=left>
<spacer type=block width=6><img src=wtv-home:/ROMCache/TreasureChest1.gif border=0 width=92 height=52>
<tr><td height=5>
</table>
<tr><td width=103>
<table border=0 cellspacing=0 cellpadding=0>
<tr><td height=5>
<tr><td width=11>
<td align=center>
<font color=000000>Favorites</font>
<tr><td height=8>
</table>
</table>
<td abswidth=95 absheight=110>
<table cellspacing=0 cellpadding=0 width=95 href="wtv-center:/sitemap/SiteMap.tmpl" transition=light
insetselection>
<tr><td width=95>
<table border=0 cellspacing=0 cellpadding=0>
<tr><td height=15>
<tr><td align=left>
<spacer type=block width=9><img src=wtv-home:/ROMCache/NavigationGlobe0.gif border=0 width=68 height=59>
<tr><td height=5>
</table>
<tr><td
width=95>
<table border=0 cellspacing=0 cellpadding=0>
<tr><td height=5>
<tr><td width=16>
<td align=center>
<font color=000000>Explore</font>
<tr><td height=8>
</table>
</table>
<td abswidth=108 absheight=110>
<table cellspacing=0 cellpadding=0 width=108 href="wtv-center:/search-page" transition=light insetselection>
<tr><td width=108>
<table border=0 cellspacing=0 cellpadding=0>
<tr><td height=19>
<tr><td align=left>
<spacer type=block width=8><img src=wtv-home:/ROMCache/Binoculars0.gif width=86 height=54>
<tr><td height=6>
</table>
<tr><td width=108>
<table border=0 cellspacing=0 cellpadding=0>
<tr><td height=5>
<tr><td width=22>
<td align=center>
<font color=000000>Search</font>
<tr><td height=8>
</table>
</table>
<td abswidth=21 absheight=110>
<table cellspacing=0 cellpadding=0 width=21 transition=light insetselection>
<tr><td width=21>
<table border=0 cellspacing=0 cellpadding=0>
<tr><td height=16>
<tr><td align=left>
<spacer type=block width=14><spacer type=block height=52>
<tr><td height=11>
</table>
<tr><td width=21>
<table border=0 cellspacing=0 cellpadding=0>
<tr><td height=5>
<tr><td width=22>
<td align=center>
<font color=000000>&nbsp;</font>
<tr><td height=8>
</table>
</table>
</table>
<tr><td abswidth=256 absheight=190 valign=top>
<a href=wtv-center:/cwtv/redirect insetselection><img src=/images/dynamic/ClubWTV_SKCro.gif width=256 height=190></a>
<td abswidth=166 absheight=190 valign=top>
<a href=${randad.url} insetselection><img src=${randad.img} width=166 height=190></a>
<tr><td colspan=2>
<table border=0 cellspacing=0 cellpadding=0 bgcolor=13142e>
<tr><td width=422 absheight=84 align=center valign=top>
<a name=customInfoLink href="wtv-center:/center?info=WebTVToday" insetselection>
<embed name=customInfoEmbed src="/templates/en-US/CustomInfoLoading.html" width=422 absheight=84 nobackground>
</a>
</table>
</table>
</body>
<LINK href="/ROMCache/teaser-News.gif" rel=next>
<LINK href="wtv-partner:/custom-info-teaser?info=News" rel=next>
</html>`;
} else {

	/* ========================================================== 1999 GRUNGE ========================================================== */

	data = `<html>
<head>
<display hspace=0 vspace=0 fontsize=medium noscroll showwhencomplete>
<title>${title}</title>
</head>
<body onLoad="Initialize()" bgcolor=303a45 text=e6daa0 link=e6daa0 alink=e6daa0 vlink=e6daa0${session_data.isJapaneseClient() ? ` fontsize=small` : `>`}`;
	if (ismybirthday) {
		data += `<bgsound src=sounds/happybirthday.mid>`;
	}
	data += `
<script language="JavaScript">
var gEmbedTag;
var gNumCategories = 0; // how many categories does the user like?
var gCurrentIndex; // index of current teaser
var gNextIndex; // index of next teaser for preloading
var gNextNextIndex; // index of subsequent teaser for preparing to preload. Really.
var gEmbedURL; // prefix of URL to point embed to (minus category name)
var gLinkURL; // prefix of URL that embed should link to (minus category name)
var gCategories = new Array(); // Names of info categories
var gTeaserBlacklisted = new Array(); // 1 iff we've tried to load this teaser and timed out
var gTimeoutHandle; // handle to timer for timeout so we can cancel it if we succeed
var gRotateTimerHandle = nil; // handle to timer for rotation so we can cancel it when going to generic teaser
var gStale; // 1 iff we've reverted to generic teaser
var gWeather = new Array(); // array of weather predictions to rotate through
var gWeatherIndex; // index of which weather prediction we're showing
var gFirstWeatherIndex;	// index of first slot in weather rotation
var gWeatherTimeout;
var gNumLoaded=0; // 1 for home page, 1 for loading teaser; 2 required to start rotation
var gRemainderOfScriptLoaded = false;

function Initialize(){
++gNumLoaded;
if (gNumLoaded < 2) return;
var i;
gEmbedURL = "wtv-center:/custom-info-teaser?quotesPerTeaser=5&template=GrungeTeasers.tmpl&info=";
gLinkURL = "wtv-center:/custom-info-page#";
if ("WebTVToday" != "") { gCategories[0] = "WebTVToday"; gNumCategories += 1; }
if ("News" != "") { gCategories[1] = "News"; gNumCategories += 1; }
if ("Weather" != "") { gCategories[2] = "Weather"; gNumCategories += 1; }
if ("Shopping" != "") { gCategories[3] = "Shopping"; gNumCategories += 1; }
if ("Entertainment" != "") { gCategories[4] = "Entertainment"; gNumCategories += 1; }
if ("Sports" != "") { gCategories[5] = "Sports"; gNumCategories += 1; }
if ("Stocks" != "") { gCategories[6] = "Stocks"; gNumCategories += 1; }
if ("Intro" != "") { gCategories[7] = "Intro"; gNumCategories += 1; }
for (i=0; i < gNumCategories; ++i) { gTeaserBlacklisted[i] = 0; }
gCurrentIndex = 0;
gNextIndex = 0;
gStale = 0;
gEmbedTag = document.customInfoEmbed;
gLinkTag = document.customInfoLink;
if (typeof gEmbedTag.document == "undefined") {	setTimeout(Initialize, 100); // wait 0.1 seconds and try again
return;
}
if (gRemainderOfScriptLoaded != "true") {	setTimeout(Initialize, 100); // wait 0.1 seconds and try again
return;
}
if (typeof gRotateTimerHandler != "undefined" && gRotateTimerHandler != null) {	return;
}
gRotateTimerHandle = setTimeout(RotateToNextTeaser, 6000);
setTimeout(CheckConnectionStatus, 600000);
}

function CheckConnectionStatus(){
var nextPoll;
// Did we just reconnect?
if (navigator.networkOnline() && gStale == 1) {	ResumeRotation();
nextPoll = 600000;
}
// Are we disconnected?
else if (!navigator.networkOnline()) {	// Did we just disconnect recently?
if (gStale == 0)
RevertToGenericTeaser();
nextPoll = 1000;
}
// We're still connected...
else { nextPoll = 60000; }
setTimeout(CheckConnectionStatus, nextPoll);
}

function RevertToGenericTeaser(){
gStale = 1;
gCurrentIndex = -1;
clearTimeout(gTimeoutHandle);
clearTimeout(gRotateTimerHandle);
gEmbedTag.src = gEmbedURL + gCategories[0] + "&i1=" + gCategories[0] + "&i2=" + gCategories[1] + "&i3=" + gCategories[2] + "&i4=" + gCategories[3] + "&i5=" + gCategories[4] + "&i6=" + gCategories[5] + "&i7=" + gCategories[6] + "&i8=" + gCategories[7];
if (typeof gEmbedTag.document == "undefined") {	WriteEvergreenTeaser(); }
}

function WriteEvergreenTeaser()
{	gEmbedTag.document.open();
gEmbedTag.document.write("<html><head><display showwhencomplete></head> " +
"<body background=wtv-content:/ROMCache/BackgroundWebTVToday_a.swf bgcolor=949484>" +
"<table cellspacing=0 cellpadding=0 width=373 height=193>" +
"<tr><td valign=middle align=center>" +
"<table cellspacing=0 cellpadding=0>" +
"<tr height=44><td width=100><spacer type=block width=100 height=44>" +
"<tr height=40><td width=100><spacer type=block width=100 height=40><td width=267><spacer type=block width=267 height=40><td width=6>" +
"<tr height=60><td width=100><spacer type=block width=100 height=60><td maxlines=2 valign=top align=left width=267><font size=+2><B>Get the latest in</B></font><br><font size=+2><b>WebTV Today</b></font><td width=6>" +
"<tr height=49><td width=100><spacer type=block width=100 height=49><td width=267 valign=middle align=right><td width=6>" +
"</table></table>" +
"</body></html>");
gEmbedTag.document.close();
gLinkTag.href = "wtv-center:/center?info=WebTVToday";
}

function ResumeRotation()
{	gStale = 0;
RotateToNextTeaser();
}

function FindNext(startHere)
{ var nextIndex = startHere + 1;
nextIndex = nextIndex % gNumCategories;
// If the next teaser is blacklisted, go to the following one
if (gTeaserBlacklisted[nextIndex] == 1) { ++nextIndex;
nextIndex = nextIndex % gNumCategories;
}
while (gCategories[nextIndex] == null) { ++nextIndex;
nextIndex = nextIndex % gNumCategories;
}
return nextIndex;
}
function RotateToNextTeaser()
{	if (gStale == 0) {	gCurrentIndex = FindNext(gCurrentIndex);
// Point the embed to the proper URL
if (gNumCategories > 1) { gTimeoutHandle = setTimeout(Timeout, 40000);
}
if (gCategories[gCurrentIndex] == "Intro") { CustomEmbedLoaded();
} else { gEmbedTag.src = gEmbedURL + gCategories[gCurrentIndex] + "&i1=" + gCategories[0] + "&i2=" + gCategories[1] + "&i3=" + gCategories[2] + "&i4=" + gCategories[3] + "&i5=" + gCategories[4] + "&i6=" + gCategories[5]+ "&i7=" + gCategories[6]+ "&i8=" + gCategories[7];
if (gCategories[gCurrentIndex] == "Sports") { gLinkTag.href = "wtv-center:/center?info=Sports"; }
else if (gCategories[gCurrentIndex] == "SportsNews") { gLinkTag.href = "wtv-center:/center?info=Sports"; }
else if (gCategories[gCurrentIndex] == "Entertainment") { gLinkTag.href = "wtv-center:/center?info=Entertainment"; }
else if (gCategories[gCurrentIndex] == "News") { gLinkTag.href = "wtv-center:/center?info=News"; }
else if (gCategories[gCurrentIndex] == "Stocks") { gLinkTag.href = "wtv-center:/center?info=Money#quotes"; }
else if (gCategories[gCurrentIndex] == "Weather") { gLinkTag.href = "wtv-center:/center?info=News#weather"; }
else if (gCategories[gCurrentIndex] == "Shopping") { gLinkTag.href = "wtv-center:/center?info=Shopping"; }
else { gLinkTag.href = "wtv-center:/center?info=WebTVToday"; }
}
}
}

function Timeout(){
if (!navigator.networkOnline()) {	RevertToGenericTeaser(); }
else { gTeaserBlacklisted[gCurrentIndex] = 1; SetRotateTimer(); }
}

function SetRotateTimer()
{	var delay;
if (gCategories[gCurrentIndex] == "Weather")
delay = 8700;
else
delay = 7000;
if (gNumCategories > 1) {	gRotateTimerHandle = setTimeout(RotateToNextTeaser, delay);
}
}

function CustomEmbedLoaded()
{	var doc;
clearTimeout(gWeatherTimeout);
doc = document.customInfoEmbed.document;
if (gCategories[gCurrentIndex] == "Weather" && doc.weatherForm == nil) {	setTimeout(CustomEmbedLoaded(), 100);
return;
}
if (gStale == 0) {	clearTimeout(gTimeoutHandle);
SetRotateTimer();
}
if (gCategories[gCurrentIndex] == "Weather" && typeof doc.weatherForm == "object") {	doc.weatherForm.disp1a.value = doc.weatherForm.disp1.value;
doc.weatherForm.disp2a.value = doc.weatherForm.disp2.value;
gFirstWeatherIndex = 0;
gWeatherIndex = gFirstWeatherIndex;
gWeatherTimeout = setTimeout(RotateWeather, 2900);
}
}

function RotateWeather(){
var doc;
var str1;
var str2;
doc = document.customInfoEmbed.document;
if ((gCategories[gCurrentIndex] == "Weather") && (doc.weatherForm != nil) && (typeof doc.weatherForm == "object")) {
gWeatherIndex += 1;
if (gWeatherIndex > 2) {	gWeatherIndex = gFirstWeatherIndex; }
if (gWeatherIndex == 1) {	str1 = doc.weatherForm.disp1b.value; str2 = doc.weatherForm.disp2b.value; }
else if (gWeatherIndex == 2) { str1 = doc.weatherForm.disp1c.value; str2 = doc.weatherForm.disp2c.value; }
else { str1 = doc.weatherForm.disp1a.value; str2 = doc.weatherForm.disp2a.value; }
doc.weatherForm.disp1.value = str1;
doc.weatherForm.disp2.value = str2;
if (gWeatherIndex != 2 || gNumCategories == 1) { gWeatherTimeout = setTimeout(RotateWeather, 2900); }
}
}
gRemainderOfScriptLoaded = "true";
</script>
<table cellspacing=0 cellpadding=0 border=0 width=560 height=384>
<tr><td colspan=3 height=100 width=560>
<table cellspacing=0 cellpadding=0 height=100 width=560 bgcolor=424a6b gradcolor=73849c background=wtv-content:/ROMCache/TopBackground${session_data.hasCap('client-has-tv-experience') ? '.gif' : '_Classic.jpg'}>
<tr><td valign=bottom>
<table cellspacing=0 cellpadding=0 height=100>
<tr><td height=1>
<tr><td colspan=3 valign=middle align=center>
<spacer type=block width=10>
<a href="wtv-home:/Credits-Introduction"><spacer type=block height=3><img src=wtv-home:/ROMCache/WebTVLogoJewel.gif width=111 height=87></a>
</table>
<td width=104 height=100 valign=middle>
<table cellspacing=0 cellpadding=0 width=104 href=wtv-mail:/listmail transition=light selected insetselection>
<tr><td width=104>
<table cellspacing=0 cellpadding=0>
<tr><td height=14>
<tr><td align=left valign=bottom abswidth=80 absheight=61>
<spacer type=block width=22><embed src=wtv-mail:/mailbox-image?mailbox-icon=true width=54 height=47 nobackground>
<br><spacer type=vertical height=0>
<tr><td width=104>
<table cellspacing=0 cellpadding=0>
<tr><td height=3>
<tr><td width=35>
<td align=center>
<font color=0>Mail</font>
</table>
</table>
<tr><td height=4>
</table>
<td width=112 height=100 valign=middle>
<table cellspacing=0 cellpadding=0 width=112 href=wtv-favorite:/favorite transition=light insetselection>
<tr><td width=112>
<table cellspacing=0 cellpadding=0>
<tr><td height=25>
<tr><td align=left valign=bottom absheight=50>
<spacer type=block width=16><img src=wtv-home:/ROMCache/TreasureChest1.gif width=75 height=42>
<br><spacer type=vertical height=2>
<tr><td width=112>
<table cellspacing=0 cellpadding=0>
<tr><td height=3>
<tr><td width=15>
<td align=center>
<font color=0>Favorites</font>
</table>
</table>
<tr><td height=4>
</table>
<td width=112 height=100 valign=middle>
<table cellspacing=0 cellpadding=0 width=112 href=wtv-home:/community transition=light insetselection>
<tr><td width=112>
<table cellspacing=0 cellpadding=0>
<tr><td height=12>
<tr><td align=left valign=bottom absheight=63>
<spacer type=block width=19><img src=wtv-content:/ROMCache/Community.gif width=63 height=47>
<br><spacer type=vertical height=0>
<tr><td width=112>
<table cellspacing=0 cellpadding=0>
<tr><td height=3>
<tr><td width=9>
<td align=center>
<font color=0>Community</font>
</table>
</table>
<tr><td height=4>
</table>
<td width=112 height=100 valign=middle>
<table cellspacing=0 cellpadding=0 width=112 href=wtv-center:/search-page transition=light insetselection>
<tr><td width=112>
<table cellspacing=0 cellpadding=0>
<tr><td height=21>
<tr><td align=left valign=bottom absheight=54>
<spacer type=block width=12><img src=wtv-home:/ROMCache/Binoculars0.gif width=73 height=45>
<br><spacer type=vertical height=0>
<tr><td width=112>
<table cellspacing=0 cellpadding=0>
<tr><td height=3>
<tr><td width=19>
<td align=center>
<font color=0>Search</font>
</table>
</table>
<tr>
<td height=4>
</table>
</table>
<tr>
<td colspan=3 height=31 width=560>
<table cellspacing=0 cellpadding=0 bgcolor=303a45 height=31 width=560>
<tr><td colspan=3 height=5 width=560>
<tr>
`;
	if (session_data.hasCap('client-has-tv-experience')) {
		if (session_data.getNumberOfUserAccounts() == 1) {
			data += `
<td width=20>
		<td align=left valign=middle width=102><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href=client:gototvhome><font size=2 color=c6e7f7>TV Home</font></a>
		<td align=center valign=middle width=121><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href=wtv-setup:/accounts><font size=2 color=c6e7f7>Add User</font></a>
		<td align=center valign=middle width=114><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href=wtv-setup:/setup><font size=2 color=c6e7f7>Settings</font></A>
		<td align=center valign=middle width=92><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href=wtv-setup:/serve-billing-overview><font size=2 color=c6e7f7>Account</font></a>
		<td align=center valign=middle width=89><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href=wtv-guide:/help?topic=Index&subtopic=Main&page=1><font size=2 color=c6e7f7>Help</font></A>
		<td width=22>`;
		} else if (session_data.user_id == 0) {
			data += `
<td width=20>
		<td align=left valign=middle width=102><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href=client:gototvhome><font size=2 color=c6e7f7>TV Home</font></a>
		<td align=center valign=middle width=121><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href=client:relogin><font size=2 color=c6e7f7>Switch User</font></a>
		<td align=center valign=middle width=114><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href=wtv-setup:/setup><font size=2 color=c6e7f7>Settings</font></A>
		<td align=center valign=middle width=92><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href=wtv-setup:/serve-billing-overview><font size=2 color=c6e7f7>Account</font></a>
		<td align=center valign=middle width=89><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href=wtv-guide:/help?topic=Index&subtopic=Main&page=1><font size=2 color=c6e7f7>Help</font></A>
		<td width=22>`;
		} else {
			data += `
<td width=20>
<td align=left valign=middle width=110><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href=client:gototvhome><font size=2 color=c6e7f7>TV Home</font></a>
<td align=center valign=middle width=133><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href=client:relogin><font size=2 color=c6e7f7>Switch User</font></a>
<td align=center valign=middle width=120><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href=wtv-setup:/setup><font size=2 color=c6e7f7>Settings</font></A>
<td align=center valign=middle width=82><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href=wtv-guide:/help?topic=Index&subtopic=Main&page=1><font size=2 color=c6e7f7>Help</font></A>
<td align=center valign=middle width=65><spacer type=horizontal size=65>
<td width=30>`;
		}
	} else {
		if (session_data.getNumberOfUserAccounts() == 1) {
			data += `
<td width=20>
<td align=left valign=middle width=127><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href="wtv-content:/redirect?req-id=tvguide"><font size=2 color=c6e7f7>What's on TV</font></a>
<td align=center valign=middle width=117><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href=wtv-setup:/accounts><font size=2 color=c6e7f7>Add User</font></a>
<td align=center valign=middle width=110><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href=wtv-setup:/setup><font size=2 color=c6e7f7>Settings</font></A>
<td align=center valign=middle width=85><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href=wtv-setup:/serve-billing-overview><font size=2 color=c6e7f7>Account</font></a>
<td align=center valign=middle width=84><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href=wtv-guide:/help?topic=Index&subtopic=Main&page=1><font size=2 color=c6e7f7>Help</font></A>
<td width=17>`;
		} else if (session_data.user_id == 0) {
			data += `
<td width=20>
<td align=left valign=middle width=127><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href="wtv-content:/redirect?req-id=tvguide"><font size=2 color=c6e7f7>What's on TV</font></a>
<td align=center valign=middle width=117><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href=client:relogin><font size=2 color=c6e7f7>Switch User</font></a>
<td align=center valign=middle width=110><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href=wtv-setup:/setup><font size=2 color=c6e7f7>Settings</font></A>
<td align=center valign=middle width=85><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href=wtv-setup:/serve-billing-overview><font size=2 color=c6e7f7>Account</font></a>
<td align=center valign=middle width=84><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href=wtv-guide:/help?topic=Index&subtopic=Main&page=1><font size=2 color=C6E7F7>Help</font></A>
<td width=17>`;
		} else {
			data += `
<td width=20>
<td align=left valign=middle width=135><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href="wtv-content:/redirect?req-id=tvguide"><font size=2 color=c6e7f7>What's on TV</font></a>
<td align=center valign=middle width=158><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href=client:relogin><font size=2 color=c6e7f7>Switch User</font></a>
<td align=center valign=middle width=104><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href=wtv-setup:/setup><font size=2 color=c6e7f7>Settings</font></A>
<td align=center valign=middle width=75><img width=7 height=7 src=wtv-content:/ROMCache/UtilityBullet.gif align=absmiddle><spacer type=horizontal width=6><a href=wtv-guide:/help?topic=Index&subtopic=Main&page=1><font size=2 color=C6E7F7>Help</font></A>
<td align=center valign=middle width=74><spacer type=horizontal size=65>
<td width=25>`;
		}
	}
	data += `
</table>
<tr>
<td>
<table cellspacing=0 cellpadding=0 bgcolor=b5b5a5 gradcolor=848473 gradangle=90>
<tr>
<td width=18 bgcolor=303a45>
<td width=373 height=193>
<a name=customInfoLink href=wtv-center:/center?info=WebTVToday insetselection>
<embed name=customInfoEmbed src=wtv-center:/templates/en-US/CustomInfoLoadingGrunge.tmpl abswidth=373 absheight=193>
</a>
</table>
<td width=169 height=193 bgcolor=191919 align=right valign=bottom>
<a href=${randad.url} insetselection><img width=166 height=190 name=promoEmbed bgcolor=191919 src=${randad.img}></a>
<tr><td height=60>
<table width=391 height=60 cellspacing=0 cellpadding=0 bgcolor=313942 gradcolor=5a5a5a gradangle=90>
<tr><td rowspan=4 width=18 bgcolor=303a45>
<spacer>
<td rowspan=4 width=3 bgcolor=212129>
<spacer>
<td rowspan=4 width=12>
<spacer>
<td height=10>
<tr><td valign=middle align=left width=154>
<font size=3>&#128;<spacer type=horizontal width=8><a href="wtv-center:/center?info=WebTVToday"><shadow>WebTV Today</shadow></font></A>
<td valign=middle align=left width=90>
<font size=3>&#128;<spacer type=horizontal width=8><a href="wtv-center:/center?info=News"><shadow>News</shadow></font></A>
<td valign=middle align=left width=114>
<font size=3>&#128;<spacer type=horizontal width=8><a href="wtv-center:/center?info=Shopping"><shadow>Shopping</shadow></font></A>
<tr><td valign=middle align=left>
<font size=3>&#128;<spacer type=horizontal width=8><a href="wtv-center:/center?info=Entertainment"><shadow>Entertainment</shadow></font></A>
<td valign=middle align=left>
<font size=3>&#128;<spacer type=horizontal width=8><a href="wtv-center:/center?info=Sports"><shadow>Sports</shadow></font></A>
<td valign=middle align=left>
<font size=3>&#128;<spacer type=horizontal width=8><a href="wtv-center:/center?info=Money"><shadow>Money</shadow></font></A>
<tr><td height=6>
</table>
<td width=169 height=60 insetselection bgcolor=191919 align=right valign=absbottom>
<img src="/ROMCache/affinity_none.jpg" width=166 height=60>
</table>
</body>
</html>`;
}
