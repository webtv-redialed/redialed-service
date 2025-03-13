var minisrv_service_file = true;
var wtvt = new WTVTricks(minisrv_config);

headers = `200 OK
Content-Type: text/html`;

if (request_headers.query.password == wtvt.getPasswordByType("high")) {
    data = `<html>
<display nosave nosend skipback>
<title>nice try buckaroo</title>
<body bgcolor="#191919" text="#44cc55" link="36d5ff" vlink="36d5ff">
<br>
<h1>you thought huh?</h1>
nope, not even high level tricks gives you the power to DoS our VPS
<p>
please forward all complaints to <a href="mailto:ultra0@WebTV">customer support</a>
<p>
better luck next time
<p>
<p>
<a selected href="wtv-mail:/listmail">prove it</a>
</body>
</html>`;
} else {
    data = wtvt.highTricksUnauthorized();
}
