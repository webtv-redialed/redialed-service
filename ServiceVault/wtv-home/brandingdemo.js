var minisrv_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;

var isPlus = session_data.hasCap("client-has-tv-experience");
var ssid = session_data.get("wtv-client-serial-number");
var romtype = session_data.get("wtv-client-rom-type");
var brandId = ssid.charAt(8);
var brand;

//doo doo
if (brandId == 0 && romtype == "US-DTV-disk-0MB-32MB-softmodem-CPU5230")
    brand = "Sony UltimateTV";
else if (brandId == 0) brand = "Sony";
else if (
    brandId == 1 &&
    isPlus == true &&
    romtype == "US-LC2-flashdisk-0MB-16MB-softmodem-CPU5230"
)
    brand = "Philips-Mont";
else if (brandId == 1 && isPlus == true) brand = "Philips-Plus";
else if (brandId == 1) brand = "Philips";
else if (brandId == 2) brand = "WebTV OEM (Generic)";
else if (brandId == 3) brand = "Pace";
else if (brandId == 4) brand = "Mitsubishi";
else if (brandId == 5) brand = "Philips-Mont";
else if (brandId == 6) brand = "Fujitsu";
else if (brandId == 7) brand = "Samsung";
else if (brandId == 8) brand = "EchoStar";
else if (brandId == 9 && romtype == "US-DTV-disk-0MB-32MB-softmodem-CPU5230")
    brand = "Thomson UltimateTV";
else if (brandId == 9) brand = "Thomson";
else brand = "WebTV";

data = `<html><head>
<display showwhencomplete>
<title>The WebTV Box Branding Testinatorizer</title>
</head>
<body bgcolor="#000000" text="#449944">
<h1>Old deprecated detection method</h1>
You have a...<br>
(drumroll)<br>
${brand} box!<br>
Your Brand ID is ${brandId}

<h1>A second test, using the proper function</h1>
<p>You have been blessed with the privilege of owning a "<b>${session_data.getManufacturer()}</b>" box. Yay.

<h1>Useless information!</h1>

<table border>
<tr>
<th>ID</th>
<th>Manufacturer</th>
</tr>
<tr>
<td>00</td>
<td>Sony</td>
</tr>
<tr>
<td>01</td>
<td>Philips</td>
</tr>
<tr>
<td>02</td>
<td>WebTVOEM</td>
</tr>
<tr>
<td>04</td>
<td>Mitsubishi</td>
</tr>
<tr>
<td>05</td>
<td>Philips-Mont</td>
</tr>
<tr>
<td>06</td>
<td>Fujitsu</td>
</tr>
<tr>
<td>07</td>
<td>Samsung</td>
</tr>
<tr>
<td>08</td>
<td>EchoStar</td>
</tr>
<tr>
<td>09</td>
<td>Thomson</td>
</tr>
<tr>
<td>10</td>
<td>Matsushita</td>
</tr>
<tr>
<td>1ROG</td>
<td>Rogers</td>
</tr>
<tr>
<td>1SEGA</td>
<td>SegaFiji</td>
</tr>
</table>
</table>
</body>
</html>`;
