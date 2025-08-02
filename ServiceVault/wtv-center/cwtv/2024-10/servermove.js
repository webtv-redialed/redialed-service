var wtvrsvc_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`


data = `<html>
<head>
<META HTTP-EQUIV="expires" CONTENT="Sun, 1 Oct 2000 00:01:00 PST">
<title>Moving To a More Powerful Server</title>
</head>
<display showwhencomplete>
<body bgcolor=#191919 text=#FFFFFF hspace=0 vspace=0 LINK=#E1C48F ALINK=#E1C48F VLINK=#E1C48F>
<sidebar width="152" text=#E1C48F link=#E1C48F vlink=#E1C48F alink=#E1C48F fontsize="medium"> <table border=0 cellpadding=0 cellspacing=0 width=152 align=left>
<tr>
<td height>
<table background=wtv-center:/cwtv/images/halloween/cwtv_lefttop.swf width=152 absheight=85 cellspacing=0 cellpadding=0 border=0>
<tr> <td width=6>
<spacer type=block width=5 height=85>
<td width=140 align=center> <table cellspacing=0 cellpadding=0 width="140">
<tr> <td width="6">
<tr> <td height="6">
<tr>
<td width="140" height="73" align="left" href="wtv-home:/home">
<img src="wtv-center:/cwtv/ROMCache/WebTVLogoJewel.gif" width="87" height="67">
</table>
<td width="6">
</table>
<table background=wtv-center:/cwtv/images/halloween/cwtv_leftbot.swf BGCOLOR="#91a17c" border=0 width=152 height=1500
cellspacing=0 cellpadding=0>
<tr> <td height=9 colspan=3></td>
<tr> <td valign="top" width="6"></td>
<td align="left" valign="top" width="140">
<table cellpadding=0 cellspacing=0 border=0>
<tr>
<td align=left> <spacer type=block width=1 height=5>
<table href=top width=140 cellspacing=0 cellpadding=0>
<tr><td align=left>
<font size=2 color=#7F86A5><blackface><b><u>Contents</u></b></blackface></font><br>
</table>
<spacer type=block width=1 height=5>
<tr>
<td align=left> <spacer type=block width=1 height=5>
<table href=bts width=140 cellspacing=0 cellpadding=0>
<tr><td align=left>
<font size=2 color=#7F86A5><blackface>B.T.S. updates</blackface></font><br>
</table>
<spacer type=block width=1 height=5>
<tr>
<td align=left> <spacer type=block width=1 height=5>
<table href=changelog width=140 cellspacing=0 cellpadding=0>
<tr><td align=left>
<font size=2 color=#7F86A5><blackface>Changelog</blackface></font><br>
</table>
<spacer type=block width=1 height=5>
<tr>
<td align=left> <spacer type=block width=1 height=5>
<table href=sites width=140 cellspacing=0 cellpadding=0>
<tr><td align=left>
<font size=2 color=#7F86A5><blackface>Community Sites</blackface></font><br>
</table>
<spacer type=block width=1 height=5>
<tr>
<td align=left> <spacer type=block width=1 height=5>
<table href=question width=140 cellspacing=0 cellpadding=0>
<tr><td align=left>
<font size=2 color=#7F86A5><blackface>Questions</blackface></font><br>
</table>
<spacer type=block width=1 height=5>
</table>
<spacer type=block width=1 height=9>
<td abswidth="6"></td>
</table>
</table>
</sidebar>
<table border=0 cellpadding=0 cellspacing=0 align=left>
<tr> <td>
<table background=wtv-center:/cwtv/images/halloween/cwtv_banner.swf cellspacing=0 cellpadding=0 border=0 width=408 height=85>
<tr>
<td valign=top absheight=85><spacer type=block width=408 height=14><br clear=all><spacer type=block width=1 height=66 align=left>
</table>
<tr>
<td>
<table border=0 cellspacing=0 cellpadding=0 width="408">
<tr>
<td height=20 colspan=3>
<tr>
<td abswidth="10">
<td valign="top">
<td valign="top">
<font size="6" color="#A8B3DB"><blackface>Moving To a More Powerful Server</blackface></font><br><br>
<font size="3" color="#FFFFFF"><b>
by HIDEN</font></b>
<P>
<P>
<FONT COLOR="#FFFFFF" size=4>
<P>
<i>Memory leaks be damned.</i>
<p>
Over the past week, I've been working on moving the WebTV Redialed service to a new VPS. At this point, the move is fully complete.
<p>
The reason I did this is that the old VPS was very tight on resources. Redialed is fairly resource heavy, especially on RAM, and the VPS it ran on before was simply not enough anymore. Especially not with the planned expansion.
<p>
If you connect to the old server, you will see a screen saying "WebTV Redialed no longer operates at the server you're connecting to." If you see this screen, either reflash your Pi with our latest DreamPi image if you use DreamPi, clear your TellyScript (unplug your box and plug it back in and press "Moved") if you're on VoIP/landline, or if you're on Dreamcast, download the latest image and burn a new disc (if on real hardware).
<p>
<i>New server IP: 217.160.150.209</i>
<P>
&nbsp;&nbsp;<spacer type=horizontal width=220>&#128; <a href="top">Back to news</a>
</font>
<tr>
<td abswidth="20" colspan=3><img src="wtv-center:/cwtv/images/spacer.gif" width=10 height=1>
</table>
</table>
</body>
</html>
`;