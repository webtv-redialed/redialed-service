var minisrv_service_file = true;
// TODO: move this to wtv-customscript

headers = `200 OK
Content-Type: text/html
wtv-expire: ${serviceName}:/images/benchmark.jpg
wtv-visit: ${serviceName}:/benchmark-test-result?begin-time=${Math.floor(Date.now() / 1000)}
Expires: Wed, 09 Oct 1991 22:00:00 GMT`;

data = `<HTML>
<HEAD>
<TITLE>Benchmark testing</TITLE>
<display nosend>
</HEAD>

<BODY BGCOLOR=191919 TEXT=44cc55 LINK=189cd6 VLINK=189cd6>

<CENTER>
<h1>Benchmark Image</h1>
<br>

<IMG SRC=${serviceName}:/images/benchmark.jpg ALIGN=CENTER>

</CENTER>
</BODY>
</HTML>`;