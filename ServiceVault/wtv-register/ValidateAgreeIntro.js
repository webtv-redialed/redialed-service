var minisrv_service_file = true;

const TermsOfServiceContent = fs.readFileSync(
    "./ServiceDeps/TermsOfService.txt",
    {encoding: "utf8", flag: "r"}
);
sanitizeHtml = require("sanitize-html");

const clean = sanitizeHtml(TermsOfServiceContent, {
    allowedTags: ["b", "br", "center", "font", "li", "p", "td", "tr", "ul"],
    allowedAttributes: {
        font: ["size"],
        td: ["abswidth"],
        tr: ["valign", "align"],
    },
});

var brand = session_data.getManufacturer();

if (!request_headers.query.registering) {
    var errpage = doErrorPage(400);
    headers = errpage[0];
    data = errpage[1];
} else {
    headers = `200 OK
Content-Type: text/html`;

    data = `<HTML> 
<HEAD> 
<title>WebTV Service Agreement</title>
<DISPLAY nooptions> 
</HEAD>
<body bgcolor="#191919" text="#42CC55" link="36d5ff" hspace=0 vspace=0>
<sidebar width=150 bgcolor=3B3A4D fontsize="${session_data.isJapaneseClient() ? `medium` : `large`}"> <table cellspacing=0 cellpadding=0 bgcolor=3B3A4D>
<tr>
<td width=6>
<td width=98 height=74 valign=middle align=center>
<img src="wtv-register:/ROMCache/WebTVLogoJewel.gif" width=87 height=67>
<tr>
<td>
<td valign=top align=left>
<form action="ValidateAgreement"
ENCTYPE="x-www-form-encoded" METHOD="POST">
<font size=-1 color=c6cFc0>
To read more of this agreement, press <b><font size=-3>SCROLL</font> down</b>
<INPUT TYPE="hidden" NAME="registering" VALUE="true">
<INPUT TYPE="hidden" NAME="brand" VALUE="${request_headers.query.brand}">
<INPUT TYPE="hidden" NAME="controller" VALUE="${request_headers.query.controller}">
<INPUT TYPE="hidden" NAME="subscriber_first_name" VALUE="${request_headers.query.subscriber_first_name}">
<INPUT TYPE="hidden" NAME="subscriber_last_name" VALUE="${request_headers.query.subscriber_last_name}">
<INPUT TYPE="hidden" name="subscriber_username" VALUE="${request_headers.query.subscriber_username}">
<INPUT TYPE="hidden" name="subscriber_birth_month" VALUE="${request_headers.query.subscriber_birth_month}">
<INPUT TYPE="hidden" name="subscriber_birth_date" VALUE="${request_headers.query.subscriber_birth_date}">
<INPUT TYPE="hidden" NAME="subscriber-sex" VALUE="not likely">
<input type=hidden name=whatnot>
<P>
To agree to these terms and go on, press${request_headers.query.controller == "keyboard" ? `<br><img src="wtv-register:/ROMCache/Spacer.gif" width=111 height=6><img src="wtv-register:/ROMCache/Spacer.gif" width=28 height=4><img src="images/${brand}/ReturnKey.gif" align=top>` : ` the center <img src="wtv-register:/ROMCache/Spacer.gif" width=5 height=6><img src="images/${brand}/CenterButton.gif" align=absmiddle> button.`} <!-- TODO: figure out better spacing for first spacer in ReturnKey, original value is 100 -->
</font>
<br>
<p>
<img src="wtv-register:/ROMCache/Spacer.gif" width=20 height=${request_headers.query.controller == "keyboard" ? 62 : 75}>
<p>
<font size="-1" color="#E7CE4A">
<shadow>
<img src="wtv-register:/ROMCache/Spacer.gif" width=18 height=1><input type=submit Value=Agree name="Agree" borderimage="file://ROM/Borders/ButtonBorder2.bif" usestyle width=100
selected>
</shadow>
</font>
</form>
<td width=6 valign=top align=left height=384 width=6>
</table>
</sidebar>
<table cellspacing=0 cellpadding=0> 
<tr> 
<td abswidth=14> 
<td abswidth=416 absheight=80 valign=center> 
<font size="+2" color="E7CE4A"><blackface><shadow>`;
    data += clean;
    data += `<td>
</table>
</form> <td
abswidth=20> <tr> <td absheight=15> </table> </body> </html>`;
}