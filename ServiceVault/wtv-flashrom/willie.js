var minisrv_service_file = true;

headers = `200 OK
Content-Type: text/html`;

let romType = session_data.get("wtv-client-rom-type");
let query = request_headers.query;
const knownRomTypes = [
    { romType: "bf0app", romTypeShort: "bf0", romDir: "artemis-webtv-000", parts: 20 },
    { romType: "US-LC2-disk-0MB-8MB", romTypeShort: "LC2", romDir: "artemis-webtv2-000", parts: 56 },
    { romType: "US-LC2-disk-0MB-8MB-softmodem-CPU5230", romTypeShort: "Derby", romDir: "artemis-webtv3-000", parts: 60 },
    { romType: "JP-LC2-disk-0MB-8MB-CPU5230", romTypeShort: "JP Plus", romDir: "artemis-webtv3J-000", warning: `remember to disable signature verification with <a href="client:poweroff">poweroff</a> code 314159. Minibrowser may also crash when taking these upgrades` },
    { romType: "US-LC2-flashdisk-0MB-16MB-softmodem-CPU5230", romTypeShort: "LC25", romDir: "artemis-webtv4-000", parts: 25 },
    { romType: "US-BPS-flashdisk-0MB-8MB-softmodem-CPU5230", romTypeShort: "BPS", romDir: "artemis-webtv5-000", parts: 14, warning: "internal-debug builds are known to brick this unit" },
    { romType: "US-WEBSTAR-disk-0MB-16MB-softmodem-CPU5230", romTypeShort: "Echo", romDir: "artemis-webstar-000", parts: 63 },
    { romType: "US-DTV-disk-0MB-32MB-softmodem-CPU5230", romTypeShort: "UTV", romDir: "artemis-webtvdtv-000", parts: 297 }
];
const boxInfo = knownRomTypes.find(o => o.romType === romType);

// If a Japan box is running US firmware, it may confuse the server unless we correct the romtype
if (romType == "US-LC2-disk-0MB-16MB-CPU5230") romType = "JP-LC2-disk-0MB-8MB-CPU5230";

if (query.label == "LittleWillie") {
    data = `<html><head>
<display nosave nosend>
<title>Little Willie's Flash ROM restarter</title>
</head>
<body vspace="0" hspace="0" vlink="189cd6" text="44cc55" link="189cd6" bgcolor="191919">
<br><p><br>
</p><center><h1>
Welcome to Little Willie's
<br>
Flash ROM restarter!
</h1></center>
<p><br>
</p><h2>
<font color="red">WARNING! This tool could very easily brick your box! It's recommended to be used <i>only</i> under the guidance of WebTV Redialed operators.</font>
</h2>
<br>
<ul>
<br>
<form action="upgrade-restart">
Build: <input type="text" id="build" name="build" size=5 maxlength=5 value="7352"> Type: <select name="type" id="type">
<option value="external-nondebug">external-nondebug</option>
<option value="internal-nondebug">internal-nondebug</option>
<option value="internal-debug">internal-debug</option>
</select>
&nbsp;part (1-${boxInfo.parts}): <input type="text" id="part" name="part" size=${boxInfo.parts.toString().length} maxlength=${boxInfo.parts.toString().length} value="1">&nbsp;<input type="submit" value="do it.">
</form>
<br>
<hr>
<br>
<br>
Ask about our 10% employee discount!
<p>
<font size="1"></font></p><center><font size="1">(No provable affiliation to
<a href="http://frogfind.com/read.php?a=http://en.wikipedia.org/wiki/Richard_Smalley">Richard Smalley</a>.)</font></center><font size="1"><font size="3">
</font></font></li></body></html>`;
} else {
    // Logic for sifting through the array of builds, the order matters so don't change it under any circumstances
    if (boxInfo) flashRoms = wtvshared.getDynamicConfig(`flashrom/${boxInfo.romDir}`);
    if (query.type) flashRoms = flashRoms.filter(o => o.type === query.type);
    if (query.reverseSort) flashRoms = flashRoms.reverse();

    data = `<html>
<display nosend skipback>
<title>Bootleg Willie's</title>
<body bgcolor="#191919" text="#44cc55" link="36d5ff" vlink="36d5ff" fontsize="small">
<center>
<table gradcolor=e7ce4a gradangle=90 bgcolor=36d5ff cellspacing=0 width=100%>
<td>
<br><shadow><font color=white><h1>&nbsp;Bootleg Willie's</h1></shadow></font>
</td>
`;
    if (boxInfo) {     // show controls depending on whether or not the romtype was recognized
        data += `<td align=right>
<form action="willie">
<shadow><font color=white>
&nbsp;Type:&nbsp;<input type="text" name="type" size="10" value="${query.type || ""}" nosubmit asciionly>
&nbsp;Reverse sort&nbsp;<input type="checkbox" name="reverseSort"`; if (query.reverseSort) data += ` checked`; // Make sure to keep these options chosen when the newly served page loads
        data += `>
</td>
<td align=right>
<input type="submit" text="#E7CE4A" value="Do it." borderimage="file://rom/borders/buttonborder2.bif">
</td>`;
    }
    data += `
</form>
</table>`;
    // this shit sucks, yo.
    if (boxInfo && boxInfo.warning) data += `<font color=red><b><p><u>WARNING: ${boxInfo.warning}.</font>`;
    data += `
<font color=e7ce4a><p>${boxInfo ? `Showing ${flashRoms.length} builds for <b>${boxInfo.romType}</b>.` : `No builds are available for your WebTV receiver.`}
<br>    
<br>`;
    nav = `<table width=100%>
<td align=left><a href=>prev</a></td>
<td align=right><a href=>next</a></td>
</table>\n`;
    // TODO: put nav here when i make it work
    if (boxInfo) data += `<table border align=center cellspacing=1 cellpadding=0>
<th>Num</th>
<th>Type</th>
<th>Parts</th>
<th>Size</th>
<th>Ver</th>
`;

    // my brain hurts
    let yeah = "";

    if (boxInfo) {
        flashRoms.forEach((details, index) => {
            yeah += `<tr>
<td align=center><a href="${boxInfo.romTypeShort == "BPS" && details.type == "internal-debug" ? `client:showalert?message=You%20sure%20about%20this%20one%20chief%3F%3Cp%3E%3Cb%3Einternal-debug%3C%2Fb%3E%20builds%20are%20known%20to%20brick%20your%20type%20of%20box%20%28no%20more%20WebTV%21%29%3Cp%3ENote%3A%20WebTV%20Redialed%20is%20not%20liable%20for%20any%20damages%20caused%20by%20Halen-induced%20VCC%20shorts%20to%20ground.&buttonlabel2=Sounds%20good%20to%20me&buttonaction2=wtv-flashrom:/initiate-lc2-download?path=content/${boxInfo.romDir}/build${details.build}/${details.type}/${boxInfo.romType}-part000.rom&numparts=${details.parts}&buttonlabel1=Perhapsn%27t&buttonaction1=client:donothing` : `wtv-flashrom:/initiate-lc2-download?path=content/${boxInfo.romDir}/build${details.build}/${details.type}/${boxInfo.romType}-part000.rom&numparts=${details.parts}`}">${details.build}</a></td>
<td>${details.type}</td>
<td>${details.parts}</td>
<td>${details.size}</td>
<td>${details.bString}</td>`;
            if (index + 1 !== Object.keys(flashRoms).length) yeah += `\n`; //make sure we don't newline right before the end of the table
        });
    }

    data += `${yeah}
</table>
</body>
</html>`;
}