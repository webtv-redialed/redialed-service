var minisrv_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html
wtv-expire-all: wtv-favorite:/serve-`;

data = `<HTML>
<HEAD>
<TITLE>
Add sample folders
</TITLE>
<DISPLAY>
</HEAD>
<BODY BGCOLOR=191919 TEXT=44cc55 LINK=189cd6 VLINK=189cd6 HSPACE=0 VSPACE=0 FONTSIZE=large>`;
data += engine.renderFileSync('wtv-favorite/partials/sidebar', { options: [{ url: 'wtv-favorite:/favorite', text: 'Favorites' }] });
data += `
<table cellspacing=0 cellpadding=0>
<tr><td abswidth=5><img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<td><table cellspacing=0 cellpadding=0>
<tr><table cellspacing=0 cellpadding=0 bgcolor=191919>
<tr><td width=14 absheight=16><img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<tr><td width=14 absheight=12><img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<td><table cellspacing=0 cellpadding=0>
<tr><td align=left>
<shadow><blackface><font color=e7ce4a>
Add sample folders
</font><blackface><shadow>
</table>
<tr><td height=18><img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
</table>
</shadow></blackface>
</table>
<tr><table cellspacing=0 cellpadding=0 bgcolor=191919>	<tr><td width=5><img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<td width=14><img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<td><font size=-1>
Mark the sample folders you want<br>
to add, and then choose <b>Add</b>.<br>
<br>
You can remove an existing sample folder<br>
by going to the folder and choosing <b>Organize</b>.<br>
<br>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=18>
</font>
</table>
</table>
</table> <form name="SampleFolders" action="wtv-favorite:/commit-samples-page">
<table cellspacing=0 cellpadding=0>
<tr><td width=5><img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<td width=100% valign=top>
<table valign=top cellspacing=0 cellpadding=0>
<tr><td width=100%>
<table valign=top cellspacing=0 cellpadding=0>
<td width=25>
<tr>
<td width=25>`;
if (session_data.favstore.folderExists("Fun") == true) {
    data += `
<td width=50% absheight=30 align=left valign=middle>
<table valign=top cellspacing=0 cellpadding=0>
<tr>
<td abswidth=30 align=center valign=middle>
<img src="/images/checkmark.gif" width=20 height=20>
<td abswidth=4>
<td absheight=30 align=left valign=middle>
<font color=E7CE4A size=-1>	<i>Fun</i>
</font>
</table>`;
} else {
    data += `
<td width=50% absheight=30 align=left valign=middle>
<font color=E7CE4A size=-1>
<input type="checkbox" name="Fun" value="true"> &nbsp;Fun
</font>`;
}
if (session_data.favstore.folderExists("Money") == true) {
    data += `
<td width=50% absheight=30 align=left valign=middle>
<table valign=top cellspacing=0 cellpadding=0>
<tr>
<td abswidth=30 align=center valign=middle>
<img src="/images/checkmark.gif" width=20 height=20>
<td abswidth=4>
<td absheight=30 align=left valign=middle>
<font color=E7CE4A size=-1>	<i>Money</i>
</font>
</table>`;
} else {
    data += `
<td width=50% absheight=30 align=left valign=middle>
<font color=E7CE4A size=-1>
<input type="checkbox" name="Money" value="true"> &nbsp;Money
</font>`;
}
data += `
<td width=25>
<tr>
<td width=25>`;
if (session_data.favstore.folderExists("Movies") == true) {
    data += `
<td width=50% absheight=30 align=left valign=middle>
<table valign=top cellspacing=0 cellpadding=0>
<tr>
<td abswidth=30 align=center valign=middle>
<img src="/images/checkmark.gif" width=20 height=20>
<td abswidth=4>
<td absheight=30 align=left valign=middle>
<font color=E7CE4A size=-1>	<i>Movies</i>
</font>
</table>`;
} else {
    data += `
<td width=50% absheight=30 align=left valign=middle>
<font color=E7CE4A size=-1>
<input type="checkbox" name="Movies" value="true"> &nbsp;Movies
</font>`;
}
if (session_data.favstore.folderExists("News") == true) {
    data += `
<td width=50% absheight=30 align=left valign=middle>
<table valign=top cellspacing=0 cellpadding=0>
<tr>
<td abswidth=30 align=center valign=middle>
<img src="/images/checkmark.gif" width=20 height=20>
<td abswidth=4>
<td absheight=30 align=left valign=middle>
<font color=E7CE4A size=-1>	<i>News</i>
</font>
</table>`;
} else {
    data += `
<td width=50% absheight=30 align=left valign=middle>
<font color=E7CE4A size=-1>
<input type="checkbox" name="News" value="true"> &nbsp;News
</font>`;
}
data += `
<td width=25>
<tr>
<td width=25>`;
if (session_data.favstore.folderExists("Recommended") == true) {
    data += `
<td width=50% absheight=30 align=left valign=middle>
<table valign=top cellspacing=0 cellpadding=0>
<tr>
<td abswidth=30 align=center valign=middle>
<img src="/images/checkmark.gif" width=20 height=20>
<td abswidth=4>
<td absheight=30 align=left valign=middle>
<font color=E7CE4A size=-1>	<i>Recommended</i>
</font>
</table>`;
} else {
    data += `
<td width=50% absheight=30 align=left valign=middle>
<font color=E7CE4A size=-1>
<input type="checkbox" name="Recommended" value="true"> &nbsp;Recommended
</font>`;
}
if (session_data.favstore.folderExists("Reference") == true) {
    data += `
<td width=50% absheight=30 align=left valign=middle>
<table valign=top cellspacing=0 cellpadding=0>
<tr>
<td abswidth=30 align=center valign=middle>
<img src="/images/checkmark.gif" width=20 height=20>
<td abswidth=4>
<td absheight=30 align=left valign=middle>
<font color=E7CE4A size=-1>	<i>Reference</i>
</font>
</table>`;
} else {
    data += `
<td width=50% absheight=30 align=left valign=middle>
<font color=E7CE4A size=-1>
<input type="checkbox" name="Reference" value="true"> &nbsp;Reference
</font>`;
}
data += `
</table>
<tr><td><table cellspacing=0 cellpadding=0>
<tr><td><table cellspacing=0 cellpadding=0 bgcolor=191919>
<tr><td><table width=5 cellspacing=0 cellpadding=0 bgcolor=191919>
<tr><td width=5 absheight=15><img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
</table>
<td><table width=442 cellspacing=0 cellpadding=0 bgcolor=191919>
<tr><td height=10>
<tr><td width=15>
<td absheight=2 valign=middle align=center bgcolor="2B2B2B"><img src="wtv-home:/ROMCache/Spacer.gif" height=1>
<tr><td width=5 height=1>
<tr><td width=15>
<td absheight=2 valign=middle align=center bgcolor="0D0D0D"><img src="wtv-home:/ROMCache/Spacer.gif" height=1>
</table>
</table>
</table>
<tr><td><table cellspacing=0 cellpadding=0 bgcolor=191919>
<tr><td width=5 height=10><img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<tr><td width=5><img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<td width=100%><img src="wtv-home:/ROMCache/Spacer.gif" width=100% height=1>
<td align=right valign=center>
<font color="#E7CE4A" size=-1><shadow>
<input
type=submit
borderimage="file://ROM/Borders/ButtonBorder2.bif" value="Add"
name="ForwardToBrowser"
usestyle
width=110>
</shadow></font>
<td width=13>
</table>
</form>
</table>
</table>
</table>
</table>
</HTML>
`;
