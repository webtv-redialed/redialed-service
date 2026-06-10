var minisrv_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;

data = `<HTML>
<HEAD>
<TITLE>
Use your own ISP
</TITLE>
<DISPLAY >
</HEAD>
<sidebar width=110> <table cellspacing=0 cellpadding=0 BGCOLOR=452a36>
<tr>
<td colspan=3 abswidth=104 absheight=4>
<td rowspan=99 width=6 absheight=420 valign=top align=left>
<img src="wtv-home:/ROMCache/Shadow.gif" width=6 height=420>
<tr>
<td abswidth=6>
<td abswidth=92 absheight=76>
<table href="wtv-home:/home" absheight=76 cellspacing=0 cellpadding=0>
<tr>
<td align=right>
<img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width=87 height=67>
</table>
<td abswidth=6>
<tr><td absheight=5 colspan=3>
<table cellspacing=0 cellpadding=0>
<tr><td abswidth=104 absheight=2 valign=middle align=center bgcolor=2e1e26>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<tr><td abswidth=104 absheight=1 valign=top align=left>
<tr><td abswidth=104 absheight=2 valign=top align=left bgcolor=6b4657>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
</table>
<tr><td absheight=${session_data.hasCap("client-has-tuner") ? 132 : 171}>
<tr><td absheight=${session_data.hasCap("client-has-tuner") ? 166 : 123} align=right colspan=3>
<img src="${session_data.hasCap("client-has-tuner") ? "wtv-setup:/ROMCache/Settings" : "images/Setup"}Banner.gif" width=54 height=${session_data.hasCap("client-has-tuner") ? 166 : 123}>
<tr><td absheight=41>
</table>
</sidebar>
<BODY BGCOLOR="#191919" TEXT="#42CC55" LINK="36d5ff" VLINK="36d5ff" HSPACE=0 VSPACE=0 FONTSIZE="${session_data.isJapaneseClient() ? `medium` : `large`}">            
<table cellspacing=0 cellpadding=0>
<tr>
<td abswidth=14>
<td colspan=3>
<table cellspacing=0 cellpadding=0>
<tr>
<td valign=center absheight=80>
<font size="+2" color="E7CE4A"><blackface><shadow>
Use your own ISP
</table>
<td abswidth=20>
<TR>
<td>
<td WIDTH=220 HEIGHT=250 VALIGN=top ALIGN=left>
<table cellspacing=0 cellpadding=0>
<tr>
<td absheight=55 valign=top>
<font size=-1>Check this box and fill in the blanks
		 to use your own Internet service provider.
<tr>
<td absheight=36 valign=middle>
<font size=-1>Service provider name
<tr>
<td absheight=36 valign=middle>
<font size=-1>Login name
<tr>
<td absheight=36 valign=middle>
<font size=-1>Password
<tr>
<td absheight=36 valign=middle>
<font size=-1>Primary modem number
<tr>
<td absheight=36 valign=middle>
<font size=-1>Backup modem number
</table>
<TD WIDTH=20>
<TD WIDTH=220 VALIGN=top ALIGN=left>
<form action="client:ConfirmBYOISPSetup">
<table cellspacing=0 cellpadding=0>
<tr>
<td absheight=55 valign=top colspan=3>
	<table>
		<tr>
			<td valign=top>
				<input type=checkbox name=BYOISPSelected value=true checked=&byoisp;><font size=-1>
			<td>&nbsp;
			<td valign=top align=left>
				<input type=hidden name=BYOISPSelected value=""></font>
	</table>
<tr>
<td absheight=36 valign=bottom colspan=3>
	<table>
		<tr>
			<td valign=top align=left>
				<input type=text name=BYOISPProviderName bgcolor=#444444 text=#ffdd33 cursor=#cc9933 size=18 maxlength=18 value="&pname;">	<tr>
	</table>

<tr>
<td absheight=36 valign=middle colspan=3>
	<table>
		<tr>
			<td valign=top align=left>
				<input type=text name=BYOISPLoginName bgcolor=#444444 text=#ffdd33 cursor=#cc9933 size=18 maxlength=31 value="&lname;">	<tr>
	</table>

<tr>
<td absheight=36 valign=middle colspan=3>
	<table>
		<tr>
			<td valign=top align=left>
				<input type=password name=BYOISPPassword bgcolor=#444444 text=#ffdd33 cursor=#cc9933 size=18 maxlength=18 value="&bpass;">	<tr>
	</table>

<tr>
<td absheight=36 valign=top colspan=3>
	<table>
		<tr>
			<td valign=top align=left>
				<input type=text name=BYOISPAccessNumber bgcolor=#444444 text=#ffdd33 cursor=#cc9933 size=18 maxlength=18 numbers value="&banum;">	<tr>
	</table>
<tr>
<td absheight=36 valign=top colspan=3>
	<table>
		<tr>
			<td valign=top align=left>
				<input type=text name=BYOISPAccessNumber2 bgcolor=#444444 text=#ffdd33 cursor=#cc9933 size=18 maxlength=18 numbers value="&banm2;">	<tr>
	</table>

</table>
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
<TD COLSPAN=3 VALIGN=top ALIGN=right>
<FONT COLOR="#E7CE4A" SIZE=-1><SHADOW>
<INPUT TYPE=SUBMIT BORDERIMAGE="file://ROM/Borders/ButtonBorder2.bif" Value=Done NAME="Done" USESTYLE WIDTH=103>
</SHADOW></FONT></FORM>
<TD>
</TABLE>
</BODY>
</HTML>
`;
