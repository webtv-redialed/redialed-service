var minisrv_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;

data = `<HTML>
<head>
<title>Search</title>
</head>
<display fontsize=${session_data.isJapaneseClient() ? `small` : `medium`} showwhencomplete noscroll>
<body hspace=0 vspace=0 bgcolor=#0B0D3A text=#000000 link=#0B0D3A vlink=#0B0D3A novtilebg>
<wtvnoscript>
<table cellspacing=0 cellpadding=0 bgcolor=#858779>
<tr>
<td>
<table cellspacing=0 cellpadding=0 width=560 height=80 background="wtv-center:/images/SearchHomeH.jpg">
<tr>
<td width=106 align=center href='wtv-tricks:/home' insetselection>
<img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width=87 height=67>
<td width=444 valign=top>
</table>
<table width=560 cellspacing=0 cellpadding=0>
<tr>
<td width=17 bgcolor=#0B0D3A>
<td width=377>
<table cellspacing=0 cellpadding=0 width=377 height=8>
<tr>
<td width=8><img src="wtv-center:/images/CornerTopLeftSearchHome.gif" width=8 height=8>
<td width=352>
</table>

<table width=377 cellspacing=0 cellpadding=0>
<tr>
<td width=23>
<td>
<td width=15>
</table>
<td width=166 valign=top bgcolor=#858779>
</table>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=17 bgcolor=#0B0D3A>
<td>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=43>
<td>
<table border=0>
<tr>
<td><blackface>Type a word, phrase or web address</blackface>
<tr>
<td>
<form action="wtv-center:search" method="get">
<input name="search-string" nextDown="browseTheWeb" bgcolor=444444 text=ffdd33 cursor=#cc9933 value="" SIZE=35 selected><spacer type=horizontal width=20><font color=E7CE4A><shadow><input type=submit borderimage="file://ROM/Borders/ButtonBorder2.bif" value="Search" usestyle></shadow></font><br>
</form>
<table cellspacing=0 cellpadding=0 bgcolor="#858779" border="0">
<tr>
<td colspan="10">
<spacer type=vertical size=10>
</td>
</tr>
<tr> <td align="left" rowspan=2>
</td>
<td colspan=3><blackface>Or choose a category</blackface><br>
<spacer type=vertical size=10>
</td>
<tr> <td width=172 valign=top>
<font color="#0A0A3C" size="3">
&#128; <a href="wtv-center:/time-savers" name="browseTheWeb"><font color="#0A0A3C">Things to try</a><br>
&#128; <a href=wtv-center:/browse?topic=Entertainment><font color="#0A0A3C">Entertainment</font></a><br>
&#128; <a href=wtv-center:/browse?topic=Games><font color="#0A0A3C">Games</font></a><br>
&#128; <a href=wtv-center:/browse?topic=Health&fitness><font color="#0A0A3C">Health & fitness</font></a><br>
&#128; <a href=wtv-center:/browse?topic=Hobbies><font color="#0A0A3C">Hobbies</font></a><br>
</font>
</td>
<td width=152 valign=top>
<font color="#0A0A3C" size="3">
&#128; <a href=wtv-center:/browse?topic=Home&Family><font color="#0A0A3C">Home & family</font></a><br>
&#128; <a href=wtv-center:/browse?topic=Kids><font color="#0A0A3C">Kids</font></a><br>
&#128; <a href=wtv-center:/browse?topic=Learning><font color="#0A0A3C">Learning</font></a><br>
&#128; <a href=wtv-center:/browse?topic=Money><font color="#0A0A3C">Money</font></a><br>
&#128; <a href=wtv-center:/browse?topic=News><font color="#0A0A3C">News</font></a><br>
</font>
</td>
<td width=97 valign=top>
<font color="#0A0A3C" size="3">
&#128; <a href=wtv-center:/browse?topic=People><font color="#0A0A3C">People</font></a><br>
&#128; <a href="client:showalert?message=<marquee>Sorry, WebTV machine broke</marquee>"><font color="#0A0A3C">Shopping</font></a><br>
&#128; <a href=wtv-center:/browse?topic=Sports><font color="#0A0A3C">Sports</font></a><br>
&#128; <a href=wtv-center:/browse?topic=Travel><font color="#0A0A3C">Travel</font></a><br>
&#128; <a href=wtv-center:/browse?topic=Women><font color="#0A0A3C">Women</font></a><br>
</font>
</td>
<td width=21 valign=top >
<spacer type=vertical size=189>
</b>
</td>
</tr>
<tr bgcolor="#101042">
</tr>
</table>
</table>
<spacer type=vertical height=10><br>
</table>

</body>
</HTML>
`;
