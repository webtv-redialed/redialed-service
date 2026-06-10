var minisrv_service_file = true;

const clubWebTVTitle = fs.readFileSync(
		"./ServiceDeps/clubWebTVTitle.txt",
		{encoding: "utf8", flag: "r"}
	);

headers = `200 OK`

data = `<html>
		<head><display info=WebTVToday teaser1=WebTVToday></head>
		<body background="wtv-content:/ROMCache/BackgroundCorner.gif" bgcolor=949484 onLoad="Initialize()">
			<table cellspacing=0 cellpadding=0 width=357 height=193 background="wtv-content:/ROMCache/BackgroundWebTVToday_a.swf" valign=top novtilebg>
			<tr><td colspan=2 width=357 height=44><spacer>
			<tr><td width=12><spacer>
				<td valign=top align=left width=361 height=149><spacer><table cellspacing=0 cellpadding=0>
			<tr height=40><td width=88><spacer type=block width=88 height=40>
				<td width=263>
				<td width=10>

		<tr height=60>
			<td width=88><spacer type=block width=88 height=60>
			<td maxlines=2 valign=top align=left width=263>
				<table cellspacing=0 cellpadding=0>
					<tr><td valign=top maxlines=2><font size=+2 color=0><b>${clubWebTVTitle}</b></font>
				</table>
			<td width=10>
		<tr height=49>
			<td width=88>
			<spacer type=block width=88 height=49>
			<td width=263 valign=middle align=right>
				<font size=-1 color=563333><b>find out more in WebTV Today</b></font>
			<td width=10>
			</table>
		</table>
	</body>
</html>`