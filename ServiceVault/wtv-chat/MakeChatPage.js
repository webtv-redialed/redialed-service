var wtvrsvc_service_file = true;

headers = `200 OK`;
if (request_headers.query.nick)
    headers += "\n" + session_data.setIRCNick(request_headers.query.nick);
headers += "\nContent-Type: text/html";

if (
    request_headers.query.host &&
    request_headers.query.port &&
    request_headers.query.channel
) {
    data = `<html><head>
<meta http-equiv="content-type" content="text/html; charset=windows-1252"></head><body fontsize="${session_data.isJapaneseClient() ? `small` : `medium`}" vspace="0" hspace="0" vlink="189cd6" text="44cc55" link="189cd6" bgcolor="191919">
<display address="${request_headers.query.host}, port ${request_headers.query.port}, room `;
    var chanWOhash = request_headers.query.channel.replace("#", "");
    data += chanWOhash;
    data += `">
<wtvchat
host="${request_headers.query.host}"
port="${request_headers.query.port}"
channel="`;
    if (request_headers.query.channel.indexOf("#") > -1) {
        data += request_headers.query.channel;
    } else {
        data += "#" + request_headers.query.channel;
    }
    data += `"
>
<title>`;
    data += chanWOhash;
    data += `
</title>
<display nologo="">
<script language="JavaScript">
function reportTrouble() {      Chat.openTargetedWhisperPanel("Report chat trouble or harrassment to Talk City:", "CSA", "Report")
}
</script>
<sidebar width="110">
<table gradcolor="1b1b1b" gradangle="0" cellspacing="0" cellpadding="0" bgcolor="3c384e">
<tbody><tr>
<td colspan="3" width="104" height="4">
</td><td rowspan="99" width="6" valign="top" height="420" align="left">
<img src="file://ROMCache/Shadow.gif" width="6" height="420">
</td></tr><tr>
<td width="6">
</td><td width="92" height="76">
<table href="wtv-home:/home" height="76" cellspacing="0" cellpadding="0">
<tbody><tr>
<td align="right">
<img src="file://ROMCache/WebTVLogoJewel.gif" width="87" height="67">
</td></tr></tbody></table>
</td><td width="6">
</td></tr><tr>
<td colspan="3" transparency="64" width="104" height="2" bgcolor="000000">
<spacer>
</spacer></td></tr><tr>
<td colspan="3" width="104" height="1">
</td></tr><tr>
<td colspan="3" transparency="88" width="104" height="2" bgcolor="ffffff">
<spacer>
</spacer></td></tr><tr>
<td colspan="3" height="31">
<table cellspacing="0" cellpadding="0">
<tbody><tr>
<td width="5" height="26">
</td><td width="93">
<table href="wtv-chat:/home" width="93" cellspacing="0" cellpadding="0">
<tbody><tr>
<td>
<table cellspacing="0" cellpadding="0">
<tbody><tr>
<td>
<shadow><font size="+0" color="e7ce4a">&nbsp;Chat home
</font></shadow></td></tr></tbody></table>
</td></tr></tbody></table>
</td><td width="6">
</td></tr><tr>
<td colspan="3" transparency="64" width="104" height="2" bgcolor="000000">
<spacer>
</spacer></td></tr><tr>
<td height="1">
</td></tr><tr>
<td colspan="3" transparency="88" width="104" height="2" bgcolor="ffffff">
<spacer>
</spacer></td></tr></tbody></table>
</td></tr><tr>
<td colspan="3" height="31">
<table cellspacing="0" cellpadding="0">
<tbody><tr>
<td width="5" height="26">
</td><td width="93">
<table href="javascript:void(window.open('newChatChannel.panel'))" width="93" cellspacing="0" cellpadding="0">
<tbody><tr>
<td>
<table cellspacing="0" cellpadding="0">
<tbody><tr>
<td>
<shadow><font size="+0" color="e7ce4a">&nbsp;Create
</font></shadow></td></tr></tbody></table>
</td></tr></tbody></table>
</td><td width="6">
</td></tr><tr>
<td colspan="3" transparency="64" width="104" height="2" bgcolor="000000">
<spacer>
</spacer></td></tr><tr>
<td height="1">
</td></tr><tr>
<td colspan="3" transparency="88" width="104" height="2" bgcolor="ffffff">
<spacer>
</spacer></td></tr></tbody></table>
</td></tr><tr>
<td colspan="3" height="31">
<table cellspacing="0" cellpadding="0">
<tbody><tr>
<td width="5" height="26">
</td><td width="93">
<table href="client:ListChannelUsers" width="93" cellspacing="0" cellpadding="0">
<tbody><tr>
<td>
<table cellspacing="0" cellpadding="0">
<tbody><tr>
<td>
<shadow><font size="+0" color="e7ce4a">&nbsp;People
</font></shadow></td></tr></tbody></table>
</td></tr></tbody></table>
</td><td width="6">
</td></tr><tr>
<td colspan="3" transparency="64" width="104" height="2" bgcolor="000000">
<spacer>
</spacer></td></tr><tr>
<td height="1">
</td></tr><tr>
<td colspan="3" transparency="88" width="104" height="2" bgcolor="ffffff">
<spacer>
</spacer></td></tr></tbody></table>
</td></tr><tr>
<td colspan="3" height="31">
<table cellspacing="0" cellpadding="0">
<tbody><tr>
<td width="5" height="26">
</td><td width="93">
<table href="client:OpenChatWhisperPanel" width="93" cellspacing="0" cellpadding="0">
<tbody><tr>
<td>
<table cellspacing="0" cellpadding="0">
<tbody><tr>
<td>
<shadow><font size="+0" color="e7ce4a">&nbsp;Whisper
</font></shadow></td></tr></tbody></table>
</td></tr></tbody></table>
</td><td width="6">
</td></tr><tr>
<td colspan="3" transparency="64" width="104" height="2" bgcolor="000000">
<spacer>
</spacer></td></tr><tr>
<td height="1">
</td></tr><tr>
<td colspan="3" transparency="88" width="104" height="2" bgcolor="ffffff">
<spacer>
</spacer></td></tr></tbody></table>
</td></tr><tr>
<td height="216">
</td></tr></tbody></table>
</sidebar>
<table text="12112E" gradcolor="435B29" gradangle="0" width="450" height="80" cellspacing="0" cellpadding="0" bgcolor="5D7F36">
<tbody><tr>
<td rowspan="2" width="12">
<spacer>
</spacer></td><td abswidth="305" valign="top" align="left">
<spacer height="10"><br>
<font size="+3" color="000000"><b>`;
    data += chanWOhash;
    data += `</b></font>
</spacer></td><td width="20">
<spacer>
</spacer></td><td abswidth="113" valign="top" align="right">
<img src="ROMCache/balloon2.gif" width="113" height="79">
</td></tr></tbody></table>
<table width="450" cellspacing="0" cellpadding="0">
<tbody><tr>
<td width="6" height="6">
<img src="file://ROMCache/Shadow.gif" width="6" height="6">
</td><td width="444" height="6">
<img src="file://ROMCache/Shadow.gif" width="450" height="6">
</td></tr><tr>
<td height="12">
</td></tr></tbody></table>
<table cellspacing="0" cellpadding="0">
<tbody><tr>
<td abswidth="14">
</td><td>
<wtvchattranscript height="210" width="100%">
</wtvchattranscript></td><td abswidth="20">
</td></tr><tr>
<td height="10">
</td></tr><tr>
<td>
</td><td colspan="2" height="2" bgcolor="2B2B2B">
<spacer>
</spacer></td></tr><tr>
<td height="1">
</td></tr><tr>
<td>
</td><td colspan="2" height="2" bgcolor="0D0D0D">
<spacer>
</spacer></td></tr><tr>
<td height="6">
</td></tr></tbody></table>
<table width="100%" cellspacing="0" cellpadding="0">
<tbody><tr>
<form action="client:ChatAddMessage" ONSUBMIT="this.chatinput.focus()">
<td abswidth=14>
<td>
<input id="chatinput" name="message" type="text" value="" size=32 bgcolor=262626 text=ffc342 cursor=cc9933 font=proportional selected autoactivate nohighlight>
<td align=right>
<font color=e7ce4a><shadow>
<input type=submit borderimage="file://ROM/Borders/ButtonBorder2.bif" value="Send" usestyle width=80>
<td abswidth=9>
</form>

</td></tr><tr>
<td height="12">
</td></tr><tr>
<td>
</td><td colspan="3">
</td></tr><tr>
<td height="8">
</td></tr></tbody></table>


</display></wtvchat></display></body></html>`;
} else {
    headers = `200 OK`;
    data = `<html><head>
<title>
Chat Rooms
</title>
<meta http-equiv="content-type" content="text/html; charset=windows-1252"></head><body fontsize="medium" vspace="0" hspace="0" vlink="189cd6" text="44cc55" link="189cd6" bgcolor="191919">
<wtvchat
host="${request_headers.query.host}"
port="${request_headers.query.port}"
channellistformat="<table cellspacing=0 cellpadding=0 href=%s><tr><td><table cellspacing=0 cellpadding=0><td abswidth=129 valign=top><font color=#A2ACB5><b>%s<td abswidth=8><td abswidth=220 valign=top><font color=#A2ACB5>%s<td abswidth=8><td abswidth=60 align=right valign=top><font color=#A2ACB5>%d</table></table><spacer type=block height=12>"
bgcolor="#191919"
<title>
Chat Rooms
</title>
<display address="${request_headers.query.host}, port ${request_headers.query.port}" nologo="">
<sidebar width=110>
<table cellspacing=0 cellpadding=0 bgcolor=3c384e gradcolor=1b1b1b gradangle=0>
<tr>
<td colspan=3 width=104 height=4>
<td rowspan=99 width=6 height=420 valign=top align=left>
<img src="file://ROMCache/Shadow.gif" width=6 height=420>
<tr>
<td width=6>
<td width=92 height=76>
<table href="wtv-home:/home" height=76 cellspacing=0 cellpadding=0>
<tr>
<td align=right>
<img src="file://ROMCache/WebTVLogoJewel.gif" width=87 height=67>
</table>
<td width=6>
<tr>
<td colspan=3 width=104 height=2 bgcolor=000000 transparency=64>
<spacer>
<tr>
<td colspan=3 width=104 height=1>
<tr>
<td colspan=3 width=104 height=2 bgcolor=ffffff transparency=88>
<spacer>
<tr>
<td height=31 colspan=3>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=5 height=26>
<td width=93>
<table width=93 cellspacing=0 cellpadding=0 href="javascript:void(window.open('newChatChannel.panel'))">
<tr>
<td>
<table cellspacing=0 cellpadding=0>
<tr>
<td>
<shadow><font color=e7ce4a size=+0>&nbsp;Create
</table>
</table>
<td width=6>
<tr>
<td colspan=3 width=104 height=2 bgcolor=000000 transparency=64>
<spacer>
<tr>
<td height=1>
<tr>
<td colspan=3 width=104 height=2 bgcolor=ffffff transparency=88>
<spacer>
</table>
<tr>
<td height=31 colspan=3>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=5 height=26>
<td width=93>
<table width=93 cellspacing=0 cellpadding=0 href="client:OpenChatPrivateChannelPanel">
<tr>
<td>
<table cellspacing=0 cellpadding=0>
<tr>
<td>
<shadow><font color=e7ce4a size=+0>&nbsp;Enter
</table>
</table>
<td width=6>
<tr>
<td colspan=3 width=104 height=2 bgcolor=000000 transparency=64>
<spacer>
<tr>
<td height=1>
<tr>
<td colspan=3 width=104 height=2 bgcolor=ffffff transparency=88>
<spacer>
</table>
<tr>
<td height=278>
</table>
</sidebar>
<table width=450 height=80 cellspacing=0 cellpadding=0 bgcolor=315d40 gradcolor=191919 gradangle=-90>
<tr>
<td width=2 rowspan=2 bgcolor=292929>
<spacer>
<td width=12 rowspan=2>
<td width=102 height=21>
<td width=102 rowspan=2>
<td width=74 rowspan=2 valign=top>
<img src=ROMCache/Balloon.gif width=74 height=38>
<td width=14 rowspan=2>
<td width=67 rowspan=2 valign=top>
<img src=ROMCache/BalloonsLeft.gif width=67 height=76>
<td width=64 rowspan=2 valign=top>
<img src=ROMCache/BalloonsRight.gif width=64 height=76>
<td width=13 rowspan=2>
<tr>
<td height=59 valign=top>
<spacer type=vertical height=33>
<img src=ROMCache/RoomsTitle.gif width=175 height=27>
</table>
<table width=450 cellspacing=0 cellpadding=0>
<tr>
<td width=6 height=6>
<img src=file://ROMCache/Shadow.gif width=6 height=6>
<td width=444 height=6>
<img src=file://ROMCache/Shadow.gif width=450 height=6>
<tr>
<td height=12>
</table>
<table cellspacing="0" cellpadding="0">
<tbody><tr>
<td abswidth="14">
</td><td>
<font size=small font color=grey>Room<img src="ROMCache/Spacer.gif" height=25 width="96">Topic
<img src="ROMCache/Spacer.gif" height=0 width="217">Peo<br>
<img src="ROMCache/Spacer.gif" height=0 width="390">-ple</font><br><br>
<wtvchatchannellist height="200" width="100%">
</wtvchatchannellist></td><td abswidth="20">
</td></tr><tr>
<td height="10">
</td></tr><tr>
<td>

</td></tr><tr>
<td height="12">
</td></tr><tr>
<td>
</td><td colspan="3">
</td></tr><tr>
<td height="8">
</td></tr></tbody></table>


</display></wtvchat></display></body></html>`;
}
