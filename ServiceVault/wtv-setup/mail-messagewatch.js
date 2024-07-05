var minisrv_service_file = true;

var offsetvalue = session_data.getSessionData("messagewatch-offset");

headers = `200 OK
Connection: Keep-Alive
wtv-expire-all: wtv-mail:
Expires: Wed, 09 Oct 1991 22:00:00 GMT
Content-Type: text/html`;

data = `<html><head>
<title>
Automatic mail checking
</title>
</head><body vspace="0" hspace="0" fontsize="${session_data.isJapaneseClient() ? `medium` : `large`}" vlink="36d5ff" text="#42CC55" link="36d5ff" bgcolor="#191919"><display>

<sidebar width="110"> <table cellspacing="0" cellpadding="0" bgcolor="452a36">
<tbody><tr>
<td colspan="3" abswidth="104" absheight="4">
</td><td rowspan="99" absheight="420" width="6" valign="top" align="left">
<img src="wtv-home:/ROMCache/Shadow.gif" width="6" height="420">
</td></tr><tr>
<td abswidth="6">
</td><td abswidth="92" absheight="76">
<table href="wtv-home:/home" absheight="76" cellspacing="0" cellpadding="0">
<tbody><tr>
<td align="right">
<img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width="87" height="67">
</td></tr></tbody></table>
</td><td abswidth="6">
</td></tr><tr><td absheight="5" colspan="3">
<table cellspacing="0" cellpadding="0">
<tbody><tr><td abswidth="104" absheight="2" valign="middle" bgcolor="2e1e26" align="center">
<img src="wtv-home:/ROMCache/Spacer.gif" width="1" height="1">
</td></tr><tr><td abswidth="104" absheight="1" valign="top" align="left">
</td></tr><tr><td abswidth="104" absheight="2" valign="top" bgcolor="6b4657" align="left">
<img src="wtv-home:/ROMCache/Spacer.gif" width="1" height="1">
</td></tr></tbody></table>
</td></tr><td absheight=${session_data.hasCap("client-has-tuner") ? 132 : 171}>
<tr><td absheight=${session_data.hasCap("client-has-tuner") ? 166 : 123} align=right colspan=3>
<img src="${session_data.hasCap("client-has-tuner") ? "wtv-setup:/ROMCache/Settings" : "images/Setup"}Banner.gif" width=54 height=${session_data.hasCap("client-has-tuner") ? 166 : 123}>
<tr><td absheight=41>
</td></tr></tbody></table>
</sidebar>
<table cellspacing="0" cellpadding="0">
<tbody><tr>
<td abswidth="14">
</td><td colspan="3">
<table cellspacing="0" cellpadding="0">
<tbody><tr>
<td absheight="80" valign="center">
<font size="+2" color="E7CE4A"><blackface><shadow>
Automatic mail checking
</shadow></blackface></font></td></tr></tbody></table>
</td><td abswidth="20">
</td></tr><tr>
<td>
</td><td width="198" valign="top" height="244" align="left">
Choose a time if you want your
Internet terminal to check for new messages daily, even
while your television is off. <p>The red <font size="-1">MESSAGE</font> light
will illuminate if you have new mail.
</p></td><td width="20">
</td><td width="198" valign="top" align="left">
<form method="POST" action="/validate-mail-messagewatch">
<input type="hidden" autosubmit="onLeave">
<select name="messageWatchHour">
<option value="off" `;
if (offsetvalue == "off") data += `selected=""`;
data += `>Don't check
</option><option value="0" `;
if (offsetvalue == "0") data += `selected=""`;
data += `>Midnight
</option><option value="3600" `;
if (offsetvalue == "3600") data += `selected=""`;
data += `>1 a.m.
</option><option value="7200" `;
if (offsetvalue == "7200") data += `selected=""`;
data += `>2 a.m.
</option><option value="10800" `;
if (offsetvalue == "10800") data += `selected=""`;
data += `>3 a.m.
</option><option value="14400" `;
if (offsetvalue == "14400") data += `selected=""`;
data += `>4 a.m.
</option><option value="18000" `;
if (offsetvalue == "18000") data += `selected=""`;
data += `>5 a.m.
</option><option value="21600" `;
if (offsetvalue == "21600") data += `selected=""`;
data += `>6 a.m.
</option><option value="25200" `;
if (offsetvalue == "25200") data += `selected=""`;
data += `>7 a.m.
</option><option value="28800" `;
if (offsetvalue == "28800") data += `selected=""`;
data += `>8 a.m.
</option><option value="32400" `;
if (offsetvalue == "32400") data += `selected=""`;
data += `>9 a.m.
</option><option value="36000" `;
if (offsetvalue == "36000") data += `selected=""`;
data += `>10 a.m.
</option><option value="39600" `;
if (offsetvalue == "39600") data += `selected=""`;
data += `>11 a.m.
</option><option value="43200" `;
if (offsetvalue == "43200") data += `selected=""`;
data += `>Noon
</option><option value="46800" `;
if (offsetvalue == "46800") data += `selected=""`;
data += `>1 p.m.
</option><option value="50400" `;
if (offsetvalue == "50400") data += `selected=""`;
data += `>2 p.m.
</option><option value="54000" `;
if (offsetvalue == "54000") data += `selected=""`;
data += `>3 p.m.
</option><option value="57600" `;
if (offsetvalue == "57600") data += `selected=""`;
data += `>4 p.m.
</option><option value="61200" `;
if (offsetvalue == "61200") data += `selected=""`;
data += `>5 p.m.
</option><option value="64800" `;
if (offsetvalue == "64800") data += `selected=""`;
data += `>6 p.m.
</option><option value="68400" `;
if (offsetvalue == "68400") data += `selected=""`;
data += `>7 p.m.
</option><option value="72000" `;
if (offsetvalue == "72000") data += `selected=""`;
data += `>8 p.m.
</option><option value="75600" `;
if (offsetvalue == "75600") data += `selected=""`;
data += `>9 p.m.
</option><option value="79200" `;
if (offsetvalue == "79200") data += `selected=""`;
data += `>10 p.m.
</option><option value="82800" `;
if (offsetvalue == "82800") data += `selected=""`;
data += `>11 p.m.
</option></select>
</form>
<p><i>Times are approximate.</i>
</p></td><td>
</td></tr><tr>
<td>
</td><td colspan="4" valign="top" height="7" align="left">
</td></tr><tr>
<td>
</td><td colspan="4" valign="middle" height="2" bgcolor="2B2B2B" align="center">
<img src="wtv-home:/ROMCache/Spacer.gif" width="436" height="1">
</td></tr><tr>
<td>
</td><td colspan="4" valign="top" height="1" align="left">
</td></tr><tr>
<td>
</td><td colspan="4" valign="top" height="2" bgcolor="0D0D0D" align="left">
<img src="wtv-home:/ROMCache/Spacer.gif" width="436" height="1">
</td></tr><tr>
<td>
</td><td colspan="4" valign="top" height="4" align="left">
</td></tr><tr>
<td>
</td><td colspan="3" valign="top" align="right">
<form action="client:goback">
<font size="-1" color="#E7CE4A"><shadow>
<input type="SUBMIT" borderimage="file://ROM/Borders/ButtonBorder2.bif" value="Done" name="Done" usestyle="" width="103">
</shadow></font></form>
</td><td>
</td></tr></tbody></table>
</display></body></html>
`;
