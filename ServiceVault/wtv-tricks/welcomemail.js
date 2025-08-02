var wtvrsvc_service_file = true;

session_data.mailstore.createWelcomeMessage();

headers = `200 OK
Content-Type: text/html`;

data = `<html>
<display nosave nosend skipback>
<title>Welcome... again!</title>
<body bgcolor="#191919" text="#44cc55" link="36d5ff" vlink="36d5ff">
<br>
<h1>Mail from the man himself</h1>
Looks like you've got new mail in your inbox!
<p>
You can now experience the joys of the message light.
<p>
Have fun!
<p>
<p>
<a selected href="wtv-mail:/listmail">Turn it off!!!</a>
</body>
</html>
`;
