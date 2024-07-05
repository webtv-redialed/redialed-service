var minisrv_service_file = true;

headers = `200 OK
Connection: Keep-Alive
wtv-expire-all: wtv-home:/splash
wtv-expire-all: wtv-flashrom:
Content-type: text/html`;

switch (ssid_sessions[socket.ssid].get("wtv-client-rom-type")) {
    case "US-LC2-disk-0MB-8MB": // LC2
        var buildURL = "tv2-000/build7352/external-nondebug/US-LC2-disk-0MB-8MB-part000.rom&numparts=53";
        break;
    case "US-LC2-disk-0MB-8MB-softmodem-CPU5230": // Derby
        var buildURL = "tv3-000/build7253/external-nondebug/US-LC2-disk-0MB-8MB-softmodem-CPU5230-part000.rom&numparts=56";
        break;
    case "US-LC2-flashdisk-0MB-16MB-softmodem-CPU5230": // LC2.5
        var buildURL = "tv4-000/build7352/external-nondebug/US-LC2-flashdisk-0MB-16MB-softmodem-CPU5230-part000.rom&numparts=20";
        break;
    case "US-BPS-flashdisk-0MB-8MB-softmodem-CPU5230": // BPS
        var buildURL = "tv5-000/build7352/external-nondebug/US-BPS-flashdisk-0MB-8MB-softmodem-CPU5230-part000.rom&numparts=13";
        break;
    case "US-WEBSTAR-disk-0MB-16MB-softmodem-CPU5230": // Echo
        var buildURL = "star-000/build5720/external-nondebug/US-WEBSTAR-disk-0MB-16MB-softmodem-CPU5230-part000.rom&numparts=62";
        break;
    case "US-DTV-disk-0MB-32MB-softmodem-CPU5230": // UltimateTV
        var buildURL = "tvdtv-000/build28230/external-nondebug/US-DTV-disk-0MB-32MB-softmodem-CPU5230-part000.rom&numparts=297";
        break;
    default: // Give up so we don't serve the user a bad build
        var buildURL = "";
        break;
}

console.log(" * Looks like someone's due for an upgrade, all bets on catastrophic failure");

data = `<html>
<head>
<title>
Upgrade available
</title>
<display nosave nosend NoScroll skipback`;
if (request_headers.query.fromheadwaiter) data += ` nostatus nooptions`; // Handcuff minibrowser users
data += `>
</head>
<body noscroll bgcolor="#191919" text="#42CC55" link="36d5ff"
hspace=0 vspace=0 fontsize="large"
>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=104 height=74 valign=middle align=center bgcolor="3B3A4D">
<img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width=87 height=67>
<td width=20 valign=top align=left bgcolor="3B3A4D">
<img src="ROMCache/Spacer.gif" width=1 height=1>
<td colspan=10 width=436 valign=middle align=left bgcolor="3B3A4D" >
<font color="D6DFD0" size="+2">
<blackface>
<shadow>
<img src="ROMCache/Spacer.gif" width=1 height=4>
<br>
Upgrade available
</shadow>
</blackface>
</font>
<tr>
<td colspan=12 width=560 height=10 valign=top align=left>
<img src="wtv-flashrom:/ROMCache/S40H1.gif" width=560 height=6>
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
<form action="wtv-home:/${request_headers.query.fromheadwaiter ? "splash" : "home"}?">
<tr>
<td colspan=12 height=238 valign=top align=left>
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
Your ${session_data.getBoxName()} is not yet using the latest upgrade.
<p>Choose <b>Upgrade now</b> to download the latest upgrade.
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
<font size="-1"><i>
</i></font>
<td width=10 valign=top>
<td width=110 valign=top>
<font size="-1" color="#E7CE4A">
<shadow>\n`;
// If this isn't minibrowser, then we can safely prompt the user to upgrade later
if (!(ssid_sessions[socket.ssid].get("wtv-need-upgrade") || ssid_sessions[socket.ssid].get("wtv-used-8675309"))) {
    data += `<input type=submit borderimage="file://ROM/Borders/ButtonBorder2.bif" usestyle width=140
name="upgradelater" width="140" value="Upgrade later" >\n`;
}
data += `&nbsp;&nbsp;</font>
<td bgcolor=#191919 height=50 valign=top align=right width=150>
<font size=-1 color=#e7ce4a>
<shadow></form>
<form method=post action="${buildURL ? `wtv-flashrom:/initiate-lc2-download?path=content/artemis-web${buildURL}` : "client:showalert?message=Task%20failed%20successfully.&buttonLabel1=OK&buttonAction1=wtv-home:/splash"}">
<input type=submit borderimage="file://ROM/Borders/ButtonBorder2.bif" usestyle width=140
selected name="upgradenow" width="140" value="Upgrade now" ><br>
</shadow>
</font>	</form>	</tr>	</table>
</shadow>
</font>
</form>
</table>
</table>
</body>
</html>`;