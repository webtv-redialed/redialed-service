var wtvrsvc_service_file = true;

headers = `200 OK
Content-Type: text/html`;

data = `<html>
<head>
<title>
${request_headers.query.brand == "SegaFiji" ? `Gamepad or keyboard?` : `Do you have a keyboard?`}
</title>
<display nooptions
NoScroll
>
<LINK REL=next HREF="images/${request_headers.query.brand}/CenterButton.gif">
<LINK REL=next HREF="images/${request_headers.query.brand}/KeyboardArrows.gif">
</head>
<body noscroll bgcolor="#191919" text="#42CC55" link="36d5ff"
hspace=0 vspace=0 fontsize="${session_data.isJapaneseClient() ? `medium` : `large`}"
>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=104 height=74 valign=middle align=center bgcolor="3B3A4D">
<img src="wtv-register:/ROMCache/WebTVLogoJewel.gif" width=87 height=67>
<td width=20 valign=top align=left bgcolor="3B3A4D">
<img src="ROMCache/Spacer.gif" width=1 height=1>
<td colspan=10 width=436 valign=middle align=left bgcolor="3B3A4D" >
<font color="D6DFD0" size="+2">
<blackface>
<shadow>
<img src="ROMCache/Spacer.gif" width=1 height=4>
<br>
${request_headers.query.brand == "SegaFiji" ? `Gamepad or keyboard?` : `Do you have a keyboard?`}
</shadow>
</blackface>
</font>
<tr>
<td colspan=12 width=560 height=10 valign=top align=left>
<img src="images/Shadow.gif" width=560 height=6>
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
<form action="ValidateController"
ENCTYPE="x-www-form-encoded" METHOD="POST">
<INPUT TYPE="hidden" NAME="brand" VALUE="${request_headers.query.brand}">
<INPUT TYPE="hidden" NAME="controller" VALUE="remote">
<INPUT TYPE="hidden" NAME="subscriber-sex" VALUE="not likely">
<input type=hidden name=whatnot
>
<tr>
<td colspan=12 height=258 valign=top align=left>
<table cellpadding=0 cellspacing=0>
<tr>
<td width=104>
<td width=20>
<td width=374>
<td width=20>
<td width=20>
<td width=20>
<tr>
<td colspan=2 valign=top align=center>	<td valign=middle align=left>
<font size="+1">
${request_headers.query.brand == "SegaFiji" ? `Do you want to use the gamepad or the keyboard to sign up for WebTV?` : `Do you have a wireless keyboard for your Internet terminal?`}
<tr>
<td height=20>
<tr> <td colspan=2 valign=middle align=center>
<td valign=middle align=left>
<font size="+1">
Move the yellow box to your choice, then press the ${request_headers.query.brand == "SegaFiji" ? `"A" (Go)` : `center`}
<img src="images/${request_headers.query.brand}/CenterButton.gif" align=absmiddle>
button.
</table>
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
<td width=286 valign=top align=left>
<font size="-1">
<td width=130 valign=top align=right>
<font size="-1" color="#E7CE4A">
<shadow>
<input name="use_remote" width="205"
value="${request_headers.query.brand == "SegaFiji" ? `Gamepad` : `Don't Have Keyboard`}" type=submit borderimage="file://ROM/Borders/ButtonBorder2.bif" usestyle width=110>
</shadow>
</font>
<td width=130 valign=top align=right>
<font size="-1" color="#E7CE4A">
<shadow>
<input selected
name="use_keyboard" width="160"
value="`;
if (request_headers.query.brand !== "SegaFiji") data += `Have `
data += `Keyboard"
type=submit action="ValidateNavigate?brand=${request_headers.query.brand}" borderimage="file://ROM/Borders/ButtonBorder2.bif" usestyle width=110>
</shadow>
</font>
</form>
</table>
<td width=20 valign=middle align=center>
</table>
</body>
</html>`;
