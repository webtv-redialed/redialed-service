var wtvrsvc_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;

data = ` 
<script language="Javascript">
function setupSettings()
{ var theForm = document.modeForm; 
var goOpenMode = theForm.theListRadio[0]; var goClosedMode = theForm.theListRadio[1]; goOpenMode.checked = ! Blim.isClosedMode(); goClosedMode.checked = Blim.isClosedMode(); 
} 
function makeChanges()
{ var theForm = document.modeForm; 
var goOpenMode = theForm.theListRadio[0]; var goClosedMode = theForm.theListRadio[1]; if (goOpenMode.checked) 
Blim.setClosedMode(false);
else if (goClosedMode.checked)
Blim.setClosedMode(true); 
window.location = "wtv-setup:/validate-messenger-mode"; 
} 
</script>
<HTML>
<HEAD>
<TITLE>
Messenger settings </TITLE>
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
<table cellspacing=0 cellpadding=0>
<tr>
<td abswidth=14>
<td colspan=3>
<table cellspacing=0 cellpadding=0>
<tr>
<td valign=center absheight=80> 
<font size="+2" color="E7CE4A"><blackface><shadow> Messenger settings for ${session_data.getSessionData("subscriber_username") || "You"} 
<FORM
onSubmit="makeChanges()" name=modeForm 
</table>
<td abswidth=20>
<TR>
<td> 
<td WIDTH=198 HEIGHT=244 VALIGN=top ALIGN=left>
You can decide how available you'd like to be with Messenger. <p>You can
choose to let everyone contact you except people you've
chosen to block. Or you can choose to let only your buddies contact you.
<TD WIDTH=20> 
<TD WIDTH=198 VALIGN=top ALIGN=left>
<table>
<tr>
<td valign=top align=right> 
<input type="radio" name="theListRadio" value="chooseOpenMode"> <spacer type=horizontal width=2></td> 
<td>Allow everyone to contact you</td>
<tr>
<td height=5>
</tr><tr>
<td valign=top align=right> 
<input type="radio" name="theListRadio" value="chooseClosedMode"> <spacer type=horizontal width=2></td> 
<td>Allow only buddies to contact you</td> </tr> 
</table>
<script language="Javascript">
setupSettings();
</script>
<TR>
<TD> 
<TD COLSPAN=4 HEIGHT=7 VALIGN=top ALIGN=left> <tr> 
<TD> 
<td colspan=4 height=2 valign=middle align=center bgcolor="2B2B2B"> <img src="/ROMCache/Spacer.gif" width=436 height=1> <tr> 
<TD> 
<td colspan=4 height=1 valign=top align=left> <tr> 
<TD> 
<td colspan=4 height=2 valign=top align=left bgcolor="0D0D0D"> <img src="/ROMCache/Spacer.gif" width=436 height=1> <TR> 
<TD> 
<TD COLSPAN=4 HEIGHT=4 VALIGN=top ALIGN=left> <TR> 
<TD>
<TD COLSPAN=3 VALIGN=top ALIGN=right>
<FONT COLOR="#E7CE4A" SIZE=-1><SHADOW> 
<INPUT TYPE=SUBMIT BORDERIMAGE="file://ROM/Borders/ButtonBorder2.bif" NAME="Continue" USESTYLE 
selected
Value="Continue" WIDTH=103>
</SHADOW></FONT></FORM>
<TD>
</TABLE>
</body>
</HTML>`;