var wtvrsvc_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;

data = `<HTML>
<HEAD>
<TITLE>
Game choices
</TITLE>
<body bgcolor="#281f26" background="wtv-setup:/images/GamesPattern_Games.gif" text="#cbcbcb" link="#4489a8"
hspace="0" vspace="0" fontsize="large" noscroll hideoptions>
<table cellspacing="0" cellpadding="0" cellborder="0">
<tr>
<td background="wtv-setup:/images/GamesShadowLogo.gif" width="104" height="80" valign="top" align="left"><spacer type="block" WIDTH="11" HEIGHT="11"><br>
<spacer type="block" WIDTH="10" HEIGHT="1">    <a href="wtv-home:/home"><img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width="87"
height="67"></a> </td>
<td width="456" height="80" valign="top" align="center"><img src="wtv-setup:/images/GamesBanner.gif"
width="456" height="50"><br>
<img src="file://rom/tvimages/Shadow_Horizontal.gif" width="456" height="6"> </td>
</tr>
</table>
<form action=/validate-setupgames>
<input type=hidden autosubmit=onleave>
<table cellspacing="0" cellpadding="0">
<tr>
<td absheight="254" abswidth="555" valign="top" align="left">
<table cellspacing="0" cellpadding="0">
<tr>
<td absheight="25"></td>
</tr>
<tr>
<td abswidth="62"></td>
<td valign=top>
<table cellspacing="0" cellpadding="0">
<tr>
<td valign="top" absheight="40"><font size="+2" color="#ffcf69"><shadow>Game choices</shadow></font> </td>
</tr>
<tr>
<td width="208" height="80" valign="top" align="left"><font size="-1" color="#989898">
Check
each game you<br>
want to get, then choose<br>
<b>Continue</b>.<p>
Choose a game title for a<br>
description of the game.
</font></td>
</tr>
</table>
</td>
<td width="38"></td>
<td valign="top" align="left">
<table cellspacing="0" cellpadding="0">
<tr>
<td height="35"></td>
</tr>
<tr>
<td valign="top">
<table cellspacing="0" cellpadding="0"> <tr><td height=7></td></tr>
<tr><td valign="top">
<INPUT TYPE="checkbox" NAME="YDKJ"
VALUE="true"
selected>
</td></tr>
</table>
</td>
<td valign="top"><a HREF="setupgames-AboutJack"><img
src="images/GamesJackLogo.gif"></a> </td>
<td valign="top">
<table cellspacing="0" cellpadding="0"> <tr><td height=9></td></tr>
<tr><td width=18></td><td><img src="images/GamesRatingESRB_T.gif"></td>
</tr>
</table>
</td>
</tr>
<tr>
<td height="15"></td>
</tr>
<tr>
<td valign="top">
<table cellspacing="0" cellpadding="0"> <tr><td height=5></td></tr>
<tr><td valign="top">
<INPUT TYPE="checkbox" NAME="Doom"
VALUE="true"
selected>
</td></tr>
</table>
</td>
<td valign="top"><a HREF="setupgames-AboutDoom"><img
src="images/GamesDoomLogo.gif"></a></td>
<td valign="top">
<table cellspacing="0" cellpadding="0"> <tr><td height=7></td></tr>
<tr><td width=18></td><td><img src="images/GamesRatingESRB_M.gif"></td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<table cellspacing="0" cellpadding="0">
<tr>
<td width="60"></td>
<td width=156></td>
<td width="44"></td>
<td width=135></td>
<td width="13"></td>
<td valign="top" align="right"><font size="-1" color="#ffcf69"><shadow> <input type=submit
BORDERIMAGE="file://ROM/tvimages/TVButtonBorder.bif"
Value="Continue" width=135
name="Continue" usestyle
> </shadow></font> </td>
</tr>
</table>
</form>
</body>
</html>
`;
