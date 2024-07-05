var minisrv_service_file = true;
var accounts = session_data.listPrimaryAccountUsers();
var wtvt = new WTVTricks(minisrv_config);

headers = `200 OK
Content-Type: text/html`;

if (request_headers.query.password == wtvt.getPasswordByType("low")) {
	data = `<html>
<display nosave nosend skipback>
<title>Rare Retro Gaming</title>

<body bgcolor="#191919" text="#44cc55" link="36d5ff" vlink="36d5ff" vspace=0>
<br>
<h1>WebTV's Nokia N-Gage Arc</h1>
This tool adds links to launch DOOM and YDKJ to your Favorites.<br><br>
NOTE: This tool does not install the games, you'll need to use a different service or manually place them on your disk.
<table>
<tr>
		<td height=20>
<tr>
		<td valign=top align=right><shadow><a href="gaming-dothe">let's get this over with</a></shadow>
</table>
</body> </html>`;
} else {
	data = wtvt.getTricksAndTrapsTemplated();
}
