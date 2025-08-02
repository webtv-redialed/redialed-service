var wtvrsvc_service_file = true;
var errpage = null;

const wtvr = new WTVRegister(wtvrsvc_config, SessionStore);
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
    wtvrsvc_config.config.user_accounts.max_users_per_account
)
    errpage = wtvshared.doErrorPage(
        400,
        "You are not authorized to add more than " +
        wtvrsvc_config.config.user_accounts.max_users_per_account +
        ` account${
            wtvrsvc_config.config.user_accounts.max_users_per_account > 1 ? "s" : ""
        }.`
    );

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
<img src="${wtvrsvc_config.config.service_logo}" width=87 height=67>
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
Date of birth
<td abswidth=20>
<tr>
<td>
<td absheight=244 valign=top align=left>
<form action="wtv-setup:/add-user-restrictions">
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
<table cellspacing=0 cellpadding=0 border=0>
<tr>
<td align=left valign=top abswidth=198>
<table cellspacing=0 cellpadding=0>
<tr>
<td align=left>
Select this user's date of birth.
<p>You can't change this later.
</a>
</table>
</td>
<td align=left valign=top width=6>
</td>
<td align=left valign=top abswidth=210>
<table cellspacing=0 cellpadding=0>
<tr>
<td colspan=3 align=left>
<select name="subscriber_birth_month">
<option value="0" selected="">January</option>
<option value="1" >February</option>
<option value="2" >March</option>
<option value="3" >April</option>
<option value="4" >May</option>
<option value="5" >June</option>
<option value="6" >July</option>
<option value="7" >August</option>
<option value="8" >September</option>
<option value="9" >October</option>
<option value="10" >November</option>
<option value="11" >December</option>
</select><br><br><select name="subscriber_birth_date">
<option value="1" selected="">1st</option>
<option value="2">2nd</option>
<option value="3">3rd</option>
<option value="4">4th</option>
<option value="5">5th</option>
<option value="6">6th</option>
<option value="7">7th</option>
<option value="8">8th</option>
<option value="9">9th</option>
<option value="10">10th</option>
<option value="11">11th</option>
<option value="12">12th</option>
<option value="13">13th</option>
<option value="14">14th</option>
<option value="15">15th</option>
<option value="16">16th</option>
<option value="17">17th</option>
<option value="18">18th</option>
<option value="19">19th</option>
<option value="20">20th</option>
<option value="21">21st</option>
<option value="22">22nd</option>
<option value="23">23rd</option>
<option value="24">24th</option>
<option value="25">25th</option>
<option value="26">26th</option>
<option value="27">27th</option>
<option value="28">28th</option>
<option value="29">29th</option>
<option value="30">30th</option>
<option value="31">31st</option>
</select>
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