var minisrv_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;



data = nunjucks.render('ServiceDeps/templates/wtv-setup/setupGeneral.njk', { title: "Music", body: `<td abswidth=20>
<TR>
<td>
<td WIDTH=198 HEIGHT=236 VALIGN=top ALIGN=left>
<p>Turn on background music 
to have songs play continually in 
the background.
<p>Remember to adjust the 
volume on your TV so you can 
hear the music.
<TD WIDTH=20>
<TD WIDTH=198 VALIGN=top ALIGN=left>
<form action="wtv-setup:/setup">
<table cellspacing=0 cellpadding=0>
<tr>
<td valign=top>
<input type=hidden name=autosubmit value=true autosubmit=onleave>
<INPUT TYPE="checkbox" NAME="setup-play-bgm" VALUE="1"
action="client:SetSetupValue" selected &wtv-muzac-on;>
<td abswidth=4>
<td valign=top>
<font size=-1>Background<br>music</font>
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
<INPUT name="chooseMusicStyles" value="Choose Music Styles" WIDTH=197 action="wtv-setup:/choose-bg-songs"
TYPE=SUBMIT BORDERIMAGE="file://ROM/Borders/ButtonBorder2.bif" NAME="Button1" USESTYLE WIDTH=103>
<spacer type=block WIDTH=4 HEIGHT=1>
<INPUT name="Done" value="Done" WIDTH=103
TYPE=SUBMIT BORDERIMAGE="file://ROM/Borders/ButtonBorder2.bif" NAME="Button2" USESTYLE WIDTH=103>
</SHADOW></FONT></FORM>
<TD>
</TABLE>`, hasTuner: session_data.hasCap("client-has-tuner"), isJapaneseClient: session_data.isJapaneseClient()});
