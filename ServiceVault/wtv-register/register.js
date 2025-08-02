var wtvrsvc_service_file = true;

headers = `200 OK
Content-Type: text/html`;

var ssid = ssid_sessions[socket.ssid].get("wtv-client-serial-number");
var romType = ssid_sessions[socket.ssid].get("wtv-client-rom-type");
var wtvr = new WTVRegister(wtvrsvc_config, SessionStore);
var canRegister = wtvr.checkDoorsOpen(ssid);
var brand = session_data.getManufacturer();

// Correct paths for clients that shipped with different peripherals under the same brand
if (brand == "Philips" && ssid_sessions[socket.ssid].hasCap("client-has-tuner")) {
    brand = "Philips-Plus";
} else if (brand == "Sony" && romType == "US-DTV-disk-0MB-32MB-softmodem-CPU5230") {
    brand = "Sony/DirecTV";
} else if (brand == "Thomson" && romType == "US-DTV-disk-0MB-32MB-softmodem-CPU5230") {
    brand = "Thomson/DirecTV";
}

// see whether or not the folder for the button images exists for the given brand
try {
    if (!fs.existsSync(`./ServiceVault/wtv-register/images/${brand}`)) {
        console.log(`* Couldn't find button images for ${brand}, sticking with defaults.`)
        brand = "WebTV";
    }
} catch (e) {
    console.log("fuck");
}

// Shame unauthorized users
data = `<html>
<head>
<title>
${canRegister ? `Using WebTV` : `Nice Try`}
</title>`;
// get Nice Try'd
if (!canRegister) data += `\n<bgsound src="sounds/nicetry_loopable.mid" loop>`;
data += `
<display nooptions
NoScroll
>
<LINK REL=next HREF="images/${brand}/ArrowButtons.gif">
<LINK REL=next HREF="images/${brand}/CenterButton.gif">
<LINK REL=next HREF="images/${brand}/DownArrowButton.gif">
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
${canRegister ? `Using WebTV` : `<marquee>NO WAY? NO WAY! NO WAY!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GET BLUE SPHERES!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GET BLUE SPHERES!</marquee>`}
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
<form action="ValidateIntro"
ENCTYPE="x-www-form-encoded" METHOD="POST">
<input type=hidden name=registering value="true">
<input type=hidden name=brand value="${brand}">
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
<img src="images/${brand}/ArrowButtons.gif" align=absmiddle>
</a>
<td valign=middle align=left>
<font size="+1">
${canRegister ? `To begin, find the arrow buttons on your remote control.` : `You have connected to the WebTV Redialed service, which is not yet public.`}
<tr>
<td height=20>
<tr>	<td colspan=2 valign=middle align=center>
<a href="client:donothing" selected><img src="ROMCache/Spacer.gif" width=54 height=46></a>
<td colspan=2 valign=middle align=left>
<font size="+1">
${canRegister ? `Use the arrow buttons to move this yellow box on the screen. Try
moving this yellow box down to <b>Continue</b>.` : `For more information, you can visit http://webtv.zone.`}
<tr>
<td height=20>
<tr>
<td colspan=2 valign=top align=center>
<img src="images/${brand}/CenterButton.gif" align=absmiddle>
<td colspan=3 valign=middle align=left>
<font size="+1">
${canRegister ? `Once you've moved the yellow box to <b>Continue</b>, press the ${request_headers.query.brand == "SegaFiji" ? `"A" (Go)` : `center`} <img src="images/${brand}/CenterButton.gif" align=absmiddle> button.` : `You can also join our Discord at https://discord.gg/qke279EUa8.`}
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
<input type=${canRegister ? "submit" : "hidden"} Value=Continue name="Continue" borderimage="file://ROM/Borders/ButtonBorder2.bif" usestyle width=110>
</shadow>
</font>
</form>
</table>
</table>
</body>
</html>`;