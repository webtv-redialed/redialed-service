var minisrv_service_file = true;

headers = `200 OK
wtv-expire-all: wtv-setup:/messenger
Connection: Keep-Alive
Content-Type: text/html`;

//smoke crack
if (request_headers.query.just_enabled == "true") {
    session_data.setSessionData("messenger_enabled", 1);
    headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html
wtv-messenger-enable: ${session_data.getSessionData(
        "messenger_enabled"
    )}`;
}

// HALEN: this page is mostly original from https://www.fun-lover.com/webtv/Internal-Source-Codes/Messenger-Settings1/ but i had to substitute Blim.isEnabled()

data = `<script language="Javascript">
function getHumanName(emailAddress)
{ return Blim.getUmanName(emailAddress); }
function setHumanName(emailAddress, newName)
{ return Blim.setUmanName(emailAddress, newName); 
}
function MessengerIsOkay()
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
// policy: if the user adds a friend, we 
automatically allow and unblock
// the person at the same time
function befriendThisPerson(emailAddress)
{ Blim.addToList("FL", emailAddress);
var executeAllow = "allowThisPerson('" + 
emailAddress + "');";
var executeUnblock = "unblockThisPerson('" + 
emailAddress + "');";
setTimeout(executeAllow, 1*1000);
setTimeout(executeUnblock, 2*1000);
}
function defriendThisPerson(emailAddress)
{ if (isFriend(emailAddress))
{ var executeAllow = "disallowThisPerson('" + 
emailAddress + "');";
Blim.removeFromList("FL", emailAddress);
setTimeout(executeAllow, 1*1000); }
}
function blockThisPerson(emailAddress)
{ disallowThisPerson(emailAddress); 
setTimeout("blockThisPersonCore('" + emailAddress 
+ "');", 1*1000);
}
function blockThisPersonCore(emailAddress)
{ Blim.addToList("BL", emailAddress);
}
function unblockThisPerson(emailAddress)
{ Blim.removeFromList("BL", emailAddress);
}
function allowThisPerson(emailAddress)
{ Blim.addToList("AL", emailAddress);
}
function disallowThisPerson(emailAddress)
{ Blim.removeFromList("AL", emailAddress);
}
// convenience: start a conversation
function StartConversation(emailAddress)
{ Blim.openConversation( emailAddress ); 
Blim.openMessagesPanel();
} // convenience: bring up the main Messenger 
panel
function ShowMessengerPanel()
{ Blim.openMessagesPanel();
}
// determine if this user is a messenger type: 
UNUSED
function ValidMessengerTarget(emailAddress)
{ var okayPatterns = new Array("webtv.net", 
"hotmail.com", "testdrive.webtv.net", 
"genesis.webtv.net", "japan.webtv.net", 
"webtv.ne.jp");
var i;
for (i = 0; i<okayPatterns.length; i++)
return false;
}
</script>
<HTML>
<HEAD>
<TITLE>
Messenger settings </TITLE>
<DISPLAY nosave >
</HEAD>
<sidebar width=110> <table cellspacing=0 
cellpadding=0 bgcolor=452a36>
<tr>
<td colspan=3 abswidth=104 absheight=4>
<td rowspan=99 width=6 absheight=420 valign=top 
align=left>
<img src="/ROMCache/Shadow.gif" width=6 
height=420>
<tr>
<td abswidth=6>
<td abswidth=92 absheight=76>
<table href="wtv-home:/home" absheight=76 
cellspacing=0 cellpadding=0>
<tr>
<td align=right>
<img src="/ROMCache/WebTVLogoJewel.gif" width=87 
height=67>
</table>
<td abswidth=6>
<tr><td absheight=5 colspan=3>
<table cellspacing=0 cellpadding=0>
<tr><td abswidth=104 absheight=2 valign=middle 
align=center bgcolor=2e1e26>
<img src="/ROMCache/Spacer.gif" width=1 height=1>
<tr><td abswidth=104 absheight=1 valign=top 
align=left>
<tr><td abswidth=104 absheight=2 valign=top 
align=left bgcolor=6b4657>
<img src="/ROMCache/Spacer.gif" width=1 height=1>
</table>
<tr>
<td height=31 colspan=3>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=5 height=26>
<td width=93>
<table width=93 cellspacing=0 cellpadding=0 
href=wtv-guide:/help> <!-- wtv-tricks:/help?topic=Messenger&subtopic=Index -->
<tr>
<td>
<table cellspacing=0 cellpadding=0>
<tr>
<td>
<shadow><font color=e7ce4a size=-1> Help
</table>
</table>
<td width=6>
<tr>
<td colspan=3 width=104 height=2 bgcolor=000000 
transparency=64>
<spacer>
<tr>
<td height=1>
<tr>
<td colspan=3 width=104 height=2 bgcolor=ffffff 
transparency=88>
<spacer>
</table>
<tr><td absheight=${session_data.hasCap("client-has-tuner") ? 101 : 140}>
<tr><td absheight=${session_data.hasCap("client-has-tuner") ? 166 : 123} align=right colspan=3>
<img src="${session_data.hasCap("client-has-tuner") ? "wtv-setup:/ROMCache/Settings" : "images/Setup"}Banner.gif" 
width=54 height=${session_data.hasCap("client-has-tuner") ? 166 : 123}>
<tr><td absheight=41>
</table>
</sidebar>
<BODY NOHTILEBG BGCOLOR="#191919" TEXT="#42CC55" 
LINK="36d5ff" VLINK="36d5ff" HSPACE=0 VSPACE=0 
FONTSIZE="large"`;
if (request_headers.query.just_enabled == "true") {
    data += " onload=ShowMessengerPanel()";
}
data += `
>
<table cellspacing=0 cellpadding=0>
<tr>
<td abswidth=14>
<td colspan=3>
<table cellspacing=0 cellpadding=0>
<tr>
<td valign=center absheight=80>
<font size="+2" 
color="E7CE4A"><blackface><shadow>
Messenger settings for ${session_data.getSessionData("subscriber_username") || "You"}
</table>
<td abswidth=20>
<TR>
<td>
<td WIDTH=198 HEIGHT=244 VALIGN=top ALIGN=left>
Messenger lets you send and receive instant
messages. <p>
You can also allow everyone to send you messages, 
or
choose to receive messages only from certain 
people.
<TD WIDTH=20>
<TD WIDTH=198 VALIGN=top ALIGN=left>
<FORM method=post action="/validate-messenger">
<table>
<tr>
<td>
<table border=0 cellspacing=0 cellpadding=0 
href="wtv-setup:/messenger-enable"
<td valign=top>&#128;&nbsp;
<td valign=top>
Turn Messenger ${session_data.getSessionData("messenger_enabled") == 1 ? `off` : `on`}
</td></tr></table>
<tr>
<td height=5>
<tr>
<td>
<table border=0 cellspacing=0 cellpadding=0 
href="wtv-setup:/messenger-mode"
<td valign=top>`
if (session_data.getSessionData("messenger_enabled"))
    data += `&#128;&nbsp;`
data += `
<td valign=top>`
if (session_data.getSessionData("messenger_enabled"))
    data += `
<script language="Javascript">
if (Blim.isClosedMode())
document.write("Let everyone send you messages");
else
document.write("Let only buddies send you 
messages");
</script>`
data += `
</td></tr></table>
<tr>
<td height=5>
<tr>
<td>
<table border=0 cellspacing=0 cellpadding=0 
href="wtv-mail:/addressbook?camefrom=messenger" <!-- HALEN: Originally went to wtv-setup:/messenger-st -->
<td valign=top>`
if (session_data.getSessionData("messenger_enabled"))
data +=`&#128;&nbsp;`
data += `
<td valign=top>`
if (session_data.getSessionData("messenger_enabled"))
data += `
<script language="Javascript">
if (Blim.isClosedMode())
document.write("Choose who can send you 
messages");
else
document.write("Choose people to block");
</script>`
data += `
</td></tr></table>
<tr>
<td height=5>
<tr>
<td>
<table border=0 cellspacing=0 cellpadding=0 
href="wtv-setup:/messenger-account"
<td valign=top>&#128;&nbsp;
<td valign=top>Change your account
</td></tr></table>
</table>
<TD>
<TR>
<TD>
<TD COLSPAN=4 HEIGHT=7 VALIGN=top ALIGN=left>
<tr>
<TD>
<td colspan=4 height=2 valign=middle align=center 
bgcolor="2B2B2B">
<img src="wtv-home:/ROMCache/Spacer.gif" 
width=436 height=1>
<tr>
<TD>
<td colspan=4 height=1 valign=top align=left>
<tr>
<TD>
<td colspan=4 height=2 valign=top align=left 
bgcolor="0D0D0D">
<img src="wtv-home:/ROMCache/Spacer.gif" 
width=436 height=1>
<TR>
<TD>
<TD COLSPAN=4 HEIGHT=4 VALIGN=top ALIGN=left>
<TR>
<TD>
<TD COLSPAN=3 VALIGN=top ALIGN=right>
<!-- action="wtv-setup:/validate-messenger" was also an attribute in this form in combination with goback but we have no such "validate-messenger" :joebritt: -->
<FORM
action="wtv-setup:/setup">
<FONT COLOR="#E7CE4A" SIZE=-1><SHADOW>
<INPUT TYPE=SUBMIT 
BORDERIMAGE="file://ROM/Borders/ButtonBorder2.bif
" Value=Done NAME="Done" USESTYLE WIDTH=103>
</SHADOW></FONT></FORM>
<TD>
</TABLE>
</body>
</HTML>`;

/* data = `<HTML>
<HEAD>
<TITLE>
Messenger settings
</TITLE>
<DISPLAY noscroll nologo>
</HEAD>
<script language="Javascript">
// convenience: bring up the main Messenger panel
function ShowMessengerPanel()
{	Blim.openMessagesPanel();
}
</script>
<sidebar width=110> <table cellspacing=0 cellpadding=0 BGCOLOR=452a36>
<tr>
<td colspan=3 abswidth=104 absheight=4>
<td rowspan=99 width=6 absheight=420 valign=top align=left>
<img src="file://ROM/Cache/Shadow.gif" width=6 height=420>
<tr>
<td abswidth=6>
<td abswidth=92 absheight=76>
<table href="wtv-home:/home" absheight=76 cellspacing=0 cellpadding=0>
<tr>
<td align=right>
<img src="${minisrv_config.config.service_logo}" width=87 height=67>
</table>
<td abswidth=6>
<tr><td absheight=5 colspan=3>
<table cellspacing=0 cellpadding=0>
<tr><td abswidth=104 absheight=2 valign=middle align=center bgcolor=2e1e26>
<spacer>
<tr><td abswidth=104 absheight=1 valign=top align=left>
<tr><td abswidth=104 absheight=2 valign=top align=left bgcolor=6b4657>
<spacer>
</table>
<tr><td absheight=${session_data.hasCap("client-has-tuner") ? 132 : 171}>
<tr><td absheight=${session_data.hasCap("client-has-tuner") ? 166 : 123} align=right colspan=3>
<img src="${session_data.hasCap("client-has-tuner") ? "wtv-setup:/ROMCache/Settings" : "images/Setup"}Banner.gif" width=54 height=${session_data.hasCap("client-has-tuner") ? 166 : 123}>
<tr><td absheight=41>
</table>
</sidebar>
<BODY BGCOLOR="#191919" TEXT="#42CC55" LINK="189CD6" VLINK="189CD6" HSPACE=0 VSPACE=0 FONTSIZE="large"`;
if (request_headers.query.just_enabled == "true") {
  data += "onload=ShowMessengerPanel()";
}
data += `
>
<table cellspacing=0 cellpadding=0>
<tr>
<td abswidth=14>
<td colspan=3>
<table cellspacing=0 cellpadding=0>
<tr>
<td valign=center absheight=80>
<font size="+2" color="E7CE4A"><blackface><shadow>
Messenger settings for ${session_data.getSessionData("subscriber_username") || "You"}
</table>
<td abswidth=20>
<TR>
<td>
<td WIDTH=205 HEIGHT=250 VALIGN=top ALIGN=left>
<table cellspacing=0 cellpadding=0>
<tr>
<td absheight=195 valign=top>
<p>Messenger lets you send and receive instant messages.
<p>You can also allow everyone to send you messages, or choose to receive messages only from certain people.
</table>
<TD WIDTH=20>
<TD WIDTH=198 VALIGN=top ALIGN=left>
<table cellspacing=0 cellpadding=0>
<tr>
<td align=left>
<font color=36d5ff>&#128;</font>
<a href="messenger-enable">Turn Messenger ${session_data.getSessionData("messenger_enabled") == 1 ? `off` : `on`}</a></FONT>
<p>
<font color=36d5ff>&#128;</font>
<a href="messenger-account">Smoke crack</a>
<p>
<font color=36d5ff>&#128;</font>
<a href="messenger-account">Change your account</a>
<!--<p>
<a href="client:SetSetupValue?setup-font-sizes=large">large</a></FONT>-->
</table>
</form>
<TR>
<TD>
<TD COLSPAN=4 HEIGHT=0 VALIGN=top ALIGN=left>
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
<INPUT TYPE=SUBMIT BORDERIMAGE="file://ROM/Borders/ButtonBorder2.bif" Value=Done NAME="Done" USESTYLE WIDTH=103>
</SHADOW></FONT></FORM>
<TD>
</TABLE>
</BODY>
</HTML>`; */