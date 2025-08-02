var wtvrsvc_service_file = true;
var wtvt = new WTVTricks(wtvrsvc_config);

headers = `200 OK
Content-Type: text/html`;

data = `<html>
<display nosave nosend skipback>
<title>The Favorite testinator!</title>

<body bgcolor="#191919" text="#44cc55" link="36d5ff" vlink="36d5ff" vspace=0>
<br>
<br>
<br>

<h1>The Favorite testinator!</h1>
Here you can test. You must test.<br><br>
<font color=red>WARNING! Fuck you!</font>
<form action="wtv-tricks:/validate-name-change">
ENCTYPE="x-www-form-encoded" METHOD="POST">
<table>
<tr>
		<td height=20>
<tr>
		<td valign=top align=right><shadow>Internet name:</shadow>
		<td width=10>
		<td valign=top><INPUT NAME="subscriber_username"
ID="subscriber_username"
bgcolor=#444444 text=#ffdd33 cursor=#cc9933
VALUE="${session_data.getSessionData(
    "subscriber_username"
)}" TYPE="text" SIZE="19" selected>
<tr>
		<td valign=top align=right><shadow>IRC name:</shadow>
		<td width=10>
		<td valign=top><INPUT NAME="subscriber_irc"
ID="subscriber_irc"
bgcolor=#444444 text=#ffdd33 cursor=#cc9933
VALUE="${session_data.getSessionData(
    "subscriber_irc_nick"
)}" TYPE="text" SIZE="19" selected>
</table>

<TR>
<TD>
<TD COLSPAN=4 HEIGHT=79 VALIGN=top ALIGN=right>
<tr>
<TD>
<td colspan=4 height=332 valign=middle align=right bgcolor="2B2B2B">
<spacer type=block width=46 height=111>
<tr>
<TD>
<td colspan=4 height=71 valign=top align=right>
<tr>
<TD>
<td colspan=4 height=72 valign=top align=right bgcolor="0D0D0D">
<spacer type=block width=46 height=1>
<TR>
<TD>
<TD COLSPAN=4 HEIGHT=54 VALIGN=top ALIGN=right>
<TR>
<TD>
<TD COLSPAN=2 VALIGN=top ALIGN=right>
<TD VALIGN=top ALIGN=right>
<FONT COLOR="#E7CE4A" SIZE=-1><SHADOW>
<img src="wtv-home:/ROMCache/spacer.gif" width=426 height=0><INPUT TYPE=SUBMIT BORDERIMAGE="file://ROM/Borders/ButtonBorder2.bif" Value="Do It" NAME="Do It" USESTYLE WIDTH=103>
</SHADOW></FONT></FORM>
</body> </html>`;
