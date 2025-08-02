var wtvrsvc_service_file = true;

var irc_nick = "";
headers = `200 OK`;
if (request_headers.query.nick)
    headers += "\n" + session_data.setIRCNick(request_headers.query.nick);
else if (!session_data.getSessionData("subscriber_irc_nick"))
    session_data.getSessionData("subscriber_username") ||
    session_data
        .setIRCNick(
            wtvrsvc_config.config.service_name +
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
Go to a Chat room
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
<table width=93 cellspacing=0 cellpadding=0 href="wtv-chat:/home">
<tr>
<td>
<table cellspacing=0 cellpadding=0>
<tr>
<td>
<shadow><font color=e7ce4a size=-1>&nbsp;Chat
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
<td width=12 rowspan=2>
<td width=67 rowspan=2 valign=top>
<img src=ROMCache/BalloonsLeft.gif width=67 height=76>
<td width=64 rowspan=2 valign=top>
<img src=ROMCache/BalloonsRight.gif width=64 height=76>
<td width=13 rowspan=2>
<tr>
<td height=59 valign=top>
<spacer type=vertical height=33>
<img src=ROMCache/GoToTitle.gif width=275 height=27>
</table>
<table width=450 cellspacing=0 cellpadding=0>
<tr>


<td width=444 height=6>
<img src=file://ROMCache/Shadow.gif width=450 height=6>
<form action="wtv-chat:/MakeChatPage">
<table cellspacing=0 cellpadding=0>
<tr>
<td width=14 rowspan=99>
<td>
<font size=-1>
<br>
Type the name of the chat or IRC server that you want to connect to.
<td width=20 rowspan=99>
<td valign=top><br>
<b><font size=-1>Server</font></b>
<img src=ROMCache/Spacer.gif height=3><br>
<font size=-1 color=ffdd33>
<input name="host" value="" size=23 bgcolor=212121 cursor=cc9933 selected usestyle autoactivate nohighlight>
<td width=20 rowspan=99>
<tr>
<td height=10>
<tr>
<td>
<font size=-1>
The port is usually 6667.<br>
If you know a different
port number, type it here.
<td valign=top>
<b><font size=-1>Port</font></b><br>
<img src=ROMCache/Spacer.gif height=3><br>
<font size=-1 color=ffdd33>
<input name="port" value="6667" size=5 bgcolor=212121 cursor=cc9933 usestyle autoactivate nohighlight>
<tr>
<td height=10>
<tr>
<td>
<font size=-1>
Optionally, type the room you want to connect to. 
If you leave the room blank, you will get a list of 
all the rooms on the server.
<td valign=top>
<b><font size=-1>Room</font></b><br>
<img src=ROMCache/Spacer.gif height=3><br>
<font size=-1 color=ffdd33>
<input name="channel" value="" size=23 bgcolor=212121 cursor=cc9933 usestyle autoactivate nohighlight>
<tr>
<td height=0>
<tr>
<td height=0 width=436 colspan=99>
<tr>
<td height=0>
<tr>
<td>
<td align=right>
<font color=e7ce4a size=-1><shadow><br><br>
<input type=submit borderimage="file://ROM/Borders/ButtonBorder2.bif" value="Connect" usestyle>
</table>
</form>
</body>
</html>
`;
