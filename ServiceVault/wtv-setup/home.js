var minisrv_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;

const nunjucks = require("nunjucks");
nunjucks.configure({ autoescape: false });

// this sucks
let sitetitle = ''

if (session_data.hasCap("client-has-tv-experience"))
    sitetitle = 'Web Home options'
else
    sitetitle = 'Home options'

data = nunjucks.render('ServiceDeps/templates/wtv-setup/setupGeneral.njk', { title: sitetitle, body: `<td abswidth=20>
<TR>
<td>
<td WIDTH=215 HEIGHT=236 VALIGN=top ALIGN=left>
<p>Turn ${session_data.getSessionData("alt_home") == '1' ? "off" : "on"} the classic ${session_data.hasCap("client-has-tv-experience") ? `Web Home` : 'Home'} page design.
<TD WIDTH=20>
<TD WIDTH=198 VALIGN=top ALIGN=left>
<form action="wtv-setup:/validate-home-options">
<table cellspacing=0 cellpadding=0>
<tr>
<td valign=top>
<INPUT TYPE="checkbox" NAME="home" VALUE="1" ${session_data.getSessionData("alt_home") == '1' ? "checked" : ""}>
<td abswidth=4>
<td valign=top>
<font size=-1>Classic home</font>
<tr><td absheight=10>
<tr>
<td valign=top>
</table>
<TR>
<TD>
<TD COLSPAN=4 HEIGHT=14 VALIGN=top ALIGN=left>
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
<TD COLSPAN=3 VALIGN=top ALIGN=right>
<FONT COLOR="#E7CE4A" SIZE=-1><SHADOW>
<INPUT name="Done" value="Done" WIDTH=103
TYPE=SUBMIT BORDERIMAGE="file://ROM/Borders/ButtonBorder2.bif" NAME="Button2" USESTYLE WIDTH=103>
</SHADOW></FONT></FORM>
<TD>
</TABLE>`, hasTuner: session_data.hasCap("client-has-tuner"), isJapaneseClient: session_data.isJapaneseClient()});