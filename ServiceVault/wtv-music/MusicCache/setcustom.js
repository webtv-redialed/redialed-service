var wtvrsvc_service_file = true;
//tails1154 was also here too WOOOOOOOOO
headers = `200 OK
Content-Type: text/html`;
if (request_headers.query.midi) {
	headers = `300 Moved
Location: wtv-setup:/set-bg`;
	session_data.setSessionData("subscriber_custombgmusic", request_headers.query.midi);
}
data = `
<html><head>
	<title>Custom Background Music</title>
	<!-- Page Template designed by SKCro -->
</head><body vspace=0 hspace=0 fontsize=medium bgcolor=191919 text=44cc55 link=36d5ff vlink=189cd6>
<sidebar width=110>
	<table width=110 height=100% cellspacing=0 cellpadding=0 bgcolor=lightblue gradcolor=cornflowerblue>
		<tr><td></td><td rowspan=10 abswidth=6 bgcolor=black gradcolor=191919 gradangle=90></td></tr>
		<tr><td href=wtv-home:/home absheight=84 align=center selected insetselection><img src="file://ROM/Cache/WebTVLogoJewel.gif" height=70></td></tr>
		<tr><td absheight=12><hr></td></tr>
		<tr><td href=wtv-home:/home><font color=e7ce4a><shadow>&nbsp;Home</shadow></font></td></tr> <!-- idk how to remove this without making the page look bad lmao -->
		<tr><td absheight=12><hr></td></tr>
		<tr><td height=35%></td></tr>
		<tr><td absheight=104 align=right><img src="${session_data.hasCap("client-has-tuner") ? "wtv-setup:/ROMCache/Settings" : "images/Setup"}Banner.gif" width=54 height=${session_data.hasCap("client-has-tuner") ? 166 : 123}><spacer type=vertical size=4></td></tr>
	</table>
</sidebar>
<table width=100% height=100% cellspacing=0 cellpadding=8><tr><td valign=top><br>
<!-- Main Content Area -->
<form action="setcustom">
<h1>Set custom background music</h1>
<p>Put a MIDI file url here and WebTV will use it for your "Custom" Music.</p>
<input type="text" id="midi" placeholder="Midi URL" value="${session_data.getSessionData("subscriber_custombgmusic")}">
<!-- End Main Content Area - Begin Footer -->
</td></tr><tr><td height=1>
<table width=100% cellspacing=0 cellpadding=0>
	<tr><td absheight=2 bgcolor=2b2b2b></td></tr>
	<tr><td absheight=1 valign=top align=left></td></tr>
	<tr><td absheight=2 valign=top align=left bgcolor=0d0d0d>&nbsp;</td><td abswidth=4></td></tr>
</table><spacer type=vertical size=8>
<table width=100%><tr><td align=right>
	<font color=e7ce4a><shadow><input type=submit borderimage=file://ROM/Borders/ButtonBorder2.bif value=Done usestyle width=128></shadow></font>
</form></td></tr></table>
</td></tr></table></body></html>`;
