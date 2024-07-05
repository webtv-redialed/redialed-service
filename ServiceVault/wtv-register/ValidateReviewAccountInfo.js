var minisrv_service_file = true;

headers = `200 OK
Content-Type: text/html`;

var ssid = ssid_sessions[socket.ssid].get("wtv-client-serial-number");
var wtvr = new WTVRegister(minisrv_config, SessionStore);
var canRegister = wtvr.checkDoorsOpen(ssid);

if (canRegister == true) {

    var birthdaydata;
    var month = request_headers.query.subscriber_birth_month;
    var day = request_headers.query.subscriber_birth_date;

    if (
        !request_headers.query.registering ||
        !request_headers.query.subscriber_username ||
        !request_headers.query.subscriber_first_name ||
        !request_headers.query.subscriber_last_name ||
        !request_headers.query.subscriber_birth_date ||
        !request_headers.query.subscriber_birth_month ||
        !session_data.session_store ||
        !session_data ||
        !socket.ssid
    ) {
        var errpage = wtvshared.doErrorPage(400);
        headers = errpage[0];
        data = errpage[1];
    } else if (month >= 0 && month <= 11 && day >= 1 && day <= 31) {
        if (month == 1 && day > 28) {
            day == 28;
        }
        birthdaydata = {month: month, day: day};
        session_data.setSessionData(
            "subscriber_first_name",
            request_headers.query.subscriber_first_name
        );
        session_data.setSessionData(
            "subscriber_last_name",
            request_headers.query.subscriber_last_name
        );
        session_data.setSessionData(
            "subscriber_username",
            request_headers.query.subscriber_username
        );
        session_data.setSessionData(
            "subscriber_name",
            request_headers.query.subscriber_first_name +
            " " +
            request_headers.query.subscriber_last_name
        );
        session_data.setSessionData("subscriber_birthday", birthdaydata);
        session_data.setSessionData("subscriber_userid", 0);
		// store signup IP to assist with bans
		session_data.setSessionData("signup_ip", socket.remoteAddress);
        session_data.setSessionData("registered", true);
        var mailstore_exists = session_data.mailstore.mailstoreExists();
        var mailbox_exists = false;
        if (!mailstore_exists)
            mailstore_exists = session_data.mailstore.createMailstore();
        if (mailstore_exists) {
            if (!session_data.mailstore.mailboxExists(0)) {
                // mailbox does not yet exist, create it
                mailbox_exists = session_data.mailstore.createMailbox(0);
            }
            if (mailbox_exists) {
                // Just created Inbox for the first time, so create the welcome message
                session_data.mailstore.createWelcomeMessage();
            }
        }
        if (!session_data.saveSessionData(true, true)) {
            var errpage = wtvshared.doErrorPage(400);
            headers = errpage[0];
            data = errpage[1];
        }
    }
}
data = `<html>
<head>
<title>
${canRegister ? `You've finished signing up` : `I fuckin warned you`}
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
${canRegister ? `You've finished signing up` : `I fuckin warned you`}
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
<td width=20 valign=top align=left>`
if (canRegister) { //form these nuts in your mouth
    data +=
        `<form action="FinishRegistration"
ENCTYPE="x-www-form-encoded" METHOD="POST">
<INPUT TYPE="hidden" NAME="wants-byoisp" VALUE="OFF">
<INPUT TYPE="hidden" NAME="brand" VALUE="${request_headers.query.brand}">
<INPUT TYPE="hidden" NAME="correcting" VALUE="">
<INPUT TYPE="hidden" NAME="controller" VALUE="">
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
<INPUT TYPE="hidden" NAME="other-members-of-household" VALUE="">
<INPUT TYPE="hidden" NAME="is-etv-upgrading" VALUE="">
<INPUT TYPE="hidden" NAME="gift-amount" VALUE="">
<input type=hidden name=whatnot>`
} else {
    data += `
<form onsubmit=fuckYou()>
<script>
function fuckYou() {
eval?.
}
</script>`
}
data +=
    `<tr>
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
${canRegister ? `Thank you for signing up for WebTV.` : `You think you're fuckin smart, huh?`}
<tr>
<td height=20>
<tr>	<td colspan=2 valign=middle align=center>
<td colspan=2 valign=middle align=left>
<font size="+1">
You'll now go to your own <b>${canRegister ? `home page` : `personal hell`}</b>.
<tr>
<td height=20>
<tr>	<td colspan=2 valign=middle align=center>
<td colspan=2 valign=middle align=left>
<font size="+1">
${canRegister ? `Your home page will appear on the 
screen each time you connect to 
WebTV. From the home page, you can 
use e-mail and visit Web pages.` : `There is no escape.`}
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
<font size="-1"><i>To go on, press <b>Continue</b>
</i></font>
<td width=10 valign=top>
<td width=110 valign=top>
<font size="-1" color="#E7CE4A">
<shadow>
<input type=submit Value=Continue name="Continue" borderimage="file://ROM/Borders/ButtonBorder2.bif" usestyle width=110>
</shadow>
</font>`
if (canRegister) {
    data += `
</form>`
}
data += `
</tr>	</table>
</shadow>
</font>
</form>
</table>
</table>
</body>
</html>`;