var minisrv_service_file = true;

headers = `200 OK
Content-type: text/html
wtv-input-timeout: 86400`

data = `<html><head>
<display hideoptions nostatus showwhencomplete fontsize=medium>
<title>Christmas</title>
<script>
var lastplayed = "christmas.mid"
midis = ["christmas.mid", "last-christmas.mid", "jingle-bell-rock.mid", "happy-xmas.mid", "little-saint-nick.mid", "feliz-navidad.mid", "adeste-fideles.mid", "hark-the-herald-angels-sing.mid", "have-yourself-a-merry-little-christmas.mid", "its-the-most-wonderful-time-of-the-year.mid", "we-need-a-little-christmas.mid"]

function musicLoop() {
	playing = document.music.isPlaying();
	if (playing) {
		document.status.value = "    Have a good one!"
		setTimeout("musicLoop()", 1000);
	} else {
		document.status.value = "Please wait a moment"
		pickRandomSong();
	}
}
function pickRandomSong() {
	song = midis[Math.floor(Math.random() * midis.length)]
	if (song == lastplayed) {
		pickRandomSong();
	} else {
		document.music.src = song
		lastplayed = song
		checkIfLoaded(song);
	}
}

function checkIfLoaded(song) {
	playing = document.music.isPlaying();
	if (!song) {
		song = "christmas.mid"
	}
	if (playing) {
		musicLoop();
	} else {
		document.music.src = song
		setTimeout("checkIfLoaded(song)", 1000);
	}
}
</script>
</head>
<body bgcolor="#000000" text="#449944" onLoad="checkIfLoaded()">
<embed src="christmas.mid" name="music" autostart="true">
<center>
<img src="lights.gif"><br>
<img src="christmas.gif"><br>
<font color="#449944" size="3px">
From everybody working on<br><br>
<img src="${minisrv_config.config.service_splash_logo}"><br><br><br>
<form name="uselessBullshit">
<input type="text" width=181 name="status" id="status" border="0" value="    Have a good one!" usestyle disabled nobackground>
</form>
</center>
</body>
</html>`;
