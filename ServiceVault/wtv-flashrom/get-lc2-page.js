var wtvrsvc_service_file = true;

const WTVFlashrom = require(classPath + "/WTVFlashrom.js");
var wtvflashrom;
request_is_async = true;

if (!request_headers.query.path) {
    var errpage = wtvshared.doErrorPage(400);
    headers = errpage[0];
    data = errpage[1];
} else {
    var wtvflashrom = new WTVFlashrom(
        wtvrsvc_config,
        service_vaults,
        service_name,
        wtvrsvc_config.services[service_name].use_zefie_server,
        false,
        wtvrsvc_config.services[service_name].debug ? false : true
    );
    var request_path = request_headers.query.path;

    // read flashrom header info into array using WTVFlashrom class
    wtvflashrom.getFlashromMeta(request_path, function (data) {
        processLC2DownloadPage(
            request_headers.query.path,
            data,
            request_headers.query.numparts ? request_headers.query.numparts : null
        );
    });
}

async function processLC2DownloadPage(path, flashrom_info, numparts = null) {
    if (numparts != null) flashrom_info.part_count = parseInt(numparts);
    if (!flashrom_info.part_count)
        flashrom_info.part_count = parseInt(
            flashrom_info.message
                .substring(flashrom_info.message.length - 4)
                .replace(/\D/g, "")
        );
    console.log(flashrom_info);
    if (
        parseInt(flashrom_info.part_number) >= 0 &&
        flashrom_info.rompath &&
        flashrom_info.next_rompath
    ) {
        if (!flashrom_info.message && flashrom_info.is_bootrom) {
            flashrom_info.message =
                "BootRom Part " +
                (flashrom_info.part_number + 1) +
                " of " +
                flashrom_info.part_count;
        }
        if (!flashrom_info.is_last_part) {
            flashrom_info.next_rompath = request_headers.request_url.replace(
                escape(request_headers.query.path),
                escape(flashrom_info.next_rompath.replace(service_name + ":/", ""))
            );
        }

        /* TODO: account for flashrom reconnect, send headers too
        e.g. wtv-reconnect-url: wtv-flashrom:/lc2-reconnect?path=content/sony-webtv2-000/version-7352/US-LC2-disk-0MB-8MB-part060.rom&start-time=1697570872&do-visit=true
        wtv-next-reconnect-url: wtv-flashrom:/lc2-reconnect?path=content/sony-webtv2-000/version-7352/US-LC2-disk-0MB-8MB-part061.rom&start-time=1697570872&do-visit=true */

        headers = `200 OK
Connection: Keep-Alive
Pragma: no-cache
Content-type: text/html`;

        var romtype = ssid_sessions[socket.ssid].get("wtv-client-rom-type");
        //these are mostly guesses but it's better than saying "a while"
        switch (romtype) {
            case "US-LC2-disk-0MB-8MB": //LC2
            case "US-LC2-disk-0MB-8MB-softmodem-CPU5230": //Derby
            case "US-LC2-flashdisk-0MB-16MB-softmodem-CPU5230": //LC2.5
                var downloadTime = "30";
                break;
            case "US-BPS-flashdisk-0MB-8MB-softmodem-CPU5230": //BPS
                var downloadTime = "20";
                break;
            case "US-WEBSTAR-disk-0MB-16MB-softmodem-CPU5230": //Echo
            case "US-DTV-disk-0MB-32MB-softmodem-CPU5230": //UltimateTV
                var downloadTime = "30"; //don't know if this estimate is accurate
                break;
            default: //we don't know what this box is.
                var downloadTime = "15";
                break;
        }

        data = `<html>
<head>
<title>
Updating
</title>
<display switchtowebmode transition=none nostatus nooptions skipback clearback>
</head>
<body noscroll bgcolor="#191919" text="#42CC55" link="36d5ff"
hspace=0 vspace=0 fontsize="large">
<table cellspacing=0 cellpadding=0>
<tr>
<td width=104 height=74 valign=middle align=center bgcolor="3B3A4D">
<img src="${wtvrsvc_config.config.service_logo}" width=87 height=67>
<td width=20 valign=top align=left bgcolor="3B3A4D">
<img src="${service_name}:/ROMCache/Spacer.gif" width=1 height=1>
<td colspan=10 width=436 valign=middle align=left bgcolor="3B3A4D">
<font color="D6DFD0" size="+2">
<blackface>
<shadow>
<img src="${service_name}:/ROMCache/Spacer.gif" width=1 height=4>
<br>
Updating now
</shadow>
</blackface>
</font>
<tr>
<td colspan=12 width=560 height=10 valign=top align=left>
<img src="${service_name}:/ROMCache/S40H1.gif" width=560 height=6>
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
<form action="client:poweroff">
<tr>
<td width=104 valign=middle align=center>
<td width=20 valign=middle align=center>
<td colspan=9 width=100 height=258 valign=top align=left>
<font size=+1>
Your ${session_data.getBoxName()} is being<br>updated automatically.
<p> <font size=+1>
This will take about ${downloadTime} minutes and<br>then you can use WebTV again.
`;
        if (
            flashrom_info.is_bootrom &&
            flashrom_info.part_number == flashrom_info.part_count - 1
        ) {
            data += `<p>
	The system will pause for about 30 seconds at the end of this
	update.  Please <strong>do not</strong> interrupt the system
	during this time.
	`;
        }
        data += `
</font>
<br><br><br><br><br>
<upgradeblock width=250 height=15
nexturl="${flashrom_info.next_rompath}"
errorurl="${service_name}:/lc2-download-failed?"
blockurl="${flashrom_info.rompath}"`;

        data +=
            `
lastblock="${flashrom_info.is_last_part}"
curblock="` +
            (flashrom_info.part_number + 1) +
            `"
`;

console.log(`******* DEBUG *******
part-number="${flashrom_info.part_number + 1}"
max-part-number="${flashrom_info.part_count}"
next-url="${flashrom_info.next_rompath}"
last-block="${flashrom_info.is_last_part}"
block-url="${flashrom_info.rompath}"
error-url="${service_name}:/lc2-download-failed?"`);

        if (flashrom_info.part_count) {
            data += `totalblocks="${flashrom_info.part_count}"`;
        }
        data += `>
<font size="-1" color="#D6DFD0">
<br>
<img src="${service_name}:/ROMCache/Spacer.gif" width=2 height=10><br>
${flashrom_info.message}
 <br><br>
<tr>
<td width=104 valign=middle align=center>
<td width=20 valign=middle align=center>
<td colspan=10 height=2 valign=middle align=center bgcolor="#191919">
<img src="${service_name}:/ROMCache/Spacer.gif" width=436 height=1>
<tr>
<td width=104 valign=middle align=center>
<td width=20 valign=middle align=center>
<td colspan=9 height=1 valign=top align=left>
<tr>
<td width=104 valign=middle align=center>
<td width=20 valign=middle align=center>
<td colspan=10 height=2 valign=top align=left bgcolor="#191919">
<img src="${service_name}:/ROMCache/Spacer.gif" width=436 height=1>
<tr>
<td width=104 valign=middle align=center>
<td width=20 valign=middle align=center>
<td colspan=9 height=4 valign=top align=left>
<tr>
<td width=104 valign=middle align=center>
<td width=20 valign=middle align=center>
<td colspan=9 width=416 valign=top align=right>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=306 valign=top align=left>
<font size="-1"><i>
</i></font><td width=112 valign=top align=right>
<font size="-1" color="#191919">
</font>
</form>
</table>
<td width=20 valign=middle align=center>
</table>
</body>
</html>`;
    } else {
        var errpage = wtvshared.doErrorPage(400);
        headers = errpage[0];
        data = errpage[1];
    }
    sendToClient(socket, headers, data);
}
