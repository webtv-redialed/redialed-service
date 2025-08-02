var wtvrsvc_service_file = true;

var offsetvalue = session_data.getSessionData("messagewatch-offset");

headers = `200 OK
Connection: Keep-Alive
wtv-expire-all: wtv-mail:
Expires: Wed, 09 Oct 1991 22:00:00 GMT
Content-Type: text/html`;

data = nunjucks.render('ServiceDeps/templates/wtv-setup/setupGeneral.njk', {
    title: 'Automatic mail checking',
    body: `
<TR>
<td>
<td width="198" valign="top" height="244" align="left">
Choose a time if you want your
Internet terminal to check for new messages daily, even
while your television is off. <p>The red <font size="-1">MESSAGE</font> light
will illuminate if you have new mail.
</p>
<td width="20">
<td width="198" valign="top" align="left">
<FORM method="POST" action="/validate-mail-messagewatch">
<input type="hidden" autosubmit="onLeave">
<select name="messageWatchHour">
<option value="off" ${ offsetvalue == 'off' ? 'selected=""' : '' }>Don't check</option>
<option value="0" ${ offsetvalue == '0' ? 'selected=""' : '' }>Midnight</option>
<option value="3600" ${ offsetvalue == '3600' ? 'selected=""' : '' }>1 a.m.</option>
<option value="7200" ${ offsetvalue == '7200' ? 'selected=""' : '' }>2 a.m.</option>
<option value="10800" ${ offsetvalue == '10800' ? 'selected=""' : '' }>3 a.m.</option>
<option value="14400" ${ offsetvalue == '14400' ? 'selected=""' : '' }>4 a.m.</option>
<option value="18000" ${ offsetvalue == '18000' ? 'selected=""' : '' }>5 a.m.</option>
<option value="21600" ${ offsetvalue == '21600' ? 'selected=""' : '' }>6 a.m.</option>
<option value="25200" ${ offsetvalue == '25200' ? 'selected=""' : '' }>7 a.m.</option>
<option value="28800" ${ offsetvalue == '28800' ? 'selected=""' : '' }>8 a.m.</option>
<option value="32400" ${ offsetvalue == '32400' ? 'selected=""' : '' }>9 a.m.</option>
<option value="36000" ${ offsetvalue == '36000' ? 'selected=""' : '' }>10 a.m.</option>
<option value="39600" ${ offsetvalue == '39600' ? 'selected=""' : '' }>11 a.m.</option>
<option value="43200" ${ offsetvalue == '43200' ? 'selected=""' : '' }>Noon</option>
<option value="46800" ${ offsetvalue == '46800' ? 'selected=""' : '' }>1 p.m.</option>
<option value="50400" ${ offsetvalue == '50400' ? 'selected=""' : '' }>2 p.m.</option>
<option value="54000" ${ offsetvalue == '54000' ? 'selected=""' : '' }>3 p.m.</option>
<option value="57600" ${ offsetvalue == '57600' ? 'selected=""' : '' }>4 p.m.</option>
<option value="61200" ${ offsetvalue == '61200' ? 'selected=""' : '' }>5 p.m.</option>
<option value="64800" ${ offsetvalue == '64800' ? 'selected=""' : '' }>6 p.m.</option>
<option value="68400" ${ offsetvalue == '68400' ? 'selected=""' : '' }>7 p.m.</option>
<option value="72000" ${ offsetvalue == '72000' ? 'selected=""' : '' }>8 p.m.</option>
<option value="75600" ${ offsetvalue == '75600' ? 'selected=""' : '' }>9 p.m.</option>
<option value="79200" ${ offsetvalue == '79200' ? 'selected=""' : '' }>10 p.m.</option>
<option value="82800" ${ offsetvalue == '82800' ? 'selected=""' : '' }>11 p.m.</option>
</select>
</form>
<p><i>Times are approximate.</i>
</p>
<TR>
<TD>
<TD COLSPAN=4 HEIGHT=7 VALIGN=top ALIGN=left>
<tr>
<TD>
<td colspan="4" height="2" valign="middle" align="center" bgcolor="2B2B2B">
<img src="wtv-home:/ROMCache/Spacer.gif" width=436 height=1>
</td></tr>
<tr>
<TD>
<td colspan="4" height="1" valign="top" align="left">
</td></tr>
<tr>
<TD>
<td colspan="4" height="2" valign="top" align="left" bgcolor="0D0D0D">
<img src="wtv-home:/ROMCache/Spacer.gif" width=436 height=1>
<TR>
<TD>
<TD COLSPAN=4 HEIGHT=4 VALIGN=top ALIGN=left>
<TR>
<TD>
<TD COLSPAN=3 VALIGN=top ALIGN=right>
<FORM action="client:goback">
<font size="-1" color="#E7CE4A"><shadow>
`,
    hasTuner: session_data.hasCap('client-has-tuner'),
    isJapaneseClient: session_data.isJapaneseClient(),
    button: true,
});

