var minisrv_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;

data = `<html>
<head>
<title>MSN Messenger</title>	<script language="Javascript">
function getHumanName(emailAddress)
{	return Blim.getUmanName(emailAddress);	}
function setHumanName(emailAddress, newName)
{	return Blim.setUmanName(emailAddress, newName);	}
function MessengerIsOkay()
{	return ( Blim.isAlive() );
}
function isFriend(emailAddress)
{	return Blim.isInList("FL", emailAddress);
}
function isBlocked(emailAddress)
{	return Blim.isInList("BL", emailAddress);
}
function isAllowed(emailAddress)
{	return Blim.isInList("AL", emailAddress);
}
// policy: if the user adds a friend, we automatically allow and unblock
// the person at the same time
function befriendThisPerson(emailAddress)
{	Blim.addToList("FL", emailAddress);
var executeAllow = "allowThisPerson('" + emailAddress + "');";
var executeUnblock = "unblockThisPerson('" + emailAddress + "');";
setTimeout(executeAllow, 1*1000);
setTimeout(executeUnblock, 2*1000);
}
// policy: do not block when un-buddying-- make sure person is on allow list
function defriendThisPerson(emailAddress)
{	Blim.removeFromList("FL", emailAddress);
var executeAllow = "allowThisPerson('" + emailAddress + "');";
setTimeout(executeAllow, 1*500);
}
function blockThisPerson(emailAddress)
{	Blim.removeFromList("AL", emailAddress);
setTimeout("blockThisPersonCore('" + emailAddress + "');", 1*1000);
}
function blockThisPersonCore(emailAddress)
{	Blim.addToList("BL", emailAddress);
}
function unblockThisPerson(emailAddress)
{	Blim.removeFromList("BL", emailAddress);
setTimeout("allowThisPersonCore('" + emailAddress + "');", 1*1000);
}
function allowThisPerson(emailAddress)
{	Blim.removeFromList("BL", emailAddress);
setTimeout("allowThisPersonCore('" + emailAddress + "');", 1*1000);
}
function allowThisPersonCore(emailAddress)
{	Blim.addToList("AL", emailAddress);
}
function disallowThisPerson(emailAddress)
{	Blim.removeFromList("AL", emailAddress);
setTimeout("blockThisPersonCore('" + emailAddress + "');", 1*1000);
}
// convenience: start a conversation
function StartConversation(emailAddress)
{	Blim.openConversation( emailAddress ); Blim.openMessagesPanel();
}	// convenience: bring up the main Messenger panel
function ShowMessengerPanel()
{	Blim.openMessagesPanel();
}
</script>
<script language="Javascript">
var gTheList = "FL";
var gUserHasNoFriends = (Blim.listLength("FL") < 0);
function scrollFriendList()
{	var scrawlHere = document.friendList.document;
// handle scrolling here when we get art and some scroll position client javascript
}
function refreshFriendList()
{	var i;
var scrawlHere = document.friendList.document;
scrawlHere.open("text/html", "replace");
var atLeastOneConnected = false;
if (! Blim.isAlive() )
{	scrawlHere.write("<table border=0 cellspacing=3 cellpadding=0><tr>");
scrawlHere.write("<tr><td><font color=#FFEFAD>");
scrawlHere.write("MSN Messenger is currently turned off. To send and receive instant ");
scrawlHere.write("messages again, choose <b>Turn MSN Messenger on</b>.");
scrawlHere.write("</font>");
scrawlHere.write("</table>");
scrawlHere.close();
return;
}
var listLength = Blim.listLength("FL");
if (listLength == 0)
{	scrawlHere.write('<table border=0 cellspacing=3 cellpadding=0 ><tr>');
scrawlHere.write("<tr><td><font color=FFEFAD size=-1>You don't have any buddies yet. ");
scrawlHere.write('<p>To add a buddy or send an instant message, ');
scrawlHere.write('choose <b>Use MSN Messenger now</b>. ');
scrawlHere.write('You can also add buddies in your Address book.');
}
else
{	scrawlHere.write("<table border=0 cellspacing=3 cellpadding=0><tr>");
var isFirst = true;
for ( i=0 ; i < listLength; i++)
{	var ID = Blim.listItem("FL", i);
var humanName = Blim.getUmanName(ID);
if ( Blim.isFriendOnline(ID))
{	atLeastOneConnected = true;
scrawlHere.write('<tr><td maxlines=1><b><a ');
if (isFirst)
{	scrawlHere.write(" id=firstFriend selected ");
isFirst = false;
}
scrawlHere.write('href="javascript:void(StartConversation(');
scrawlHere.write("'");
scrawlHere.write(ID);
scrawlHere.write("'");
scrawlHere.write('))">');
scrawlHere.write("<font color=FFEFAD size=-1>");	scrawlHere.write(escapeHTML(humanName));
scrawlHere.write("</a></b><br>");
}
}
if (!atLeastOneConnected)
scrawlHere.write("<tr><td><font color=FFEFAD size=-1>");
scrawlHere.write("Your buddies aren't connected right now. ");
scrawlHere.write('To add a new buddy or send an instant message, ');
scrawlHere.write('choose <b>Use MSN Messenger now</b>.');
}
scrawlHere.write("</font>");
scrawlHere.write("</table>");
scrawlHere.close();
}
</script>
<script language="Javascript">
</script>
</head>
<display fontsize=medium noscroll>
<body bgcolor=292929 text="#d6d6d6" link=42CC55 vlink=42CC55 hspace=0 vspace=0 fontsize=medium onBuddyListChange="refreshFriendList()">
<table cellspacing=0 cellpadding=0 valign=top bgcolor=292929 border=0 height=100%>
<tr bgcolor=425252>
<td height=1 width=21></td>
<td height=1 width=10></td>
<td height=1 width=250></td>
<td height=1 width=279></td>
<tr bgcolor=7b948c>
<td colspan=4>
<table cellpadding=0 cellspacing=0 border=0 width=560 background="images/Messenger/messenger_masthead.gif"
gradcolor="425252"
bgcolor = "7b948c"
gradangle=180
>
<td height=80 width=100 valign=center align=center>
<a href='wtv-home:/home'><img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width=87 height=67></a>
<td width=325>
</td>
<td height=80 width=135 align=center>
</td>
</table>
</td>
<tr>
<td width=21 rowspan=3 valign=top align=right bgcolor=7b948c width=21>
<spacer type=vertical height=295><br>
<spacer type=horizontal width=21>
</td>
<td width=10 valign=top align=left height=25><img src="images/Messenger/corner.gif" width=10 height=10></td>
<td width=385 colspan=2 height=25 align=right valign=center
bgcolor=292929 gradcolor=000000 gradangle=90>
<table cellspacing=0 cellpadding=0 border=0>
<tr>
<td><spacer type=vertical height=1>
<tr>
<td valign=bottom>
<table border=0 cellspacing=0 cellpadding=0 id=setupLink>
<tr>
<td valign=top><img src="wtv-home:/images/triangle-in-circle.gif" width=14 height=14>
<td width=5><spacer type=horizontal width=5>
<td><a href="wtv-setup:/messenger"><font color=EFBD4A size=-1><b>Settings
</table>
<td><spacer type=horizontal width=15>
<td valign=bottom>
<table border=0 cellspacing=0 cellpadding=0 id=helpLink>
<tr>
<td valign=top><img src="wtv-home:/images/triangle-in-circle.gif" width=14 height=14>
<td width=5><spacer type=horizontal width=5>
<td><a href="wtv-guide:/help?topic=Messenger&subtopic=Index"><font color=EFBD4A size=-1><b>Help
</table>
<td><spacer type=horizontal width=10>
</table>
<tr>
<td height=10><spacer=type=vertical height=10>
<tr>
<td height=329>
<td valign=top align=left width=270>
<table border=0 cellspacing=0 cellpadding=0>
<tr><td valign=top>
<table border=0 cellspacing=0 cellpadding=0 bgcolor=5a736b height=250>
<tr><td valign=bottom><img src="images/Messenger/buddycorner_topleft.gif" width=5 height=5></td>
<td width=250><spacer type=horizontal width=250>
<td valign=bottom><img src="images/Messenger/buddycorner_topright.gif" width=5 height=5>
<tr>
<td width=10></td>
<td><table border=0 cellspacing=10 cellpadding=0 width=100%>
<tr>
<td><font color="CCCCCC" size=-1>Buddies connected now:</font></td>
<tr>
<td bgcolor=292929>
<table border=0 cellspacing=0 cellpadding=0>
<tr>
<td><spacer type=vertical height=10>
<tr>
<td width=3><spacer type=horizontal width=3></td>
<td align=center>
<embed SCROLLTARGET name=friendList usestyle nobackground src="file://ROM/HTMLs/Empty.html" height=178></embed>
<script language="Javascript">
refreshFriendList();
</script>
<td width=3><spacer type=horizontal width=3></td>
<tr>
<td><spacer type=vertical height=10></td>
</table>
</table></td>
<td></td>
<tr><td valign=bottom><img src="images/Messenger/buddycorner_bottomleft.gif" width=5 height=5></td>
<td width=250><spacer type=horizontal width=250>
<td valign=bottom><img src="images/Messenger/buddycorner_bottomright.gif" width=5 height=5>
</table>
<td width=10><spacer type=horizontal width=10>
</table>
</td>
<td valign=top align=left>
<table border=0 cellspacing=0 cellpadding=0 height=262>
<tr><td><spacer type=vertical height=11>
<tr><td>
<table border=0 cellspacing=0 cellpadding=0 selected
selected id="panelLink">
<tr>
<td valign=top><font color="FFEFAD">&#128;&nbsp;
<td width=5><spacer type=horizontal width=5>
<td><a href="wtv-setup:/messenger-enable?fromMessengerStartPage=true&show-panel=true"><font color="FFEFAD"><b>Use MSN Messenger now</b></a>
</table>
<tr><td><spacer type=vertical height=12>
<tr><td>
<table border=0 cellspacing=0 cellpadding=0 selected id="bookLink">
<tr>
<td valign=top><font color="FFEFAD">&#128;&nbsp;
<td width=5><spacer type=horizontal width=5>
<td><a href="wtv-mail:/addressbook?camefrom=messenger"><font color="FFEFAD"><b>Address book</b></a>
</table>
<tr><td><spacer type=vertical height=12>
<tr><td>
<table border=0 cellspacing=0 cellpadding=0 selected id="activateLink">
<tr>
<td valign=top><font color="FFEFAD">&#128;&nbsp;
<td width=5><spacer type=horizontal width=5>
<td><a href="wtv-setup:/validate-messenger-enable?turnOnMessenger=${session_data.getSessionData("messenger_enabled") == 1 ? 'false' : 'true'}&fromMessengerStartPage=true"><font color="FFEFAD"><b>Turn MSN Messenger ${session_data.getSessionData("messenger_enabled") == 1 ? `off` : `on`} </b></a>
</table>
<tr><td><spacer type=vertical height=9>
<tr><td>
<table border=0 cellspacing=0 cellpadding=0 bgcolor=292929 gradcolor=394242
insetSelection abswidth=240 href="wtv-guide:/help?topic=Messenger&subtopic=Addressbook" nextLeft="firstFriend">
<tr><td valign=bottom><spacer type=horizontal width=5></td>
<td><spacer type=horizontal width=230>
<td valign=bottom><spacer type=vertical height=5>
<tr><td height=130><spacer type=vertical height=130>
<td>
<table border=0 cellspacing=5 cellpadding=0>
<tr><td>
<font color=94a594>
<blackface><font size=+1>Tip of the day</font></blackface><br>
You can use the Address book to store the names and e-mail addresses of people you contact often.
<tr><td align=right>
<font color=FFEFAD><font size=-1><b>&#128;&nbsp;learn more</b></font>
</tr></table>
<td>
<tr>
<td valign=top><img src="images/Messenger/buddycorner_bottomleft.gif" width=5 height=5>
<td>
<td valign=top transparency=100><img src="images/Messenger/buddycorner_bottomright.gif" width=5 height=5 transparency=100>
</table>
</table>
</td>
</table>
</body>
</html>
`;
