const minisrv_service_file = true;

const foldername = request_headers.query.favorite_folder_name;
const favarray = session_data.favstore.listFavorites(foldername);
const folder_array = session_data.favstore.getFolders();
const folderid = folder_array.indexOf(foldername);
const favid = request_headers.query.favoriteid;
const numoffolders = folder_array.length;
const favoritenum = Object.keys(favarray).length;
const favoritedata = session_data.favstore.getFavorite(foldername, favid);


headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`


data = `<html><head>
<title>
Choose shortcut label
</title>
</head><body fontsize="large" vspace="0" hspace="0" vlink="189cd6" text="44cc55" link="189cd6" bgcolor="191919"><display>`;
data += engine.renderFileSync('wtv-favorite/partials/sidebar', { options: [{ url: 'wtv-favorite:/favorite', text: 'Favorites' }] });
data += `
<table width="451" cellspacing="0" cellpadding="0" bgcolor="191919">
<tbody><tr>
<td width="4" height="16"><img src="wtv-home:/ROMCache/Spacer.gif" width="1" height="1">
</td></tr><tr>
<td width="4" height="12"><img src="wtv-home:/ROMCache/Spacer.gif" width="1" height="1">
</td><td width="16"><img src="wtv-home:/ROMCache/Spacer.gif" width="1" height="1">
</td><td><table cellspacing="0" cellpadding="0">
<tbody><tr>
<td align="left">
<shadow><blackface><font color="e7ce4a">Choose shortcut label</font><shadow><blackface>
</blackface></shadow></blackface></shadow></td></tr></tbody></table>
</td></tr><tr>
<td width="4" height="14"><img src="wtv-home:/ROMCache/Spacer.gif" width="1" height="1">
</td></tr></tbody></table>
<table cellspacing="0" cellpadding="0">
<tbody><tr><td height="25"><img src="wtv-home:/ROMCache/Spacer.gif" width="1" height="1">
</td></tr><tr><td width="13">
</td><td valign="middle" align="left">
Choose a shortcut label for <b>${favoritedata.title}</b>, then choose <b>Done</b> below.
</td></tr><tr></tr></tbody></table><table cellspacing="0" cellpadding="0" bgcolor="191919">
<tbody><tr><td><table cellspacing="0" cellpadding="0" bgcolor="191919">
<tbody><tr><td absheight="13"><img src="wtv-home:/ROMCache/Spacer.gif" width="1" height="1">
</td></tr></tbody></table>
</td><td><table cellspacing="0" cellpadding="0" bgcolor="191919">
<tbody><tr><td height="4">
</td></tr><tr><td width="15">
</td><td absheight="2" valign="middle" bgcolor="1E1E1E" align="center"><img src="wtv-home:/ROMCache/Spacer.gif" width="100%" height="1">
</td></tr><tr><td width="5" height="1">
</td></tr><tr><td width="15">
</td><td absheight="2" valign="middle" bgcolor="121212" align="center"><img src="wtv-home:/ROMCache/Spacer.gif" width="100%" height="1">
</td></tr><tr><td height="4">
</td></tr></tbody></table>
</td></tr></tbody></table>
<table cellspacing="0" cellpadding="0" bgcolor="191919">
<tbody><tr><td width="13">
</td><td>
<form action="wtv-favorite:/commit-shortcuts-favorites">`
let fav;
for (let i = 1; i <= 7; i++) {
    const key = "F" + i;
    const scfav = session_data.favstore.getShortcutKey(key);
	var favimage;
    if (scfav && scfav.id !== "none") {
        fav = session_data.favstore.getFavorite(scfav.folder, scfav.id);
		if (fav.imagetype === "url") {
			favimage = fav.image
		} else {
			favimage = `get-thumbnail?folder=${fav.folder}&id=${fav.id}`
		}
    } else {
        fav = { image: "wtv-home:/ROMCache/Spacer.gif", imagetype: "url", title: "Not assigned" };
		favimage = "wtv-home:/ROMCache/Spacer.gif"
    }

data += `
<table cellspacing="0" cellpadding="0">
<tbody><tr><td><table cellspacing="0" cellpadding="0">
<tbody><tr><td abswidth="70" valign="center" align="center">
<table bgcolor="000000">
<tbody><tr><td><img src="${favimage}" width="70" height="52">
</td></tr></tbody></table>
</td><td width="10">
</td><td width="279" valign="center" align="left">
<font size="-1" color="#42BC52">
${fav.title}<br>
</font>
</td></tr></tbody></table>
</td><td abswidth="5">
</td><td>
<font size="-2" color="#F1F1F1">`;

if (fav.title !== favoritedata.title) {
    data += `<input type="radio" NAME="Choose" VALUE=${key} > &nbsp;${key}`
}

console.log(fav)

data += `</font>
</td></tr></tbody></table>
</td></tr></tbody></table>
</td></tr></tbody></table>
</td></tr></tbody></table>
</td></tr></tbody></table>
<table cellspacing="0" cellpadding="0" bgcolor="191919">
<tbody><tr><td><table cellspacing="0" cellpadding="0" bgcolor="191919">
<tbody><tr><td absheight="13"><img src="wtv-home:/ROMCache/Spacer.gif" width="1" height="1">
</td></tr></tbody></table>
</td><td><table cellspacing="0" cellpadding="0" bgcolor="191919">
<tbody><tr><td height="4">
</td></tr><tr><td width="15">
</td><td absheight="2" valign="middle" bgcolor="1E1E1E" align="center"><img src="wtv-home:/ROMCache/Spacer.gif" width="100%" height="1">
</td></tr><tr><td width="5" height="1">
</td></tr><tr><td width="15">
</td><td absheight="2" valign="middle" bgcolor="121212" align="center"><img src="wtv-home:/ROMCache/Spacer.gif" width="100%" height="1">
</td></tr><tr><td height="4">
</td></tr></tbody></table>
</td></tr></tbody></table>
<table cellspacing="0" cellpadding="0" bgcolor="191919">
<tbody><tr><td width="13">
</td><td>`
}

data += `
<table cellspacing="0" cellpadding="0">
<tbody><tr><td><table cellspacing="0" cellpadding="0" bgcolor="191919">
<tbody><tr><td><table cellspacing="0" cellpadding="0" bgcolor="191919">
<tbody><tr><td absheight="15"><img src="wtv-home:/ROMCache/Spacer.gif" width="1" height="1">
</td></tr></tbody></table>
</td><td><table width="100%" cellspacing="0" cellpadding="0" bgcolor="191919">
<tbody><tr><td height="10">
</td></tr><tr><td width="15">
</td><td absheight="2" valign="middle" bgcolor="2B2B2B" align="center"><img src="wtv-home:/ROMCache/Spacer.gif" height="1">
</td></tr><tr><td width="5" height="1">
</td></tr><tr><td width="15">
</td><td absheight="2" valign="middle" bgcolor="0D0D0D" align="center"><img src="wtv-home:/ROMCache/Spacer.gif" height="1">
</td></tr></tbody></table>
</td></tr></tbody></table>
</td></tr></tbody></table>
<input type="hidden" name="favorite_folder_name" value="${foldername}">
<input type="hidden" name="favoriteid" value="${favid}">
<table absheight="52" cellspacing="0" cellpadding="0" bgcolor="191919">
<tbody><tr><td height="10"><img src="wtv-home:/ROMCache/Spacer.gif" width="1" height="1">
</td></tr><tr><td width="100%"><img src="wtv-home:/ROMCache/Spacer.gif" width="100%" height="1">
</td><td valign="center" align="right">
<font size="-1" color="#E7CE4A"><shadow>
<input type="submit" borderimage="file://ROM/Borders/ButtonBorder2.bif" value="Done" name="GoBack" usestyle="" width="110">
</shadow></font>
</td><td abswidth="13">
</td></tr></tbody></table>
</form>
</display></body></html>`