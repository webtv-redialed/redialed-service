var minisrv_service_file = true

headers = `200 OK
Connection: Keep-Alive
wtv-expire-all: wtv-
wtv-expire-all: http
Content-Type: text/html`;

let now = new Date()
let usingCustomSplash = session_data.getSessionData('splash') != 'auto'

let isNewYear = now.getMonth() == 0 && now.getDate() == 1 && !usingCustomSplash
let isJarBday = now.getMonth() == 2 && now.getDate() == 5 //JarHead and I did a buncha work overhauling all this, so why not have splashes for our birthdays? :P
let isSKCroBday = now.getMonth() == 4 && now.getDate() == 13
let isJune = now.getMonth() == 5
//let isJoeb = !! need to figure out Joe's birthday
let isHall = now.getMonth() == 9 && now.getDate() == 31 && !usingCustomSplash
let isCrimmis = now.getMonth() == 11 && !usingCustomSplash
let debug = (minisrv_config.config.serviceType == 'Debug')

let splashImage = minisrv_config.config.service_splash_logo
let splashBackground = ''

if (usingCustomSplash || isJune) {
	switch (session_data.getSessionData('splash')) {
		case 'pride':
			splashBackground = ' background=images/SplashPrideBG.gif'
		break
		case 'multicolor':
			splashImage = 'images/SplashLogo1Pride.gif'
		break
		case 'supergay':
			splashImage = 'images/SplashLogo1Pride.gif'
			splashBackground = ' background=images/SplashPrideBG.gif'
		break
		case 'SKCro':
			splashBackground = ' background=images/SplashSKCroBG.gif'
		break
		case 'joeb':
			splashBackground = ' background=images/SplashJoebBG.jpg'
		break
		default: splashBackground = ' background=images/SplashPrideBG.gif'
	}
} else if (isNewYear) { splashBackground = ' background=images/SplashNewYearsBG.gif' }
else if (isJarBday) { splashBackground = ' background=images/SplashSaturnBG.jpg' }
else if (isSKCroBday) { splashBackground = ' background=images/SplashSKCroBG.gif' }
//else if (isJoeb) { splashBackground = ' background=images/SplashJoebBG.jpg' }
else if (isHall) { splashImage = 'images/SplashLogo1MSN.gif' }
else if (isCrimmis) { splashBackground = ' background=images/SplashChristmasBG.gif' }

// TODO: apparently the title of the page changed depending on if you were using a webtv plus or not? at least it did for the home service, not register it seems
data = `<html><title>${service_name == 'wtv-home' ? `WebTV Service` : `Splash`}</title>
<meta http-equiv=refresh content="4;URL=${service_name == 'wtv-home' ? `wtv-home:/home` : `wtv-register:/register`}?">`
if (service_name == 'wtv-home') data += `\n<link rel=next href=wtv-content:/ROMCache/BackgroundWebTVToday_a.swf>`;
data += `
<body bgcolor=0 text=449944><bgsound src=file://ROM/Sounds/Splash.mid><display nooptions nostatus skipback switchtowebmode vspace=0 hspace=0>
<table width=100% height=100% cellspacing=0 cellpadding=12><tr><td align=center valign=${debug ? 'bottom' : 'middle'}>`;
//Table with splash image
data += `<table cellspacing=0 cellpadding=0><tr><td align=center valign=middle${splashBackground}><img src=${splashImage}></td></tr></table>`;
/* the code below is only currently known to be present on post 1999 webtv
if (!session_data.hasCap('client-has-tv-experience')) { data += `<font color=666666 size=0>TM</font>` } */
if (!isHall) {
		// determine gamer level
		if (session_data.hasCap('client-has-tuner')) data += `<br><br><img src=ROMCache/plus.gif width=232 height=21>`;
}

if (debug) {
		const process = require('process');
		const os = require('os');
		data += `
		</tr></td><tr><td align=center valign=top height=128>
		<table bgcolor=191919 gradcolor=080808 border>
		<tr><td align=center colspan=2><blackface><b><shadow>WebTV Redialed (Debug)
		<tr><td><shadow><b>Node.js version:<td><shadow>${process.version}
		<tr><td><shadow><b>Server OS:<td><shadow>${os.type()} v${os.release()} (${os.machine()})
		<tr><td><shadow><b>Server account:<td><shadow>${os.userInfo().username}
		</table>
		</td></tr></table>
		</html>`;
} else { data += `</td></tr></table></html>`; }