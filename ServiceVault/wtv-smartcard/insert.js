var minisrv_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;

var POST = request_headers.post_data;
var string = POST.toString();
// Unhex POST data
var scpb = (function hex_to_ascii(POST) {
    var str = "";
    for (var n = 0; n < string.length; n += 2) {
        str += String.fromCharCode(parseInt(string.substr(n, 2), 16));
    }
    return str;
})();

// Check if the client sent base64 encoded data because some of them do for some reason
function isBase64(str) {
    if (str === "" || str.trim() === "") {
        return false;
    }
    try {
        return btoa(atob(str)) == str;
    } catch (err) {
        return false;
    }
}

var wasBase64 = isBase64(scpb);
// Decode base64 if the client sent base64 encoded data
if (wasBase64 == true) {
    let buff = new Buffer(scpb, "base64");
    var scp = buff.toString("ascii");
} else {
    var scp = scpb;
}
console.log(scp);
// Set up vars
var cardGen = scp.charAt(0);
var cardType = scp.charAt(1);
// Get card title
var cardTitlenmore = scp.substring(scp.indexOf("t") + 1);
var cardTitle = cardTitlenmore.substr(0, cardTitlenmore.lastIndexOf(" "));
// Check for error header, and compare against all known codes
if (request_headers.query.error) {
    var error = request_headers.query.error;
    switch (error) {
        case "-68":
            var errorMsg =
                "WebTV can't use the smart card.  Make sure it is inserted with the gold metallic contacts facing downwards.";
        default:
            var errorMsg =
                "WebTV can't recognize this smart card. It might be defective or of the wrong type.";
    }
    headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;

    data = `<HTML>
<HEAD>
<TITLE>
Smart Card error
</TITLE>
<DISPLAY nosave nosend>
</HEAD>
<print blackandwhite>
<sidebar width=110> 
	<table cellspacing=0 cellpadding=0 BGCOLOR="355844">
		<tr><td colspan=3 abswidth=104 absheight=4>
			<td rowspan=99 width=6 absheight=420 valign=top align=left>
			<img src="wtv-home:/ROMCache/Shadow.gif" width=6 height=420>
		<tr><td abswidth=6>
			<td abswidth=92 absheight=76>
			<table href="wtv-home:/home" absheight=76 cellspacing=0 cellpadding=0>
		<tr><td align=right>
			<img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width=87 height=67>
	</table><td abswidth=6> <tr> <td absheight=5 colspan=3>
	<table cellspacing=0 cellpadding=0>
		<tr><td abswidth=104 absheight=2 valign=middle align=center bgcolor="21372a">
			<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
		<tr><td abswidth=104 absheight=1 valign=top align=left>
		<tr><td abswidth=104 absheight=2 valign=top align=left bgcolor="53896a">
			<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
	</table><tr><td absheight=25 colspan=3>
	<table cellspacing=0 cellpadding=0>
		<tr><td height=2>
		<tr><td abswidth=5>
		<td abswidth=93>
	<table cellspacing=0 cellpadding=0><tr><td>
	<table cellspacing=0 cellpadding=0>
		<tr><td><shadow><font size=-1 color=e7ce4a>&nbsp;&nbsp;</font></shadow>
	</table></table><td abswidth=6></table><tr><td absheight=5 colspan=3>
	<table cellspacing=0 cellpadding=0>
		<tr><td abswidth=104 absheight=2 valign=middle align=center bgcolor="355844">
		<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
		<tr><td abswidth=104 absheight=1 valign=top align=left>
		<tr><td abswidth=104 absheight=2 valign=top align=left bgcolor="355844">
		<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
	</table>
	<tr><td absheight=20>
		<tr><td absheight=244 align=right valign=bottom colspan=3>
			<img src="wtv-smartcard:/images/BannerSmartCard.gif" width=50 height=238>
		<tr><td absheight=41>
	</table>
</sidebar>
<BODY BGCOLOR="#191919" TEXT="#44cc55" LINK="189CD6" VLINK="189CD6" HSPACE=0 VSPACE=0 FONTSIZE="large">
	<table cellspacing=0 cellpadding=0>
		<tr><td abswidth=14>
		<td abswidth=416 absheight=90 valign=center>
		<font size="+2" color="E7CE4A"><blackface><shadow>
			Smart Card error
		<td abswidth=20>
		<tr><td>
		<td valign=top align=left>
		<tr><td><td valign=top align=left absheight=210>
		${errorMsg}
		<td><tr>
		<td absheight=20>
		<tr><td>
		<td colspan=2 absheight=2 bgcolor="2B2B2B">
			<img src="wtv-home:/ROMCache/Spacer.gif" width=426 height=1>
		<tr><td absheight=1>
		<tr><td>
		<td colspan=2 absheight=2 bgcolor="0D0D0D">
			<img src="wtv-home:/ROMCache/Spacer.gif" width=426 height=1>
		<tr><td absheight=4>
	</table>
	<table cellspacing=0 cellpadding=0>
		<tr><td abswidth=430 valign=top align=right>
		<form action="client:goback">
		<font color="#E7CE4A" size=-1><shadow>
		<input selected type=submit borderimage="file://ROM/Borders/ButtonBorder2.bif" value=Continue name=Continue usestyle width=103>
		</shadow></font></form>
		<td abswidth=20>
	</table>
</BODY>
</HTML>`;
} else {
    // Change functionality based on card type
    switch (cardType) {
        case "G":
            // GoTo card
            var cardIdfeatnull = scp.substring(scp.lastIndexOf("i") + 1);
            var cardId = cardIdfeatnull.replace(/\0.*$/g, "");
            headers = `302 Moved temporarily
Connection: Keep-Alive
Content-Type: text/html\n`;
            // Select website to load with GoTo ID
            switch (cardId) {
                case "3455":
                    headers += `Location: http://www.sears.com/prod/index.htm`;
                    data = ` `;
                    break;

                case "3456":
                    headers += `Location: http://www.dishnetwork.com/profile/index.asp`;
                    data = ` `;
                    break;

                case "3457":
                    headers += `Location: http://www.dishnetwork.com/dishplayer/index.asp?source=SPECIALOFFER`;
                    data = ` `;
                    break;

                case "419801":
                    headers += `Location: http://b2b.sel.sony.com/`;
                    data = ` `;
                    break;

                case "419813":
                    headers += `Location: http://www.weather.com/`;
                    data = ` `;
                    break;

                case "999999":
                    headers += `Location: wtv-home:/content/index_shows.html`;
                    data = ` `;
                    break;

                case "99070701":
                    headers += `Location: http://www.dishnetwork.com/satserv/DISHplayer/index.html`;
                    data = ` `;
                    break;

                default:
                    headers += `Location: wtv-smartcard:/expired`;
                    data = ` `;
                    break;
            }
            break;
        case "O":
            data = `<HTML>
<HEAD>
<TITLE>
Smart Card OISP funny
</TITLE>
<DISPLAY nosave nosend>
</HEAD>
<print blackandwhite>
<sidebar width=110> 
	<table cellspacing=0 cellpadding=0 BGCOLOR="355844">
		<tr><td colspan=3 abswidth=104 absheight=4>
			<td rowspan=99 width=6 absheight=420 valign=top align=left>
			<img src="wtv-home:/ROMCache/Shadow.gif" width=6 height=420>
		<tr><td abswidth=6>
			<td abswidth=92 absheight=76>
			<table href="wtv-home:/home" absheight=76 cellspacing=0 cellpadding=0>
		<tr><td align=right>
			<img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width=87 height=67>
	</table><td abswidth=6> <tr> <td absheight=5 colspan=3>
	<table cellspacing=0 cellpadding=0>
		<tr><td abswidth=104 absheight=2 valign=middle align=center bgcolor="21372a">
			<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
		<tr><td abswidth=104 absheight=1 valign=top align=left>
		<tr><td abswidth=104 absheight=2 valign=top align=left bgcolor="53896a">
			<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
	</table><tr><td absheight=25 colspan=3>
	<table cellspacing=0 cellpadding=0>
		<tr><td height=2>
		<tr><td abswidth=5>
		<td abswidth=93>
	<table cellspacing=0 cellpadding=0><tr><td>
	<table cellspacing=0 cellpadding=0>
		<tr><td><shadow><font size=-1 color=e7ce4a>&nbsp;&nbsp;</font></shadow>
	</table></table><td abswidth=6></table><tr><td absheight=5 colspan=3>
	<table cellspacing=0 cellpadding=0>
		<tr><td abswidth=104 absheight=2 valign=middle align=center bgcolor="355844">
		<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
		<tr><td abswidth=104 absheight=1 valign=top align=left>
		<tr><td abswidth=104 absheight=2 valign=top align=left bgcolor="355844">
		<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
	</table>
	<tr><td absheight=20>
		<tr><td absheight=244 align=right valign=bottom colspan=3>
			<img src="wtv-smartcard:/images/BannerSmartCard.gif" width=50 height=238>
		<tr><td absheight=41>
	</table>
</sidebar>
<BODY BGCOLOR="#191919" TEXT="#44cc55" LINK="189CD6" VLINK="189CD6" HSPACE=0 VSPACE=0 FONTSIZE="large">
	<table cellspacing=0 cellpadding=0>
		<tr><td abswidth=14>
		<td abswidth=416 absheight=90 valign=center>
		<font size="+2" color="E7CE4A"><blackface><shadow>
			Smart Card OISP funny
		<td abswidth=20>
		<tr><td>
		<td valign=top align=left>
		<tr><td><td valign=top align=left absheight=210>
		Looks like you inserted an OISP card. You know that shit's useless right?
		<td><tr>
		<td absheight=20>
		<tr><td>
		<td colspan=2 absheight=2 bgcolor="2B2B2B">
			<img src="wtv-home:/ROMCache/Spacer.gif" width=426 height=1>
		<tr><td absheight=1>
		<tr><td>
		<td colspan=2 absheight=2 bgcolor="0D0D0D">
			<img src="wtv-home:/ROMCache/Spacer.gif" width=426 height=1>
		<tr><td absheight=4>
	</table>
	<table cellspacing=0 cellpadding=0>
		<tr><td abswidth=430 valign=top align=right>
		<form action="client:goback">
		<font color="#E7CE4A" size=-1><shadow>
		<input selected type=submit borderimage="file://ROM/Borders/ButtonBorder2.bif" value=Continue name=Continue usestyle width=103>
		</shadow></font></form>
		<td abswidth=20>
	</table>
</BODY>
</HTML>`;
            break;
        default:
            data = `<HTML>
<HEAD>
<TITLE>
Smart Card error
</TITLE>
<DISPLAY nosave nosend>
</HEAD>
<print blackandwhite>
<sidebar width=110> 
	<table cellspacing=0 cellpadding=0 BGCOLOR="355844">
		<tr><td colspan=3 abswidth=104 absheight=4>
			<td rowspan=99 width=6 absheight=420 valign=top align=left>
			<img src="wtv-home:/ROMCache/Shadow.gif" width=6 height=420>
		<tr><td abswidth=6>
			<td abswidth=92 absheight=76>
			<table href="wtv-home:/home" absheight=76 cellspacing=0 cellpadding=0>
		<tr><td align=right>
			<img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width=87 height=67>
	</table><td abswidth=6> <tr> <td absheight=5 colspan=3>
	<table cellspacing=0 cellpadding=0>
		<tr><td abswidth=104 absheight=2 valign=middle align=center bgcolor="21372a">
			<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
		<tr><td abswidth=104 absheight=1 valign=top align=left>
		<tr><td abswidth=104 absheight=2 valign=top align=left bgcolor="53896a">
			<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
	</table><tr><td absheight=25 colspan=3>
	<table cellspacing=0 cellpadding=0>
		<tr><td height=2>
		<tr><td abswidth=5>
		<td abswidth=93>
	<table cellspacing=0 cellpadding=0><tr><td>
	<table cellspacing=0 cellpadding=0>
		<tr><td><shadow><font size=-1 color=e7ce4a>&nbsp;&nbsp;</font></shadow>
	</table></table><td abswidth=6></table><tr><td absheight=5 colspan=3>
	<table cellspacing=0 cellpadding=0>
		<tr><td abswidth=104 absheight=2 valign=middle align=center bgcolor="355844">
		<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
		<tr><td abswidth=104 absheight=1 valign=top align=left>
		<tr><td abswidth=104 absheight=2 valign=top align=left bgcolor="355844">
		<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
	</table>
	<tr><td absheight=20>
		<tr><td absheight=244 align=right valign=bottom colspan=3>
			<img src="wtv-smartcard:/images/BannerSmartCard.gif" width=50 height=238>
		<tr><td absheight=41>
	</table>
</sidebar>
<BODY BGCOLOR="#191919" TEXT="#44cc55" LINK="189CD6" VLINK="189CD6" HSPACE=0 VSPACE=0 FONTSIZE="large">
	<table cellspacing=0 cellpadding=0>
		<tr><td abswidth=14>
		<td abswidth=416 absheight=90 valign=center>
		<font size="+2" color="E7CE4A"><blackface><shadow>
			Smart Card error
		<td abswidth=20>
		<tr><td>
		<td valign=top align=left>
		<tr><td><td valign=top align=left absheight=210>
		WebTV can't recognize this smart card. It might be defective or of the wrong type.
		<td><tr>
		<td absheight=20>
		<tr><td>
		<td colspan=2 absheight=2 bgcolor="2B2B2B">
			<img src="wtv-home:/ROMCache/Spacer.gif" width=426 height=1>
		<tr><td absheight=1>
		<tr><td>
		<td colspan=2 absheight=2 bgcolor="0D0D0D">
			<img src="wtv-home:/ROMCache/Spacer.gif" width=426 height=1>
		<tr><td absheight=4>
	</table>
	<table cellspacing=0 cellpadding=0>
		<tr><td abswidth=430 valign=top align=right>
		<form action="client:goback">
		<font color="#E7CE4A" size=-1><shadow>
		<input selected type=submit borderimage="file://ROM/Borders/ButtonBorder2.bif" value=Continue name=Continue usestyle width=103>
		</shadow></font></form>
		<td abswidth=20>
	</table>
</BODY>
</HTML>`;
            break;
    }
}
