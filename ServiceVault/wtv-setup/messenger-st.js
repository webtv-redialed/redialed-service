var minisrv_service_file = true;

/* headers = `200 OK
Content-Type: text/html`; */

headers = `400 BALLS  OVER`;

//TODO: fix shitty javascript

/* data = `<HTML>
<HEAD>
<TITLE>
Choose who can send messages
</TITLE>
<script language="Javascript">
function getHumanName(emailAddress) 
{ return Blim.getUmanName(emailAddress); } function setHumanName(emailAddress, newName) { return Blim.setUmanName(emailAddress, newName); } function MessengerIsOkay() 
{ return ( Blim.isEnabled() && Blim.isAlive() ); 
} 
function isFriend(emailAddress) 
{ return Blim.isInList("FL", emailAddress); 
} 
function isBlocked(emailAddress) 
{ return Blim.isInList("BL", emailAddress); 
} 
function isAllowed(emailAddress) 
{ return Blim.isInList("AL", emailAddress); 
} 
// policy: if the user adds a friend, we automatically allow and unblock // the person at the same time 
function befriendThisPerson(emailAddress) { Blim.addToList("FL", emailAddress); 
var executeAllow = "allowThisPerson('" + emailAddress + "');"; var executeUnblock = "unblockThisPerson('" + emailAddress + "');"; setTimeout(executeAllow, 1*1000); 
setTimeout(executeUnblock, 2*1000); 
} 
function defriendThisPerson(emailAddress) { if (isFriend(emailAddress)) 
{ var executeAllow = "disallowThisPerson('" + emailAddress + "');";
Blim.removeFromList("FL", emailAddress); 
setTimeout(executeAllow, 1*1000); } 
} 
function blockThisPerson(emailAddress) 
{ disallowThisPerson(emailAddress); setTimeout("blockThisPersonCore('" 
+ emailAddress + "');", 1*1000); 
} 
function blockThisPersonCore(emailAddress) { Blim.addToList("BL", emailAddress); 
} 
function unblockThisPerson(emailAddress) { Blim.removeFromList("BL", emailAddress); 
} 
function allowThisPerson(emailAddress)
{ Blim.addToList("AL", emailAddress); 
} 
function disallowThisPerson(emailAddress) { Blim.removeFromList("AL", emailAddress); 
} 
// convenience: start a conversation 
function StartConversation(emailAddress) { Blim.openConversation( emailAddress ); Blim.openMessagesPanel(); } // convenience: bring up the main Messenger panel function ShowMessengerPanel() 
{ Blim.openMessagesPanel(); 
} 
// determine if this user is a messenger type: UNUSED function ValidMessengerTarget(emailAddress) { var okayPatterns = new Array("webtv.net", "hotmail.com", "testdrive.webtv.net", "genesis.webtv.net", "japan.webtv.net", "webtv.ne.jp"); 
var i;
for (i = 0; i<okayPatterns.length; i++)
return false; 
} 
</script>
<script language="Javascript">
var theList;
var listCount;
var i;
var buttonText;
if ( Blim.isClosedMode() )
{ theList = "AL";
buttonText = "Block"; 
} 
else
{ theList = "BL";
buttonText = "Allow"; 
} 
listCount = Blim.listLength(theList);
function addPersonToList() 
{ var personToAdd = document.addToList.newPerson.value; personToAdd = unescape(personToAdd); 
if ( Blim.isClosedMode() )
allowThisPerson(personToAdd);
else
blockThisPerson(personToAdd);
Blim.addToList(theList, personToAdd);
window.location.reload(); 
} 
function removePersonFromList(ID)
{ ID = unescape(ID);
Blim.removeFromList(theList, ID);
window.location.reload(); 
} 
function emitSingleItem(ID, humanName)
{ document.write('<form>'); 
document.write("<table border=0 cellspacing=0 cellpadding=0><tr><td valign=top>"); 
document.write('<FONT size=-1 COLOR="#E7CE4A"><SHADOW>'); document.write('<input type=button name=singlePerson value="' + buttonText + '"'); 
document.write(' BORDERIMAGE="file://ROM/Borders/ButtonBorder2.bif" USESTYLE '); 
document.write(' onclick="javascript:void(removePersonFromList(\'' + ID 
+ '\'))" >');
document.write('</SHADOW></FONT>');
document.write("<td width=10>"); 
document.write("<td valign=top align=left>"); document.write(humanName + "<br>" + ID); document.write("</td></tr><tr><td height=10></table>"); document.write('</form>'); 
} 
</script>
<DISPLAY nosave 
</HEAD> 
<sidebar width=110> <table cellspacing=0 cellpadding=0 bgcolor=452a36> <tr> 
<td colspan=3 abswidth=104 absheight=4> 
<td rowspan=99 width=6 absheight=420 valign=top align=left> <img src="/ROMCache/Shadow.gif" width=6 height=420> <tr> 
<td abswidth=6>
<td abswidth=92 absheight=76> 
<table href="wtv-home:/home" absheight=76 cellspacing=0 cellpadding=0> <tr> 
<td align=right> 
<img src="/ROMCache/WebTVLogoJewel.gif" width=87 height=67> </table> 
<td abswidth=6>
<tr><td absheight=5 colspan=3>
<table cellspacing=0 cellpadding=0> 
<tr><td abswidth=104 absheight=2 valign=middle align=center bgcolor=2e1e26> 
<img src="/ROMCache/Spacer.gif" width=1 height=1> <tr><td abswidth=104 absheight=1 valign=top align=left> <tr><td abswidth=104 absheight=2 valign=top align=left bgcolor=6b4657> <img src="/ROMCache/Spacer.gif" width=1 height=1> </table> 
<tr>
<td height=31 colspan=3>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=5 height=26>
<td width=93> 
<table width=93 cellspacing=0 cellpadding=0 href=wtv-guide:/help?topic=Messenger&subtopic=Index> <tr> 
<td>
<table cellspacing=0 cellpadding=0>
<tr>
<td> 
<shadow><font color=e7ce4a size=-1> Help </table> 
</table>
<td width=6>
<tr> 
<td colspan=3 width=104 height=2 bgcolor=000000 transparency=64> <spacer> 
<tr>
<td height=1>
<tr> 
<td colspan=3 width=104 height=2 bgcolor=ffffff transparency=88> <spacer> 
</table>
<tr><td absheight=${session_data.hasCap("client-has-tuner") ? 101 : 140}> 
<tr><td absheight=${session_data.hasCap("client-has-tuner") ? 166 : 123} align=right colspan=3> <img src="${session_data.hasCap("client-has-tuner") ? "wtv-setup:/ROMCache/Settings" : "images/Setup"}Banner.gif" width=54 height=${session_data.hasCap("client-has-tuner") ? 166 : 123}> <tr><td absheight=41> 
</table>
</sidebar> 
<BODY NOHTILEBG BGCOLOR="#191919" TEXT="#42CC55" LINK="36d5ff" VLINK="36d5ff" HSPACE=0 VSPACE=0 FONTSIZE="large" 
<table cellspacing=0 cellpadding=0 height=340> <tr> 
<td abswidth=14> 
<td abswidth=416 absheight=80 valign=center> <font size="+2" color="E7CE4A"><blackface><shadow> Choose who can send messages 
<td abswidth=20>
<tr>
<td>
<td valign=top align=left>
<form 
action="wtv-setup:/messenger-validate-list" name=editListForm 
<script language="Javascript">
if (Blim.isClosedMode())
{ if (listCount > 0) 
{ document.write("Only the people listed here are allowed to send you messages. "); 
document.write("Everyone else is blocked from contacting you with Messenger."); 
} 
else { document.write("Currently no one is allowed to contact you with Messenger."); 
}
} 
else
{ if (listCount > 0) 
{ document.write("The people listed here are blocked from contacting you with Messenger."); 
} 
else { document.write("Currently no one is blocked from contacting you with Messenger."); 
}
} 
</script>
<script language="Javascript">
if (listCount > 0) 
{ document.write("<p><spacer type=vertical height=10>"); if (Blim.isClosedMode()) 
document.write("If you no longer wish to allow somebody to contact you, choose <b>Block</b> next to their name."); 
else 
document.write("If you'd like to stop blocking somebody, choose <b>Allow</b> next to their name."); 
} 
</script> 
<table border=0 cellspacing=10 cellpadding=0> <tr> 
<td width=10></td>
<td>
<script language="Javascript">
for ( i=0; i<listCount; i++)
{ var ID = Blim.listItem(theList, i);
var humanName = getHumanName(ID); 
ID = escape(ID); document.write("<br>"); emitSingleItem(ID, humanName); 
} 
</script>
</td>
<td width=10>
</tr>
</table>
</script>
<td>
<tr>
<td absheight=7>
<tr>
<td> 
<td colspan=2 absheight=2 bgcolor="2B2B2B"> <img src="wtv-home:/ROMCache/Spacer.gif" width=426 height=1> <tr> 
<td absheight=1>
<tr>
<td> 
<td colspan=2 absheight=2 bgcolor="0D0D0D"> <img src="wtv-home:/ROMCache/Spacer.gif" width=426 height=1> <tr> 
<td absheight=4>
</table>
<table cellspacing=0 cellpadding=0>
<tr> 
<td abswidth=430 valign=top align=right> <font color="#E7CE4A" size=-1><shadow> 
<input
selected 
type=submit borderimage="file://ROM/Borders/ButtonBorder2.bif" value=Done name="Done" usestyle width=103> </shadow></font></form> 
<td abswidth=20>
<tr><td height=10>
</table>
</body>
</html>`; */