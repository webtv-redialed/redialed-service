var minisrv_service_file = true;

var shade = session_data.getSessionData("screen-border-shade");

if (!shade) {
    session_data.setSessionData("screen-border-shade", "dark");
    session_data.saveSessionData();
    shade = "dark";
}

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;

data = nunjucks.render('ServiceDeps/templates/wtv-setup/setupGeneral.njk', {
    title: 'Screen border',
    body: `
<td abswidth=14>
<td colspan=3>
<table cellspacing=0 cellpadding=0>
<FORM action="/validate-screen-border" select="medium">
</table>
<td abswidth=20>
<TR>
<td>
<td WIDTH=198 HEIGHT=244 VALIGN=top ALIGN=left>
Select the brightness you would
like for the border around the edge of the screen. <p>Adjusting the
screen border can help reduce the bent lines that appear
on some televisions.
<TD WIDTH=20>

<TD WIDTH=198 VALIGN=top ALIGN=left>
<table>
<tr valign=top>
<td>
<input name=shade type=radio bgcolor=#444444 value="dark"${shade == "dark" ? ' selected checked' : ''}>
<td>
Dark
<tr><td height=16>
<tr valign=top>
<td>
<input name=shade type=radio bgcolor=#444444 value="medium"${shade == "medium" ? ' selected checked' : ''}>
<td>
Medium
<tr><td height=16>
<tr valign=top>
<td>
<input name=shade type=radio bgcolor=#444444 value="light"${shade == "light" ? ' selected checked' : ''}>
<td>
Light
</table>
<TR>
<TD>
<TD COLSPAN=4 HEIGHT=7 VALIGN=top ALIGN=left>
<tr>
<TD>
<td colspan=4 height=2 valign=middle align=center bgcolor="2B2B2B">
<img src="/ROMCache/Spacer.gif" width=436 height=1>
<tr>
<TD>
<td colspan=4 height=1 valign=top align=left>
<tr>
<TD>
<td colspan=4 height=2 valign=top align=left bgcolor="0D0D0D">
<img src="/ROMCache/Spacer.gif" width=436 height=1>
<TR>
<TD>
<TD COLSPAN=4 HEIGHT=4 VALIGN=top ALIGN=left>
<TR>
<TD>
<TD COLSPAN=3 VALIGN=top ALIGN=right>
<FONT COLOR="#E7CE4A" SIZE=-1><SHADOW>
`,
    hasTuner: session_data.hasCap('client-has-tuner'),
    isJapaneseClient: session_data.isJapaneseClient(),
    button: true
});

