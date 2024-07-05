var minisrv_service_file = true;

headers = `200 OK
wtv-visit: client:ResetNVAndPowerOff
Content-Type: text/html`;

if (session_data.unregisterBox()) {
    headers += "\nwtv-noback-all: wtv-";
    headers += "\nwtv-expire-all: wtv-";
    var redirect = [3, "client:relog?"];
    var message =
        "Your account data has been successfully removed. You will now be be redirected to registration.<br><br>";
    message += `<a href="${redirect[1]}">Click here if you are not automatically redirected.</a>`;
}

data = `<html>
<head>
<display fontsize=medium>
<title>Danger Zone!</title>
`;
if (redirect)
    data += `<meta http-equiv=Refresh content="${redirect[0]}; url=${redirect[1]}">`;

data += `</head>
<body bgcolor="#000000" text="gold" link="gold" alink="gold" vlink="gold">
<br><br>
${message}
</body>
</html>`;
