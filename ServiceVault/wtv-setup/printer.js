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

headers = `302 Moved temporarily
Location: wtv-setup:/sounds/nevergonnagiveuup.mid?wtv-title=joeb`;
/*
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
These options affect
how pages will be
printed for
${session_data.getSessionData("subscriber_username")}.`;
if (session_data.get("wtv-client-rom-type") == "bf0app") {
  data += `
<p>If you have installed a
black cartridge in
your printer, check
<b>Black cartridge</b>.`;
}
data += `
</table>
<table align=bottom>
<a href="/printer-options">printer picker 9000</a>
</table>
<form action="/validate-printer">
<input type=hidden name=autosubmit value=true autosubmit=onleave>
<TD WIDTH=20>
<TD WIDTH=198 VALIGN=top ALIGN=left>
<table>
<tr>
<td valign=top>
<input type=checkbox name=wtv-black-text value=true ${
  print_black_text ? "checked" : ""
}>
<td width=5 rowspan=99>
<td valign=top align=left href="wtv-guide:/help?topic=Printing&subtopic=Printeroptions">Print text<br>in black
<tr>
<td height=12>
<tr>
<td valign=top>
<input type=checkbox name=wtv-print-headers value=true ${
  print_headers ? "checked" : ""
}>
<td valign=top align=left href="wtv-guide:/help?topic=Printing&subtopic=Printeroptions">Print date<br>and Web info
<tr>
<td height=12>
<tr>
<td valign=top>
<input type=checkbox name=wtv-print-background-images value=true ${
  print_background_images ? "checked" : ""
}>
<td valign=top align=left href="/printer-options">Print background images`;
if (session_data.get("wtv-client-rom-type") == "bf0app") {
  data += `
<tr>
<td height=12>
<tr>
<td valign=top>
<input type=checkbox name=wtv-black-pen-installed value=true ${
    print_uses_black_pen ? "checked" : ""
  }>
<td valign=top align=left href="wtv-guide:/help?topic=Printing&subtopic=Printeroptions&page=BlackCartridge">Black cartridge<br> installed`;
}
data += `
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
*/