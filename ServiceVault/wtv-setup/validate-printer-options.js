var wtvrsvc_service_file = true;

headers = `200 OK
Content-type: text/html`;

data = `<html>
<head>
        <meta
                http-equiv=refresh
                    content="0;url=client:Fetch?source=${encodeURIComponent(
    "wtv-disk:/get-printer-driver"
)}"
        >
        <display downloadsuccess="client:showalert?message=anti fuck" downloadfail="client:showalert?message=fuck">
        <title>Retrieving printer files</title>
</head>
<body bgcolor=#0 text=#42CC55 fontsize=large hspace=0 vspace=0>
<table cellspacing=0 cellpadding=0>
        <tr>
                <td width=104 height=74 valign=middle align=center bgcolor=3B3A4D>
                        <img src="${
    this.wtvrsvc_config.config.service_logo
}" width=86 height=64>
                <td width=20 valign=top align=left bgcolor=3B3A4D>
                        <spacer>
                <td colspan=2 width=436 valign=middle align=left bgcolor=3B3A4D>
                        <font color=D6DFD0 size=+2><blackface><shadow>
                                <spacer type=block width=1 height=4>
                                <br>
                                        Retrieving printer files
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
                               Your Internet terminal is retrieving files it needs to make your pr- fuck this grandma friendly WNI speak, answer the following:<br>
							   <p>why do they call it "oven" when you of in the cold food of out hot eat the food
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
