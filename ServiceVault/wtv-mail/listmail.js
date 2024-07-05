var minisrv_service_file = true;

var mailstore_exists = false;

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
    if (!intro_seen && request_headers.query.intro_seen) {
        // User has come from intro
        session_data.mailstore.setMailIntroSeen(true);
    }
    // check if mailstore exists (returns null if guest)
    mailstore_exists = session_data.mailstore.mailstoreExists();

    // create mailstore if it doesnt exist (also returns null if guest)
    if (!mailstore_exists)
        mailstore_exists = session_data.mailstore.createMailstore();

    if (mailstore_exists) {
        // mailstore exists and user is not guest

        var default_limit = minisrv_config.services[service_name].messages_per_page
            ? minisrv_config.services[service_name].messages_per_page
            : 25; // user config or 25
        var mailbox = request_headers.query.mailbox
            ? parseInt(request_headers.query.mailbox)
            : 0;
        var limit = request_headers.query.limit
            ? parseInt(request_headers.query.limit)
            : default_limit;
        var reverse_sort = request_headers.query.reverse_sort ? true : false;
        var page = request_headers.query.page
            ? parseInt(request_headers.query.page)
            : 0;

        // get mailbox name
        var mailbox_name = session_data.mailstore.getMailboxById(parseInt(mailbox));

        // if false or null, then mailbox is invalid
        if (!mailbox_name) {
            mail_end_error("Invalid Mailbox ID");
        } else {
            // mailboxid is ok
            if (!session_data.mailstore.mailboxExists(mailbox)) {
                // mailbox does not yet exist, create it
                var mailbox_exists = session_data.mailstore.createMailbox(mailbox);
                if (!mailbox_exists) {
                    // failed to create mailbox for some reason
                    mail_end_error();
                } else {
                    if (mailbox === 0) {
                        // Just created Inbox for the first time, so create the welcome message
                        session_data.mailstore.createWelcomeMessage();
                    }
                }
            }
            var message_list = session_data.mailstore.listMessages(
                mailbox,
                limit,
                reverse_sort,
                page * limit
            );
            var total_message_count = session_data.mailstore.countMessages(mailbox);
            var total_unread_message_count =
                session_data.mailstore.countUnreadMessages(mailbox);

            var message_list_string = null;
            if (total_message_count == 0) {
                message_list_string = "No new mail messages for ";
            } else {
                if (total_unread_message_count > 0) {
                    message_list_string =
                        total_unread_message_count +
                        " new mail message" +
                        (total_message_count != 1 ? "s" : "");
                    if (total_message_count - total_unread_message_count > 0)
                        message_list_string +=
                            ", " +
                            (total_message_count - total_unread_message_count) +
                            " mail message" +
                            (total_message_count - total_unread_message_count != 1
                                ? "s"
                                : "") +
                            " for ";
                } else {
                    message_list_string =
                        total_message_count +
                        " mail message" +
                        (total_message_count != 1 ? "s" : "") +
                        " for ";
                }
            }

            var username = session_data.getSessionData("subscriber_username");
            var notImplementedAlert = new clientShowAlert({
                image: minisrv_config.config.service_logo,
                message: "This feature is not available.",
                buttonlabel1: "Okay",
                buttonaction1: "client:donothing",
                noback: true,
            }).getURL();

            headers = `200 OK
Expires: 60
Content-type: text/html`;

            data = `<HTML>
<HEAD>
<TITLE>${
                mailbox_name === "Inbox" ? " Mail for " + username : mailbox_name
            }</TITLE>
<sendpanel action="wtv-mail:/sendmail"
message="Write a new message"
label="Write">
<savepanel
action="wtv-mail:/listmail?mailbox_name=mbox"
message="View your saved messages"
label="View saved messages">
</HEAD>
<SIDEBAR width="109" HEIGHT=420 ALIGN=LEFT>
<TABLE CELLSPACING=0 CELLPADDING=0 BGCOLOR=333B5A>
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
<TR><TD COLSPAN=3 ABSHEIGHT=2 VALIGN=TOP ALIGN=LEFT BGCOLOR=515B84><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD ABSWIDTH=6 >
<TD ABSWIDTH=109 ABSHEIGHT=26>
	<TABLE HREF="wtv-mail:/sendmail" CELLSPACING=0 CELLPADDING=0>
	<TR><TD ABSWIDTH=5>
	<TD ABSWIDTH=109 VALIGN=MIDDLE ALIGN=LEFT>
		<TABLE BGCOLOR=333B5A CELLSPACING=0 CELLPADDING=0>
		<TR><TD ABSHEIGHT=1>
		<TR><TD MAXLINES=1><SHADOW><FONT SIZERANGE=${session_data.isJapaneseClient() ? `SMALL` : `MEDIUM`} COLOR="E7CE4A">Write</FONT></SHADOW>
		</TABLE>
	</TABLE>
<TD ABSWIDTH=5>

<TR><TD COLSPAN=3 ABSHEIGHT=2 VALIGN=MIDDLE ALIGN=CENTER BGCOLOR=202434><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD COLSPAN=3 ABSHEIGHT=1 VALIGN=TOP ALIGN=LEFT><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD COLSPAN=3 ABSHEIGHT=2 VALIGN=TOP ALIGN=LEFT BGCOLOR=515B84><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD ABSWIDTH=6 >
<TD ABSWIDTH=109 ABSHEIGHT=26 >

	<!-- no <TABLE href="wtv-mail:/listmail?mailbox_name=mbox" CELLSPACING=0 CELLPADDING=0> -->
	<TABLE href="client:showalert?message=This%20feature%20is%20not%20yet%20available." CELLSPACING=0 CELLPADDING=0>
	<TR><TD ABSWIDTH=5>
	<TD ABSWIDTH=130 VALIGN=MIDDLE ALIGN=LEFT>
		<TABLE BGCOLOR=333B5A CELLSPACING=0 CELLPADDING=0>
		<TR><TD ABSHEIGHT=1>
		<TR><TD MAXLINES=1><SHADOW><FONT SIZERANGE=${session_data.isJapaneseClient() ? `SMALL` : `MEDIUM`} COLOR="E7CE4A">Storage</FONT></SHADOW>
		</TABLE>
	</TABLE>
<TD ABSWIDTH=5>

<TR><TD COLSPAN=3 ABSHEIGHT=2 VALIGN=MIDDLE ALIGN=CENTER BGCOLOR=202434><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD COLSPAN=3 ABSHEIGHT=1 VALIGN=TOP ALIGN=LEFT><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD COLSPAN=3 ABSHEIGHT=2 VALIGN=TOP ALIGN=LEFT BGCOLOR=515B84><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD ABSWIDTH=6 >
<TD ABSWIDTH=109 ABSHEIGHT=26 >
	<TABLE href="wtv-mail:/addressbook" CELLSPACING=0 CELLPADDING=0>
	<TR><TD ABSWIDTH=5>
	<TD ABSWIDTH=130 VALIGN=MIDDLE ALIGN=LEFT>
		<TABLE BGCOLOR=333B5A CELLSPACING=0 CELLPADDING=0>
		<TR><TD ABSHEIGHT=1>
		<TR><TD MAXLINES=1><SHADOW><FONT SIZERANGE=${session_data.isJapaneseClient() ? `SMALL` : `MEDIUM`} COLOR="E7CE4A">Addresses</FONT></SHADOW>
		</TABLE>
	</TABLE>
<TD ABSWIDTH=5>

<TR><TD COLSPAN=3 ABSHEIGHT=2 VALIGN=MIDDLE ALIGN=CENTER BGCOLOR=202434><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD COLSPAN=3 ABSHEIGHT=1 VALIGN=TOP ALIGN=LEFT><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD COLSPAN=3 ABSHEIGHT=2 VALIGN=TOP ALIGN=LEFT BGCOLOR=515B84><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD ABSWIDTH=6 >
<TD ABSWIDTH=109 ABSHEIGHT=26 >
	<!-- stop reading the HTML you jackass you know this doesn't work yet <TABLE href="wtv-mail:/listmail?mailbox_name=inbox&bulk_delete=true" CELLSPACING=0 CELLPADDING=0> -->
	<TABLE href="client:showalert?message=This%20feature%20is%20not%20yet%20available." CELLSPACING=0 CELLPADDING=0>
	<TR><TD ABSWIDTH=5>
	<TD ABSWIDTH=130 VALIGN=MIDDLE ALIGN=LEFT>
		<TABLE BGCOLOR=333B5A CELLSPACING=0 CELLPADDING=0>
		<TR><TD ABSHEIGHT=1>
		<TR><TD MAXLINES=1><SHADOW><FONT SIZERANGE=${session_data.isJapaneseClient() ? `SMALL` : `MEDIUM`} COLOR="E7CE4A">Clean up</FONT></SHADOW>
		</TABLE>
	</TABLE>
<TD ABSWIDTH=5>

<TR><TD COLSPAN=3 ABSHEIGHT=2 VALIGN=MIDDLE ALIGN=CENTER BGCOLOR=202434><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD COLSPAN=3 ABSHEIGHT=1 VALIGN=TOP ALIGN=LEFT><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD COLSPAN=3 ABSHEIGHT=2 VALIGN=TOP ALIGN=LEFT BGCOLOR=515B84><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD ABSWIDTH=6 >
<TD ABSWIDTH=109 ABSHEIGHT=26 >
	<TABLE href="wtv-setup:/mail" CELLSPACING=0 CELLPADDING=0>
	<TR><TD ABSWIDTH=5>
	<TD ABSWIDTH=130 VALIGN=MIDDLE ALIGN=LEFT>
		<TABLE BGCOLOR=333B5A CELLSPACING=0 CELLPADDING=0>
		<TR><TD ABSHEIGHT=1>
		<TR><TD MAXLINES=1><SHADOW><FONT SIZERANGE=${session_data.isJapaneseClient() ? `SMALL` : `MEDIUM`} COLOR="E7CE4A">Settings</FONT></SHADOW>
		</TABLE>
	</TABLE>
<TD ABSWIDTH=5>

<TR><TD COLSPAN=3 ABSHEIGHT=2 VALIGN=MIDDLE ALIGN=CENTER BGCOLOR=202434><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD COLSPAN=3 ABSHEIGHT=1 VALIGN=TOP ALIGN=LEFT><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD COLSPAN=3 ABSHEIGHT=2 VALIGN=TOP ALIGN=LEFT BGCOLOR=515B84><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD ABSWIDTH=6 >
<TD ABSWIDTH=109 ABSHEIGHT=26 >
	<TABLE href="wtv-guide:/help/Mail/mail" CELLSPACING=0 CELLPADDING=0>
	<TR><TD ABSWIDTH=5>
	<TD ABSWIDTH=130 VALIGN=MIDDLE ALIGN=LEFT>
		<TABLE BGCOLOR=333B5A CELLSPACING=0 CELLPADDING=0>
		<TR><TD ABSHEIGHT=1>
		<TR><TD MAXLINES=1><SHADOW><FONT SIZERANGE=${session_data.isJapaneseClient() ? `SMALL` : `MEDIUM`} COLOR="E7CE4A">Help</FONT></SHADOW>
		</TABLE>
	</TABLE>
<TD ABSWIDTH=5>

<TR><TD COLSPAN=3 ABSHEIGHT=2 VALIGN=MIDDLE ALIGN=CENTER BGCOLOR=202434><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD COLSPAN=3 ABSHEIGHT=1 VALIGN=TOP ALIGN=LEFT><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD COLSPAN=3 ABSHEIGHT=2 VALIGN=TOP ALIGN=LEFT BGCOLOR=515B84><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD COLSPAN=3 HEIGHT=112 VALIGN=BOTTOM ALIGN=RIGHT ><IMG SRC="ROMCache/BannerMail.gif" WIDTH=50 HEIGHT=96>
<TR><TD COLSPAN=3 ABSHEIGHT=36>
</TABLE>
</SIDEBAR>

<BODY BGCOLOR="191919" TEXT="42BD52" LINK="189CD6" VLINK="189CD6" FONTSIZE="SMALL" VSPACE=0>

<TABLE CELLSPACING=0 CELLPADDING=0>
<TR><TD COLSPAN=3 HEIGHT=12VALIGN=TOP ALIGN=LEFT>
<TR><TD COLSPAN=3 HEIGHT=35 VALIGN=TOP><FONT SIZE=+3 COLOR="E7CE4A"><B><SHADOW><BLACKFACE> ${
                mailbox_name === "Inbox" ? " Mail list for " + username : mailbox_name
            }</BLACKFACE></SHADOW></B></FONT>
<TR><TD COLSPAN=3 HEIGHT=25 VALIGN=TOP>
	<TABLE CELLSPACING=0 CELLPADDING=0>
	<TD WIDTH=400>`;
            if (message_list) {
                data += `
<font SIZERANGE=${session_data.isJapaneseClient() ? `SMALL` : `MEDIUM`}>You have ${total_message_count} message${
                    total_message_count != 1 ? "s" : ""
                }
<TD ALIGN=RIGHT>
	</TABLE>
</TABLE>

<TABLE CELLSPACING=0 CELLPADDING=0>
<TR><TD COLSPAN=3 HEIGHT=2 VALIGN=MIDDLE ALIGN=CENTER BGCOLOR="2B2B2B"><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD COLSPAN=3 HEIGHT=1 VALIGN=TOP ALIGN=LEFT>
<TR><TD COLSPAN=3 HEIGHT=2 VALIGN=TOP ALIGN=LEFT BGCOLOR="0D0D0D"><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD ABSWIDTH=155 HEIGHT=26 VALIGN=MIDDLE ALIGN=LEFT><B>From</B>
<TD ABSWIDTH=215 VALIGN=MIDDLE ALIGN=LEFT>&nbsp;<B>Subject</B>
<TD ABSWIDTH=50 VALIGN=MIDDLE ALIGN=RIGHT><B>Date</B>
<TR><TD COLSPAN=3 HEIGHT=2 VALIGN=MIDDLE ALIGN=CENTER BGCOLOR="2B2B2B"><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD COLSPAN=3 HEIGHT=1 VALIGN=TOP ALIGN=LEFT>
<TR><TD COLSPAN=3 HEIGHT=2 VALIGN=TOP ALIGN=LEFT BGCOLOR="0D0D0D"><IMG SRC="ROMCache/spacer.gif" WIDTH=1 HEIGHT=1>
<TR><TD COLSPAN=3 HEIGHT=6>
</TABLE>
<spacer type=vertical size=1>
`;
                Object.keys(message_list).forEach(function (k) {
                    var message = message_list[k];
                    var message_font_open = "<font color=#189CD6>";
                    var message_font_close = "</font>";
                    if (message.unread) {
                        message_font_open = `<b><font color=#27B1C6>`;
                        message_font_close = "</font></b>";
                    }
                    data += `<TABLE CELLSPACING=0 CELLPADDING=2 HREF="readmail?message_id=${
                        message.id
                    }#next" ID="id${message.id}">
<TR><TD>
<TD ABSWIDTH=150 HEIGHT=20 MAXLINES=1>${message_font_open}${
                        message.from_name ? message.from_name : message.from_addr
                    }
${message_font_close}<TD ABSWIDTH=200 MAXLINES=1>${message_font_open}${
                        wtvshared.stripHTML(message.subject)
                            ? wtvshared.stripHTML(message.subject)
                            : "(No subject)"
                    }
${message_font_close}<TD ABSWIDTH=60 MAXLINES=1 ALIGN=RIGHT>${message_font_open}
`;
                    var message_date = new Date(message.date * 1000);
                    data +=
                        message_date.getMonth() + 1 + "/" + message_date.getDate() + "\n";
                    data += `
</font>
</table>
<tr>
<td height=5>`;
                });
            } else {
                data += `
<font SIZERANGE=${session_data.isJapaneseClient() ? `SMALL` : `MEDIUM`}> You have no messages
</font><br>
`;
            }
            data += `
<spacer type=vertical size=6>
</table>
</body>
</HTML>
`;
        }
    } else {
        mail_end_error("Access Denied");
    }
}
