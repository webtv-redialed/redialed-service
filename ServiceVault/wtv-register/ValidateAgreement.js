var wtvrsvc_service_file = true;

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const days = [
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
    "6th",
    "7th",
    "8th",
    "9th",
    "10th",
    "11th",
    "12th",
    "13th",
    "14th",
    "15th",
    "16th",
    "17th",
    "18th",
    "19th",
    "20th",
    "21st",
    "22nd",
    "23rd",
    "24th",
    "25th",
    "26th",
    "27th",
    "28th",
    "29th",
    "30th",
    "31st",
];

if (!request_headers.query.registering) {
    var errpage = wtvshared.doErrorPage(400);
    headers = errpage[0];
    data = errpage[1];
} else {
    var wtvr = new WTVRegister(wtvrsvc_config, SessionStore);
    var errpage = null;
    const nonoWords = wtvshared.getDynamicConfig(`nonoWords`);
    const reservedWords = wtvshared.getDynamicConfig(`reservedWords`);
    var lowerusername = request_headers.query.subscriber_username.toLowerCase();
    if (!request_headers.query.registering) errpage = wtvshared.doErrorPage(400);
    else if (!request_headers.query.subscriber_first_name)
        errpage = wtvshared.doErrorPage(400, "You must enter your first name.");
    else if (!request_headers.query.subscriber_last_name)
        errpage = wtvshared.doErrorPage(400, "You must enter your last name.");
    else if (!request_headers.query.subscriber_username)
        errpage = wtvshared.doErrorPage(400, "You must choose an Internet Name.");
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
    else if (request_headers.query.subscriber_username.length < 5)
        errpage = wtvshared.doErrorPage(
            400,
            "Please choose an Internet Name with 5 or more characters."
        );
    else if (request_headers.query.subscriber_username.length > 16)
        errpage = wtvshared.doErrorPage(
            400,
            "Please choose an Internet Name with 16 or less characters."
        );
    else if (!wtvr.checkUsernameSanity(request_headers.query.subscriber_username))
        errpage = wtvshared.doErrorPage(
            400,
            "You can only use letters, numbers, hyphens, and underscores in your Internet Name. It must also begin with a letter."
        );
    else if (
        !wtvr.checkUsernameAvailable(request_headers.query.subscriber_username)
    )
        errpage = wtvshared.doErrorPage(
            400,
            "That Internet Name is already in use. Please choose another one."
        );
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
Content-Type: text/html`;

        data = `<html>
<head>
<title>
Review Account Info
</title>
<display nooptions
NoScroll
>
</head>
<body bgcolor="#191919" text=#42CC55 link=189cd6 vlink=189cd6 hspace=0 vspace=0 fontsize="${session_data.isJapaneseClient() ? `medium` : `large`}">
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
Review
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
<form ACTION="ValidateReviewAccountInfo" ENCTYPE="x-www-form-encoded" METHOD="POST">
<input type=hidden name=registering value="true">
<input type=hidden name=subscriber_first_name value="${
            request_headers.query.subscriber_first_name
        }">
<input type=hidden name=subscriber_last_name value="${
            request_headers.query.subscriber_last_name
        }">
<input type=hidden name=subscriber_username value="${
            request_headers.query.subscriber_username
        }">
<input type=hidden name=subscriber_birth_month VALUE="${
            request_headers.query.subscriber_birth_month
        }">
<input type=hidden name=subscriber_birth_date VALUE="${
            request_headers.query.subscriber_birth_date
        }">
<INPUT TYPE="hidden" NAME="brand" VALUE="${request_headers.query.brand}">
<tr>
<td colspan=11 width=540 height=258 valign=top align=left>
<table cellspacing=0 cellpadding=0>	<tr>
<td colspan=2 width=124 valign=top align=left>
<td colspan=2 width=416 valign=top align=left>	<font size="+1">
Here is your account information. If you 
need to correct an item, choose it then 
select <b>Sign Up</b>
<p>
</font>
<tr>
<td width=121 valign=top align=right>
<img src="ROMCache/Spacer.gif" width=1 height=4><br>
First Name<img src="ROMCache/Spacer.gif" width=7 height=1>
<td width=3 valign=top align=left>
<td width=174 valign=top align=left>
<spacer width=8>

