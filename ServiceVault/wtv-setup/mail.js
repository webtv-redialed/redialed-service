var wtvrsvc_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Expires: Wed, 09 Oct 1991 22:00:00 GMT
wtv-expire-all: wtv-mail:
Content-Type: text/html`;

data = nunjucks.render('ServiceDeps/templates/wtv-setup/setupGeneral.njk', {
    title: 'Mail settings',
    body: `
<td abswidth=20>
<TR>
<td>
<td WIDTH=198 HEIGHT=206 VALIGN=top ALIGN=left>
<A HREF="client:showalert?message=This%20feature%20is%20not%20yet%20available." selected><BLACKFACE>Extras</BLACKFACE></A><BR>
<FONT SIZE="-1">Additional features for storing, addressing, and replying to mail</FONT><BR>
<spacer type=block WIDTH=1 HEIGHT=7><BR>
<A HREF="client:showalert?message=This%20feature%20is%20not%20yet%20available."><BLACKFACE>Listing</BLACKFACE></A><BR>
<FONT SIZE="-1">Choose the order in which messages are listed in the mail list</FONT><BR>
${ session_data.user_id == 0 ? `
<spacer type=block WIDTH=1 HEIGHT=7><BR>
<A HREF="wtv-setup:/mail-messagewatch"><BLACKFACE>Message light</BLACKFACE></A><BR>
<FONT SIZE="-1">Automatically check for mail once a day</FONT><BR>
` : '' }
<TD WIDTH=20>
<TD WIDTH=198 VALIGN=top ALIGN=left>
<A HREF="wtv-setup:/mail-signature"><BLACKFACE>Signature</BLACKFACE></A><BR>
<FONT SIZE="-1">Add personal text to the bottom of every message you send</FONT><BR>
<spacer type=block WIDTH=1 HEIGHT=7><BR>
<A HREF="client:showalert?message=This%20feature%20is%20not%20yet%20available."><BLACKFACE>Mail name</BLACKFACE></A><BR>
<FONT SIZE="-1">Change the name that appears on your mail</FONT><BR>
<spacer type=block WIDTH=1 HEIGHT=7><BR>
<A HREF="client:showalert?message=This%20feature%20is%20not%20yet%20available."><BLACKFACE>Remote mail</BLACKFACE></A><BR>
<FONT SIZE="-1">Fetch mail from another mail account</FONT><BR>
<spacer type=block WIDTH=1 HEIGHT=7><BR>
<A HREF="client:showalert?message=This%20feature%20is%20not%20yet%20available."><BLACKFACE>Junk Mail</BLACKFACE></A><BR>
<FONT SIZE="-1">Block unwanted mail</FONT><BR>
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