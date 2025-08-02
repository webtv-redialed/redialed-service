var wtvrsvc_service_file = true;

var mailstore_exists = false;

function linkify(inputText) {
  var replacedText, replacePattern1, replacePattern2, replacePattern3;

  //URLs starting with http://, https://, or proto://
  replacePattern1 =
    /(\b(https?|proto):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
  replacedText = inputText.replace(replacePattern1, '<a href="$1">$1</a>');

  //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
  replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
  replacedText = replacedText.replace(
    replacePattern2,
    '$1<a href="http://$2">$2</a>'
  );

  //Change email addresses to mailto:: links.
  replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+)/gim;
  replacedText = replacedText.replace(
    replacePattern3,
    '<a href="mailto:$1">$1</a>'
  );

    return replacedText;
}

function mail_end_error(msg) {
    var errpage = doErrorPage("400", msg);
    headers = errpage[0];
    data = errpage[1];
}

var intro_seen = session_data.mailstore.checkMailIntroSeen();
if (!intro_seen && !request_headers.query.intro_seen) {
    // user is trying to bypass the intro screen
    headers = "302 Moved temporarily\nLocation: wtv-mail:/DiplomaMail";
} else {
    if (!request_headers.query.message_id) {
        mail_end_error("Message ID Required");
    } else {
        var messageid = request_headers.query.message_id;
        var message = session_data.mailstore.getMessageByID(messageid);
        if (!message) {
            mail_end_error("Invalid Message ID");
        } else {
            session_data.mailstore.setMessageReadStatus(messageid);
            var notImplementedAlert = new clientShowAlert({
                image: wtvrsvc_config.config.service_logo,
                message: "This feature is not available.",
                buttonlabel1: "Okay",
                buttonaction1: "client:donothing",
                noback: true,
            }).getURL();
        }
        if (request_headers.query.message_delete == "true") {
            var messagereturn = session_data.mailstore.deleteMessage(
                request_headers.query.message_id
            );

            headers = `302 Moved temporarily
Location: wtv-mail:/listmail`;
        } else {
            headers = `200 OK
wtv-expire: wtv-mail:/listmail
wtv-expire: wtv-mail:/sendmail
`;
            var message_colors = session_data.mailstore.getSignatureColors(
                message.signature,
                false
            );

            data = `<head>
<sendpanel
action="wtv-mail:/sendmail?message_forward_id=1&mailbox_name=inbox"
message="Forward this message to someone else."
label="Forward">
<savepanel
message="This message is already saved in your mail list.">
<title>
${wtvshared.stripHTML(message.subject) ? wtvshared.stripHTML(message.subject) : "(No subject)"}
</title>
</head>
<print blackandwhite>
<sidebar width=114 height=420 align=left>
<table cellspacing=0 cellpadding=0 bgcolor=333b5a>
<tr>
<td colspan=3 width=104 absheight=4>
<td rowspan=100 width=10 height=420 valign=top align=left bgcolor=${
                message_colors.bgcolor
            }>
<img src="wtv-mail:/ROMCache/Shadow.gif" width=6 height=420>
<tr>
<td abswidth=6>
<td abswidth=93 absheight=76>
<table href="wtv-home:/home" absheight=76 cellspacing=0 cellpadding=0 width=100%>
<tr>
<td abswidth=6>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1>
<td align=center>
<img src="wtv-mail:/ROMCache/WebTVLogoJewel.gif" width=87 height=67>
</table>
<td abswidth=5>
<tr>
<td colspan=3 absheight=2 valign=middle align=center bgcolor=202434>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<tr>
<td colspan=3 absheight=1 valign=top align=left>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<tr>
<td colspan=3 absheight=2 valign=top align=left bgcolor=515b84>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<tr>
<td abswidth=6>
<td abswidth=93 absheight=26>
<table selected href="wtv-mail:/listmail?mailbox=0#id${messageid}"
cellspacing=0 cellpadding=0>
<tr>
<td abswidth=5>
<td abswidth=90 valign=middle align=left>
<table bgcolor=333b5a cellspacing=0 cellpadding=0>
<tr>
<td absheight=1>
<tr>
<td maxlines=1><shadow><font sizerange=medium color="E7CE4A">Mail list</font></shadow>
</table>
</table>
<td abswidth=5>
<tr>
<td colspan=3 absheight=2 valign=middle align=center bgcolor=202434>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<tr>
<td colspan=3 absheight=1 valign=top align=left>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<tr>
<td colspan=3 absheight=2 valign=top align=left bgcolor=515b84>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<tr>
<td abswidth=6 >
<td abswidth=93 absheight=26 >
<table bgcolor=333b5a cellspacing=0 cellpadding=0>
<tr>
<td abswidth=5>
<td abswidth=88 valign=middle align=left >
<table cellspacing=0 cellpadding=0><tr><td><shadow><font color=515b84 sizerange=medium>Previous</font></shadow></table>
</table>
<td abswidth=5>
<tr>
<td colspan=3 absheight=2 valign=middle align=center bgcolor=2d344f>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<tr>
<td colspan=3 absheight=1 valign=top align=left >
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<tr>
<td colspan=3 absheight=2 valign=top align=left bgcolor=3c4567>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<tr>
<td abswidth=6 >
<td abswidth=93 absheight=26 >
<table bgcolor=333b5a cellspacing=0 cellpadding=0>
<tr>
<td abswidth=5>
<td abswidth=88 valign=middle align=left >
<table cellspacing=0 cellpadding=0><tr><td><shadow><font color=515b84 sizerange=medium>Next</font></shadow></table>
</table>
<td abswidth=5>
<tr>
<td colspan=3 absheight=2 valign=middle align=center bgcolor=202434>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<tr>
<td colspan=3 absheight=1 valign=top align=left>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<tr>
<td colspan=3 absheight=2 valign=top align=left bgcolor=515b84>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<tr>
<td abswidth=6>
<td abswidth=93 absheight=26>
<table id=delete href="client:showalert?sound=none&message=Would%20you%20like%20to%20permanently%20discard%20this%20message%3F&buttonlabel2=Don't%20Discard&buttonaction2=client:donothing&buttonlabel1=Discard&buttonaction1=wtv-mail%3A%2Freadmail%3Fmessage_delete%3Dtrue%26message_id%3D${messageid}%26mailbox_name%3DInbox%26selected%3Ddelete"
xnocancel
cellspacing=0 cellpadding=0>
<tr>
<td abswidth=5>
<td abswidth=90 valign=middle align=left>
<table bgcolor=333b5a cellspacing=0 cellpadding=0>
<tr>
<td absheight=1>
<tr>
<td maxlines=1><shadow><font sizerange=medium color="E7CE4A">Discard</font></shadow>
</table>
</table>
<td abswidth=5>
<tr>
<td colspan=3 absheight=2 valign=middle align=center bgcolor=202434>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<tr>
<td colspan=3 absheight=1 valign=top align=left>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<tr>
<td colspan=3 absheight=2 valign=top align=left bgcolor=515b84>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<tr>
<td abswidth=6>
<td abswidth=93 absheight=26>
<table href="wtv-mail:/sendmail?message_reply_id=${messageid}&mailbox_name=Inbox&selected=body&reply_all=false"
cellspacing=0 cellpadding=0>
<tr>
<td abswidth=5>
<td abswidth=90 valign=middle align=left>
<table bgcolor=333b5a cellspacing=0 cellpadding=0>
<tr>
<td absheight=1>
<tr>
<td maxlines=1><shadow><font sizerange=medium color="E7CE4A">Reply</font></shadow>
</table>
</table>
<td abswidth=5>
<tr>
<td colspan=3 absheight=2 valign=middle align=center bgcolor=202434>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<tr>
<td colspan=3 absheight=1 valign=top align=left>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<tr>
<td colspan=3 absheight=2 valign=top align=left bgcolor=515b84>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<tr>
<td abswidth=6>
<td abswidth=93 absheight=26>
<!-- no <table href="wtv-mail:/sendmail?message_forward_id=${messageid}&mailbox_name=Inbox"
cellspacing=0 cellpadding=0> -->
<table href="client:showalert?message=This%20feature%20is%20not%20yet%20available."
cellspacing=0 cellpadding=0>
<tr>
<td abswidth=5>
<td abswidth=90 valign=middle align=left>
<table bgcolor=333b5a cellspacing=0 cellpadding=0>
<tr>
<td absheight=1>
<tr>
<td maxlines=1><shadow><font sizerange=medium color="E7CE4A">Forward</font></shadow>
</table>
</table>
<td abswidth=5>
<tr>
<td colspan=3 absheight=2 valign=middle align=center bgcolor=202434>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<tr>
<td colspan=3 absheight=1 valign=top align=left>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<tr>
<td colspan=3 absheight=2 valign=top align=left bgcolor=515b84>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<tr>
<td abswidth=6>
<td abswidth=93 absheight=26>
<table href="wtv-guide:/helpindex?title=Index_Mail&topic=2&subtopic=1"
cellspacing=0 cellpadding=0>
<tr>
<td abswidth=5>
<td abswidth=90 valign=middle align=left>
<table bgcolor=333b5a cellspacing=0 cellpadding=0>
<tr>
<td absheight=1>
<tr>
<td maxlines=1><shadow><font sizerange=medium color="E7CE4A">Help</font></shadow>
</table>
</table>
<td abswidth=5>
<tr>
<td colspan=3 absheight=2 valign=middle align=center bgcolor=202434>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<tr>
<td colspan=3 absheight=1 valign=top align=left>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<tr>
<td colspan=3 absheight=2 valign=top align=left bgcolor=515b84>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<tr>
<td colspan=3 height=81 valign=bottom align=right>
<tr><td colspan=3 absheight=36>
</table>
</sidebar>
<body instructions="wtv-guide:/helpindex?title=Index_Mail" bgcolor=${
                message_colors.bgcolor
            }
text=${message_colors.text}
link=${message_colors.link}
vlink=${message_colors.vlink}
vspace=0
hspace=0>          
<table cellspacing=0 cellpadding=0>
<tr>
<td abswidth=10 rowspan=99>
<td height=16>
<td rowspan=99>&nbsp;&nbsp;
<td>
<td abswidth=20 rowspan=99>
<tr>
<td colspan=3 height=39 valign=top>
<font color="E7CE4A" size=+1><blackface><shadow>
Message
<tr>
<td valign=top>
From:
<td>`;
            if (message.from_name != message.from_addr) {
                data += `${wtvshared.sanitizeSignature(
                    wtvshared.htmlEntitize(message.from_addr)
                )} <a href="client:showalert?sound=none&message=Would%20you%20like%20to%20add%20%3Cblackface%3E${wtvshared.sanitizeSignature(
                    wtvshared.htmlEntitize(message.from_name)
                )}%3C%2Fblackface%3E%20to%20your%20address%20list%3F&buttonlabel2=No&buttonaction2=client:donothing&buttonlabel1=Yes&buttonaction1=wtv-mail:/addressbook%3Faction%3Deditfromheader%26noresponse%3Dtrue%26nickname%3D${escape(
                    escape(message.from_name)
                )}%26address%3D${escape(
                    escape(message.from_addr)
                )}%26new_address%3Dtrue">(${wtvshared.sanitizeSignature(
                    wtvshared.htmlEntitize(message.from_name)
                )})</a>`;
            } else {
                data += `${wtvshared.sanitizeSignature(
                    wtvshared.htmlEntitize(message.from_addr)
                )}`;
            }

            data += `<tr>
<td valign=top>
Date: <td>
${strftime("%a, %b %e, %Y, %I:%M%P", new Date(message.date * 1000))}
<font size=-1> </font>
<tr>
<td valign=top>
To:
<td>
${wtvshared.sanitizeSignature(wtvshared.htmlEntitize(message.to_addr))} ${
                message.to_name
                    ? "(" +
                    wtvshared.sanitizeSignature(
                        wtvshared.htmlEntitize(message.to_name)
                    ) +
                    ")"
                    : ""
            }
<tr>
<td nowrap valign=top>
Subject: <td>
${
                wtvshared.stripHTML(message.subject)
                    ? wtvshared.stripHTML(message.subject)
                    : "(No subject)"
            }
</table>
<table cellspacing=0 cellpadding=0>
<tr>
<td abswidth=10 rowspan=99>
<td><br><br><br>
<td abswidth=20 rowspan=99>
<tr>
<td>
`;
            if (typeof message.body === "object" && message.body) {
                message.body = wtvshared.decodeBufferText(message.body);
            }
            data += `
${linkify(wtvshared.sanitizeSignature(wtvshared.htmlEntitize(message.body, true)))}
<br>
<br>`;
            if (message.signature) {
                data += wtvshared.sanitizeSignature(message.signature);
            }
            data += `<p>
`;
            if (message.attachments) {
                message.attachments.forEach((v, k) => {
                    if (v) {
                        console.log("*****************", v["Content-Type"]);
                        switch (v["Content-Type"]) {
                            case "image/jpeg":
                                data += `<img border=2 src="wtv-mail:/get-attachment?message_id=${messageid}&attachment_id=${k}&wtv-title=Video%20Snapshot" width="380" height="290"><br><br>`;
                                break;
                            case "audio/wav":
                                data += `<table href="wtv-mail:/get-attachment?message_id=${messageid}&attachment_id=${k}&wtv-title=Voice%20Mail" width=386 cellspacing=0 cellpadding=0>
<td align=left valign=middle><img src="wtv-mail:/ROMCache/FileSound.gif" align=absmiddle><font color="#189CD6">&nbsp;&nbsp;recording.wav (wav attachment)</font>
<td align=right valign=middle>
</table><br><br>
`;
                                break;
                        }
                    }
                });
            }
            if (message.url) {
                data += `Included Page: <a href="${
                    message.url
                }">${wtvshared.sanitizeSignature(
                    wtvshared.htmlEntitize(message.url_title).replace(/&apos;/gi, "'")
                )}`;
            }
            data += `
</table>
      </body>
</html>
`;
        }
    }
}
