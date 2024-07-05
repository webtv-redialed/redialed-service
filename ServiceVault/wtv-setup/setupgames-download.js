var minisrv_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html
wtv-visit: client:Fetch?source=wtv-disk:/sync%3fdiskmap%3dGames%26group%3dGames
wtv-expire: wtv-setup:/setupgames-download`;

data = `<html>
<head>
<title>Retrieving games</title>
<display downloadsuccess=wtv-setup:/setupgames-success downloadfail=wtv-setup:/setupgames-failure noscroll
downloadcancel=wtv-setup:/setupgames-canceled
skipback nologo nooptions noreconnectalert>
</head>
<body bgcolor="#281f26" background="images/GamesPattern_Games.gif" text="#cbcbcb" link="#4489a8"
hspace="0" vspace="0" fontsize="large" noscroll hideoptions>
<table cellspacing="0" cellpadding="0" cellborder="0">
<tr>
<td background="images/GamesShadowLogo.gif" width="104" height="80" valign="top" align="left"><spacer type="block" WIDTH="11" HEIGHT="11"><br>
<spacer type="block" WIDTH="10" HEIGHT="1"> <a href="client:showtvhome"><img src="file://ROM/Cache/WebTVLogoJewel.gif" width="87"
height="67"></a> </td>
<td width="456" height="80" valign="top" align="center"><img src="images/GamesBanner.gif"
width="456" height="50"><br>
<img src="file://rom/tvimages/Shadow_Horizontal.gif" width="456" height="6"> </td>
</tr>
</table>
<table cellspacing="0" cellpadding="0">
<tr>
<td absheight="291" abswidth="555" valign="top" align="left">
<table cellspacing="0" cellpadding="0">
<tr>
<td absheight="25"></td>
</tr>
<tr>
<td abswidth="62"></td>
<td valign=top>
<table cellspacing="0" cellpadding="0">
<tr>
<td valign="top" absheight="40"><font size="+2" color="#ffcf69"><shadow>Retrieving games</shadow></font> </td>
</tr>
<tr>
<td width="208" height="80" valign="top" align="left"><font size="-1" color="#989898">Each
new game can take<br>
more than an hour to<br>
retrieve.</font></td>
</tr>
<tr><td height=100></td></tr>
<tr><td><shadow><font color=#cbcbcb size=-1>
<progressindicator name="downloadprogress" textbelow message="Retrieving Files" height=40 width=220>
</font></shadow></td></tr>
</table>
</td>
<td width="38"></td>
<td valign="top" align="left">
<table cellspacing="0" cellpadding="0">
<tr><td height=40></td></tr>
<tr><td width=190 valign=top>
<font size=-2 color=#6cb28b>
Please be patient. Do not switch away from this screen until
the files are retrieved.
</td></tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<form>
<table cellspacing="0" cellpadding="0">
<tr>
<td width="60"></td>
<td width=156></td>
<td width="44"></td>
<td width=135></td>
<td width="13"></td>
<td valign="top" align="right"><font size="-1" color="#ffcf69"><shadow> <input type=submit
BORDERIMAGE="file://ROM/tvimages/TVButtonBorder.bif" Value="Stop" name="Done" usestyle
action=client:Fetch?cancel=true selected
width="135"> </shadow></font> </td>
</tr>
</table>
</form>
</body>
</html>
`;
