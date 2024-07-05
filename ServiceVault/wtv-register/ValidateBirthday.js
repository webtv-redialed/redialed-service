var minisrv_service_file = true;

if (!request_headers.query.registering) {
    var errpage = wtvshared.doErrorPage(400);
    headers = errpage[0];
    data = errpage[1];
} else {
    var wtvr = new WTVRegister(minisrv_config, SessionStore);
    var errpage = null;
    var month = request_headers.query.subscriber_birth_month;
    var day = request_headers.query.subscriber_birth_date;
    console.log(month);
    console.log(day);

    if (month >= 0 && month <= 11 && day >= 1 && day <= 31) {
        if (month == 1 && day > 28) {
            day == 28;
        }
    } else {
        var errpage = wtvshared.doErrorPage(400);
        headers = errpage[0];
        data = errpage[1];
    }

    if (errpage) {
        headers = errpage[0];
        data = errpage[1];
    } else {
        headers = `200 OK
Content-Type: text/html`;

        data = `<html>
<head>
<title>
WebTV Service Agreement
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
Service agreement
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
<form action="ValidateAgreeIntro"
ENCTYPE="x-www-form-encoded" METHOD="POST">
<INPUT TYPE="hidden" NAME="registering" VALUE="true">
<INPUT TYPE="hidden" NAME="brand" VALUE="${request_headers.query.brand}">
<INPUT TYPE="hidden" NAME="controller" VALUE="${request_headers.query.controller}">
<INPUT TYPE="hidden" NAME="subscriber_first_name" VALUE="${request_headers.query.subscriber_first_name}">
<INPUT TYPE="hidden" NAME="subscriber_last_name" VALUE="${request_headers.query.subscriber_last_name}">
<INPUT TYPE="hidden" name="subscriber_username" VALUE="${request_headers.query.subscriber_username}">
<INPUT TYPE="hidden" name="subscriber_birth_month" VALUE="${request_headers.query.subscriber_birth_month}">
<INPUT TYPE="hidden" name="subscriber_birth_date" VALUE="${request_headers.query.subscriber_birth_date}">
<INPUT TYPE="hidden" NAME="subscriber-sex" VALUE="not likely">
<input type=hidden name=whatnot>
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
</a>
<td valign=middle align=left>
<font size="+1">
By signing up for regular WebTV 
service, you are entering an agreement 
with WebTV Networks, Inc.
<tr>
<td height=20>
<tr>	<td colspan=2 valign=middle align=center>
<td colspan=2 valign=middle align=left>
<font size="+1">
The next page presents the terms 
for your review.
<tr>
<td height=20>
<tr>	<td colspan=2 valign=middle align=center>
<td colspan=2 valign=middle align=left>
<font size="+1">
You can re-read the agreement at 
any time while you are connected to 
WebTV.
<tr>
<td height=20>
<tr>
<td colspan=2 valign=top align=center>
<td colspan=3 valign=middle align=left>
<font size="+1">
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
<font size="-1"><i>To go on, ${request_headers.query.controller == "keyboard" ? `press <b>Return</b>.` : `highlight <b>Continue</b> and<br>press the ${request_headers.query.brand == "SegaFiji" ? `"A" (Go)` : `center`} <img src=images/${request_headers.query.brand}/CenterButton.gif> button.`}
</i></font>
<td width=10 valign=top>
<td width=110 valign=top>
<font size="-1" color="#E7CE4A">
<shadow>
<input type=submit Value=Continue name="Continue" borderimage="file://ROM/Borders/ButtonBorder2.bif" usestyle width=110>
</shadow>
</font>	</form>	</tr>	</table>
</shadow>
</font>
</form>
</table>
</table>
</body>
</html>`;
    }
}
