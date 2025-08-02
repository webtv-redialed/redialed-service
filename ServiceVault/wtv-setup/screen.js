var wtvrsvc_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;

data = nunjucks.render('ServiceDeps/templates/wtv-setup/setupGeneral.njk', {
    title: 'Television',
    body: `
<td abswidth=20>
<TR>
<td>
<td WIDTH=198 HEIGHT=241 VALIGN=top ALIGN=left>
<A HREF="wtv-setup:/center-display" selected><BLACKFACE>Center</BLACKFACE></A><BR>
<FONT SIZE="-1">Center WebTV on your screen</FONT><BR>
${ parseInt(session_data.get("wtv-system-version")) < 7000 && session_data.get("wtv-client-rom-type") == "bf0app" ? `
<spacer type=block WIDTH=1 HEIGHT=7><BR>
<A HREF="wtv-setup:/screen-border"><BLACKFACE>Border</BLACKFACE></A><BR>
<FONT SIZE="-1">Change the color of the screen border</FONT><BR>
` : '' }

<TD WIDTH=20>

<TD WIDTH=198 VALIGN=top ALIGN=left>
<A HREF="wtv-setup:/adjust-display-intro"><BLACKFACE>Picture</BLACKFACE></A><BR>
<FONT SIZE="-1">Adjust brightness, contrast, and sharpness</FONT><BR>

<TR>
<TD>
<TD COLSPAN=4 HEIGHT=9 VALIGN=top ALIGN=left>
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
<FORM action="wtv-setup:/setup">
<FONT COLOR="#E7CE4A" SIZE=-1><SHADOW>
`,
    hasTuner: session_data.hasCap('client-has-tuner'),
    isJapaneseClient: session_data.isJapaneseClient(),
    button: true
});

