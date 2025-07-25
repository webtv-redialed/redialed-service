var minisrv_service_file = true

headers = `200 OK
Connection: Keep-Alive
wtv-expire-all: wtv-
wtv-expire-all: http
Content-Type: text/html`;

let now = new Date()
let usingCustomSplash = session_data.getSessionData('splash') != 'auto'

let isNewYear = now.getMonth() == 0 && (now.getDate() == 1 || now.getDate() == 2) && !usingCustomSplash
let isAprilFools = now.getMonth() == 4 && (now.getDate() == 1 || now.getDate() == 2) && !usingCustomSplash
let isJune = now.getMonth() == 5 && !usingCustomSplash
let isHall = now.getMonth() == 9 && now.getDate() == 31
let isCrimmis = now.getMonth() == 11 && !usingCustomSplash
let debug = minisrv_config.config.serviceType == 'Debug'

let splashImage = minisrv_config.config.service_splash_logo
let splashBackground = ''

// We really need to make this if-else-if mess into a switch later somehow
if (usingCustomSplash) {
	switch (session_data.getSessionData('splash')) {
		case 'pride':
			splashBackground = ' background=images/SplashPrideBG.gif'
		break
		case 'multicolor':
			splashImage = 'images/SplashLogo1Pride.gif'
		break
		case 'MSN':
			splashImage = 'images/SplashLogo1MSN.gif'
		break
		case 'default':
		default: //fallback for if they somehow set it to an unsupported value
			splashImage = minisrv_config.config.service_splash_logo
			splashBackground = ''
		break
	}
} else if (isNewYear) { splashBackground = ' background=images/SplashNewYearsBG.gif' }
else if (isAprilFools) { splashImage = 'images/SplashLogo1MSN.gif' }
else if (isJune) { splashBackground = ' background=images/SplashPrideBG.gif' }
else if (isCrimmis) { splashBackground = ' background=images/SplashChristmasBG.gif' }

data = `<html><title>${service_name == 'wtv-home' ? `WebTV${session_data.hasCap('client-has-tv-experience') ? ' Plus' : ''} Service` : `Splash`}</title>
<meta http-equiv=refresh content="${session_data.getSessionData('fast_splash') == 1 && !isHall ? '0' : '4'};URL=wtv-home:/home?">`
if (service_name == 'wtv-home') data += `\n<link rel=next href=wtv-content:/ROMCache/BackgroundWebTVToday_a.swf>`;
data += `
<body bgcolor=0 text=449944><bgsound src=${isHall ? 'wtv-home:/content/polyzoot-stinger.mid' : 'file://ROM/Sounds/Splash.mid'}><display nostatus nooptions skipback switchtowebmode vspace=0 hspace=0>
<table width=100% height=100% cellspacing=0 cellpadding=12 href=wtv-home:/home? nohighlight nocursor selected><tr><td align=center valign=${debug ? 'bottom' : 'middle'}>`;
//Table with splash image
data += `<table cellspacing=0 cellpadding=0><tr><td align=center valign=middle${splashBackground}><img src=${splashImage}></td></tr></table>`;
/* the code below is only currently known to be present on post 1999 webtv
if (!session_data.hasCap('client-has-tv-experience')) { data += `<font color=666666 size=0>TM</font>` } */
if (splashImage != 'images/SplashLogo1MSN.gif' && session_data.hasCap('client-has-tuner')) { // determine gamer level
	data += `<br><br><img src=ROMCache/plus.gif width=232 height=21>`;
}

if (debug) {
	const process = require('process');
	const os = require('os');
	data += `
	</tr></td><tr><td align=center valign=top height=128>
	<table bgcolor=191919 gradcolor=080808 border>
	<tr><td align=center colspan=2><blackface><b><shadow>${minisrv_config.config.service_name} (Debug)
	<tr><td><shadow><b>Node.js version:<td><shadow>${process.version}
	<tr><td><shadow><b>Server OS:<td><shadow>${os.type()} v${os.release()} (${os.machine()})
	<tr><td><shadow><b>Server account:<td><shadow>${os.userInfo().username}
	</table>
	</td></tr></table>
	</html>`;
} else { data += `</td></tr></table></html>`; }