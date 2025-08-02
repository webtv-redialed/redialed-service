var wtvrsvc_service_file = true;

headers = `200 OK`;

request_is_async = true;
const fetch = require("node-fetch");

let zapConnectionTypes = {
    antenna: "OTA",
    cable: "CABLE",
    "satellite-dbs": "SATELLITE",
};

async function loadProviders() {
    // Grab ZIP from user's account, then grab current data from TWC's API

    const response = await fetch(
        "https://tvlistings.zap2it.com/gapzap_webapi/api/Providers/getPostalCodeProviders/USA/" +
        request_headers.query["setup-epg-zip"] +
        "/gapzap/en"
    );
    const providers = await response.json();

    return providers;
}

function sendPage(providers) {
    var relevantProviders = [];

    if (providers.message) {
        headers = `400 ${providers.message}`;
    } else {
        var numOfProviders = Object.keys(providers.Providers).length;

        for (let i = 0; i < numOfProviders; i++) {
            if (
                providers.Providers[i].type ==
                zapConnectionTypes[request_headers.query["setup-epg-source"]]
            ) {
                relevantProviders.push(providers.Providers[i]);
            }
        }
        console.log(relevantProviders);
        if (relevantProviders.length == 0) {
            headers = `400 fuck off`;
        } else {
            headers = `302 Moved temporarily
Location: client:downloadtvlistngs`;

            var data = `<html>
<head>
<title>
${request_headers.query["setup-epg-source"].split("-")[0]} provider
</title>
<display nooptions
NoScroll
>
</head>
<body bgcolor="#191919" text=#42CC55 link=42CC55 vlink=42CC55 hspace=0 vspace=0 fontsize="${session_data.isJapaneseClient() ? `medium` : `large`}">
<table cellspacing=0 cellpadding=0>
<tr>
<td width=104 height=74 valign=middle align=center bgcolor="3B3A4D">
<img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width=87 height=67>
<td width=20 valign=top align=left bgcolor="3B3A4D">
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<td colspan=10 width=436 valign=middle align=left bgcolor="3B3A4D" >
<font color="D6DFD0" size="+2">
<blackface>
<shadow>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=4>
<br>
${
                request_headers.query["setup-epg-source"][0].toUpperCase() +
                request_headers.query["setup-epg-source"].slice(1).split("-")[0]
            } provider
</shadow>
</blackface>
</font>
<tr>
<td colspan=12 width=560 height=10 valign=top align=left>
<img src="wtv-home:/images/Shadow.gif" width=560 height=6>
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
<tr>
<td colspan=11 width=540 height=258 valign=top align=left>
<table cellspacing=0 cellpadding=0>	<tr>
<td colspan=2 width=124 valign=top align=left>
<td colspan=2 width=416 valign=top align=left>	<font size="+1">
Choose your ${request_headers.query["setup-epg-source"].split("-")[0]} provider:
<p>
</font>
`;
            for (let i = 0; i < relevantProviders.length; i++) {
                data += `
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=4><br><font color="#42CC55"><a href="client:donothing">
&#128;&nbsp;${relevantProviders[i].name}</a>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=20>
`;
            }
            data += `
<tr>
<td height=12>
<tr>
<td colspan=2 width=124 valign=top align=left>
<td colspan=2 width=416 valign=bottom align=left>
</table>
</body>
</html>`;
            console.log(data);
            return data;
        }
    }
}

(async () => {
    // Load the RSS data
    let providers = await loadProviders();
    sendToClient(socket, headers, sendPage(providers));
})();
