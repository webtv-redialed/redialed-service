var wtvrsvc_service_file = true;
/* 	a lot of assumptions are being made about how this works. poo.
	this serves as a way for braindead boxes to repair themselves. box will request a checksum for the appropriate ROMFS container, and we need to be responsible for providing it.
	this is most useful for bf0app 2.x clients which have a tendency to become braindead for various reasons, e.g. hitting reset button during error dialog lag */

headers = `200 OK
Connection: Keep-Alive
wtv-expire-all: wtv-
wtv-expire-all: http
Content-Type: text/html`;

var needTMP = request_headers.query.needTMPfilesystem; // our query from prereg or headwaiter
const knownTMPFS = fs.readdirSync("./ServiceVault/wtv-flashrom/TMP", { withFileTypes: true }).map(item => item.name) // we need a known list of TMPFS so if the user requests a bogus checksum or the box wants something we don't have then the user will be presented with an error
if (knownTMPFS.includes(needTMP)) headers += `\nwtv-tmp-filesystem: wtv-flashrom:/TMP/${needTMP}`; // remember to newline this otherwise webtv will be mad

data = `<html>
<head>
<display switchtowebmode nosave nosend noback skipback clearback nooptions>
<title>${knownTMPFS.includes(needTMP) ? "Contacting WebTV" : "Call customer care"}</title>
</head>
<body bgcolor="#0" text="#42CC55" fontsize="large" hspace=0 vspace=0>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=104 height=74 valign=middle align=center bgcolor="3B3A4D">
<img src="${knownTMPFS.includes(needTMP) ? "wtv-flashrom:/ROMCache" : "file://ROM/Cache"}/WebTVLogoJewel.gif" width=86 height=64>
<td width=20 valign=top align=left bgcolor="3B3A4D">
<spacer>
<td colspan=2 width=436 valign=middle align=left bgcolor="3B3A4D">
<font color="D6DFD0" size="+2"><blackface><shadow>
<spacer type=block width=1 height=4>
<br>
${knownTMPFS.includes(needTMP) ? "Contacting WebTV" : "Call customer care"}
</shadow>
</blackface>
</font>
<tr>
<td width=104 height=20>
<td width=20>
<td width=416>
<td width=20>
<tr>
<td colspan=2>
<td>
<font size=+1>
<p>
Your Internet terminal is ${knownTMPFS.includes(needTMP) ? `contacting WebTV to correct a minor
problem. 
<p>This usually takes a few minutes` : `not working correctly. 
<p>
For assistance, contact WebTV Customer Care
and tell them that you saw problem M-78`}.
</table>`;
if (knownTMPFS.includes(needTMP)) data += `
<spacer type=vertical size=144><br>
<font color=808080>
<spacer type=horizontal size=32><progressindicator name="downloadprogress" height=44 width=240>
</font>`;
data += `
</body>
</html>`;