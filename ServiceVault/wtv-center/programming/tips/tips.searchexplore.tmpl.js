var wtvrsvc_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`


data = `<html>
<head>
<title>Tip: We can recommend Web sites</title>
<script>
function otherTips() {	var previousURL = "wtv-center:/tips/TipsIndex.tmpl";
with(history) {	if ((previous != previousURL) && (previous != previousURL + "?"))
document.write("&nbsp;&nbsp;" +
"<input action='wtv-center:/tips/TipsIndex.tmpl' value='Other Tips' selected type=button borderimage='file://ROM/Borders/ButtonBorder2.bif' usestyle width=120>" +
"&nbsp;");
}
}
</script>
</head>
<body background="images/newtips_bkg.swf" bgcolor=2e1722 fontsize=medium hspace=0 vspace=0
text=273c33 link=273c33 alink=273c33 vlink=273c33>
<display noscroll>
<table height=100% width=100% border=0 cellpadding=0 cellspacing=0>
<tr>
<td height=78 valign=top>
<img src="wtv-home:/ROMCache/spacer.gif" width=1 height=10><br>
<img src="wtv-home:/ROMCache/spacer.gif" width=5 height=1>
<a href="wtv-tricks:/home"><img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width=87 height=67></a><br>
</td>
</tr>
<tr>
<td align=left valign=top width=425>
<table cellpadding=0 cellspacing=0 border=0>
<tr>
<td>
<spacer type=vertical height=15>
</td>
</tr>
<tr>
<td>
<spacer type=horizontal width=105>
</td>
<td>
<font size=5 color=273c33><blackface>We can recommend Web sites</blackface></font>
</td>
</tr>
<tr>
<td colspan=2>
<spacer type=vertical height=5>
</td>
</tr>
<tr>
<td>
<spacer type=horizontal width=105>
</td>
<td>
<font size=5>
<br>
Want to save time with your next search?
<p>
For your convenience, the Search page features <B>categories</B> - Web sites that we recommend.
<p>
You can search by word, phrase or Web address ... or take our advice.
</font>
</td>
</tr>
</table>
</td>
</tr>
<tr align=right valign=bottom>
<td>
<form>
<font color=ffcf69><shadow>
<input action="wtv-center:/search-page" value="Search" selected type=button borderimage="file://ROM/Borders/ButtonBorder2.bif" usestyle width=120>
&nbsp;
<script>
otherTips()
</script>
&nbsp;<input action="javascript:location=history.go(-1);" value="Done" selected type=button borderimage="file://ROM/Borders/ButtonBorder2.bif" usestyle width=105>
</shadow></font>
&nbsp;
</form>
<br><img src="wtv-home:/ROMCache/spacer.gif" width=1 height=5>
</td>
</tr>
</table>
</body>
</html>
`;