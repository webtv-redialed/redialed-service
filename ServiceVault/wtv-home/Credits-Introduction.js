var minisrv_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;

const nunjucks = require("nunjucks");
nunjucks.configure({ autoescape: false });

data = nunjucks.render('ServiceDeps/templates/wtv-home/credits.njk', { title: "Credits", body: `<td WIDTH=198 HEIGHT=236 VALIGN=top ALIGN=left>
<A HREF="wtv-home:/Credits-AboutWebTV"><BLACKFACE>About WebTV</BLACKFACE></A><BR>
<IMG SRC="wtv-home:/ROMCache/Spacer.gif" WIDTH=1 HEIGHT=4><BR>
<FONT SIZE="-1">Who we are</FONT><BR>
<IMG SRC="wtv-home:/ROMCache/Spacer.gif" WIDTH=1 HEIGHT=21><BR>
<A HREF="wtv-home:/Credits-Privacy"><BLACKFACE>Privacy policy</BLACKFACE></A><BR>
<IMG SRC="wtv-home:/ROMCache/Spacer.gif" WIDTH=1 HEIGHT=4><BR>
<FONT SIZE="-1">For the WebTV Network</FONT><BR>
<TD WIDTH=20>
<TD WIDTH=198 VALIGN=top ALIGN=left>
<A HREF="wtv-home:/Credits-Legal"><BLACKFACE>Terms of service</BLACKFACE></A><BR>
<IMG SRC="wtv-home:/ROMCache/Spacer.gif" WIDTH=1 HEIGHT=4><BR>
<FONT SIZE="-1">For your account</FONT><BR>`, isJapaneseClient: session_data.isJapaneseClient()});