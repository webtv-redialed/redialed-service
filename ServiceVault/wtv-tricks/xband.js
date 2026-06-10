var minisrv_service_file = true;

headers = `200 OK
Content-Type: text/html
wtv-input-timeout: 86400`;

data = `<html>
<head>
<title>ecks banned</title>
<display nooptions showwhencomplete>
</head>
<script>
var xOffset = 5;
var yOffset = 5;

function animate() {
	var aniStyle = document.all["dvd"].style;

	var newLeft = aniStyle.posLeft + xOffset;
	var newTop = aniStyle.posTop + yOffset;

	if ((newLeft + aniStyle.posWidth) > window.innerWidth) {
		// goes off when it hits the right edge
		xOffset = -5;
	} else if (newLeft < 0) {
		// goes off when it hits the left edge
		xOffset = 5;
	}
		
	if ((newTop + aniStyle.posHeight) > window.innerHeight) {
		// goes off when it hits the bottom edge
		yOffset = -5;
	 } else if (newTop < 0) {
		// goes off when it hits the top edge
		yOffset = 5;
	}

	aniStyle.posLeft = newLeft;
	aniStyle.posTop = newTop;

	setTimeout("animate()", 40);

}
</script>
<body background=wtv-tricks:/RATTLEBASSINBABYWOOOOO/xband.gif notilebg novtilebg onload="animate()">
<div id="dvd" style="position:absolute; top:200; left:300;">
<img src="wtv-tricks:/RATTLEBASSINBABYWOOOOO/bass.gif" id="dvdimg" name="dvdimg" width=96 height=68>
</div>
</body>
</html>
`;
