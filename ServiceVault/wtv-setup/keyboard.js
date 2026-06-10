var minisrv_service_file = true;
var settings_obj = session_data.getSessionData("wtv-setup");
if (settings_obj === null) settings_obj = {};



headers = `200 OK
Connection: Keep-Alive
Expires: Wed, 09 Oct 1991 22:00:00 GMT
Content-Type: text/html`;

data = nunjucks.render('ServiceDeps/templates/wtv-setup/setupGeneral.njk', { title: `Keyboard ${session_data.hasCap("client-has-tuner") ? "settings" : "setup"}`, title2: "Keyboard", body: `<td abswidth=20>
<TR>
<td>
<td WIDTH=198 HEIGHT=250 VALIGN=top ALIGN=left>
<table cellspacing=0 cellpadding=0>
<tr>
<td absheight=195 valign=top>
Choose the kind of 
keyboard that should 
appear on your screen.
</table>
<form action="client:SetSetupValue">
<input type=hidden name=autosubmit value=true autosubmit=onleave>
<input type="hidden" name="kbsetting" id=kbsetting value="&kbd;">
<TD WIDTH=20>
<TD WIDTH=198 VALIGN=top ALIGN=left>
<table cellspacing=0 cellpadding=0>
<tr>
<td align=left>
<p>
<INPUT TYPE="radio" id="alphabetical" NAME="setup-keyboard" VALUE="alphabetical">
<IMG SRC="wtv-home:/ROMCache/Spacer.gif" WIDTH=1 HEIGHT=1> Alphabetical<BR>
<IMG SRC="wtv-home:/ROMCache/Spacer.gif" WIDTH=29 HEIGHT=1>
<IMG SRC="wtv-setup:/ROMCache/kb_alpha.gif" WIDTH=144 HEIGHT=22>
<BR>
<BR>
<INPUT TYPE="radio" id="standard" NAME="setup-keyboard" VALUE="standard" ${settings_obj["setup-keyboard"] == "standard" ? "selected" : ""}>
<IMG SRC="wtv-home:/ROMCache/Spacer.gif" WIDTH=1 HEIGHT=1> Traditional<BR>
<IMG SRC="wtv-home:/ROMCache/Spacer.gif" WIDTH=29 HEIGHT=1>
<IMG SRC="wtv-setup:/ROMCache/kb.gif" WIDTH=144 HEIGHT=22>
</table>
</form>
<script>

var kbvalue = document.forms[0].kbsetting.value
if (kbvalue == "alphabetical") {
 document.forms[0].alphabetical.checked = true
} else {
 document.forms[0].standard.checked = true
}
</script>
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
<FONT COLOR="#E7CE4A" SIZE=-1><SHADOW>`, hasTuner: session_data.hasCap("client-has-tuner"), isJapaneseClient: session_data.isJapaneseClient(), button: true});