<img src="ROMCache/Spacer.gif" width=1 height=4><br><a href="wtv-register:/CorrectName?subscriber_first_name=${
            request_headers.query.subscriber_first_name
        }&subscriber_last_name=${
            request_headers.query.subscriber_last_name
        }&subscriber_username=${
            request_headers.query.subscriber_username
        }&controller=${
            request_headers.query.controller
        }&subscriber_birth_month=${month}&subscriber_birth_date=${day}&brand=${
            request_headers.query.brand
        }">
<tt>${request_headers.query.subscriber_first_name}</tt>

<tr>
<td width=121 valign=top align=right>
<img src="ROMCache/Spacer.gif" width=1 height=4><br>
Last Name<img src="ROMCache/Spacer.gif" width=7 height=1>
<td width=3 valign=top align=left>
<td width=174 valign=top align=left>
<spacer width=8>

<img src="ROMCache/Spacer.gif" width=1 height=4><br><a href="wtv-register:/CorrectName?subscriber_first_name=${
            request_headers.query.subscriber_first_name
        }&subscriber_last_name=${
            request_headers.query.subscriber_last_name
        }&subscriber_username=${
            request_headers.query.subscriber_username
        }&controller=${
            request_headers.query.controller
        }&subscriber_birth_month=${month}&subscriber_birth_date=${day}&brand=${
            request_headers.query.brand
        }">
<tt>${request_headers.query.subscriber_last_name}</tt>

<tr>
<td width=121 valign=top align=right>
<img src="ROMCache/Spacer.gif" width=1 height=4><br>
Internet<img src="ROMCache/Spacer.gif" width=7 height=1>
<td width=3 valign=top align=left>
<td width=174 valign=top align=left>
<spacer width=8>

<img src="ROMCache/Spacer.gif" width=1 height=4><br><font color="#42CC55"><a href="wtv-register:/CorrectUsername?subscriber_first_name=${
            request_headers.query.subscriber_first_name
        }&subscriber_last_name=${
            request_headers.query.subscriber_last_name
        }&subscriber_username=${
            request_headers.query.subscriber_username
        }&controller=${
            request_headers.query.controller
        }&subscriber_birth_month=${month}&subscriber_birth_date=${day}&brand=${
            request_headers.query.brand
        }">
<tt>${request_headers.query.subscriber_username}@webtv.zone</tt>

<tr>
<td width=121 valign=top align=right>
<img src="ROMCache/Spacer.gif" width=1 height=4><br>
Birthday<img src="ROMCache/Spacer.gif" width=7 height=1>
<td width=3 valign=top align=left>
<td width=174 valign=top align=left>
<spacer width=8>

<img src="ROMCache/Spacer.gif" width=1 height=4><br><font color="#42CC55"><a href="wtv-register:/CorrectBirthday?subscriber_first_name=${
            request_headers.query.subscriber_first_name
        }&subscriber_last_name=${
            request_headers.query.subscriber_last_name
        }&subscriber_username=${
            request_headers.query.subscriber_username
        }&controller=${
            request_headers.query.controller
        }&subscriber_birth_month=${month}&subscriber_birth_date=${day}&brand=${
            request_headers.query.brand
        }">
<tt>${months[month]} ${days[parseInt(day) - 1]}</tt>
<tr>
<td height=12>
<tr>
<td colspan=2 width=124 valign=top align=left>
<td colspan=2 width=416 valign=bottom align=left>	<table cellspacing=0 cellpadding=0>
<tr>
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
<font size="-1"><i>
When you are ready,<br>
choose <b>Sign Up</b>.
</i></font>
<td width=10 valign=top>
<td width=110 valign=top>
<font size="-1" color="#E7CE4A">
<shadow>
<input type=submit Value="Sign Up" name="Sign Up" borderimage="file://ROM/Borders/ButtonBorder2.bif" usestyle width=110>
</shadow>
</font>
</form>
</table>
</table>
</body>
</html>`;
    }
}
