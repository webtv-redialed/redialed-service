var minisrv_service_file = true;

let client_caps = null;

if (socket.ssid != null) {
    if (session_data.capabilities) {
        client_caps = session_data.capabilities;
    }
}

headers = `200 OK
Content-Type: text/html`;

let serviceIP = minisrv_config.config.service_ip;
let zTitle = minisrv_version_string;

let SSID = wtvshared.filterSSID(
    session_data.get("wtv-client-serial-number")
);
let chipversionStr =
    "0x0" + parseInt(session_data.get("wtv-system-chipversion")).toString(16);
let sysConfigHex =
    "0x" + parseInt(session_data.get("wtv-system-sysconfig")).toString(16);
let capabilitiesTable = new WTVClientCapabilities().capabilities_table;
let wtvt = new WTVTricks(minisrv_config);

if (request_headers.query.password == wtvt.getPasswordByType("low")) {
    data = `<html>
<!--- *=* Copyright 1996, 1997 WebTV Networks, Inc. All rights reserved. --->
<display nosave nosend skipback>
<title>${minisrv_config.config.service_name} Info</title>

<sidebar width=20%>
		<img src="wtv-tricks:/images/About_bg.jpg">
</sidebar>

<body bgcolor="#191919" text="#44cc55" link="36d5ff" vlink="36d5ff" vspace=0>
<br>
<br>
<br>

<h1>${minisrv_config.config.service_name} Info</h1>

<table>
<tr>
		<td height=20>
<tr>
		<td valign=top align=right><shadow>Connected to:</shadow>
		<td width=10>
		<td valign=top>${minisrv_config.config.serviceType} Service
<tr>
		<td valign=top align=right><shadow>Host/Port:</shadow>
		<td width=10>
		<td valign=top>${serviceIP}/${minisrv_config.services[service_name].port}
<tr>
		<td valign=top align=right width=150><shadow>Service:</shadow>
		<td width=10>
		<td valign=top>${zTitle}
<tr>
		<td valign=top align=right><shadow>Client:</shadow>
		<td width=10>
		<td valign=top>&vers; (Build ${session_data.get("wtv-system-version")} [${wtvt.getVersion(session_data.get("wtv-system-version"))}])
<tr>
		<td valign=top align=right><shadow>Boot:</shadow>
		<td width=10>
		<td valign=top>&wtv-bootvers; (Build ${session_data.get("wtv-client-bootrom-version")} [${wtvt.getVersion(session_data.get("wtv-client-bootrom-version"))}])
<tr>
		<td height=20)
<tr>
		<td valign=top align=right><shadow>Silicon serial ID:</shadow>
		<td width=10>
		<td valign=top>${SSID}
<tr>
		<td valign=top align=right><shadow>Connected at:</shadow>
		<td width=10>
		<td valign=top>&rate;
<tr>
        <td valign=top align=right><shadow>POP Number:</shadow>
        <td width=10>
        <td valign=top>&phone;
<tr>
		<td valign=top align=right><shadow>Client IP number:</shadow>
		<td width=10>
		<td valign=top>${socket.remoteAddress}
`;
    if (session_data.getSessionData("registered")) {
        data += `<tr>
		<td valign=top align=right><shadow>Subscriber Name:</shadow>
		<td width=10>
		<td valign=top>${session_data.getSessionData("subscriber_name")}
<tr>
		<td valign=top align=right><shadow>Subscriber Username:</shadow>
		<td width=10>
		<td valign=top>${session_data.getSessionData("subscriber_username")}`;
    }

    data += `<tr>
		<td height=20>
<tr>
		<td valign=top align=right><shadow>ROM type:</shadow>
		<td width=10>
		<td valign=top>${session_data.get("wtv-client-rom-type")}
<tr>
		<td valign=top align=right><shadow>Modem f/w (when available):</shadow>
		<td width=10>
		<td valign=top>&modem;
<tr>
		<td valign=top align=right><shadow>Chip version:</shadow>
		<td width=10>
		<td valign=top>${chipversionStr} (${wtvt.decodeChipversion(chipversionStr)})`;
    if (sysConfigHex !== "0xNaN")
        data += `
<tr>
		<td valign=top align=right><shadow>SysConfig:</shadow>
		<td width=10>
		<td valign=top>${sysConfigHex}`;
    data += `
</table>

<table>
<tr>
		<td height=20>
<tr>
		<td valign=top align=right width=175><shadow>Client capabilities:</shadow>
		<td width=10>
		<td valign=top>
</table>
<table>
`;

    // start loop

    Object.keys(capabilitiesTable).forEach(function (k) {
        data += `<tr>
		<td valign=top align=right>${capabilitiesTable[k][1]}
		<td width=10>
		`;
        if (client_caps[capabilitiesTable[k][0]]) data += "<td valign=top>True\n";
        else data += "<td valign=top>False\n";
    });

    // end loop

    data += `
</table>
<pre>`
    if (sysConfigHex !== "0xNaN") {
        data += wtvt.decodeSysconfig(session_data.get("wtv-client-rom-type"), sysConfigHex);
    }
    data += `
</pre>
<br>
</body></html>`;
} else {
    data = wtvt.tricksUnauthorized();
}