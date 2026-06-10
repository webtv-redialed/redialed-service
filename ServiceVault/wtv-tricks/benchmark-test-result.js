var minisrv_service_file = true;
//TODO: move this to wtv-customscript

var now = Math.floor(Date.now() / 1000)
var nowParsed = new Date();
var downloadTimeSecs = now - request_headers.query[`begin-time`];
var throughPut = Math.round(180385.000448 / downloadTimeSecs);

function timeConverter(timestamp) {
    var a = new Date(timestamp * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var day = days[a.getDay()];
    var hour = a.getHours() < 10 ? '0' + a.getHours() : a.getHours();
    var min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes();
    var sec = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds();
    var year = a.getFullYear()
    return `${day} ${month} ${date} ${hour}:${min}:${sec} ${year}`;
}

headers = `200 OK
Content-Type: text/html
Expires: Wed, 09 Oct 1991 22:00:00 GMT`;

/* example returned values from saved page given by original server (webtv viewer)
Start Time: Tue Jul 13 21:24:12 2021
End Time: Tue Jul 13 21:24:15 2021
Throughput: 60128 bytes/sec */

data = `<HTML>
<HEAD>
<TITLE>Benchmark Testing</TITLE>
<display nosend>
</HEAD>
<BODY BGCOLOR=191919 TEXT=44cc55 LINK=189cd6 VLINK=189cd6>
<CENTER>
<h1>Statistics Page</h1>
<table>
<tr>
<td height=20>
<tr>
<td valign=top align=right width=200><shadow>POP Number:</shadow>
<td width=10>
<td valign=top>&phone;
<tr>
<td valign=top align=right><shadow>Connected at:</shadow>
<td width=10>
<td valign=top>&rate;
<tr>
<td valign=top align=right><shadow>Modem f/w:</shadow>
<td width=10>
<td valign=top>&modem;
<tr>
<td height=40>
<tr>
<td valign=top align=right width=200><shadow>Image Size:</shadow>
<td width=10>
<td valign=top>176 KBytes
<tr>
<td valign=top align=right><shadow>Start Time:</shadow>
<td width=10>
<td valign=top>${timeConverter(request_headers.query[`begin-time`])}
<tr>
<td valign=top align=right><shadow>End Time:</shadow>
<td width=10>
<td valign=top>${timeConverter(now)}
<tr>
<td valign=top align=right><shadow>Total Time:</shadow>
<td width=10>
<td valign=top>${downloadTimeSecs} seconds
<tr>
<td valign=top align=right><shadow>Throughput:</shadow>
<td width=10>
<td valign=top>${throughPut} bytes/sec
</table>
<p>
<p>
<a selected href="${service_name}:/benchmark-image">Re-Test</a>
<td width=30>
<a href="wtv-tricks:/tricks">Back to Tricks</a>
</CENTER>
</BODY>
</HTML>`;