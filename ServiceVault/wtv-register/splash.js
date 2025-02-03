var minisrv_service_file = true;

headers = `200 OK
Connection: Keep-Alive
wtv-expire-all: wtv-
wtv-expire-all: http
Content-Type: text/html`;

let now = new Date();
let isJune = now.getMonth() == 5;
let isHall = now.getMonth() == 9 && now.getDate() == 31;

//TODO: apparently the title of the page changed depending on if you were using a webtv plus or not? at least it did for the home service, not register it seems
data = `<html>
<title>${service_name == "wtv-home" ? `WebTV Service` : `Splash`}</title>
<META HTTP-EQUIV=Refresh CONTENT="4;URL=${service_name == "wtv-home" ? `wtv-home:/home` : `wtv-register:/register`}?">

<display nostatus nooptions switchtowebmode>`
if (service_name == "wtv-home") data += `\n<LINK rel=next href="wtv-content:/ROMCache/BackgroundWebTVToday_a.swf">`;
data += `
<body bgcolor="#000000" text="#449944">
<bgsound src="file://ROM/Sounds/Splash.mid">
<display nooptions nostatus skipback>
<center><br><br><br><br><br>`;
if (minisrv_config.config.serviceType != "Debug") {
    data += `<br><br><br>`;
}

data += `<img align=bottom src="${isJune ? `images/SplashLogo1Pride.gif` : isHall ? `images/SplashLogo1MSN.gif` :minisrv_config.config.service_splash_logo}">`;
/* the code below is only currently known to be present on post 1999 webtv
if (!session_data.hasCap("client-has-tv-experience")) {
data += `<font color="#666666" size=0>TM</font>`
} */
data += `<br><br>`;

if (!isHall) {
    // determine gamer level
    if (session_data.hasCap("client-has-tuner")) data += `<spacer type=block width=5>
    <img src="ROMCache/plus.gif" width=232 height=21>`;
}
data += `
<p><br>`;

if (minisrv_config.config.serviceType == "Debug") {
    const process = require("process");
    data += `
    <table border>
    <tr><td width=150>
    WebTV Redialed (Debug)
    <tr><td>
    <b>Node.js version</b>: ${process.version}<br>
    <b>Server OS</b>: ${os.type()} v${os.release()} (${os.machine()})<br>
    <b>Server account</b>: ${os.userInfo().username}
    </table>
    </center>
    </html>`;
} else {
    data += `
    </center>
    </html>`;
}

