var minisrv_service_file = true;

var favoritenum = 0;
var foldernum = 0;

var foldername = request_headers.query.favorite_folder_name;

var favarray = session_data.favstore.listFavorites(foldername);

var folder_array = session_data.favstore.getFolders();

var folderid = folder_array.indexOf(foldername);

var numoffolders = folder_array.length;

favoritenum = Object.keys(favarray).length;
foldernum = folder_array.length;

var folderlist = `<select name="newfolder" width=140>
<option value="${foldername}" selected="">${foldername}</option>
`;
for (let i = 0; i < foldernum; i++) {
    if (folder_array[i] == foldername) {
    } else {
        folderlist += `<option value="${folder_array[i]}">${folder_array[i]}</option>
			`;
    }
}
folderlist += "</select>";

var imagesource = "ROMCache";

// 2.6 and later have updated folder images, so we can't use ROMCache
if (session_data.get("wtv-system-version") >= 7623) {
    imagesource = "images";
}

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html
wtv-expire-all: wtv-favorite:/serve-`;

data = `<html><head>
<title>
Move favorites
</title>
</head><body fontsize="${session_data.isJapaneseClient() ? `medium` : `large`}" vspace="0" hspace="0" vlink="189cd6" text="44cc55" link="189cd6" bgcolor="191919"><display>
<sidebar width=109 height=384>
<tr><td absheight=384>
<table cellspacing=0 cellpadding=0 bgcolor=284a52>
<tr><td valign=top absheight=196>
<table cellspacing=0 cellpadding=0 absheight=196>
<tr>
<td valign=top width=100% height=50%>
<table cellspacing=0 cellpadding=0>
<tr>
<td colspan=3 width=100% absheight=1>
<tr>
<td abswidth=6>
<td width=100% align=center absheight=79>
<table href="wtv-home:/home" width=100% absheight=79 cellspacing=0 cellpadding=0>
<tr>
<td width=100% align=center>
<img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width=87 height=67>
</table>
<td abswidth=5>
<tr><td colspan=3 width=100% absheight=2 bgcolor=1f3136>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<tr><td colspan=3 width=100% absheight=1>
<tr><td colspan=3 width=100% absheight=2 bgcolor=436f79>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>	<tr><td width=100% absheight=32 colspan=3>
<table cellspacing=0 cellpadding=0>
<tr><td abswidth=6 absheight=26>
<td abswidth=93><table abswidth=93 cellspacing=0 cellpadding=0 href="wtv-favorite:/serve-organize-favorites?favorite_folder_name=${foldername}">
<tr><td>
<table cellspacing=0 cellpadding=0>
<tr><td><shadow><font color=E7CE4A size=-1>
&nbsp;Organize
</table>
</table>
<td abswidth=5>
<tr><td colspan=3 width=104 absheight=2 bgcolor=1f3136>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<tr><td absheight=1>
<tr><td colspan=3 width=104 absheight=2 bgcolor=436f79>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
</table>
</table>
</table>
<td abswidth=5 background="ROMCache/Shadow.gif"><img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<tr><td valign=top absheight=188>
<table cellspacing=0 cellpadding=0 absheight=188>
<tr><td width=100%><img src="wtv-home:/ROMCache/Spacer.gif" width=100% height=1>
<td align=right valign=bottom><img src="ROMCache/FavoritesBanner.gif" width=50 height=188>
</table>
<td abswidth=5 background="ROMCache/Shadow.gif"><img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
</table>
</sidebar>
<table width="451" cellspacing="0" cellpadding="0" bgcolor="2b2b2b">
<tbody><tr>
<td width="4" height="16"><img src="wtv-home:/ROMCache/Spacer.gif" width="1" height="1">
</td></tr><tr>
<td width="4" height="12"><img src="wtv-home:/ROMCache/Spacer.gif" width="1" height="1">
</td><td width="16"><img src="wtv-home:/ROMCache/Spacer.gif" width="1" height="1">
</td><td><table width="428" cellspacing="0" cellpadding="0">
<tbody><tr>
<td align="left">
<shadow><blackface><font color="e7ce4a">Move favorites in this folder:
</font><shadow><blackface>
</blackface></shadow></blackface></shadow></td></tr></tbody></table>
</td></tr><tr>
<td width="4" height="14"><img src="wtv-home:/ROMCache/Spacer.gif" width="1" height="1">
</td></tr></tbody></table>
<table cellspacing="0" cellpadding="0">
<tbody><tr><td valign="top" align="left">
<table width="221" cellspacing="0" cellpadding="0">
	<tbody><tr><td width="221" valign="middle" height="42" background="${imagesource}/LeftTop.gif" align="left">
