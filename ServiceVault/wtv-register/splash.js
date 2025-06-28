var minisrv_service_file = true

headers = `200 OK
Connection: Keep-Alive
wtv-expire-all: wtv-
wtv-expire-all: http
Content-Type: text/html`;

let now = new Date()

let isDC = session_data.getManufacturer() == 'SegaFiji'
let isNewYear = now.getMonth() == 0 && now.getDate() == 1
let isJarBday = now.getMonth() == 2 && now.getDate() == 5 //JarHead and I did a buncha work overhauling all this, so why not have splashes for our birthdays? :P
let isSKCroBday = now.getMonth() == 4 && now.getDate() == 13
let isJune = now.getMonth() == 5
let isJoeb = now.getMonth() == 6 && now.getDate() == 8
let isHall = now.getMonth() == 9 && now.getDate() == 31
let isCrimmis = now.getMonth() == 11 &&
let debug = (minisrv_config.config.serviceType == 'Debug')

let splashImage = minisrv_config.config.service_splash_logo
let splashBackground = ''

// We really need to make this if-else-if mess into a switch later somehow
if (isJune) { splashBackground = ' background=images/SplashPrideBG.gif'}
else if (isDC) { splashBackground = ' background=images/SplashDreamcastBG.jpg' }
else if (isNewYear) { splashBackground = ' background=images/SplashNewYearsBG.gif' }
else if (isJarBday) { splashBackground = ' background=images/SplashSaturnBG.jpg' }
else if (isSKCroBday) { splashBackground = ' background=images/SplashSKCroBG.gif' }
else if (isJoeb) { splashBackground = ' background=images/SplashJoebBG.jpg' }
else if (isHall) { splashImage = 'images/SplashLogo1MSN.gif' }
else if (isCrimmis) { splashBackground = ' background=images/SplashChristmasBG.gif' }

data = `<html><title>Splash</title>
<meta http-equiv=refresh content="4;URL=wtv-register:/register?">
<link rel=next href=wtv-register:/register>`;
data += `
<body bgcolor=0 text=449944><bgsound src=file://ROM/Sounds/Splash.mid><display nooptions nostatus skipback switchtowebmode vspace=0 hspace=0>
<table width=100% height=100% cellspacing=0 cellpadding=12><tr><td align=center valign=${debug ? 'bottom' : 'middle'}>`;
//Table with splash image
data += `<table cellspacing=0 cellpadding=0><tr><td align=center valign=middle${splashBackground}><img src=${splashImage}></td></tr></table>`;
if (!isHall) {
		// determine gamer level
		if (session_data.hasCap('client-has-tuner')) data += `<br><br><img src=ROMCache/plus.gif width=232 height=21>`
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
} else { data += `</td></tr></table></html>` }