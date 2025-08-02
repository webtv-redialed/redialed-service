var wtvrsvc_service_file = true

headers = `200 OK
Connection: Keep-Alive
wtv-expire-all: wtv-
wtv-expire-all: http
Content-Type: text/html`;

let debug = wtvrsvc_config.config.serviceType == 'Debug'

data = `<html><title>Splash</title>
<meta http-equiv=refresh content="4;URL=wtv-register:/register"><link rel=next href=wtv-register:/register>
<body bgcolor=0 text=449944><bgsound src=file://ROM/Sounds/Splash.mid><display nooptions nostatus skipback switchtowebmode vspace=0 hspace=0>
<table width=100% height=100% cellspacing=0 cellpadding=12 href=wtv-register:/register nohighlight nocursor selected><tr><td align=center valign=${debug ? 'bottom' : 'middle'}>`;
//Table with splash image
data += `<table cellspacing=0 cellpadding=0><tr><td align=center valign=middle><img src=${wtvrsvc_config.config.service_splash_logo}></td></tr></table>`;
if (session_data.hasCap('client-has-tuner')) { // determine gamer level
	data += `<br><br><img src=ROMCache/plus.gif width=232 height=21>`;
}

if (debug) {
	const process = require('process');
	const os = require('os');
	const cpus = os.cpus();
	data += `
	</tr></td><tr><td align=center valign=top height=128>
	<table bgcolor=191919 gradcolor=080808 border cellpadding=1 cellspacing=0>
	<tr><td align=center colspan=2><blackface><b><shadow>${wtvrsvc_version_string}</shadow></b></blackface></td></tr>
	<tr><td><shadow><b>Node:</b></shadow></td><td><shadow>${process.version}</shadow></td></tr>
	<tr><td><shadow><b>OS:</b></shadow></td><td><shadow>${os.type()} ${os.release()} (${os.arch()})</shadow></td></tr>
	<tr><td><shadow><b>CPU:</b></shadow></td><td><shadow>${cpus.length}x ${cpus[0].model}</shadow></td></tr>
	<tr><td><shadow><b>RAM:</b></shadow></td><td><shadow>${(os.totalmem() / 1024 / 1024).toFixed(0)} MB</shadow></td></tr>
	</table>
	</td></tr></table>
	</html>`;
} else {
	data += `</td></tr></table></html>`;
}