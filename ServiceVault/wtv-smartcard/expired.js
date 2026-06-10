var minisrv_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;

data = `<HTML>
<HEAD>
<TITLE>
Smart Card error
</TITLE>
<DISPLAY nosave nosend>
</HEAD>
<print blackandwhite>
<sidebar width=110> 
	<table cellspacing=0 cellpadding=0 BGCOLOR="355844">
		<tr><td colspan=3 abswidth=104 absheight=4>
			<td rowspan=99 width=6 absheight=420 valign=top align=left>
			<img src="wtv-home:/ROMCache/Shadow.gif" width=6 height=420>
		<tr><td abswidth=6>
			<td abswidth=92 absheight=76>
			<table href="wtv-home:/home" absheight=76 cellspacing=0 cellpadding=0>
		<tr><td align=right>
			<img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width=87 height=67>
	</table><td abswidth=6> <tr> <td absheight=5 colspan=3>
	<table cellspacing=0 cellpadding=0>
		<tr><td abswidth=104 absheight=2 valign=middle align=center bgcolor="21372a">
			<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
		<tr><td abswidth=104 absheight=1 valign=top align=left>
		<tr><td abswidth=104 absheight=2 valign=top align=left bgcolor="53896a">
			<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
	</table><tr><td absheight=25 colspan=3>
	<table cellspacing=0 cellpadding=0>
		<tr><td height=2>
		<tr><td abswidth=5>
		<td abswidth=93>
	<table cellspacing=0 cellpadding=0><tr><td>
	<table cellspacing=0 cellpadding=0>
		<tr><td><shadow><font size=-1 color=e7ce4a>&nbsp;&nbsp;</font></shadow>
	</table></table><td abswidth=6></table><tr><td absheight=5 colspan=3>
	<table cellspacing=0 cellpadding=0>
		<tr><td abswidth=104 absheight=2 valign=middle align=center bgcolor="355844">
		<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
		<tr><td abswidth=104 absheight=1 valign=top align=left>
		<tr><td abswidth=104 absheight=2 valign=top align=left bgcolor="355844">
		<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
	</table>
	<tr><td absheight=20>
		<tr><td absheight=244 align=right valign=bottom colspan=3>
			<img src="wtv-smartcard:/images/BannerSmartCard.gif" width=50 height=238>
		<tr><td absheight=41>
	</table>
</sidebar>
<BODY BGCOLOR="#191919" TEXT="#44cc55" LINK="189CD6" VLINK="189CD6" HSPACE=0 VSPACE=0 FONTSIZE="large">
	<table cellspacing=0 cellpadding=0>
		<tr><td abswidth=14>
		<td abswidth=416 absheight=90 valign=center>
		<font size="+2" color="E7CE4A"><blackface><shadow>
			Smart Card error
		<td abswidth=20>
		<tr><td>
		<td valign=top align=left>
		<tr><td><td valign=top align=left absheight=210>
		This smart card has expired or has not yet become active. Remove the card and try it again another time.
		<td><tr>
		<td absheight=20>
		<tr><td>
		<td colspan=2 absheight=2 bgcolor="2B2B2B">
			<img src="wtv-home:/ROMCache/Spacer.gif" width=426 height=1>
		<tr><td absheight=1>
		<tr><td>
		<td colspan=2 absheight=2 bgcolor="0D0D0D">
			<img src="wtv-home:/ROMCache/Spacer.gif" width=426 height=1>
		<tr><td absheight=4>
	</table>
	<table cellspacing=0 cellpadding=0>
		<tr><td abswidth=430 valign=top align=right>
		<form action="client:goback">
		<font color="#E7CE4A" size=-1><shadow>
		<input selected type=submit borderimage="file://ROM/Borders/ButtonBorder2.bif" value=Continue name=Continue usestyle width=103>
		</shadow></font></form>
		<td abswidth=20>
	</table>
</BODY>
</HTML>`;
