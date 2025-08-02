var wtvrsvc_service_file = true;

headers = `200 OK
Content-Type: text/html`;

const randA = wtvshared.getDynamicConfig(`randomAdjective`);

data = `<html>
<head>
<title>
Your first name
</title>
<display nooptions
NoScroll
>
<script language=javascript>
function capitalizeCharAt(str, pos) { var Capper = str.charAt(pos);
Capper=Capper.toUpperCase();
str=str.substring(0,pos)+Capper+str.substring(pos+1,str.length);
return str;
}
function formatname (name) {// alert("beginning of formatname");
name = name.toLowerCase();
//alert("lowercase name="+name);
name = capitalizeCharAt(name, 0);
//alert("after capitalizing first char");
var dashloc = name.indexOf('-');
while(dashloc >= 0) {	if(dashloc<name.length-1) {	name=capitalizeCharAt(name, dashloc+1);
}
dashloc = name.indexOf('-',dashloc+1);
}
var spaceloc=name.indexOf(' ');
while(spaceloc >= 0) { if(spaceloc<name.length-1) {	name=capitalizeCharAt(name, spaceloc+1);
}
spaceloc = name.indexOf(' ', spaceloc+1);
}
return name;
}
function ValidateName(NameField) {	if (MostlyLowerCase(NameField.value)) {	NameField.value=formatname(NameField.value);
}
}
function HasOnly(str, okletters) { var slen=str.length;
for (var i=0;i<slen;i++) {	var ch=str.charAt(i);
if(okletters.indexOf(ch)==-1) return false;
}
return true;
}
function MostlyLowerCase(str) {	return HasOnly(str, "abcdefghijklmnopqrstuvwxyz -1234567890.,");
}
function AllLowerCase(str) {	return HasOnly(str,"abcdefghijklmnopqrstuvwxyz");
}
function ValidateHumanName(NameField) {	if (AllLowerCase(NameField.value)) {	NameField.value=formatname(NameField.value);
}
}
function ValidateNotEmpty(textfield, errmessage) {	var result = true;
if (textfield.value=="") {	location = "client:showalert?sound=none&message="+errmessage+"&buttonlabel1=Continue&buttonaction1=client:donothing";
result = false;
}
return result;
}
</script>
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
First name
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
<form action="ValidateFirstName" ENCTYPE="x-www-form-encoded" METHOD="POST"
<INPUT TYPE="hidden" NAME="registering" VALUE="true">
<INPUT TYPE="hidden" NAME="brand" VALUE="${request_headers.query.brand}">
<INPUT TYPE="hidden" NAME="controller" VALUE="${request_headers.query.controller}">
<INPUT TYPE="hidden" NAME="subscriber-sex" VALUE="not likely">
<input type=hidden name=whatnot
>
<tr>
<td colspan=11 width=540 height=258 valign=top align=left>
<table cellspacing=0 cellpadding=0>	<tr>
<td colspan=2 width=124 valign=top align=left>
<td colspan=2 width=416 valign=top align=left>	<font size="+1">
Type just your first name.
</font>
<tr>
<td colspan=4 height=12 valign=top align=right>
<tr>
<td width=121 valign=top align=right>
<img src="ROMCache/Spacer.gif" width=1 height=4><br>
First name<img src="ROMCache/Spacer.gif" width=8>
<td width=3 valign=top align=left>
<td width=174 valign=top align=left>
<INPUT NAME="subscriber_first_name"
ID="subscriber_first_name"
bgcolor=#444444 text=#ffdd33 cursor=#cc9933
VALUE="`;
if (wtvrsvc_config.config.serviceType == "Debug") data += randA[Math.floor(Math.random() * randA.length)];
data += `" TYPE="text" SIZE="18"
MAXLENGTH="18"
AutoCaps selected
noSubmit
onChange="ValidateHumanName(this)"
autoascii >
<td width=242 valign=top align=left>
<img src="ROMCache/Spacer.gif" width=1 height=4><br>
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
