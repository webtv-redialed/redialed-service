var minisrv_service_file = true;

function linkify(inputText) {
    /* THIS SHIT DOESNT WORK! WHY?? HAS I EVER?!?!?
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
  replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
  replacedText = replacedText.replace(
    replacePattern3,
    '<a href="mailto:$1">$1</a>'
  );*/

    return inputText;
}

var message_snapshot_data = null;
var message_voicemail_data = null;
/* var intro_seen = session_data.mailstore.checkMailIntroSeen(); this just causes issues with discuss, besides do we really care if someone bypasses the intro?
if (!intro_seen && !request_headers.query.intro_seen) {
    // user is trying to bypass the intro screen
    headers =
        "302 Moved temporarily\nLocation: wtv-mail:/DiplomaMail?came-from=" +
        encodeURIComponent(request_headers.request_url);
} else if (request_headers.query.clear == "true") {*/
if (request_headers.query.clear == "true") {
    if (request_headers.Referer)
        gourl = request_headers.Referer.replace(/[\?\&]clear\=true/, "");
    else gourl = "wtv-mail:/sendmail";
    if (request_headers.query.saveoff) delete request_headers.query.saveoff;
    session_data.deleteSessionData("usenet_draft");
    session_data.deleteSessionData("usenet_draft_attachments");
    session_data.deleteSessionData("mail_draft");
    session_data.deleteSessionData("mail_draft_attachments");
    if (request_headers.query.message_to) delete request_headers.query.message_to;
    if (request_headers.query.message_subject)
        delete request_headers.query.message_subject;
    if (request_headers.query.message_body)
        delete request_headers.query.message_body;
    if (request_headers.query.message_url)
        delete request_headers.query.message_url;
    if (request_headers.query.message_title)
        delete request_headers.query.message_title;
    if (request_headers.query.message_reply_all_cc)
        delete request_headers.query.message_reply_all_cc;
    if (request_headers.query["wtv-saved-message-id"])
        delete request_headers.query["wtv-saved-message-id"];

    headers = `302 Moved temporarily
wtv-expire-all: wtv-mail:/listmail
wtv-expire-all: wtv-mail:/sendmail
Location: ${gourl}`;
} else {
    var doClientError = function (msg) {
        var clientErrorMsg = new clientShowAlert({
            image: minisrv_config.config.service_logo,
            message: msg,
            buttonlabel1: "Okay",
            buttonaction1: "client:donothing",
            noback: true,
        }).getURL();

        return "200 OK\nwtv-visit: " + clientErrorMsg;
    };

    var newsgroup = null;
    if (wtvshared.parseBool(request_headers.query.discuss)) {
        newsgroup =
            request_headers.query.group || request_headers.query.message_to || null;
    }

    var gourl = "wtv-mail:/sendmail";
    var msg_subject, to_addr, to_name;

    if (newsgroup !== null) {
        var to_addr = newsgroup;
        var pageTitle = "Post to " + newsgroup;
        var article = request_headers.query.article || null;
        var gourl = gourl + "?group=" + newsgroup;
    } else {
        var to_addr = request_headers.query.message_to || null;
        var pageTitle = "Write a message";
        if (request_headers.query.message_reply_id) {
            reply_message = session_data.mailstore.getMessageByID(
                request_headers.query.message_reply_id
            );
            if (reply_message) {
                msg_subject = "Re: " + reply_message.subject;
                to_addr = reply_message.from_addr;
                to_name = reply_message.from_name;
            }
        }
    }

    var msg_subject =
        msg_subject || request_headers.query.message_subject || null;
    var msg_body = request_headers.query.message_body || null;
    var to_name =
        to_name || request_headers.query.whatever_webtv_sends_this_as || null;
    var msg_url = request_headers.query.message_url || null;
    var msg_url_title = request_headers.query.message_title || null;
    var no_signature = false;

    mail_draft_data = {};
    mail_draft_attachments = {};
    if (!wtvshared.parseBool(request_headers.query.discuss)) {
        mail_draft_data = session_data.getSessionData("mail_draft");
        mail_draft_attachments =
            session_data.getSessionData("mail_draft_attachments") || {};
        if (
            mail_draft_data &&
            !wtvshared.parseBool(request_headers.query.discuss)
        ) {
            session_data.deleteSessionData("mail_draft");
            if (mail_draft_data.to_addr)
                to_addr = request_headers.query.message_to || mail_draft_data.to_addr;
            if (mail_draft_data.msg_subject)
                msg_subject =
                    request_headers.query.message_subject || mail_draft_data.msg_subject;
            if (mail_draft_data.msg_body)
                msg_body =
                    request_headers.query.message_body || mail_draft_data.msg_body;
            if (mail_draft_data.no_signature)
                no_signature = mail_draft_data.no_signature;
            if (mail_draft_data.msg_url)
                msg_url = request_headers.query.message_url || mail_draft_data.msg_url;
            if (mail_draft_data.msg_url_title)
                msg_url_title =
                    request_headers.query.message_title || mail_draft_data.msg_url_title;
        }
    } else {
        mail_draft_data = session_data.getSessionData("usenet_draft");
        mail_draft_attachments =
            session_data.getSessionData("usenet_draft_attachments") || {};
        if (
            mail_draft_data &&
            !wtvshared.parseBool(request_headers.query.discuss)
        ) {
            session_data.deleteSessionData("usenet_draft");
            if (mail_draft_data.to_addr)
                to_addr = request_headers.query.message_to || mail_draft_data.to_addr;
            if (mail_draft_data.msg_subject)
                msg_subject =
                    request_headers.query.message_subject || mail_draft_data.msg_subject;
            if (mail_draft_data.msg_body)
                msg_body =
                    request_headers.query.message_body || mail_draft_data.msg_body;
            if (mail_draft_data.no_signature)
                no_signature = mail_draft_data.no_signature;
            if (mail_draft_data.article) article = article || mail_draft_data.article;
        }
    }

    if (request_headers.query.togglesign == "true") no_signature = false;
    if (request_headers.query.togglesign == "false") no_signature = true;

    if (mail_draft_attachments) {
        if (mail_draft_attachments.message_snapshot_data)
            message_snapshot_data = mail_draft_attachments.message_snapshot_data;
        else if (request_headers.query.message_snapshot_data)
            message_snapshot_data = request_headers.query.message_snapshot_data;
        if (mail_draft_attachments.message_voicemail_data)
            message_voicemail_data = mail_draft_attachments.message_voicemail_data;
        else if (request_headers.query.message_voicemail_data)
            message_voicemail_data = request_headers.query.message_voicemail_data;
    }

    if (message_snapshot_data && request_headers.query.get_snap) {
        headers = `200 OK
Content-Type: image/jpeg`;
        data = message_snapshot_data;
    } else if (message_voicemail_data && request_headers.query.get_gab) {
        headers = `200 OK
Content-Type: audio/wav`;
        data = message_voicemail_data;
    } else {
        var username = session_data.getSessionData("subscriber_username");
        var userdisplayname = wtvshared.htmlEntitize(
            session_data.getSessionData("subscriber_name")
        );
        var address = username + "@" + minisrv_config.config.service_name; //minisrv_config.config.domain_name
        var notImplementedAlert = new clientShowAlert({
            image: minisrv_config.config.service_logo,
            message: "This feature is not available.",
            buttonlabel1: "Okay",
            buttonaction1: "client:donothing",
            noback: true,
        }).getURL();

        if (
            (typeof request_headers.query.sendoff !== "undefined" &&
                request_headers.query.sendoff != false) ||
            request_headers.query.saveoff ||
            request_headers.query.get_snap ||
            request_headers.query.get_gab
        ) {
            var from_addr = address;
            var signature =
                session_data.getSessionData("subscriber_signature") || null;
            if (
                typeof request_headers.query.sendoff !== "undefined" &&
                request_headers.query.sendoff != false
            ) {
                var attachments = [];

                if (message_snapshot_data) {
                    var attachment = {
                        "Content-Type": "image/jpeg",
                        filename: "snapshot.jpg",
                    };
                    if (typeof message_snapshot_data == "object") {
                        attachment.data = new Buffer.from(message_snapshot_data).toString(
                            "base64"
                        );
                        attachment.is_base64 = true;
                    } else attachment.data = message_snapshot_data;

                    attachments.push(attachment);
                }

                if (message_voicemail_data) {
                    var attachment = {
                        "Content-Type": "audio/wav",
                        filename: "voicemail.wav",
                    };

                    if (typeof message_voicemail_data == "object") {
                        attachment.data = new Buffer.from(message_voicemail_data).toString(
                            "base64"
                        );
                        attachment.is_base64 = true;
                    } else attachment.data = message_voicemail_data;

                    attachments.push(attachment);
                }

                if (newsgroup !== null) {
                    var request_is_async = true;
                    var local_service_name =
                        request_headers.query["discuss-prefix"] || "wtv-news";
                    const wtvnews = new WTVNews(minisrv_config, local_service_name);
                    var service_config = minisrv_config.services[local_service_name];
                    if (wtvnewsserver) {
                        var tls_path = this.wtvshared.getAbsolutePath(
                            this.minisrv_config.config.ServiceDeps + "/wtv-news"
                        );
                        var tls_options = {
                            ca: this.fs.readFileSync(tls_path + "/localserver_ca.pem"),
                            key: this.fs.readFileSync(tls_path + "/localserver_key.pem"),
                            cert: this.fs.readFileSync(tls_path + "/localserver_cert.pem"),
                            checkServerIdentity: () => {
                                return null;
                            },
                        };
                        if (wtvnewsserver.username)
                            wtvnews.initializeUsenet(
                                "127.0.0.1",
                                service_config.local_nntp_port,
                                tls_options,
                                wtvnewsserver.username,
                                wtvnewsserver.password
                            );
                        else
                            wtvnews.initializeUsenet(
                                "127.0.0.1",
                                service_config.local_nntp_port,
                                tls_options
                            );
                    } else {
                        if (service_config.upstream_auth)
                            wtvnews.initializeUsenet(
                                service_config.upstream_address,
                                service_config.upstream_port,
                                service_config.upstream_tls || null,
                                service_config.upstream_auth.username || null,
                                service_config.upstream_auth.password || null
                            );
                        else
                            wtvnews.initializeUsenet(
                                service_config.upstream_address,
                                service_configupstream_port,
                                service_config.upstream_tls || null
                            );
                    }
                    from_addr = from_addr + " (" + userdisplayname + ")";
                    news_headers = null;
                    if (signature && signature != "" && !no_signature) {
                        var signature_tuple = null;
                        if (signature.indexOf("<html>") >= 0) {
                            attachments.push({
                                "Content-Type": "text/html",
                                data: signature,
                                use_base64: false,
                                filename: "wtv_signature.html",
                            });
                        } else {
                            if (msg_body) msg_body += "\n" + signature;
                            else msg_body = signature;
                        }
                    }

                    if (attachments.length > 0) {
                        // usenet attachments
                        var tuples = [
                            {
                                mime: "text/plain",
                                content: msg_body || "",
                                use_base64: false,
                            },
                        ];
                        if (signature_tuple) tuples.push(signature_tuple);
                        attachments.forEach((attachment) => {
                            var tuple = {};
                            tuple.mime = attachment["Content-Type"];
                            tuple.content = attachment.data;
                            tuple.use_base64 =
                                typeof attachment.use_base64 === "boolean"
                                    ? attachment.use_base64
                                    : true;
                            tuple.is_base64 =
                                typeof attachment.is_base64 === "boolean"
                                    ? attachment.is_base64
                                    : false;
                            tuple.filename = attachment.filename || null;
                            tuples.push(tuple);
                        });
                        var multipart_data = wtvmime.generateMultipartMIME(tuples);
                        news_headers = {
                            "Content-Type": multipart_data.content_type,
                            "MIME-Version": multipart_data.mime_version,
                            "User-Agent": minisrv_version_string + " for WebTV",
                            "Content-Language": "en-US",
                        };
                        msg_body = multipart_data.content.toString();
                    }
                    wtvnews
                        .postToGroup(
                            newsgroup,
                            from_addr,
                            msg_subject,
                            linkify(msg_body),
                            article,
                            news_headers
                        )
                        .then(() => {
                            session_data.deleteSessionData("usenet_draft");
                            session_data.deleteSessionData("usenet_draft_attachments");
                            headers = `302 Moved temporarily
wtv-expire-all: wtv-news:/news?group=${newsgroup}
wtv-expire-all: wtv-mail:/sendmail
wtv-noback-all: wtv-mail:/sendmail
Location: client:goback`;
                            sendToClient(socket, headers, "");
                        })
                        .catch((e) => {
                            var err = this.wtvshared.doErrorPage(500, null, e.toString());
                            sendToClient(socket, err[0], err[1]);
                        });
                } else {
                    var messagereturn = session_data.mailstore.sendMessageToAddr(
                        from_addr,
                        to_addr,
                        linkify(msg_body),
                        msg_subject,
                        userdisplayname,
                        to_name,
                        signature,
                        attachments,
                        msg_url,
                        msg_url_title,
                        true
                    );
                    if (messagereturn !== true) {
                        var errpage = wtvshared.doErrorPage(400, messagereturn);
                        headers = errpage[0];
                        data = errpage[1];
                    } else {
                        session_data.deleteSessionData("mail_draft");
                        session_data.deleteSessionData("mail_draft_attachments");
                        if (!request_headers.query.noback) {
                            headers = `302 Moved temporarily`
                        } else {
                            headers = `200 OK`
                        }
                        headers += `
wtv-expire-all: wtv-mail:/listmail
wtv-expire-all: wtv-mail:/sendmail
wtv-noback-all: wtv-mail:/sendmail`
                        if (!request_headers.query.noback) {
                            headers += `
Location: client:goback`
                        }
                    }
                }
            } else if (request_headers.query.saveoff) {
                var mail_draft_data = {
                    to_addr: to_addr,
                    msg_subject: msg_subject,
                    msg_body: msg_body,
                    no_signature: no_signature,
                    msg_url: msg_url,
                    msg_url_title: msg_url_title,
                };
                if (newsgroup) mail_draft_data.article = article;
                session_data.setSessionData(
                    newsgroup ? "usenet_draft" : "mail_draft",
                    mail_draft_data
                );
                headers = `200 OK
Content-type: text/html
wtv-expire-all: wtv-mail:/sendmail`;
            }
        } else {
            headers = `200 OK
wtv-noback-all: wtv-mail:/sendmail
Expires: Wed, 09 Oct 1991 22:00:00 GMT    
Content-type: text/html`;
            var mail_draft_data =
                session_data.getSessionData(
                    newsgroup ? "usenet_draft_attachments" : "mail_draft_attachments"
                ) || {};
            if (request_headers.query.snapping == "false") {
                headers += "\nwtv-expire-all: cache:snapshot.jpg";
                if (mail_draft_data.message_snapshot_data)
                    mail_draft_data.message_snapshot_data = null;
                session_data.setSessionData(
                    newsgroup ? "usenet_draft_attachments" : "mail_draft_attachments",
                    mail_draft_data
                );
            }

            if (request_headers.query.gabbing == "false") {
                headers += "\nwtv-expire-all: cache:voicemail.wav";
                if (mail_draft_data.message_voicemail_data)
                    mail_draft_data.message_voicemail_data = null;
                session_data.setSessionData(
                    newsgroup ? "usenet_draft_attachments" : "mail_draft_attachments",
                    mail_draft_data
                );
            }

            if (request_headers.query.message_snapshot_data) {
                mail_draft_data.message_snapshot_data =
                    request_headers.query.message_snapshot_data;
                session_data.setSessionData(
                    newsgroup ? "usenet_draft_attachments" : "mail_draft_attachments",
                    mail_draft_data
                );
            }

            if (request_headers.query.message_voicemail_data) {
                mail_draft_data.message_voicemail_data =
                    request_headers.query.message_voicemail_data;
                session_data.setSessionData(
                    newsgroup ? "usenet_draft_attachments" : "mail_draft_attachments",
                    mail_draft_data
                );
            }
            var message_colors = null;
            if (no_signature)
                message_colors = session_data.mailstore.getSignatureColors(null, true);
            else
                message_colors = session_data.mailstore.getSignatureColors(
                    session_data.getSessionData("subscriber_signature"),
                    true
                );

            data = `<HTML>
<head>
<display poweroffalert >
<script language=javascript>
function Submit() {	window.open("client:showsplash?message=Sending%20Message&animation=file://ROM/Animations/mail.ani&action=client:submitform%3Fname%3Dsendform%26submitname%3Dsendoff%26submitvalue%3DSend");
}
function ErasingMedia(victim) {	var myURL;
myURL = "client:submitform?name=sendform&submitvalue=false" + "&submitname=" + victim;
if (victim == "gabbing") {	document.forms.sendform.elements.message_voicemail_data.disabled = true;
}
if (victim == "snapping") {	document.forms.sendform.elements.message_snapshot_data.disabled = true;
}
window.open(myURL);	}
function Signing(desiredState) {	var myURL;
myURL="client:submitform?name=sendform&submitvalue="+desiredState+"&submitname=togglesign";
location = myURL;
location.reload();
}
function DoneSnapping() {	var myURL;
myURL = "client:submitform?name=sendform&submitname=snapping&submitvalue=cache%3Asnapshot.jpg";
window.open(myURL);	}
function DoneGabbing() {	var myURL;
myURL = "client:submitform?name=sendform&submitname=gabbing&submitvalue=cache%3Avoicemail.jpg";
window.open(myURL);	}
</script>
<sendpanel
action="javascript:Submit()"
message="Send this message now"
label="Send message"
>
<savepanel message="Messages that you are writing cannot be saved. Send it to yourself if you would like a copy." >
<title>
${pageTitle}
</title>
</head>
<print blackandwhite>`;
            if (newsgroup) {
                data += `<SIDEBAR width="109" HEIGHT=420 ALIGN=LEFT>
<TABLE CELLSPACING=0 CELLPADDING=0 BGCOLOR=3d2f3a>
<TR><TD COLSPAN=3 WIDTH=120 ABSHEIGHT=4>
<TD ROWSPAN=100 WIDTH=10 HEIGHT=420 VALIGN=TOP ALIGN=LEFT BGCOLOR=191919><IMG SRC="ROMCache/Shadow.gif" WIDTH=6 HEIGHT=590>
<TR><TD ABSWIDTH=6>
<TD ABSWIDTH=109 ABSHEIGHT=76>
	<TABLE HREF="wtv-home:/home" ABSHEIGHT=76 CELLSPACING=0 CELLPADDING=0 WIDTH=100%>
	<TR><TD ABSWIDTH=6>
<IMG SRC="ROMCache/spacer.gif" WIDTH=1>
<TD ALIGN=CENTER><IMG SRC="ROMCache/WebTVLogoJewel.gif" WIDTH=87 HEIGHT=67>
	</TABLE>
<TD ABSWIDTH=5>

<TR><TD COLSPAN=3 ABSHEIGHT=2 VALIGN=MIDDLE ALIGN=CENTER BGCOLOR=202434><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD COLSPAN=3 ABSHEIGHT=1 VALIGN=TOP ALIGN=LEFT><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD COLSPAN=3 ABSHEIGHT=2 VALIGN=TOP ALIGN=LEFT BGCOLOR=5b4b58><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD ABSWIDTH=6 >
<TD ABSWIDTH=109 ABSHEIGHT=26>
	<TABLE HREF="wtv-news:/news?group=${newsgroup}" CELLSPACING=0 CELLPADDING=0>
	<TR><TD ABSWIDTH=5>
	<TD ABSWIDTH=109 VALIGN=MIDDLE ALIGN=LEFT>
		<TABLE BGCOLOR=3d2f3a CELLSPACING=0 CELLPADDING=0>
		<TR><TD ABSHEIGHT=1>
		<TR><TD MAXLINES=1><SHADOW><FONT SIZERANGE=${session_data.isJapaneseClient() ? `SMALL` : `MEDIUM`} COLOR="E7CE4A">Group</FONT></SHADOW>
		</TABLE>
	</TABLE>
<TD ABSWIDTH=5>`
                if (session_data.hasCap("client-can-do-av-capture")) {
                    data += `
<TR><TD COLSPAN=3 ABSHEIGHT=2 VALIGN=MIDDLE ALIGN=CENTER BGCOLOR=202434><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD COLSPAN=3 ABSHEIGHT=1 VALIGN=TOP ALIGN=LEFT><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD COLSPAN=3 ABSHEIGHT=2 VALIGN=TOP ALIGN=LEFT BGCOLOR=5b4b58><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD ABSWIDTH=6 >
<TD ABSWIDTH=109 ABSHEIGHT=26 >

	<table href="client:videocapture?notify=javascript%3ADoneSnapping()&device=video&width=75%25&height=75%25&name=cache%3Asnapshot.jpg&donebuttonlabel=Add%20to%20Message&open"
	cellspacing=0 cellpadding=0>
	<TR><TD ABSWIDTH=5>
	<TD ABSWIDTH=130 VALIGN=MIDDLE ALIGN=LEFT>
		<TABLE BGCOLOR=3d2f3a CELLSPACING=0 CELLPADDING=0>
		<TR><TD ABSHEIGHT=1>
		<TR><TD MAXLINES=1><SHADOW><FONT SIZERANGE=${session_data.isJapaneseClient() ? `SMALL` : `MEDIUM`} COLOR="E7CE4A">Photo</FONT></SHADOW>
		</TABLE>
	</TABLE>
<TD ABSWIDTH=5>

<TR><TD COLSPAN=3 ABSHEIGHT=2 VALIGN=MIDDLE ALIGN=CENTER BGCOLOR=202434><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD COLSPAN=3 ABSHEIGHT=1 VALIGN=TOP ALIGN=LEFT><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD COLSPAN=3 ABSHEIGHT=2 VALIGN=TOP ALIGN=LEFT BGCOLOR=5b4b58><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD ABSWIDTH=6 >
<TD ABSWIDTH=109 ABSHEIGHT=26 >
	<table href="client:soundcapture?notify=javascript%3ADoneGabbing()&device=audio&rate=8000&name=cache%3Avoicemail.wav&donebuttonlabel=Add%20to%20Message&open"
	cellspacing=0 cellpadding=0>
	<TR><TD ABSWIDTH=5>
	<TD ABSWIDTH=130 VALIGN=MIDDLE ALIGN=LEFT>
		<TABLE BGCOLOR=3d2f3a CELLSPACING=0 CELLPADDING=0>
		<TR><TD ABSHEIGHT=1>
		<TR><TD MAXLINES=1><SHADOW><FONT SIZERANGE=${session_data.isJapaneseClient() ? `SMALL` : `MEDIUM`} COLOR="E7CE4A">Recording</FONT></SHADOW>
		</TABLE>
	</TABLE>
<TD ABSWIDTH=5>`
                }
                data += `

<TR><TD COLSPAN=3 ABSHEIGHT=2 VALIGN=MIDDLE ALIGN=CENTER BGCOLOR=202434><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD COLSPAN=3 ABSHEIGHT=1 VALIGN=TOP ALIGN=LEFT><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD COLSPAN=3 ABSHEIGHT=2 VALIGN=TOP ALIGN=LEFT BGCOLOR=5b4b58><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD ABSWIDTH=6 >
<TD ABSWIDTH=109 ABSHEIGHT=26 >
	<table href="client:showalert?sound=none&message=Are%20you%20sure%20you%20want%20to%20erase%20the%20changes%20to%20this%20message%3F&buttonlabel2=Don't%20Erase&buttonaction2=client:donothing&buttonlabel1=Erase&buttonaction1=wtv-mail:/sendmail%3Fclear%3Dtrue%26discuss%3Dtrue%26group%3D${newsgroup}#focus"
	cellspacing=0 cellpadding=0>
	<TR><TD ABSWIDTH=5>
	<TD ABSWIDTH=130 VALIGN=MIDDLE ALIGN=LEFT>
		<TABLE BGCOLOR=3d2f3a CELLSPACING=0 CELLPADDING=0>
		<TR><TD ABSHEIGHT=1>
		<TR><TD MAXLINES=1><SHADOW><FONT SIZERANGE=${session_data.isJapaneseClient() ? `SMALL` : `MEDIUM`} COLOR="E7CE4A">Erase</FONT></SHADOW>
		</TABLE>
	</TABLE>
<TD ABSWIDTH=5>

<TR><TD COLSPAN=3 ABSHEIGHT=2 VALIGN=MIDDLE ALIGN=CENTER BGCOLOR=202434><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD COLSPAN=3 ABSHEIGHT=1 VALIGN=TOP ALIGN=LEFT><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD COLSPAN=3 ABSHEIGHT=2 VALIGN=TOP ALIGN=LEFT BGCOLOR=5b4b58><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD ABSWIDTH=6 >
<TD ABSWIDTH=109 ABSHEIGHT=26 >
	<TABLE href="client:donothing" CELLSPACING=0 CELLPADDING=0>
	<TR><TD ABSWIDTH=5>
	<TD ABSWIDTH=130 VALIGN=MIDDLE ALIGN=LEFT>
		<TABLE BGCOLOR=3d2f3a CELLSPACING=0 CELLPADDING=0>
		<TR><TD ABSHEIGHT=1>
		<TR><TD MAXLINES=1><SHADOW><FONT SIZERANGE=${session_data.isJapaneseClient() ? `SMALL` : `MEDIUM`} COLOR="E7CE4A">Spelling</FONT></SHADOW>
		</TABLE>
	</TABLE>
<TD ABSWIDTH=5>

<TR><TD COLSPAN=3 ABSHEIGHT=2 VALIGN=MIDDLE ALIGN=CENTER BGCOLOR=202434><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD COLSPAN=3 ABSHEIGHT=1 VALIGN=TOP ALIGN=LEFT><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD COLSPAN=3 ABSHEIGHT=2 VALIGN=TOP ALIGN=LEFT BGCOLOR=5b4b58><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD ABSWIDTH=6 >
<TD ABSWIDTH=109 ABSHEIGHT=26 >
	<TABLE href="client:donothing" CELLSPACING=0 CELLPADDING=0>
	<TR><TD ABSWIDTH=5>
	<TD ABSWIDTH=130 VALIGN=MIDDLE ALIGN=LEFT>
		<TABLE BGCOLOR=3d2f3a CELLSPACING=0 CELLPADDING=0>
		<TR><TD ABSHEIGHT=1>
		<TR><TD MAXLINES=1><SHADOW><FONT SIZERANGE=${session_data.isJapaneseClient() ? `SMALL` : `MEDIUM`} COLOR="E7CE4A">Help</FONT></SHADOW>
		</TABLE>
	</TABLE>
<TD ABSWIDTH=5>

<TR><TD COLSPAN=3 ABSHEIGHT=2 VALIGN=MIDDLE ALIGN=CENTER BGCOLOR=202434><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD COLSPAN=3 ABSHEIGHT=1 VALIGN=TOP ALIGN=LEFT><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD COLSPAN=3 ABSHEIGHT=2 VALIGN=TOP ALIGN=LEFT BGCOLOR=5b4b58><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD COLSPAN=3 HEIGHT=112 VALIGN=BOTTOM ALIGN=RIGHT ><IMG SRC="ROMCache/spacer.gif" WIDTH=50 HEIGHT=96>
<TR><TD COLSPAN=3 ABSHEIGHT=${(!session_data.hasCap("client-can-do-av-capture")) ? "61" : "36"}>
</TABLE>
</SIDEBAR>`;
            } else {
                data += `<sidebar width=114 height=420 align=left>
<table cellspacing=0 cellpadding=0 bgcolor=333b5a>
<tr>
<td colspan=3 width=104 absheight=4>
<td rowspan=100 width=10 height=420 valign=top align=left bgcolor=191919>
<img src="wtv-mail:/ROMCache/Shadow.gif" width=6 height=420>
<tr>
<td abswidth=6>
<td abswidth=93 absheight=76>
<table href="wtv-home:/home" absheight=76 cellspacing=0 cellpadding=0 width=100%>
<tr>
<td abswidth=6>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1>
<td align=center>
<img src="${minisrv_config.config.service_logo}" width=87 height=67>
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
<table href="wtv-mail:/listmail"
cellspacing=0 cellpadding=0>
<tr>
<td abswidth=5>
<td abswidth=90 valign=middle align=left>
<table bgcolor=333b5a cellspacing=0 cellpadding=0>
<tr>
<td absheight=1>
<tr>
<td maxlines=1><shadow><font sizerange=${session_data.isJapaneseClient() ? `small` : `medium`} color="E7CE4A">Mail list</font></shadow>
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
<table href="client:openaddresspanel" id=addressbook
cellspacing=0 cellpadding=0>
<tr>
<td abswidth=5>
<td abswidth=90 valign=middle align=left>
<table bgcolor=333b5a cellspacing=0 cellpadding=0>
<tr>
<td absheight=1>
<tr>
<td maxlines=1><shadow><font sizerange=${session_data.isJapaneseClient() ? `small` : `medium`} color="E7CE4A">Address</font></shadow>
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
<td abswidth=93 absheight=26>`;
                if (session_data.hasCap("client-can-do-av-capture")) {
                    data += `
<table href="client:videocapture?notify=javascript%3ADoneSnapping()&device=video&width=75%25&height=75%25&name=cache%3Asnapshot.jpg&donebuttonlabel=Add%20to%20Message&open"
cellspacing=0 cellpadding=0>
<tr>
<td abswidth=5>
<td abswidth=90 valign=middle align=left>
<table bgcolor=333b5a cellspacing=0 cellpadding=0>
<tr>
<td absheight=1>
<tr>
<td maxlines=1><shadow><font sizerange=${session_data.isJapaneseClient() ? `small` : `medium`} color="E7CE4A">Photo</font></shadow>
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
<table href="client:soundcapture?notify=javascript%3ADoneGabbing()&device=audio&rate=8000&name=cache%3Avoicemail.wav&donebuttonlabel=Add%20to%20Message&open"
cellspacing=0 cellpadding=0>
<tr>
<td abswidth=5>
<td abswidth=90 valign=middle align=left>
<table bgcolor=333b5a cellspacing=0 cellpadding=0>
<tr>
<td absheight=1>
<tr>
<td maxlines=1><shadow><font sizerange=${session_data.isJapaneseClient() ? `small` : `medium`} color="E7CE4A">Recording</font></shadow>
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
<td abswidth=93 absheight=26>`;
                }
                data += `
<table href="client:showalert?sound=none&message=Are%20you%20sure%20you%20want%20to%20erase%20the%20changes%20to%20this%20message%3F&buttonlabel2=Don't%20Erase&buttonaction2=client:donothing&buttonlabel1=Erase&buttonaction1=wtv-mail:/sendmail%3Fclear%3Dtrue%26wtv-saved-message-id%3Dwritemessage-outbox#focus"
cellspacing=0 cellpadding=0>
<tr>
<td abswidth=5>
<td abswidth=90 valign=middle align=left>
<table bgcolor=333b5a cellspacing=0 cellpadding=0>
<tr>
<td absheight=1>
<tr>
<td maxlines=1><shadow><font sizerange=${session_data.isJapaneseClient() ? `small` : `medium`} color="E7CE4A">Erase</font></shadow>
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
<table href="client:submitform?name=sendform&submitname=spelling&submitvalue=true"
cellspacing=0 cellpadding=0>
<tr>
<td abswidth=5>
<td abswidth=90 valign=middle align=left>
<table bgcolor=333b5a cellspacing=0 cellpadding=0>
<tr>
<td absheight=1>
<tr>
<td maxlines=1><shadow><font sizerange=${session_data.isJapaneseClient() ? `small` : `medium`} color="E7CE4A">Spelling</font></shadow>
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
<table href="wtv-guide:/help/Mail/Write/Writing"
cellspacing=0 cellpadding=0>
<tr>
<td abswidth=5>
<td abswidth=90 valign=middle align=left>
<table bgcolor=333b5a cellspacing=0 cellpadding=0>
<tr>
<td absheight=1>
<tr>
<td maxlines=1><shadow><font sizerange=${session_data.isJapaneseClient() ? `small` : `medium`} color="E7CE4A">Help</font></shadow>
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
<td colspan=3 height=${(!session_data.hasCap("client-can-do-av-capture")) ? "131" : "81"} valign=bottom align=right>
<tr><td colspan=3 absheight=36>
</table>
</sidebar>`;
            }
            data += `
<body instructions="wtv-guide:/helpindex?title=Index_Mail"
bgcolor=191919
text=${message_colors.text}
link=${message_colors.link}
vlink=${message_colors.vlink}`;
            if (session_data.isJapaneseClient()) data += ` fontsize="small"`
            data += ` vspace=0
hspace=0
>            
<table cellspacing=0 cellpadding=0>
<tr>
<td height=16 valign=top align=left>
<tr>
<td height=47 valign=top>
<font size=+1 color="E7CE4A">
<blackface>
<shadow>
<a id=focus></a>
<img src="wtv-home:/ROMCache/Spacer.gif" width=4 height=2>
${pageTitle}
</shadow>
</blackface>
</font>
</table>
<form action="wtv-mail:/sendmail#focus" method="post" name=sendform >
<input type=hidden name="wtv-saved-message-id" value="writemessage-outbox">
<input type=hidden name="message_reply_all_cc" value="">
<table cellspacing=0 cellpadding=0 bgcolor="242424"
background=""
>
<tr>
<td rowspan=100 abswidth=10 bgcolor=191919>
<img src="wtv-home:/ROMCache/Spacer.gif" width=10 height=1>
<td colspan=9 abswidth=422 valign=bottom>
<img src="wtv-mail:/ROMCache/PaperTop.gif" noprint width=422 height=26>
<tr>
<td rowspan=100 abswidth=2 absheight=0 bgcolor=313131>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<td rowspan=100 abswidth=14 absheight=0>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<td colspan=2 abswidth=386>
<td rowspan=100 abswidth=14 absheight=0>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<td rowspan=100 abswidth=3 bgcolor=0b0b0b absheight=0>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<td rowspan=100 abswidth=1 bgcolor=0f0f0f absheight=0>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<td rowspan=100 abswidth=1 bgcolor=131313 absheight=0>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<td rowspan=100 abswidth=1 bgcolor=171717 absheight=0>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<tr absheight=30>
<td abswidth=80 valign=top align=right>
<font color="${message_colors.text}">`;
            if (!request_headers.query.discuss) {
                data += `From:&nbsp;
<td abswidth=306>
<font color="${message_colors.text}">
${address}
(${userdisplayname})</font>
<tr>
<td colspan=2 absheight=5>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=5>
<tr absheight=4>
<td colspan=2>
<img src="wtv-mail:/ROMCache/DottedLine.gif" width=386 height=2>
<tr>
<td colspan=2 absheight=5>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=5>
<tr height=30>
<td abswidth=80 valign=top align=right>
<a href="client:openaddresspanel">
To:</a>&nbsp;
<td abswidth=306>
<textarea
bgcolor="242424"
cursor=${message_colors.cursor}
nosoftbreaks
borderimage="file://ROM/Borders/textfield.alt1.bif"
nohardbreaks
selected
font=proportional
text="${message_colors.text}"
name="message_to"
border=0
width=306 rows=1
growable
autoactivate
addresses
autoascii
nohighlight
>${to_addr ? to_addr : ""}</textarea>`;
            } else {
                data += `Group:&nbsp;
<td abswidth=306>
<font color="${message_colors.text}">
${newsgroup}</font>`;
            }
            data += `
<tr>
<td colspan=2 absheight=5>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=5>
<tr absheight=4>
<td colspan=2>
<img src="wtv-mail:/ROMCache/DottedLine.gif" width=386 height=2>
<tr>
<td colspan=2 absheight=5>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=5>
<tr height=30>
<td abswidth=80 valign=top align=right>
Subject:&nbsp;
<td abswidth=306>
<textarea
bgcolor="242424"
cursor=${message_colors.cursor}
nosoftbreaks
borderimage="file://ROM/Borders/textfield.alt1.bif"
nohardbreaks
text="${message_colors.text}"
name="message_subject" font=proportional
border=0
width=306 rows=1
growable
autoactivate
maxlength=70
nohighlight
autohiragana
>${msg_subject ? msg_subject : ""}</textarea>
<tr>
<td colspan=2 absheight=5>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=5>
<tr absheight=4>
<td colspan=2>
<img src="wtv-mail:/ROMCache/DottedLine.gif" width=386 height=2>
<tr>
<td colspan=2 absheight=5>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=5>
<tr>
<td colspan=2 absheight=10>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=10>
<tr>
<td colspan=2 abswidth=386>
<textarea nosoftbreaks
bgcolor="${message_colors.bgcolor}"
text="${message_colors.text}"
cursor=${message_colors.cursor}
name="message_body" font=proportional
border=0
rows=`;
            if (!request_headers.query.discuss) {
                data += `5`;
            } else {
                data += `8`;
            }
            data += `
width=386
nohighlight
autoactivate
growable>${msg_body ? msg_body : ""}</textarea>
<br>`;
            if (
                session_data.getSessionData("subscriber_signature") &&
                session_data.getSessionData("subscriber_signature") != "" &&
                !no_signature
            ) {
                data += wtvshared.sanitizeSignature(
                    session_data.getSessionData("subscriber_signature")
                );
            }
            if (msg_url) {
                data += `<br><br><input type="hidden" name="message_url" value="${msg_url}">
<input type="hidden" name="message_title" value="${msg_url_title}">
Included Page: <a href="${msg_url}">${wtvshared
                        .htmlEntitize(msg_url_title)
                        .replace(/&apos;/gi, "'")}</a>`;
            }
            if (newsgroup) {
                data += `<input type=hidden name="discuss" value="true">
<input type=hidden name="group" value="${newsgroup}">`;
            }
            data += `
<tr>
<td colspan=2 absheight=8>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=8>
</table>
<table cellspacing=0 cellpadding=0>
<tr>
<td rowspan=100 abswidth=10>
<img src="wtv-home:/ROMCache/Spacer.gif" width=10 height=2>
<td abswidth=422>
<img src="wtv-mail:/ROMCache/PaperBase.gif" noprint
width=422 height=6>
<tr>
<td absheight=6>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=6>
</table>
<td abswidth=2 bgcolor=#000000>
<tr>
<td abswidth=2 bgcolor=#495360>
<td absheight=13 colspan=3>
<td abswidth=2 bgcolor=#000000>
<tr>
<td absheight=2 colspan=5 bgcolor=#000000>
</table>
<tr>
<td width=13 bgcolor=#171726>
<td width=438 bgcolor=#171726>
<spacer type=vertical size=5><br>
<table cellspacing=0 cellpadding=0 border=0>
<tr>
<td width=305 valign=top>`;
            if (
                !session_data.getSessionData("subscriber_signature") ||
                session_data.getSessionData("subscriber_signature") == ""
            ) {
                data += `<input type = hidden name = "togglesign" value = "false"> <td abswidth=13 > `;
            } else if (no_signature) {
                data += `<a href="javascript:Signing('true')">
<img src="wtv-mail:/content/images/RemoveButton.gif" align=absmiddle height=25 width=25>&nbsp;Add signature&nbsp;</a>
<br>`;
            } else {
                data += `<a href="javascript:Signing('false')">
<img src="wtv-mail:/content/images/RemoveButton.gif" align=absmiddle height=25 width=25>&nbsp;Remove signature&nbsp;</a>
<br>`;
            }
            data += `
<td align=right valign=top width=110> <FONT COLOR="#E7CE4A"><SHADOW>
<INPUT TYPE=SUBMIT BORDERIMAGE="file://ROM/Borders/ButtonBorder2.bif" action="javascript:Submit()"
value="Send"
name="Send"
id="Send"
xnocancel
width=103
USESTYLE NOARGS>
</SHADOW></FONT>
</td></tr><tr>
`;

            if (
                (request_headers.query.snapping &&
                    request_headers.query.snapping !== "false") ||
                mail_draft_attachments.message_snapshot_data
            ) {
                data += `
<td absheight="10">
<img src="wtv-home:/ROMCache/Spacer.gif" width="1" height="10">
</td></tr></tbody></table>
<table cellspacing="0" cellpadding="0" bgcolor="242424" background="">
<tbody><tr>
<td rowspan="100" abswidth="10" bgcolor="191919">
<img src="wtv-home:/ROMCache/Spacer.gif" width="10" height="1">
</td><td colspan="9" abswidth="422" valign="bottom">
<img src="wtv-mail:/ROMCache/PaperTopFlat.gif" noprint="" width="422" height="6">
</td></tr><tr>
<td rowspan="100" abswidth="2" absheight="0" bgcolor="313131">
<img src="wtv-home:/ROMCache/Spacer.gif" width="1" height="1">
</td><td rowspan="100" abswidth="14" absheight="0">
<img src="wtv-home:/ROMCache/Spacer.gif" width="1" height="1">
</td><td colspan="2" abswidth="386">
</td><td rowspan="100" abswidth="14" absheight="0">
<img src="wtv-home:/ROMCache/Spacer.gif" width="1" height="1">
</td><td rowspan="100" abswidth="3" absheight="0" bgcolor="0b0b0b">
<img src="wtv-home:/ROMCache/Spacer.gif" width="1" height="1">
</td><td rowspan="100" abswidth="1" absheight="0" bgcolor="0f0f0f">
<img src="wtv-home:/ROMCache/Spacer.gif" width="1" height="1">
</td><td rowspan="100" abswidth="1" absheight="0" bgcolor="131313">
<img src="wtv-home:/ROMCache/Spacer.gif" width="1" height="1">
</td><td rowspan="100" abswidth="1" absheight="0" bgcolor="171717">
<img src="wtv-home:/ROMCache/Spacer.gif" width="1" height="1">
</td></tr><tr>
<td colspan="2" absheight="15">`;
                if (!mail_draft_attachments.message_snapshot_data) {
                    data += `<input type="file" device="video" name="message_snapshot_data" src="cache:snapshot.jpg" invisible="" width="75%" height="75%">
<input type="hidden" name="message_snapshot_url" value="cache:snapshot.jpg">`;
                }

                data += `
</td></tr><tr>
<td colspan="2" align="center">
<img src="${mail_draft_attachments.message_snapshot_data
                        ? "wtv-mail:/sendmail?get_snap=true"
                        : "cache:snapshot.jpg"
                    }"
width=380 height=290
>
<tr>
<td colspan=2 abswidth=386 absheight=10>
<tr>
<td colspan=2>
<table width=386 cellspacing=0 cellpadding=0>
<td valign=middle>
<td valign=middle align=right>
<a href="javascript:ErasingMedia('snapping')">
&nbsp;Detach&nbsp;<img src="wtv-mail:/ROMCache/RemoveButton.gif" align=absmiddle height=25 width=25></a>
</table>
<tr>
<td colspan=2 absheight=8>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=8>
</table>
<table cellspacing=0 cellpadding=0>
<tr>
<td rowspan=100 abswidth=10>
<img src="wtv-home:/ROMCache/Spacer.gif" width=10 height=2>
<td abswidth=422>
<img src="wtv-mail:/ROMCache/PaperBase.gif" noprint
width=422 height=6>`;
            }

            if (
                (request_headers.query.gabbing &&
                    request_headers.query.gabbing !== "false") ||
                mail_draft_attachments.message_voicemail_data
            ) {
                data += `
<tr>
<td absheight=6>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=6>
</table>
<table cellspacing=0 cellpadding=0 bgcolor="242424"
background=""
>
<tr>
<td rowspan=100 abswidth=10 bgcolor=191919>
<img src="wtv-home:/ROMCache/Spacer.gif" width=10 height=1>
<td colspan=9 abswidth=422 valign=bottom>
<img src="wtv-mail:/ROMCache/PaperTopFlat.gif" noprint width=422 height=6>
<tr>
<td rowspan=100 abswidth=2 absheight=0 bgcolor=313131>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<td rowspan=100 abswidth=14 absheight=0>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<td colspan=2 abswidth=386>
<td rowspan=100 abswidth=14 absheight=0>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<td rowspan=100 abswidth=3 bgcolor=0b0b0b absheight=0>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<td rowspan=100 abswidth=1 bgcolor=0f0f0f absheight=0>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<td rowspan=100 abswidth=1 bgcolor=131313 absheight=0>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<td rowspan=100 abswidth=1 bgcolor=171717 absheight=0>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<tr>
<td colspan=2 abswidth=386 absheight=4>
<input type=file device=audio name=message_voicemail_data
src="cache:voicemail.wav" rate=8000 invisible>
${!mail_draft_attachments.message_voicemail_data
                        ? ""
                        : '<input type=hidden name=message_voicemail_url value="cache:voicemail.wav">'
                    }
<tr>
<td colspan=2>
<table width=386 cellspacing=0 cellpadding=0>
<td align=left valign=middle>
<a href="${mail_draft_attachments.message_voicemail_data
                        ? "wtv-mail:/sendmail?get_gab=true&wtv-title=Voice%20Mail"
                        : "cache:voicemail.wav"
                    }" id=focus><img src="wtv-mail:/ROMCache/FileSound.gif" align=absmiddle></a>&nbsp;&nbsp;Recording
<td align=right valign=middle>
<a href="javascript:ErasingMedia('gabbing')">
&nbsp;Detach&nbsp;<img src="wtv-mail:/ROMCache/RemoveButton.gif" align=absmiddle height=25 width=25></a>
</table>
<tr>
<td colspan=2 absheight=8>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=8>
</table>
<table cellspacing=0 cellpadding=0>
<tr>
<td rowspan=100 abswidth=10>
<img src="wtv-home:/ROMCache/Spacer.gif" width=10 height=2>
<td abswidth=422>
<img src="wtv-mail:/ROMCache/PaperBase.gif" noprint
width=422 height=6>
<tr>
<td absheight=6>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=6>
</table>`;
            }

            data += `
</form>
</body>
</HTML>
`;
        }
    }
}
