var minisrv_service_file = true;

var irc_nick = "";
headers = `200 OK`;
if (request_headers.query.nick)
    headers += "\n" + session_data.setIRCNick(request_headers.query.nick);
else if (!session_data.getSessionData("subscriber_irc_nick"))
    session_data.getSessionData("subscriber_username") ||
    session_data
        .setIRCNick(
            minisrv_config.config.service_name +
            "_" +
            Math.floor(Math.random() * 100000)
        )
        .substring(0, 16);
headers += "\nContent-Type: text/html";

var irc_nick =
    session_data.getSessionData("subscriber_irc_nick") ||
    session_data.getSessionData("subscriber_username");

data = `<html>
<head>
<title>
Chat
</title>
</head>
<body bgcolor=191919 text=44cc55 link=189cd6 vlink=189cd6 hspace=0 vspace=0 fontsize=${session_data.isJapaneseClient() ? `medium` : `large`}>
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
<table width=93 cellspacing=0 cellpadding=0 href="wtv-chat:/type">
<tr>
<td>
<table cellspacing=0 cellpadding=0>
<tr>
<td>
<shadow><font color=e7ce4a size=-1>&nbsp;Go to
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
<img src=ROMCache/ChatTitle.gif width=102 height=38>
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
<table width=450 cellspacing=0 cellpadding=0>
<tr>
<td width=15>
<td width=120 valign=top>
<table cellspacing=0 cellpadding=0 href=wtv-chat:/MakeChatPage?host=irc.libera.chat&port=6667 selected>
<tr>
<td>
<table cellspacing=0 cellpadding=0>
<tr>
<td colspan=2><center>
<img src=wtv-home:/images/chat.gif>
</center>
<tr>
<td height=6>
<tr>
<td width=5>
<td align=left>
<font size=-2>Visit the chat site to learn about the dozens of other chats
happening right now.
</table>
</table>
<td width=10>
<td width=2 rowspan=2 bgcolor=000000>
<spacer>
<td width=1>
<td width=2 rowspan=2 bgcolor=292929>
<spacer>
<td width=10>
<td width=250>
<table cellspacing=0 cellpadding=0>
<tr>
<td>
<font size=-1 color=e7ce4a><blackface>What's on now</blackface></font>
<tr>
<td valign=top>
<table cellspacing=0 cellpadding=0>
<tr>
<td height=20>
<tr>
<td>
<table cellspacing=0 cellpadding=0 href="wtv-chat:/MakeChatPage?host=irc.libera.chat&port=6667&channel=WebTV">
<tr>
<td width=13>
<td valign=top>
<table cellspacing=0 cellpadding=0>
<tr>
<td maxlines=1>
<font size=-1 color=189CD6><b>WebTV</b></font>
</table>
<table cellspacing=0 cellpadding=0>
<tr>
<td maxlines=4>
<font size=-2>Visit here to talk to other WebTV
users and learn about chatting on the Internet.</font>
</table>
</table>
<tr>
<td height=20>
<tr>
<td>
<table cellspacing=0 cellpadding=0 href="wtv-chat:/MakeChatPage?host=irc.libera.chat&port=6667&channel=Protoweb">
<tr>
<td width=13>
<td valign=top>
<table cellspacing=0 cellpadding=0>
<tr>
<td maxlines=1>
<font size=-1 color=189CD6><b>ProtoWeb</b></font>
</table>
<table cellspacing=0 cellpadding=0>
<tr>
<td maxlines=5>
<font size=-2>A channel for users of the ProtoWeb service.</font>
</table>
</table>
<tr>
<td height=20>
<tr>
<td>
<table cellspacing=0 cellpadding=0 href="wtv-chat:/MakeChatPage?host=irc.libera.chat&port=6667&channel=Libera">
<tr>
<td width=13>
<td valign=top>
<table cellspacing=0 cellpadding=0>
<tr>
<td maxlines=1>
<font size=-1 color=189CD6><b>Libera</b></font>
</table>
<table cellspacing=0 cellpadding=0>
<tr>
<td maxlines=5>
<font size=-2>Official Libera IRC Chat support.</font>
</table>
</table>
<tr>
<td height=20>
</table>
<tr>
<td>
<tr>
<td>
</table>
</table>
</table>
<tr>
<td height=12>
<spacer>
</table>
</body>
</html>
`;
