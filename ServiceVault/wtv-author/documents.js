var minisrv_service_file = true;

var pagestore_exists = session_data.pagestore.pagestoreExists();

var pageid;
var numofpages;
var keys;

if (pagestore_exists != true) session_data.pagestore.createPagestore();

var pagearray = session_data.pagestore.listPages();

if (pagearray.length == 0) {
    numofpages = 0;
} else {
    keys = Object.keys(pagearray);
    numofpages = keys.length;
}

if (
    session_data.get("wtv-client-rom-type") == "bf0app" &&
    session_data.get("wtv-system-version") < 1127
) {
    //make sure that clients below 1.4 can't access page builder
    headers = `400 This feature requires you to receive an upgrade. Upgrades are not recommended for this Internet terminal, as there is not a reliable method to install upgrades on WebTV Classic units at this time.`;
    data = ``;
} else {
    headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;

    data = `<HTML>
    <HEAD>
    <DISPLAY fontsize=${session_data.isJapaneseClient() ? `small` : `medium`}>
    <TITLE>Page Builder index</TITLE>
    </HEAD>
    <sidebar width=122 height=420 align=left>
    <table cellspacing=0 cellpadding=0 height=385>
    <TR>
    <td width=3>
    <td abswidth=2 bgColor=#8A99B0 rowspan=99>
    <td absHEIGHT=4>&nbsp;
    <td abswidth=2 bgColor=#8A99B0 rowspan=99>
    <td width=4 rowspan=99>
    <td backGround="wtv-author:/ROMCache/grad_tile.gif" width=16 rowspan=99>
    </TR>
    <tr>
    <td>
    <td align=right height=69 width=93 href="wtv-home:/home">
    <img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width=87 height=67>
    <tr><td absheight=5>&nbsp;
    <TR>
    <td colspan=5 absheight=2 valign=middle align=center bgcolor=#8A99B0>&nbsp;
    <tr>
    <td>
    <td abswidth=93 absheight=26 >
    <table href="wtv-author:/templates"
    cellspacing=0 cellpadding=0>
    <tr>
    <td abswidth=5>
    <td abswidth=90 valign=middle align=left><table cellspacing=0 cellpadding=0><tr><td maxlines=1><font sizerange=${session_data.isJapaneseClient() ? `small` : `medium`} color="C2CCD7">Create</font></table>
    </table>
    <TR>
    <td colspan=5 absheight=2 valign=middle align=center bgcolor=#8A99B0>&nbsp;
    <tr>
    <td>
    <td abswidth=93 absheight=26 >
    <table href="wtv-author:/scrapbook"
    cellspacing=0 cellpadding=0>
    <tr>
    <td abswidth=5>
    <td abswidth=90 valign=middle align=left><table cellspacing=0 cellpadding=0><tr><td maxlines=1><font sizerange=${session_data.isJapaneseClient() ? `small` : `medium`} color="C2CCD7">Scrapbook</font></table>
    </table>
    <TR>
    <td colspan=5 absheight=2 valign=middle align=center bgcolor=#8A99B0>&nbsp;
    <tr>
    <td>
    <td abswidth=93 absheight=26 >
    <table href="wtv-author:/document-cleanup"
    cellspacing=0 cellpadding=0>
    <tr>
    <td abswidth=5>
    <td abswidth=90 valign=middle align=left><table cellspacing=0 cellpadding=0><tr><td maxlines=1><font sizerange=${session_data.isJapaneseClient() ? `small` : `medium`} color="C2CCD7">Clean up</font></table>
    </table>
    <TR>
    <td colspan=5 absheight=2 valign=middle align=center bgcolor=#8A99B0>&nbsp;
    <tr>
    <td>
    <td abswidth=93 absheight=26 >
    <table href="wtv-author:/samples_en-US/index.html"
    cellspacing=0 cellpadding=0>
    <tr>
    <td abswidth=5>
    <td abswidth=90 valign=middle align=left><table cellspacing=0 cellpadding=0><tr><td maxlines=1><font sizerange=${session_data.isJapaneseClient() ? `small` : `medium`} color="C2CCD7">Examples</font></table>
    </table>
    <TR>
    <td colspan=5 absheight=2 valign=middle align=center bgcolor=#8A99B0>&nbsp;
    <tr>
    <td>
    <td abswidth=93 absheight=26 >
    <table href=javascript:checkPageStatus()
    cellspacing=0 cellpadding=0>
    <tr>
    <td abswidth=5>
    <td abswidth=90 valign=middle align=left><table cellspacing=0 cellpadding=0><tr><td maxlines=1><font sizerange=${session_data.isJapaneseClient() ? `small` : `medium`} color="C2CCD7">Archive</font></table>
    </table>
    <TR>
    <td colspan=5 absheight=2 valign=middle align=center bgcolor=#8A99B0>&nbsp;
    <tr>
    <td>
    <td abswidth=93 absheight=26 >
    <table href="wtv-guide:/help?topic=Publish&subtopic=Index&appName=Page%20Builder"
    cellspacing=0 cellpadding=0>
    <tr>
    <td abswidth=5>
    <td abswidth=90 valign=middle align=left><table cellspacing=0 cellpadding=0><tr><td maxlines=1><font sizerange=${session_data.isJapaneseClient() ? `small` : `medium`} color="C2CCD7">Help</font></table>
    </table>
    <TR>
    <td colspan=5 absheight=2 valign=middle align=center bgcolor=#8A99B0>&nbsp;
    <tr>
    <td>
    <td valign=bottom align=right > <img src="wtv-author:/ROMCache/pagebuilder.gif" height=124 width=78>&nbsp;
    </table>
    </sidebar>
    <body
    bgcolor=#1e4261
    background=wtv-author:/ROMCache/blue_tile_128.gif text=AEBFD1 link=B8BDC7
    vlink=B8BDC7
    hspace=0
    vspace=0
    onLoad=StorageWarning()
    >
    <SCRIPT>
    function StorageWarning() {	}
    </SCRIPT>
    <form name=onlyOnce><input type=hidden name=didIt value=0></form>
    <table cellspacing=0 cellpadding=0 width=100%>
    <tr>
    <td abswidth=22 rowspan=100><td><td abswidth=22 rowspan=100>
    <tr>
    <td absheight=12>
    <tr>
    <td height=25 valign=top>
    <font size=+1 color=D1D1D1><blackface> Page Builder index </blackface></font>
    <tr>
    <td height=24>
    <font color=AEBFD1> Choose a document to change or view it </font>
    <tr>
    <td height=14>
    <tr><td>
    <table cellspacing=0 cellpadding=0>
    `;
    for (let i = 0; i < numofpages; i++) {
        pageid = keys[i];
        console.log(pageid);
        data += `<tr>	<td rowspan=2 valign=top>`;
        if (i == 0)
            data += `<img src="/ROMCache/left_mark.gif" width=5 height=9>
    <td colspan=4><img src="/ROMCache/horiz_line_top.gif" width=347 height=9>
    <td rowspan=2 valign=top><img src="/ROMCache/right_mark.gif" width=5 height=9>`;

        data += `
    <tr>
    <td width=8 bgColor=0F283F>
    <td bgColor=0F283F href="wtv-author:/doc-info?docName=${pageid}" width=331>
    <font color=AEBFD1><B>
    ${pagearray[pageid].title}
    </B></font>
    <P>
    <font size=-1 color=AEBFD1><I>
    ${pagearray[pageid].description}
    </I></font>
    <P>
    <font size=1 color=AEBFD1>`;
        if (pagearray[pageid].published == true)
            data += `published ${pagearray[pageid].publishdate}`;
        else data += "not published";
        data += `
    </font>
    <td width=8 bgColor=0F283F>
    <tr>	<td><img src="/ROMCache/left_mark.gif" width=5 height=9>
    <td colspan=4><img src="/ROMCache/horiz_line_bottom.gif" width=347 height=9>
    <td><img src="/ROMCache/right_mark.gif" width=5 height=9>`;
    }
    data += `
    </table>
    </table>
    <SCRIPT language=JavaScript>
    function checkPageStatus() {
    location = "wtv-author:/scrapbook-serve-confirm-archive?pub=true&unpub=false";
    }
    </SCRIPT>
    </BODY>
    </HTML>`;
}
