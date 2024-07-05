var minisrv_service_file = true;
var wtvt = new WTVTricks(minisrv_config);

headers = `300 OK
Location: wtv-tricks:/gaming-doed?password=${wtvt.getPasswordByType("low")}`;

var folder_exists = session_data.favstore.folderExists("LC2 Games");

if (folder_exists == true) {
	headers = `400 hey smartass, you already did this`
} else {
	session_data.favstore.createFolder("LC2 Games");
	session_data.favstore.createFavorite("Launch DOOM", "client:boota?partition=DoomROM&size=5242880&source=file://disk/Doom/appromES.o", "LC2 Games", "canned/DOOM.gif", "url");
	session_data.favstore.createFavorite("Launch YDKJ", "client:boota?partition=JackROMD&size=5242880&source=file://disk/Jack15/appromESD.o", "LC2 Games", "canned/jack.gif", "url");
}
