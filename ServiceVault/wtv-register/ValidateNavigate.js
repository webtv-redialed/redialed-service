var minisrv_service_file = true;

headers = `200 OK
Content-Type: text/html`;

data = `<html>
<head>
<title>
Sign up with keyboard
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
Sign up with keyboard
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
<form action="ValidateInstructions"
ENCTYPE="x-www-form-encoded" METHOD="POST">
<INPUT TYPE="hidden" NAME="wants-byoisp" VALUE="">
<INPUT TYPE="hidden" NAME="brand" VALUE="${request_headers.query.brand}">
<INPUT TYPE="hidden" NAME="correcting" VALUE="">
<INPUT TYPE="hidden" NAME="controller" VALUE="keyboard">
<INPUT TYPE="hidden" NAME="any-promotions" VALUE="">
<INPUT TYPE="hidden" NAME="program-enrollment-code" VALUE="">
<INPUT TYPE="hidden" NAME="payment-method" VALUE="">
<INPUT TYPE="hidden" NAME="subscriber-name-first" VALUE="">
<INPUT TYPE="hidden" NAME="subscriber-name-last" VALUE="">
<INPUT TYPE="hidden" NAME="subscriber-billing-address" VALUE="">
<INPUT TYPE="hidden" NAME="subscriber-billing-city" VALUE="">
<INPUT TYPE="hidden" NAME="subscriber-billing-state" VALUE="">
<INPUT TYPE="hidden" NAME="subscriber_billing_zip" VALUE="">
<INPUT TYPE="hidden" NAME="subscriber_phone_day" VALUE="">
<INPUT TYPE="hidden" NAME="subscriber_card_number" VALUE="">
<INPUT TYPE="hidden" NAME="subscriber_card_expires" VALUE="">
<INPUT TYPE="hidden" NAME="subscriber-card-type" VALUE="">
<INPUT TYPE="hidden" NAME="subscriber-card-type-backup" VALUE="">
<INPUT TYPE="hidden" NAME="credit-or-debit" VALUE="">
<INPUT TYPE="hidden" NAME="routing-number" VALUE="">
<INPUT TYPE="hidden" NAME="checking-account-number" VALUE="">
<INPUT TYPE="hidden" NAME="user-name" VALUE="">
<INPUT TYPE="hidden" NAME="subscriber-password" VALUE="">
<INPUT TYPE="hidden" NAME="subscriber-password2" VALUE="">
<INPUT TYPE="hidden" NAME="new-subscriber-id" VALUE="">
<INPUT TYPE="hidden" NAME="ccauth-trans-id" VALUE="">
<INPUT TYPE="hidden" NAME="send-on-my-address" VALUE="">
<INPUT TYPE="hidden" NAME="smart-card-sign-up" VALUE="">
<INPUT TYPE="hidden" NAME="payment-alterations" VALUE="">
<INPUT TYPE="hidden" NAME="next-destination" VALUE="">
<INPUT TYPE="hidden" NAME="new-subscriber-id" VALUE="">
<INPUT TYPE="hidden" NAME="step-order" VALUE="">
<INPUT TYPE="hidden" NAME="subscriber-age" VALUE="">
<INPUT TYPE="hidden" NAME="subscriber-sex" VALUE="">
<INPUT TYPE="hidden" NAME="subscriber-has-computer" VALUE="">
<INPUT TYPE="hidden" NAME="subscriber-has-internet" VALUE="">
<INPUT TYPE="hidden" NAME="subscriber-has-isp" VALUE="">
<INPUT TYPE="hidden" NAME="other-members-of-household" VALUE="">
<INPUT TYPE="hidden" NAME="is-etv-upgrading" VALUE="">
<INPUT TYPE="hidden" NAME="remote-type" VALUE="">
<input type=hidden name=whatnot
>
<tr>
<td colspan=12 height=258 valign=top align=left>
<table cellspacing=0 cellpadding=0>	<tr>
<td width=104>
<td width=20>
<td width=374>
<td width=20>
<td width=20>
<td width=20>
<tr>
<td colspan=2 valign=top align=left>
<td colspan=3 valign=top align=left>	<font size="+1">
You can use
your keyboard
to sign up for the WebTV service.
<p>
If you
don't
have a wireless keyboard, press <b><font size=-1>BACK</font></b> to
go to the previous screen and make your selection again.
<p>
The yellow box is on <b>Continue</b>.
</font>
<p>
<tr>
<td colspan=2 valign=middle align=center>
<img src="images/${request_headers.query.brand}/ReturnKey.gif" align=absmiddle>
<td colspan=2 valign=top align=left>
<font size="+1">
<p>Press <b>Return</b>
to continue, using your wireless keyboard.
</font>
<td width=20 valign=middle align=center>
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
