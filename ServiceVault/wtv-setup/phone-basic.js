var minisrv_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;

data = `<!--- *=* Copyright 1996, 1997 WebTV Networks, Inc. All rights reserved. --->
<HTML>
<HEAD>
<TITLE>
Dialing options
</TITLE>
<DISPLAY noscroll nologo>
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
<img src="${minisrv_config.config.service_logo}" width=87 height=67>
</table>
<td abswidth=6>
<tr><td absheight=5 colspan=3>
<table cellspacing=0 cellpadding=0>
<tr><td abswidth=104 absheight=2 valign=middle align=center bgcolor=2e1e26>
<spacer>
<tr><td abswidth=104 absheight=1 valign=top align=left>
<tr><td abswidth=104 absheight=2 valign=top align=left bgcolor=6b4657>
<spacer>
</table>
<tr><td absheight=${session_data.hasCap("client-has-tuner") ? 132 : 171}>
<tr><td absheight=${session_data.hasCap("client-has-tuner") ? 166 : 123} align=right colspan=3>
<img src="${session_data.hasCap("client-has-tuner") ? "wtv-setup:/ROMCache/Settings" : "images/Setup"}Banner.gif" width=54 height=${session_data.hasCap("client-has-tuner") ? 166 : 123}>
<tr><td absheight=41>
</table>
</sidebar>
<BODY BGCOLOR="#191919" TEXT="#42CC55" LINK="189CD6" VLINK="189CD6" HSPACE=0 VSPACE=0 FONTSIZE="${session_data.isJapaneseClient() ? `medium` : `large`}"
>
<table cellspacing=0 cellpadding=0>
<tr>
<td abswidth=14>
<td colspan=3>
<table cellspacing=0 cellpadding=0>
<tr>
<td valign=center absheight=80>
<font size="+2" color="E7CE4A"><blackface><shadow>
Dialing options
</table>
<td abswidth=20>
<TR>
<td>
<td WIDTH=198 HEIGHT=250 VALIGN=top ALIGN=left>
<table cellspacing=0 cellpadding=0>
<tr>
<td absheight=127 valign=top>
<font size=-1>Some phone lines require a dialing prefix such as 9
to make an outside call. If necessary, type the number here.
<tr>
<td valign=top>
<font size=-1>If your phone line only allows pulse dialing, rather than
tone dialing, check this box.
</table>
<TD WIDTH=20>
<TD WIDTH=198 VALIGN=top ALIGN=left>
<form action="client:ConfirmPhoneSetup">
<input type=hidden name=autosubmit value=true autosubmit=onleave>
<table cellspacing=0 cellpadding=0>
<tr>
<td align=right>
Prefix:
<td width=8>
<td width=100>
<input type=text name=DialOutsidePrefix bgcolor=#444444 text=#ffdd33 cursor=#cc9933 size=4 maxlength=16 numbers value="&outstr;">	<tr>
<td height=8>
<tr>
<td align=right>
<i>example:</i>
<td width=8>
<td>
<i><tt>9</tt></i>
<tr>
<td absheight=80>
<tr>
<td valign=top colspan=3>
<input type=checkbox name=UsePulseDialing value=true checked=&pulse;>&nbsp;Pulse&nbsp;dialing
<input type=hidden name=UsePulseDialing value="">
</table>
</form>

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
<FORM action="client:goback">
<FONT COLOR="#E7CE4A" SIZE=-1><SHADOW>
<INPUT TYPE=SUBMIT BORDERIMAGE="file://ROM/Borders/ButtonBorder2.bif" Value=Done NAME="Done" USESTYLE WIDTH=103>
</SHADOW></FONT></FORM>
<TD>
</TABLE>
</BODY>
</HTML>


`;
