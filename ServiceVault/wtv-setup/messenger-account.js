var minisrv_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;

data = `<!--- *=* Copyright 1996, 1997 WebTV Networks, Inc. All rights reserved. --->
<HTML>
<HEAD>
<TITLE>
Messenger account
</TITLE>
<DISPLAY noscroll nologo>
</HEAD>
<sidebar width=110> <table cellspacing=0 
cellpadding=0 bgcolor=452a36>
<tr>
<td colspan=3 abswidth=104 absheight=4>
<td rowspan=99 width=6 absheight=420 valign=top 
align=left>
<img src="/ROMCache/Shadow.gif" width=6 
height=420>
<tr>
<td abswidth=6>
<td abswidth=92 absheight=76>
<table href="wtv-home:/home" absheight=76 
cellspacing=0 cellpadding=0>
<tr>
<td align=right>
<img src="/ROMCache/WebTVLogoJewel.gif" width=87 
height=67>
</table>
<td abswidth=6>
<tr><td absheight=5 colspan=3>
<table cellspacing=0 cellpadding=0>
<tr><td abswidth=104 absheight=2 valign=middle 
align=center bgcolor=2e1e26>
<img src="/ROMCache/Spacer.gif" width=1 height=1>
<tr><td abswidth=104 absheight=1 valign=top 
align=left>
<tr><td abswidth=104 absheight=2 valign=top 
align=left bgcolor=6b4657>
<img src="/ROMCache/Spacer.gif" width=1 height=1>
</table>
<tr>
<td height=31 colspan=3>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=5 height=26>
<td width=93>
<table width=93 cellspacing=0 cellpadding=0 
href=wtv-guide:/help> <!-- wtv-tricks:/help?topic=Messenger&subtopic=Index -->
<tr>
<td>
<table cellspacing=0 cellpadding=0>
<tr>
<td>
<shadow><font color=e7ce4a size=-1> Help
</table>
</table>
<td width=6>
<tr>
<td colspan=3 width=104 height=2 bgcolor=000000 
transparency=64>
<spacer>
<tr>
<td height=1>
<tr>
<td colspan=3 width=104 height=2 bgcolor=ffffff 
transparency=88>
<spacer>
</table>
<tr><td absheight=${session_data.hasCap("client-has-tuner") ? 101 : 140}>
<tr><td absheight=${session_data.hasCap("client-has-tuner") ? 166 : 123} align=right colspan=3>
<img src="${session_data.hasCap("client-has-tuner") ? "wtv-setup:/ROMCache/Settings" : "images/Setup"}Banner.gif" 
width=54 height=${session_data.hasCap("client-has-tuner") ? 166 : 123}>
<tr><td absheight=41>
</table>
</sidebar>
<BODY BGCOLOR="#191919" TEXT="#42CC55" LINK="189CD6" VLINK="189CD6" HSPACE=0 VSPACE=0 FONTSIZE="large"
>
<table cellspacing=0 cellpadding=0>
<tr>
<td abswidth=14>
<td colspan=3>
<table cellspacing=0 cellpadding=0>
<tr>
<td valign=center absheight=80>
<font size="+2" color="E7CE4A"><blackface><shadow>
Messenger account
</table>
<td abswidth=20>
<TR>
<td>
<td WIDTH=205 HEIGHT=250 VALIGN=top ALIGN=left>
<table cellspacing=0 cellpadding=0>
<tr>
<td absheight=195 valign=top>
Type your Messenger account details here.
</table>
<TD WIDTH=20>
<TD WIDTH=198 VALIGN=top ALIGN=left>
<table cellspacing=0 cellpadding=0>
<tr>
<td align=left>
User Name<form action=validate-messenger-account>
<INPUT noSubmit name="email" id="email" Value=""
bgcolor=#444444 text=#ffdd33 cursor=#cc9933
TYPE="input" ASCIIONLY
SIZE="16"
MAXLENGTH="16"></FONT>
<p>
<input type="hidden" autosubmit="onLeave">`;
if (session_data.getSessionData("messenger_server") == "msnmsgr.escargot.chat" || session_data.getSessionData("messenger_server") == "ds.escargot.nina.chat") {
    data += `
<select name="domain">
<option value="escargot.chat">@escargot.chat
</option><option value="escargot.live">@escargot.live
</option></select>`;
} else {
    data += `<INPUT name="domain" Value=""
bgcolor=#444444 text=#ffdd33 cursor=#cc9933
TYPE="input" ASCIIONLY
SIZE="16"
MAXLENGTH="16">`;
}
data += `
<p>
Password
<INPUT noSubmit name="password" id="password" Value=""
bgcolor=#444444 text=#ffdd33 cursor=#cc9933
TYPE="password" ASCIIONLY
SIZE="16"
MAXLENGTH="20"></input>
<br><br>
Type again to verify
<INPUT noSubmit name="verify" id="verify" Value=""
bgcolor=#444444 text=#ffdd33 cursor=#cc9933
TYPE="password" ASCIIONLY
SIZE="16"
MAXLENGTH="20">
</table>
<TR>
<TD>
<TD COLSPAN=4 HEIGHT=0 VALIGN=top ALIGN=left>
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
<TR>
<TD>
<TD COLSPAN=4 HEIGHT=4 VALIGN=top ALIGN=left>
<TR>
<TD>
<TD COLSPAN=2 VALIGN=top ALIGN=left>
<TD VALIGN=top ALIGN=right>
<FONT COLOR="#E7CE4A" SIZE=-1><SHADOW>
<INPUT TYPE=SUBMIT BORDERIMAGE="file://ROM/Borders/ButtonBorder2.bif" Value=Done NAME="Done" USESTYLE WIDTH=103>
</SHADOW></FONT></FORM>
<TD>
</TABLE>
</BODY>
</HTML>`;