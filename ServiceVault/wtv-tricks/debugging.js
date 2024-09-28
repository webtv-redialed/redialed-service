var minisrv_service_file = true;
var accounts = session_data.listPrimaryAccountUsers();
var wtvt = new WTVTricks(minisrv_config);
const os = require('node:os');

headers = `200 OK
Content-Type: text/html`;

function parseToDDHHMMSS(seconds) {
	let days = Math.floor(seconds / (24 * 3600));
	seconds -= days * 24 * 3600;

	let hours = Math.floor(seconds / 3600);
	seconds -= hours * 3600;

	let minutes = Math.floor(seconds / 60);
	seconds -= minutes * 60;

	return (`${days > 9 ? days : '0' + days}:${hours > 9 ? hours : '0' + hours}:${minutes > 9 ? minutes : '0' + minutes}:${seconds > 9 ? seconds : '0' + seconds}`);
}

if (request_headers.query.password == wtvt.getPasswordByType("high")) {
	data = `<html>
<display nosave nosend skipback>
<title>Debug til' dawn</title>

<body bgcolor="#191919" text="#44cc55" link="36d5ff" vlink="36d5ff" vspace=0>
<br>
<h1>Debug til' dawn</h1>
This page is used for general debugging of the WebTV Service.<br><br>
<font color=red>WARNING! Some of these options could cause oddities with the service pages. Only use this if you know what you're doing.</font>
<table>
<tr>
		<td height=20>
<tr>
		<td valign=top align=right><shadow>Custom MessageWatch offset<br>(seconds since midnight):</shadow>
		<td width=10>
		<td valign=top><form action="wtv-setup:/validate-mail-messagewatch"
ENCTYPE="x-www-form-encoded" METHOD="POST"><INPUT NAME="messageWatchHour"
ID="messageWatchHour"
bgcolor=#444444 text=#ffdd33 cursor=#cc9933
VALUE="${session_data.getSessionData(
		"messagewatch-offset"
	)}" TYPE="text" SIZE="5" selected></form>
<tr>
		<td valign=top align=right><a href="mailto:Jar2D2@WebTV?subject=test&body=lmfao"><shadow>mailto link test</shadow></a>
		<td width=10>
		<td valign=top><br>
		<tr>
		<td valign=top align=right><a href="wtv-tricks:/welcomemail"><shadow>create a welcome message</shadow></a>
		<td width=10>
		<td valign=top><br>
		<tr>
		<td valign=top align=right><a href="nullme"><shadow>Access the super-ultra<br>special null account!</shadow></a>
		<td width=10>
		<td valign=top><br>
		<tr>
		<td valign=top align=right><shadow>wtv-muzac-on: &wtv-muzac-on;<br>
		brdrs: &brdrs;<br>
		wtv-adv-opt: &wtv-adv-opt;<br>
		fsize: &fsize;<br>
		kbd: &kbd;<br>
		date: &date;<br></a><br><br>
		Subscriber ZIP code: ${accounts.subscriber.subscriber_zip_code}<br></shadow></a>
		CPU speed: ${Math.round(parseInt(session_data.get("wtv-system-cpuspeed")) / 1000000)} MHz<br></a><br>`;
	if (ssid_sessions[socket.ssid].hasCap("client-has-disk") && session_data.get("wtv-disk-size")) data += `
		${("0x" + parseInt(session_data.get("wtv-system-sysconfig")).toString(16) & 4) == 0 ? "Disk" : "Flash"} size: ${Math.round(parseInt(session_data.get("wtv-disk-size")) / 1000)} MB<br></a><br><br>`;
	data += `
		<td width=10>
		<td valign=top><br>
</table>
<br>
<table border cellpadding=2>
<th colspan=2>Service configuration</th>
<tr>
<td>LZPF compression</td>
<td>${minisrv_config.config.enable_lzpf_compression}</td>
</tr>
<tr>
<td>Messenger server</td>
<td>${session_data.getSessionData("messenger_server")}</td>
</tr>
</table>
<p>
<table border cellpadding=2>
<th colspan=2>System statistics</th>
<tr>
<td>CPU Cores</td>
<td>${os.cpus().length}</td>
</tr>
<tr>
<td>Free Memory</td>
<td>${Math.round(os.freemem() / 1000000)}/${Math.round(os.totalmem() / 1000000)} MB</td>
</tr>
<tr>
<td>Load Averages</td>
<td>${os.loadavg()}</td>
</tr>
<tr>
<td>Platform</td>
<td>${os.platform}, ${os.type()}, ${os.version()}</td>
</tr>
<tr>
<td>Uptime</td>
<td>${parseToDDHHMMSS(Math.round(os.uptime()))}</td>
</table>
</body> </html>`;
} else {
	data = wtvt.getTricksAndTrapsTemplated();
}
