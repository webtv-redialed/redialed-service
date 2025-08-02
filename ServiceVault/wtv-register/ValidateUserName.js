var wtvrsvc_service_file = true;

if (!request_headers.query.registering) {
    var errpage = wtvshared.doErrorPage(400);
    headers = errpage[0];
    data = errpage[1];
} else {
    var wtvr = new WTVRegister(wtvrsvc_config, SessionStore);
    var errpage = null;
    var available = wtvr.checkUsernameAvailable(
        request_headers.query.subscriber_username
    );
    //console.log(available);

    const nonoWords = wtvshared.getDynamicConfig(`nonoWords`);
    const reservedWords = wtvshared.getDynamicConfig(`reservedWords`);
    var lowerusername = request_headers.query.subscriber_username.toLowerCase();

    if (!request_headers.query.registering) errpage = wtvshared.doErrorPage(400);
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
            "The username you have selected is already in use. Please select another username."
        );

    if (errpage) {
        headers = errpage[0];
        data = errpage[1];
    } else {
        headers = `200 OK
Content-Type: text/html`;

        data = `<html>
<head>
<title>
Date of birth
</title>
<display nooptions
>
</head>
<body noscroll bgcolor="#191919" text="#42CC55" link="36d5ff"
hspace=0 vspace=0 fontsize="${session_data.isJapaneseClient() ? `medium` : `large`}"
>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=104 height=74 valign=middle align=center bgcolor="3B3A4D">
<img src="wtv-head-waiter:/ROMCache/WebTVLogoJewel.gif" width=87 height=67>
<td width=20 valign=top align=left bgcolor="3B3A4D">
<img src="ROMCache/Spacer.gif" width=1 height=1>
<td colspan=10 width=436 valign=middle align=left bgcolor="3B3A4D" >
<font color="D6DFD0" size="+2">
<blackface>
<shadow>
<img src="ROMCache/Spacer.gif" width=1 height=4>
<br>
Date of birth
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
<form action="ValidateBirthday" ENCTYPE="x-www-form-encoded" METHOD="POST">
<INPUT TYPE="hidden" NAME="registering" VALUE="true">
<INPUT TYPE="hidden" NAME="brand" VALUE="${request_headers.query.brand}">
<INPUT TYPE="hidden" NAME="controller" VALUE="${request_headers.query.controller}">
<INPUT TYPE="hidden" NAME="subscriber_first_name" VALUE="${request_headers.query.subscriber_first_name}">
<INPUT TYPE="hidden" NAME="subscriber_last_name" VALUE="${request_headers.query.subscriber_last_name}">
<INPUT TYPE="hidden" name="subscriber_username" VALUE="${request_headers.query.subscriber_username}">
<INPUT TYPE="hidden" NAME="subscriber-sex" VALUE="not likely">
<input type=hidden name=whatnot>
<tr>
<td colspan=11 width=540 height=258 valign=top align=left>
<table cellspacing=0 cellpadding=0>	<tr>
<td colspan=2 width=124 valign=top align=center>
<td colspan=2 valign=top align=left>	<font size="+1">
Please enter your date of birth.
<p>
</font>
<tr>
<td width=121 valign=top align=right>
<img src="ROMCache/Spacer.gif" width=1 height=4><br>
<img src="ROMCache/Spacer.gif" width=8>
<td width=3 valign=top align=left>
<td width=200 valign=top align=left>
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
</select>&nbsp;<select name="subscriber_birth_date">
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
</font>
<tr>
<td height=18>
<tr>
<td colspan=2>
<td valign=top colspan=4>
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
    }
}
