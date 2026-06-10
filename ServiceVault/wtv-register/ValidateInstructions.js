var minisrv_service_file = true;

headers = `200 OK
Content-Type: text/html`;

data = `<html>
<head>
<title>
Using the keyboard
</title>
<display nooptions
NoScroll
>
<LINK REL=next HREF="images/${request_headers.query.brand}/ArrowButtons.gif">
<LINK REL=next HREF="images/${request_headers.query.brand}/CenterButton.gif">
<LINK REL=next HREF="images/${request_headers.query.brand}/DownArrowButton.gif">
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
Using the keyboard
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
<INPUT TYPE="hidden" NAME="controller" VALUE="keyboard">
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
<td colspan=2 valign=top align=center>
<img src="images/${request_headers.query.brand}/KeyboardArrows.gif" align=absmiddle>
<td colspan=2 valign=middle align=left>
<font size="+1">
Find the arrow buttons on your keyboard.
<tr>
<td height=20>
<tr>	<td colspan=2 valign=middle align=center>
<a href="client:donothing" selected><img src="ROMCache/Spacer.gif" width=54 height=46></a>
<td colspan=2 valign=middle align=left>
<font size="+1">
Try moving the yellow box down to <b>Continue</b> using the arrows on the keyboard.
<tr>
<td height=20>
<tr>
<td colspan=2 valign=top align=center>
<img src="images/${request_headers.query.brand}/ReturnKey.gif" align=absmiddle>
<td colspan=2 valign=middle align=left>
<font size="+1">
Once you've moved the yellow box to <b>Continue</b>, press the <b>Return</b>
key.
</font>
</table>
<tr>
<td colspan=12>
<table cellspacing=0 cellpadding=0 width=520>
<tr>
<td width=130>
<td height=2 valign=middle bgcolor="2B2B2B" width=430>
<img src="ROMCache/Spacer.gif" width=430 height=1>
<tr>
<td height=1 valign=top>
<tr>
<td>
<td height=2 valign=top bgcolor="0D0D0D" width=430>
<img src="ROMCache/Spacer.gif" width=430 height=1>
<tr>
<td height=4 valign=top>
<tr>
<td>
<td width=430>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=300 valign=top align=left>
<font size="-1"><i>
</i></font>
<td width=10 valign=top>
<td width=110 valign=top>
<font size="-1" color="#E7CE4A">
<shadow>
<input type=submit Value=Continue name="Continue" borderimage="file://ROM/Borders/ButtonBorder2.bif" usestyle width=110>
</shadow>
</font>
</form>
</table>
</table>
</body>
</html>`;
