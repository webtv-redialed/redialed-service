var minisrv_service_file = true;
var errpage = null;

const wtvr = new WTVRegister(minisrv_config, SessionStore);
const nonoWords = wtvshared.getDynamicConfig(`nonoWords`);
const reservedWords = wtvshared.getDynamicConfig(`reservedWords`);
var lowerusername = request_headers.query.user_name.toLowerCase();

if (session_data.user_id != 0)
    errpage = wtvshared.doErrorPage(
        400,
        "You are not authorized to add users to this account."
    );
else if (!request_headers.query.user_name)
    errpage = doErrorPage(400, "You must choose an Internet Name.");
else if (nonoWords.some((v) => lowerusername.includes(v)))
    errpage = wtvshared.doErrorPage(
        400,
        "Your Internet Name contains a bad word. Please change it and try again."
    );
else if (reservedWords.some((v) => lowerusername.includes(v)))
    errpage = wtvshared.doErrorPage(
        400,
        "That Internet Name is reserved. Please choose another one."
    );
else if (request_headers.query.user_name.length < 5)
    errpage = wtvshared.doErrorPage(
        400,
        "Please choose an Internet name with 5 or more characters."
    );
else if (request_headers.query.user_name.length > 16)
    errpage = wtvshared.doErrorPage(
        400,
        "Please choose an Internet Name with 16 or less characters."
    );
else if (!wtvr.checkUsernameSanity(request_headers.query.user_name))
    errpage = wtvshared.doErrorPage(
        400,
        "You can only use letters, numbers, hyphens, and underscores in your Internet Name. It must also begin with a letter."
    );
else if (!wtvr.checkUsernameAvailable(request_headers.query.user_name))
    errpage = wtvshared.doErrorPage(
        400,
        "That Internet Name is already in use. Please choose another one."
    );
else if (
    session_data.getNumberOfUserAccounts() >
    minisrv_config.config.user_accounts.max_users_per_account
)
    errpage = wtvshared.doErrorPage(
        400,
        "You are not authorized to add more than " +
        minisrv_config.config.user_accounts.max_users_per_account +
        ` account${
            minisrv_config.config.user_accounts.max_users_per_account > 1 ? "s" : ""
        }.`
    );

if (!errpage) {
    if (request_headers.query.user_password) {
        if (
            request_headers.query.user_password.length <
            minisrv_config.config.passwords.min_length
        )
            errpage = wtvshared.doErrorPage(
                400,
                "Your password must contain at least " +
                minisrv_config.config.passwords.min_length +
                " characters."
            );
    } else {
        if (
            request_headers.query.user_password.length >
            minisrv_config.config.passwords.max_length
        )
            errpage = wtvshared.doErrorPage(
                400,
                "Your password must contain no more than than " +
                minisrv_config.config.passwords.max_length +
                " characters."
            );
        else if (
            request_headers.query.user_password !==
            request_headers.query.user_password2
        )
            errpage = wtvshared.doErrorPage(
                400,
                "The passwords you entered did not match. Please check them and try again."
            );
    }
}

var month = request_headers.query.subscriber_birth_month;
var day = request_headers.query.subscriber_birth_date;

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
Connection: Keep-Alive
Content-Type: text/html`;

    data = `<HTML>
