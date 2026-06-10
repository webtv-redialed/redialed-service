var minisrv_service_file = true;
var settings_obj = session_data.getSessionData("wtv-setup");
if (settings_obj === null) settings_obj = {};

const print_black_text =
    session_data.getSessionData("subscriber_print_black_text") == true;
const print_headers =
    session_data.getSessionData("subscriber_print_headers") == true;
const print_background_images =
    session_data.getSessionData("subscriber_print_background_images") == true;
const print_uses_black_pen =
    session_data.getSessionData("subscriber_print_uses_black_pen") == true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;

data = `<HTML>
<HEAD>
<TITLE>
Printing options
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
Printing Options
</table>
<td abswidth=20>
<TR>
<td>
<td WIDTH=198 HEIGHT=250 VALIGN=top ALIGN=left>
<table cellspacing=0 cellpadding=0>
<tr>
<td absheight=195 valign=top>
Choose the printer connected to WebTV.
If your model number doesn't match exactly,
choose the closest match in the list.
</table>
<form action="/validate-printer-options">
<input type=hidden name=autosubmit value=true autosubmit=onleave>
<TD WIDTH=20>
<TD WIDTH=198 VALIGN=top ALIGN=left>
<table>
<select name=wtv-printer-model>
<option value=4,0>Lexmark Z11</option>
<option value=2,12>Canon BJC-35</option>
<option value=2,11>Canon BJC-80</option>
<option value=2,1>Canon BJC-210</option>
<option value=2,2>Canon BJC-240</option>
<option value=2,3>Canon BJC-250</option>
<option value=2,9>Canon BJC-610</option>
<option value=2,10>Canon BJC-620</option>
<option value=2,15>Canon BJC-1000</option>
<option value=2,16>Canon BJC-2000</option>
<option value=2,4>Canon BJC-4100</option>
<option value=2,5>Canon BJC-4200</option>
<option value=2,6>Canon BJC-4300</option>
<option value=2,13>Canon BJC-4400</option>
<option value=2,7>Canon BJC-4550</option>
<option value=2,8>Canon BJC-4650</option>
<option value=2,17>Canon BJC-6000</option>
<option value=2,0>other Canon printer</option>
<option value=1,1>HP DeskJet 400</option>
<option value=1,7>HP DeskJet 540</option>
<option value=1,2>HP DeskJet 600</option>
<option value=1,12>HP DeskJet 610</option>
<option value=1,3>HP DeskJet 660c</option>
<option value=1,6>HP DeskJet 670c/670TV</option>
<option value=1,4>HP DeskJet 680c</option>
<option value=1,5>HP DeskJet 690c</option>
<option value=1,11>HP DeskJet 810c</option>
<option value=1,10>HP DeskJet 830</option>
<option value=1,9>HP DeskJet 880c</option>
<option value=1,8>HP DeskJet 895c</option>
<option value=-1,-1>No printer</option>
</select>
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
</HTML>


`;
