var minisrv_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;



var altocomCreds = "";

if (session_data.hasCap("client-has-softmodem")) {
    altocomCreds = `<p>
56k softmodem supplied by <a href="http://theoldnet.com/get?url=altocom.com&year=2000&scripts=false&decode=true">AltoCom, Inc.</a>
</p>
<p>
<center>
<a href="http://theoldnet.com/get?url=altocom.com&year=2000&scripts=false&decode=false"><img src="wtv-home:/images/altoComLogo.gif"></a>
</center>
</p>`;
}

// WebTV only gave some of these the additional altocom credits tagline
switch (session_data.getManufacturer()) {
    case "Sony":
        providedBy = `Your Sony Internet Terminal was made by <a href="http://theoldnet.com/get?url=sony.com&year=1998&scripts=false&decode=false" selected>Sony Electronics</a>.
<p>The WebTV Network is a service of <a href="proto://www.webtv.net">WebTV Networks, Inc.</a>`;
        break;
    case "Philips":
    case "Philips-Mont":
        providedBy = `Your Philips Multimedia Access Terminal was made by <a href="http://theoldnet.com/get?decode=true&scripts=false&timestamp=19970607150047&url=http://www.magnavox.com/hottechnology/webtv/webtv.html" selected>Philips Smart Connect </a>.
<p>The WebTV Network is a service of <a href="proto://www.webtv.net">WebTV Networks, Inc.</a>`;
        break;
    case "Mitsubishi":
        providedBy = `Your Mitsubishi WebTV Plus Receiver was made by 
<a href="http://theoldnet.com/get?url=mitsubishi.com&year=1999&scripts=false&decode=false">Mitsubishi Electric</a>.
<p>The WebTV Network is a service of <a href="proto://www.webtv.net">WebTV Networks, Inc.</a>`;
        break;
    case "Samsung":
        providedBy = `Your Samsung WebTV Plus Receiver was made by 
<a href="http://theoldnet.com/get?decode=false&scripts=false&year=2001&url=http://samsungusa.com//cgi-bin/nabc/home/b2c_home_samsungusa.jsp">Samsung Electronics Co., Ltd.</a>
<p>The WebTV Network is a service of <a href="proto://www.webtv.net">WebTV Networks, Inc.</a>`;
        break;
    case "EchoStar":
        providedBy = `Your EchoStar satellite receiver was made by 
<a href="http://theoldnet.com/get?url=echostar.com&year=2000&scripts=false&decode=false">EchoStar Communications Corporation.</a>
<p>The WebTV Network is a service of <a href="proto://www.webtv.net">WebTV Networks, Inc.</a>
${altocomCreds}`;
        break;
    default:
        providedBy = `Your prototype WebTV-compatible Internet 
${session_data.hasCap("client-has-tv-experience") ? `receiver` : `terminal`} and the WebTV Network 
are provided by <a href="proto://www.webtv.net" selected>WebTV Networks, Inc.</a>
${altocomCreds}`;
}

data = nunjucks.render('ServiceDeps/templates/wtv-home/credits.njk', { title: "About WebTV", display: "noscroll", body: `<td WIDTH=532 HEIGHT=236 VALIGN=top ALIGN=left>
<p>${providedBy}
<p>See who else made this happen <a href="https://webtv.zone/info/credits.html">here</a>.
</tr></td>`, isJapaneseClient: session_data.isJapaneseClient(), randomAssSpace: true});