<table width="100%" cellspacing="0" cellpadding="0">
<tbody><tr><td width="10"> </td><td width="20" valign="top" height="28" align="left">
<table cellspacing="0" cellpadding="0">
<tbody><tr><td height="1">
</td></tr><tr><td height="20">
<table width="20" height="20" cellspacing="0" cellpadding="0">
<tbody><tr><td> 
</td></tr></tbody></table>
</td></tr></tbody></table>
</td><td width="10"> </td><td height="20" align="center">
<font size="-1" color="#E6CD4A">
<limittext value="${foldername}" width="140">
</limittext></font>
</td><td width="20">
</td></tr></tbody></table>
</td></tr></tbody></table>
</td><td valign="top" align="left">
<table cellspacing="0" cellpadding="0">
<tbody><tr><td>
<table abswidth="178" cellspacing="0" cellpadding="0">
<tbody><tr><td absheight="20" bgcolor="2b2b2b"> 
</td></tr><tr><td abswidth="178" valign="middle" height="22" background="${imagesource}/MiddleTop.gif" align="left">
</td></tr></tbody></table>
</td><td>
<table abswidth="52" cellspacing="0" cellpadding="0">
<tbody><tr></tr></tbody></table><table abswidth="52" cellspacing="0" cellpadding="0" background="${imagesource}/FarRightTop.gif">
<tbody><tr><td width="20" valign="middle" height="42" align="left">
</td><td width="25" valign="middle" height="42" align="left">
</td><td width="7" valign="middle" height="40" align="left">
</td></tr></tbody></table>
</td></tr></tbody></table>
</td></tr></tbody></table>
<table cellspacing="0" cellpadding="0">
<form id="Move" action="wtv-favorite:/commit-move-favorites">
<input type=hidden name=favorite_folder_name value="${foldername}">
<tbody><tr><spacer type=block WIDTH=199 HEIGHT=0><td width="5" height="13"><img src="wtv-home:/ROMCache/Spacer.gif" width="199" height="1">
</td></tr></tbody></table></table>`;
if (favoritenum == 0) {
    data +=
        "<font size=2>&nbsp;&nbsp;&nbsp;<i>There are no favorites to move in this folder.</i></font>";
} else {
    for (let i = 0; i < favoritenum; i++) {
        data += `<tr><table cellspacing=0 cellpadding=0>
<td abswidth=15><img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<td abswidth=75 height=52 align=center valign=center>`;
        if (favarray[i].imagetype == "url")
            data += `<img src="${favarray[i].image}" width="70" vspace="5" height="52"><br>`;
        else
            data += `<img src="get-thumbnail?folder=${favarray[i].folder}&id=${favarray[i].id}" width="70" vspace="5" height="52"><br>`;
        data += `
<td abswidth=5 align=left valign=center>
<td abswidth=195 align=left valign=center maxlines=2>
${favarray[i].title}<br>
</font>
<td abswidth=8>
<td abswidth=140>
<font color="#E7CE4A" size=-1><shadow>
<input type=hidden name=favoriteid value="${favarray[i].id}">`;
        data += `<select name="favoritefolder" width=140>
<option value="${foldername}" selected="">${foldername}</option>
`;
        for (let i = 0; i < foldernum; i++) {
            if (folder_array[i] == foldername) {
            } else {
                data += `<option value="${folder_array[i]}">${folder_array[i]}</option>
			`;
            }
        }
        data += `</select>
</shadow></font>
<td abswidth=13>
</table>
<tr><table cellspacing=0 cellpadding=0>
<tr><td><table cellspacing=0 cellpadding=0>
<tr><td height=4>
<tr><td width=15>
<td absheight=2 valign=middle align=center><img src="wtv-home:/ROMCache/Spacer.gif" width=100% height=1>
<tr><td width=5 height=1>
<tr><td width=15>
<td absheight=2 valign=middle align=center><img src="wtv-home:/ROMCache/Spacer.gif" width=100% height=1>
<tr><td height=4>
</table>
</table>
<hr align=left width=100%><br>`;
    }
}
data += `
<tr><td><table cellspacing=0 cellpadding=0>
<tr><td><table cellspacing=0 cellpadding=0>
<tr><td><table width=451 cellspacing=0 cellpadding=0>
<tr><td height=4>
<tr><td width=15>
<td absheight=2 valign=middle align=center><img src="wtv-home:/ROMCache/Spacer.gif" width=100% height=1>
<tr><td width=5 height=1>
<tr><td width=15>
<td absheight=2 valign=middle align=center><img src="wtv-home:/ROMCache/Spacer.gif" width=100% height=1>
</table>
</table>
</table>
<tr><td align=right valign=center>
<table height=50 valign=center cellspacing=0 cellpadding=0>
<tr><td abswidth=5 height=10 ><img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<tr><td abswidth=5><img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<td width=100%><img src="wtv-home:/ROMCache/Spacer.gif" width=100% height=1>
<td align=right valign=center>
<td valign=center>
<font color="#E7CE4A" size=-1><shadow>
</shadow></font>
<td abswidth=9 align=center valign=center>
<td valign=center>
<font color="#E7CE4A" size=-1><shadow>
<input
type=submit
useform="Move"
borderimage="file://ROM/Borders/ButtonBorder2.bif" value="Done"
name="ForwardToBrowser"
usestyle
width=90>
</shadow></font>
<td abswidth=13>
<tr><td width=5 height=8><img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
</table>
</form>
</BODY>
</HTML>`;