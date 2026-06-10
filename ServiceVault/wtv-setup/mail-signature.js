var minisrv_service_file = true;
var signature = session_data.getSessionData("subscriber_signature");
if (signature === null) signature = "";
session_data.saveSessionData();

headers = `200 OK
Connection: Keep-Alive
Expires: Wed, 09 Oct 1991 22:00:00 GMT
wtv-expire-all: wtv-mail:
Content-Type: text/html`;

data = nunjucks.render('ServiceDeps/templates/wtv-setup/setupGeneral.njk', {
    title: 'Mail signature setup',
    title2: 'Mail signature',
    body: `
<td abswidth=20>
<TR>
<td>
<td colspan=2 WIDTH=416 HEIGHT=118 VALIGN=top ALIGN=left>
Type a short text <B>signature</B> here and it will be added to the end of each mail message you send.
<TR>
<TD>
<TD colspan=2 WIDTH=416 HEIGHT=118 VALIGN=top ALIGN=left>
<FORM method="POST" action="/validate-mail-signature">
<INPUT type=hidden autosubmit=onleave>
<TEXTAREA name="mail_signature"
  action="/validate-mail-signature"
  selected
  bgcolor="#191919" text="#44cc55"
  cursor=#cc9933
  cols=45 rows=4
  autoactivate
  nosoftbreaks
  maxlength=4096
  font=proportional>${session_data.getSessionData("subscriber_signature") || ""}</TEXTAREA>
<TR>
<TD>
<TD COLSPAN=4 HEIGHT=7 VALIGN=top ALIGN=left>
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
<FORM action="client:goback">
<font color="#E7CE4A" size=-1><shadow>
`,
    hasTuner: session_data.hasCap('client-has-tuner'),
    isJapaneseClient: session_data.isJapaneseClient(),
    button: true,
});
