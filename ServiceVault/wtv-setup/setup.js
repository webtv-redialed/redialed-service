var wtvrsvc_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;

data = `<HTML>
<HEAD>
<meta http-equiv="reply-type" content="charset=iso-2022">
<TITLE>
${session_data.hasCap("client-has-tuner") ? "Settings" : "Setup"}
</TITLE>
<DISPLAY >
</HEAD>
<sidebar width=110> <table cellspacing=0 cellpadding=0 BGCOLOR=452a36>
<tr>
<td colspan=3 abswidth=104 absheight=4>
<td rowspan=99 width=6 absheight=420 valign=top align=left>
<img src="file://ROM/Cache/Shadow.gif" width=6 height=420>
<tr>
<td abswidth=6>
<td abswidth=92 absheight=76>
<table href="wtv-home:/home" absheight=76 cellspacing=0 cellpadding=0>
<tr>
<td align=right>
<img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width=87 height=67>
</table>
<td abswidth=6>
<tr><td absheight=5 colspan=3>
<table cellspacing=0 cellpadding=0>
<tr><td abswidth=104 absheight=2 valign=middle align=center bgcolor=2e1e26>
<img src="file://ROM/Cache/Spacer.gif" width=1 height=1>
<tr><td abswidth=104 absheight=1 valign=top align=left>
<tr><td abswidth=104 absheight=2 valign=top align=left bgcolor=6b4657>
<spacer type=block width=1 height=1>
</table>
<tr><td absheight=${session_data.hasCap("client-has-tuner") ? 132 : 171}>
<tr><td absheight=${session_data.hasCap("client-has-tuner") ? 166 : 123} align=right colspan=3>
<img src="${session_data.hasCap("client-has-tuner") ? "wtv-setup:/ROMCache/Settings" : "images/Setup"}Banner.gif" width=54 height=${session_data.hasCap("client-has-tuner") ? 166 : 123}>
<tr><td absheight=41>
</table>
</sidebar>
<BODY BGCOLOR="#191919" TEXT="#42CC55" LINK="36d5ff" VLINK="36d5ff" FONTSIZE="${session_data.isJapaneseClient() ? `medium` : `large`}"
hspace=0 vspace=0
>
<table cellspacing=0 cellpadding=0>
<tr>
<td abswidth=14>
<td colspan=3>
<table cellspacing=0 cellpadding=0>
<tr>
<td valign=center absheight=80>
<shadow><font color="e7ce4a" font size="+1"><blackface>
${session_data.hasCap("client-has-tuner") ? "Settings" : "Setup"}</blackface>
for ${session_data.getSessionData("subscriber_username") || "You"}
</font><shadow>
</table>
<tr>
<TD>
<td colspan=4 height=2 valign=middle align=center bgcolor="2B2B2B">
<spacer type=block width=436 height=1>
<tr>
<TD>
<td colspan=4 height=1 valign=top align=left>
<tr>
<TD>
<td colspan=4 height=2 valign=top align=left bgcolor="0D0D0D">
<spacer type=block width=436 height=1>
<td abswidth=20>
<TR>
<td>
<font size="-1">
<td WIDTH=150 HEIGHT=244 VALIGN=top ALIGN=left>
<br>
<font color=36d5ff>&#128;</font><spacer type=block width=6 height=1><font size="-1"><blackface>
<a href="wtv-setup:/mail">Mail</a><BR>
<spacer type=block width=1 height=5><BR>
<font color=36d5ff>&#128;</font><spacer type=block width=6 height=1>
<a href="wtv-setup:/edit-password">Password</a><BR>
<spacer type=block width=1 height=5><BR>`;
if (session_data.user_id == 0) {
    data += `
<font color=36d5ff>&#128;</font><spacer type=block width=6 height=1>
<a href="wtv-setup:/screen">Television</a><BR>
<spacer type=block width=1 height=5><BR>`;
}
data += `
<font color=36d5ff>&#128;</font><spacer type=block width=6 height=1>
<a href="wtv-setup:/text">Text size</a><BR>
<spacer type=block width=1 height=5><BR>
<font color=36d5ff>&#128;</font><spacer type=block width=6 height=1>
<a href="wtv-setup:/sound">Music</a><BR>
<spacer type=block width=1 height=5><BR>
<font color=36d5ff>&#128;</font><spacer type=block width=6 height=1>
<a href="wtv-setup:/printer">Printing</a><BR>
<spacer type=block width=1 height=5><BR>
<font color=36d5ff>&#128;</font><spacer type=block width=6 height=1>
<a href="wtv-setup:/keyboard">Keyboard</a><BR>
<spacer type=block width=1 height=5><BR>
<font color=36d5ff>&#128;</font><spacer type=block width=6 height=1>
<a href="wtv-setup:/home">${session_data.hasCap("client-has-tv-experience") ? `Web Home` : 'Home'}</a><BR>
<spacer type=block width=1 height=5><BR>`;
var supportsmessenger = session_data.hasCap("client-can-use-messenger");
var msnchat = session_data.hasCap("client-supports-MSN-chat");
if (supportsmessenger || msnchat == true) {
    data += `<font color=36d5ff>&#128;</font><spacer type=block width=6 height=1>
<a href="wtv-setup:/messenger">Messenger</a><BR>
<spacer type=block width=1 height=5><BR>`;
} else if (
    ssid_sessions[socket.ssid].get("wtv-need-upgrade") ||
    ssid_sessions[socket.ssid].get("wtv-used-8675309") ||
    (parseInt(session_data.get("wtv-system-version")) < 7000 &&
        session_data.get("wtv-client-rom-type") == "bf0app")
) {
    data += `<font color=36d5ff>&#128;</font><spacer type=block width=6 height=1>
<a href="wtv-setup:/options">Options</a><BR>
<spacer type=block width=1 height=5><BR>`;
}
if (session_data.user_id == 0) {
    data += `
<font color=36d5ff>&#128;</font><spacer type=block width=6 height=1>
<a href="wtv-setup:/accounts">Extra users</a><BR>
<spacer type=block width=1 height=5><BR>
<font color=36d5ff>&#128;</font><spacer type=block width=6 height=1>
<a href="wtv-setup:/phone">Dialing</a><BR>
<spacer type=block width=1 height=5><BR>
<font color=36d5ff>&#128;</font><spacer type=block width=6 height=1>
<a href="wtv-music:/MusicCache/setcustom">Custom BGM</a><BR>`;
}
data += `

<TD WIDTH=20>
<TD WIDTH=266 VALIGN=top ALIGN=left>
<spacer type=block width=2 height=14><font size="2"><br>
Signature and more<BR>
<spacer type=block width=2 height=5><font size="2"><br>
Change your password<BR>`;
if (session_data.user_id == 0) {
    data += `
<spacer type=block width=2 height=5><font size="2"><br>
Options for your TV<BR>`;
}
data += `
<spacer type=block width=2 height=5><font size="2"><br>
Make text bigger or smaller<BR>
<spacer type=block width=2 height=5><font size="2"><br>
Play background songs<BR>
<spacer type=block width=2 height=5><font size="2"><br>
Change how you print<BR>
<spacer type=block width=2 height=5><font size="2"><br>
Choose an on-screen keyboard<BR>
<spacer type=block width=2 height=5><font size="2"><br>
Options for your home page<BR>`;
if (supportsmessenger || msnchat == true) {
    data += `
<spacer type=block width=2 height=5><font size="2"><br>
Options for instant messages<BR>`;
} else if (
    (ssid_sessions[socket.ssid].get("wtv-need-upgrade") ||
        ssid_sessions[socket.ssid].get("wtv-used-8675309")) < 7000 &&
    session_data.get("wtv-client-rom-type") == "bf0app"
) {
    data += `
<spacer type=block width=2 height=5><font size="2"><br>
Turn on advanced options<BR>`;
}
if (session_data.user_id == 0) {
    data += `
<spacer type=block width=2 height=6><font size="2"><br>
Add, change, or remove users<BR>
<spacer type=block width=2 height=6><font size="2"><br>
Connecting to WebTV<BR>
<spacer type=block width=2 height=6><font size="2"><br>
Set custom background music<BR>`;
}
data += `




<tr>
<TD>
<td colspan=4 height=3 valign=middle align=center bgcolor="2B2B2B">
<spacer type=block width=436 height=1>
<tr>
<TD>
<td colspan=4 height=1 valign=top align=left>
<tr>
<TD>
<td colspan=4 height=2 valign=top align=left bgcolor="0D0D0D">
<spacer type=block width=436 height=1>
<TR>
<TD>
<TD COLSPAN=4 HEIGHT=4 VALIGN=top ALIGN=left>
<TR>
<TD>
<TD COLSPAN=3 VALIGN=top ALIGN=right>
<FORM
action="wtv-home:/home" selected>
<FONT COLOR="#E7CE4A" SIZE=-1><SHADOW>
<INPUT TYPE=SUBMIT BORDERIMAGE="file://ROM/Borders/ButtonBorder2.bif" Value=Done NAME="Done" USESTYLE WIDTH=103>
</SHADOW></FONT></FORM>
<TD>
</TABLE>
</BODY>
</HTML>`;
