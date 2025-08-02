var wtvrsvc_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;

data = nunjucks.render('ServiceDeps/templates/wtv-setup/setupGeneral.njk', {
    title: 'Center the screen',
    body: `
<td abswidth=14>
<td colspan=3>
<table cellspacing=0 cellpadding=0>
<tr>
</table>
<td abswidth=20>
<TR>
<td>
<td WIDTH=198 HEIGHT=244 VALIGN=top ALIGN=left>
You can adjust the position of WebTV pages on your screen using these arrows. This is useful if WebTV looks off-center on your television.
<TD WIDTH=20>
<TD WIDTH=198 VALIGN=top ALIGN=left>
<FORM><CENTER>
<BR><BR><BR><BR><BR>
<TABLE cellspacing=4>
<TR>
<TD>
<TD align=center><A HREF="client:adjustactivearea?xadj=0&yadj=-1"><IMG src="images/UpGreenArrow.gif"></A>
<TD>
<TR>
<TD align=right><A HREF="client:adjustactivearea?xadj=-1&yadj=0"><IMG src="images/LeftGreenArrow.gif"></A>
<TD align=center><A HREF="client:adjustactivearea?xadj=0&yadj=0" SELECTED><IMG src="images/ResetButton.gif"></A>
<TD align=left><A HREF="client:adjustactivearea?xadj=1&yadj=0"><IMG src="images/RightGreenArrow.gif"></A>
<TR>
<TD>
<TD align=center><A HREF="client:adjustactivearea?xadj=0&yadj=1"><IMG src="images/DownGreenArrow.gif"></A>
<TD>
</TABLE>
</CENTER></FORM>
<TD>
<TR>
<TD>
<TD COLSPAN=4 HEIGHT=7 VALIGN=top ALIGN=left>
<tr>
<TD>
<td colspan=4 height=2 valign=middle align=center bgcolor="2B2B2B">
<img src="wtv-home:/ROMCache/Spacer.gif" width=436 height=1>
<tr>
<TD>
<td colspan=4 height=1 valign=top align=left>
<tr>
<TD>
<td colspan=4 height=2 valign=top align=left bgcolor="0D0D0D">
<img src="wtv-home:/ROMCache/Spacer.gif" width=436 height=1>
<TR>
<TD>
<TD COLSPAN=4 HEIGHT=4 VALIGN=top ALIGN=left>
<TR>
<TD>
<TD COLSPAN=3 VALIGN=top ALIGN=right>
<FORM action="client:goback">
<FONT COLOR="#E7CE4A" SIZE=-1><SHADOW>
`,
    hasTuner: session_data.hasCap('client-has-tuner'),
    isJapaneseClient: session_data.isJapaneseClient(),
    button: true
});