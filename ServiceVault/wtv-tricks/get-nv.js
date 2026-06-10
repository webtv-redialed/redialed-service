var minisrv_service_file = true;
headers = `200 OK
Content-Type: text/html
wtv-nvstorage-dump: wtv-tricks:/post-nvstorage-dump`;

data = `<html>
<display nosave nosend skipback>
<meta http-equiv="refresh" content="15; url=wtv-home:/home">
<title>NVRAM Dump</title>
<body bgcolor="#191919" text="#44cc55" link="36d5ff" vlink="36d5ff">
<br>
<h1>NVRAM Dump </h1>
Your WebTV is dumping its NVRAM and sending it to the WebTV Service for use by the server operators.
<p>
This will take a few seconds, and then your NVRAM contents will be preserved. You will be shortly redirected to the home page.
<!-- <p>
Boogie on down!
<p>
<p>
<a selected href="wtv-home:/home">Go home.</a> -->
</body>
</html>`;
