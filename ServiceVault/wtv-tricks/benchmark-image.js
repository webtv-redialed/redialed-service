var minisrv_service_file = true;
// TODO: move this to wtv-customscript

var now = Math.floor(Date.now() / 1000)

headers = `200 OK
Content-Type: text/html
wtv-expire: ${service_name}:/images/benchmark.jpg
wtv-visit: ${service_name}:/benchmark-test-result?begin-time=${now}
Expires: Wed, 09 Oct 1991 22:00:00 GMT`; // close enough

data = `<HTML>
<HEAD>
<TITLE>Benchmark testing</TITLE>
<display nosend>
</HEAD>

<BODY BGCOLOR=191919 TEXT=44cc55 LINK=189cd6 VLINK=189cd6>

<CENTER>
<h1>Benchmark Image</h1>
<br>

<IMG SRC=${service_name}:/images/benchmark.jpg ALIGN=CENTER>

</CENTER>
</BODY>
</HTML>`;