var minisrv_service_file = true;

headers = `200 OK
Content-Type: text/html
wtv-input-timeout: 86400`;

data = `<html>
<head>
<title>dea vea dea</title>
<display nooptions showwhencomplete>
</head>
<script>
var xOffset = 5;
var yOffset = 5;

var colors = ["/dvdimg/dvdporpul.gif", "/dvdimg/dvdblu.gif", "/dvdimg/dvdorang.gif", "/dvdimg/dvdblu2.gif", "/dvdimg/dvdpiss.gif", "/dvdimg/dvdpiss2.gif", "/dvdimg/dvdpank.gif", "/dvdimg/dvdgren.gif"]

function fuckSelf() {
	document.dvdimg.src = colors[Math.floor(Math.random()*colors.length)]
}

function animate() {
	var aniStyle = document.all["dvd"].style;

	var newLeft = aniStyle.posLeft + xOffset;
	var newTop = aniStyle.posTop + yOffset;

	if ((newLeft + aniStyle.posWidth) > window.innerWidth) {
		// goes off when it hits the right edge
		xOffset = -5;
		fuckSelf()
	} else if (newLeft < 0) {
		// goes off when it hits the left edge
		xOffset = 5;
		fuckSelf()
	}
		
	if ((newTop + aniStyle.posHeight) > window.innerHeight) {
		// goes off when it hits the bottom edge
		yOffset = -5;
		fuckSelf()
	 } else if (newTop < 0) {
		// goes off when it hits the top edge
		yOffset = 5;
		fuckSelf()
	}

	aniStyle.posLeft = newLeft;
	aniStyle.posTop = newTop;

	setTimeout("animate()", 40);

}
</script>
<body bgcolor=#000000 onload="animate()">
<div id="dvd" style="position:absolute; top:200; left:300; background-color:FFFFFF;">
<img src="wtv-tricks:/dvdimg/dvd.gif" id="dvdimg" name="dvdimg" width=150 height=90>
</div>
<table hidden>
<!-- preload all the assets this way, or webtv will display the page before they're all cached -->
<img src="wtv-tricks:/dvdimg/dvdporpul.gif" width=1 height=1>
<img src="wtv-tricks:/dvdimg/dvdblu.gif" width=1 height=1>
<img src="wtv-tricks:/dvdimg/dvdorang.gif" width=1 height=1>
<img src="wtv-tricks:/dvdimg/dvdblu2.gif" width=1 height=1>
<img src="wtv-tricks:/dvdimg/dvdpiss.gif" width=1 height=1>
<img src="wtv-tricks:/dvdimg/dvdpiss2.gif" width=1 height=1>
<img src="wtv-tricks:/dvdimg/dvdpank.gif" width=1 height=1>
<img src="wtv-tricks:/dvdimg/dvdgren.gif" width=1 height=1>
</table>
</body>
</html>
`;
