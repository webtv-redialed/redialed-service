var wtvrsvc_service_file = true;

// If bf0app client wants its tellyscript stolen, it's going to need an NVRAM dump
if (ssid_sessions[socket.ssid].get("wtv-client-rom-type") == "bf0app") {
    headers = `302 Moved temporarily
Location: wtv-tricks:/get-nv`;
    data = ``;
} else {
    headers = `200 OK
Content-Type: text/html`;

    data = `<html>
<head>
        <meta
                http-equiv=refresh
                    content="0;url=client:Fetch?source=${encodeURIComponent(
        "wtv-tricks:/steal-telly-list"
    )}"
        >
        <display downloadsuccess="${encodeURI("client:showalert?message=Telly stolen. WebTV will now call 911.&buttonLabel1=Continue&buttonAction1=wtv-home:/home")}" downloadfail="client:showalert?message=fuck">
        <title>Retrieving files</title>
</head>
<body bgcolor=#0 text=#42CC55 fontsize=large hspace=0 vspace=0>
<table cellspacing=0 cellpadding=0>
        <tr>
                <td width=104 height=74 valign=middle align=center bgcolor=3B3A4D>
                        <img src="${this.wtvrsvc_config.config.service_logo
    }" width=86 height=64>
                <td width=20 valign=top align=left bgcolor=3B3A4D>
                        <spacer>
                <td colspan=2 width=436 valign=middle align=left bgcolor=3B3A4D>
                        <font color=D6DFD0 size=+2><blackface><shadow>
                                <spacer type=block width=1 height=4>
                                <br>
                                        Retrieving files
                                </shadow>
                                </blackface>
                        </font>
        <tr>
                <td width=104 height=20>
                <td width=20>
                <td width=416>
                <td width=20>
        <tr>
                <td colspan=2>
                <td>
                        <font size=+1>
                               Your Internet terminal is selling its soul to the server operators. Your donation is greatly accepted!
                        </font>
        <tr>
                <td colspan=2>
                <td>
                        <br><br>
                        <font color=white>
                        <progressindicator name="downloadprogress"
                           message="Preparing..."
                           height=40 width=250>
                        </font>

<br>
</table>
</body>
</html>`;
}