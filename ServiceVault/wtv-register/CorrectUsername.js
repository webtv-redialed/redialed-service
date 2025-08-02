var wtvrsvc_service_file = true;

headers = `200 OK
Content-Type: text/html`;

data = `<html>
<head>
<title>
Internet and e-mail name
</title>
<display nooptions
NoScroll
>
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
Internet and e-mail name
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
<form ACTION="ValidateAgreement" ENCTYPE="x-www-form-encoded" METHOD="POST">
<INPUT TYPE="hidden" NAME="registering" VALUE="true">
<INPUT TYPE="hidden" NAME="brand" VALUE="${request_headers.query.brand}">
<INPUT TYPE="hidden" NAME="controller" VALUE="${request_headers.query.controller}">
<INPUT TYPE="hidden" NAME="subscriber_first_name" VALUE="${request_headers.query.subscriber_first_name}">
<INPUT TYPE="hidden" NAME="subscriber_last_name" VALUE="${request_headers.query.subscriber_last_name}">
<input type=hidden name=subscriber_birth_month VALUE="${request_headers.query.subscriber_birth_month}">
<input type=hidden name=subscriber_birth_date VALUE="${request_headers.query.subscriber_birth_date}">
<INPUT TYPE="hidden" NAME="subscriber-sex" VALUE="not likely">
<input type=hidden name=whatnot
>
<tr>
<td colspan=11 width=540 height=258 valign=top align=left>
<table cellspacing=0 cellpadding=0>	<tr>
<td colspan=2 width=124 valign=top align=left>
<td colspan=2 width=416 valign=top align=left>	<font size="+1">
Choose your new e-mail address.
<p>
</font>
<tr>
<td width=121 valign=top align=right>
<img src="ROMCache/Spacer.gif" width=1 height=4><br>
Internet<img src="ROMCache/Spacer.gif" width=7 height=1><br>
name<img src="ROMCache/Spacer.gif" width=7 height=1>
<td width=3 valign=top align=left>
<td width=174 valign=top align=left>
<INPUT noSubmit name="subscriber_username" id="username" Value="${request_headers.query.subscriber_username}"
bgcolor=#444444 text=#ffdd33 cursor=#cc9933
TYPE="text" ASCIIONLY
SIZE="15"
MAXLENGTH="15"><spacer width=8>
<td width=242 valign=top align=left>
<img src="ROMCache/Spacer.gif" width=1 height=4><br>
<tt>@webtv.zone</tt>
<tr>
<td height=12>
<tr>
<td colspan=2 width=124 valign=top align=left>
<td colspan=2 width=416 valign=bottom align=left>	<table cellspacing=0 cellpadding=0>
<tr>
<td align=left colspan=3>
<font size=-1><i>Names have letters and numbers, no spaces.</i><br>
This is your electronic
mail address. It can't be changed later.</font>
<tr>
<td height=10>
<tr>
<td align=right valign=top>
<i><font size=-1>If your name is:</i>
<td width=20>
<td align=left valign=top>
<i><font size=-1>You might choose:</i>
<tr>
<td height=10>
<tr>
<td align=right valign=top>
<font size=-1>Dorothy Parker
<td width=20>
<td align=left valign=top>
<font size=-1>DorothyParker
<tr>
<td height=3>
<tr>
<td align=right valign=top>
<font size=-1>Harriet Beecher Stowe
<td width=20>
<td align=left valign=top>
<font size=-1>HBStowe
<tr>
<td height=3>
<tr>
<td align=right valign=top>
<font size=-1>William Shakespeare
<td width=20>
<td align=left valign=top>
<font size=-1>the-bard
</table>
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
<font size="-1"><i>To go on, ${request_headers.query.controller == "keyboard" ? `press <b>Return</b>.` : `highlight <b>Continue</b> and<br>press the ${request_headers.query.brand == "SegaFiji" ? `"A" (Go)` : `center`} <img src=images/${request_headers.query.brand}/CenterButton.gif> button.`}
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