<HTML>
<HEAD>
<TITLE>
Adding a User
</TITLE>
<DISPLAY nosave
noscroll>
</HEAD>
<sidebar width=110> <table cellspacing=0 cellpadding=0 BGCOLOR="30364D">
<tr>
<td colspan=3 abswidth=104 absheight=4>
<td rowspan=99 width=6 absheight=420 valign=top align=left>
<img src="wtv-home:/ROMCache/Shadow.gif" width=6 height=420>
<tr>
<td abswidth=6>
<td abswidth=92 absheight=76>
<table href="wtv-home:/home" absheight=76 cellspacing=0 cellpadding=0>
<tr>
<td align=right>
<img src="${minisrv_config.config.service_logo}" width=87 height=67>
</table>
<td abswidth=6>
<tr><td absheight=5 colspan=3>
<table cellspacing=0 cellpadding=0>
<tr><td abswidth=104 absheight=2 valign=middle align=center bgcolor="1C1E28">
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<tr><td abswidth=104 absheight=1 valign=top align=left>
<tr><td abswidth=104 absheight=2 valign=top align=left bgcolor="4D5573">
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
</table>
<tr><td absheight=37>
<tr><td absheight=263 align=right colspan=3>
<img src="ROMCache/AccountBanner.gif" width=53 height=263>
<tr><td absheight=41>
</table>
</sidebar>
<BODY BGCOLOR="#191919" TEXT="#44cc55" LINK="189CD6" VLINK="189CD6" HSPACE=0 VSPACE=0 FONTSIZE="${session_data.isJapaneseClient() ? `medium` : `large`}"
>
<table cellspacing=0 cellpadding=0>
<tr>
<td abswidth=14>
<td abswidth=416 absheight=80 valign=center>
<font size="+2" color="E7CE4A"><blackface><shadow>
User restrictions
<td abswidth=20>
<tr>
<td>
<td absheight=244 valign=top align=left>
<form action="wtv-setup:/validate-add-user">
<INPUT TYPE="hidden" NAME="user_human_name_first" VALUE="${
        request_headers.query.user_human_name_first || ""
    }">
<INPUT TYPE="hidden" NAME="user_human_name_last" VALUE="${
        request_headers.query.user_human_name_last || ""
    }">
<INPUT TYPE="hidden" NAME="user_name" VALUE="${
        request_headers.query.user_name
    }">
  <INPUT TYPE="hidden" NAME="user_password" VALUE="${
        request_headers.query.user_password
    }">
<INPUT TYPE="hidden" NAME="user_password2" VALUE="${
        request_headers.query.user_password2
    }">
  <INPUT TYPE="hidden" NAME="subscriber_birth_month" VALUE="${
        request_headers.query.subscriber_birth_month
    }">
  <INPUT TYPE="hidden" NAME="subscriber_birth_date" VALUE="${
        request_headers.query.subscriber_birth_date
    }">
<table cellspacing=0 cellpadding=0 border=0>
<tr>
<td align=left valign=top abswidth=198>
<table cellspacing=0 cellpadding=0>
<tr>
<td align=left>
Allow access to all<br>
pages
<p><img src="wtv-setup:/images/surfwatch.gif"><br>
Restrict access to<br>
mature material
</a>
</table>
</td>
<td align=left valign=top width=6>
</td>
<td align=left valign=top abswidth=210>
<table>
<tr valign=top>
<td>
<input name=restricted_web_access type=radio bgcolor=#444444 value="unrestricted-access" selected checked>
<td>
Unrestricted<br>access
<tr><td height=16>
<tr valign=top>
<td>
<input name=restricted_web_access type=radio bgcolor=#444444 value="surfwatch-screening">
<td>
SurfWatch&#153;<br>screening
</table>
</table>
<td>
<tr>
<td absheight=7>
<tr>
<td>
<td colspan=2 absheight=2 bgcolor="2B2B2B">
<img src="wtv-home:/ROMCache/Spacer.gif" width=426 height=1>
<tr>
<td absheight=1>
<tr>
<td>
<td colspan=2 absheight=2 bgcolor="0D0D0D">
<img src="wtv-home:/ROMCache/Spacer.gif" width=426 height=1>
<tr>
<td absheight=4>
</table>
<table cellspacing=0 cellpadding=0>
<tr>
<td abswidth=430 valign=top align=right>
<font color="#E7CE4A" size=-1><shadow>
<input
selected
type=submit borderimage="file://ROM/Borders/ButtonBorder2.bif"
value=Continue name="Continue" usestyle width=103>
</shadow></font></form>
<td abswidth=20>
</table>
      </body>
</html>`;
}