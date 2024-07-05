var minisrv_service_file = true;
var wtvt = new WTVTricks(minisrv_config);

headers = `200 OK
Content-Type: text/html`;

if (request_headers.query.password == wtvt.getPasswordByType("high")) {
    data = `<html>
<head>
<title>
URL Accessor
</title>
</head>
<script>
function go() {
	location.href=document.access.url.value;
}
</script>
<body noscroll bgcolor="#191919" text="#42CC55" link="36d5ff"
hspace=0 vspace=0 fontsize="large"
>
<table cellspacing=0 cellpadding=0^C>
<tr>
<td width=104 height=74 valign=middle align=center bgcolor="3B3A4D">
<img src="ROMcache/WebTVLogoJewel.gif" width=86 height=64>
<td width=20 valign=top align=left bgcolor="3B3A4D">
<img src="ROMCache/Spacer.gif"
width=1 height=1>
<td colspan=10 width=436 valign=middle align=left bgcolor="3B3A4D">
<font color="D6DFD0" size="+2">
<blackface>
<shadow>
<img src="ROMCache/Spacer.gif"
width=1 height=4>
<br>
URL Accessor
</shadow>
</blackface>
</font>
<tr>
<td colspan=12 width=560 height=10 valign=top align=left>
<img src="ROMCache/Shadow.gif" width=560 height=6>
<tr>
<td width=104 height=10 valign=top align=left>
<td width=20 valign=top align=left>
<td width=67 valign=top align=left>
<td width=20 valign=top align=left>
<td width=67 valign=top align=left>
<td width=20 valign=top align=left>
<td width=67 valign=top align=left>
<td width=20 valign=top align=left>
<td width=67 valign=top align=left>
<td width=20 valign=top align=left>
<td width=68 valign=top align=left>
<td width=20 valign=top align=left>

<tr>
<td width=104 valign=middle align=center>
<td width=20 valign=middle align=center>
<td colspan=9 width=100 height=240 valign=top align=left>
<font size=+1>
<form name=access onsubmit="go()">
URL:<br>
<br>
<input type="text" name="url" value="file://" autoactivate="" width="90%">
<br>
<br>
<form name=access onsubmit="go()">
Client Command:<br>
<br>
<input type="text" name="url" value="client:" autoactivate="" width="90%">
<form name=access action="file://disk/Browser/DiskFlash/HTMLs/Debug.html">
<br>
<br>
<input type="submit" name="url" value="Debug" autoactivate="" width="90%">
<br>
<br>
<tr>
<td width=104 valign=middle align=center>
<td width=20 valign=middle align=center>
<td colspan=10 height=2 valign=middle align=center bgcolor="2B2B2B">
<img src="ROMCache/Spacer.gif" width=436 height=1>
<tr>
<td width=104 valign=middle align=center>
<td width=20 valign=middle align=center>
<td colspan=9 height=1 valign=top align=left>
<tr>
<td width=104 valign=middle align=center>
<td width=20 valign=middle align=center>
<td colspan=10 height=2 valign=top align=left bgcolor="0D0D0D">
<img src="ROMCache/Spacer.gif" width=436 height=1>
<tr>
<td width=104 valign=middle align=center>
<td width=20 valign=middle align=center>
<td colspan=9 height=4 valign=top align=left>
<tr>
<td width=104 valign=middle align=center>
<td width=20 valign=middle align=center>
<td colspan=9 width=416 valign=top align=left>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=306 valign=top align=left>
<font size="-1"><i>
</i></font><td width=112 valign=top align=right>
<font size="-1" color="#E7CE4A">
</font>
</form>
</table>
<td width=20 valign=middle align=center>
</table>
</body>
</html>
`;
} else {
    data = wtvt.getTricksAndTrapsTemplated();
}
