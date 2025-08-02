var wtvrsvc_service_file = true;

headers = `200 OK`;
if (request_headers.query.nick)
    headers += "\n" + session_data.setIRCNick(request_headers.query.nick);
headers += "\nContent-Type: text/html";

data = `<html><head>
<meta http-equiv="content-type" content="text/html; charset=windows-1252"></head><body fontsize="large" vspace="0" hspace="0" vlink="189cd6" text="44cc55" link="189cd6" bgcolor="191919">
<wtvchat
host="${request_headers.query.host}"
port="${request_headers.query.port}"
channellistformat="<table cellspacing=0 cellpadding=0 href=%s><tr><td><table cellspacing=0 cellpadding=0><td abswidth=129 valign=top><font color=#A2ACB5><b>%s<td abswidth=8><td abswidth=211 valign=top><font color=#A2ACB5>%s<td abswidth=8><td abswidth=60 align=right valign=top><font color=#A2ACB5>%d</table></table><spacer type=block height=12>"
bgcolor="#191919"
>
<title>
Chat Rooms
</title>
<display nologo="">
<script language="JavaScript">
function reportTrouble() {      Chat.openTargetedWhisperPanel("Report chat trouble or harrassment to Talk City:", "CSA", "Report")
}
</script>


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
<table width=93 cellspacing=0 cellpadding=0 href="wtv-chat:/home">
<tr>
<td>
<table cellspacing=0 cellpadding=0>
<tr>
<td>
<shadow><font color=e7ce4a size=-1>&nbsp;Chat home
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
<table width=93 cellspacing=0 cellpadding=0 href="wtv-guide:/help?topic=Chat&subtopic=Index&appName=Chat">
<tr>
<td>
<table cellspacing=0 cellpadding=0>
<tr>
<td>
<shadow><font color=e7ce4a size=-1>&nbsp;Help
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
<img src=ROMCache/chat2.gif width=240 height=38>
</table>
<table width=450 cellspacing=0 cellpadding=0>
<tr>
<td width=444 height=6>
<img src=file://ROMCache/Shadow.gif width=450 height=6>
<wtvchatchannellist height="298" width="100%">
</wtvchatchannellist></td><td abswidth="20">
</td></tr><tr>
</td></tr><tr>
</td></tr></tbody></table>


</display></wtvchat></display></body></html>`;
