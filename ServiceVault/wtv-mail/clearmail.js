var wtvrsvc_service_file = true;

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
    // check if mailstore exists
    mailstore_exists = session_data.mailstore.mailstoreExists();

    // create mailstore if it doesn't exist
    if (!mailstore_exists)
        mailstore_exists = session_data.mailstore.createMailstore();

    if (mailstore_exists) {
        // mailstore exists
		var mailbox = 0

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
                0,
                false,
                0
            );
            var total_message_count = session_data.mailstore.countMessages(mailbox);
            var total_unread_message_count =
                session_data.mailstore.countUnreadMessages(mailbox);
        
            var notImplementedAlert = new clientShowAlert({
                image: wtvrsvc_config.config.service_logo,
                message: "This feature is not available.",
                buttonlabel1: "Okay",
                buttonaction1: "client:donothing",
                noback: true,
            }).getURL();

            headers = `200 OK
Expires: 60
Content-type: text/html`;

            data = `<html>
<head>
<display fontsize="medium">
<sendpanel action="wtv-mail:/sendmail"
message="Write a new message"
label="Write">
<title>
Clean up mail list
</title>
</head>
<script language=javascript>
var unreadCount = 0;
function CheckUnread(checked) {	if (checked) {	++unreadCount;
} else {	--unreadCount;
}
}
function BoxesChecked() {	var count = 0;
var elements = window.document.deleteform.elements;
for (var i = 0; i < elements.length; i++) {	if (elements[i].type == "checkbox" &&
elements[i].checked) {	++count;
}
}
return count;
}
function DiscardAlert() {	var numChecked = BoxesChecked();
if (numChecked == 0) {	window.open("client:showalert?sound=none&message=You%20have%20not%20selected%20any%20messages%20to%20discard");
} else if (unreadCount == 0) {	if (numChecked == 1) {	window.open("client:showalert?sound=none&message=Would%20you%20like%20to%20permanently%20discard%20this%20message%3F&buttonlabel2=Don't%20Discard&buttonaction2=client:donothing&buttonlabel1=Discard&buttonaction1=client%3Asubmitform%3Fname%3Ddeleteform%26submitname%3Ddiscard%26submitvalue%3Dtrue");
} else {	window.open("client:showalert?sound=none&message=Would%20you%20like%20to%20permanently%20discard%20these%20messages%3F&buttonlabel2=Don't%20Discard&buttonaction2=client:donothing&buttonlabel1=Discard&buttonaction1=client%3Asubmitform%3Fname%3Ddeleteform%26submitname%3Ddiscard%26submitvalue%3Dtrue");
}
} else {	if (numChecked == 1) {	window.open("client:showalert?sound=none&message=You%20have%20selected%20a%20message%20to%20discard%20that%20has%20not%20been%20read.%3Cbr%3EAre%20you%20sure%20you%20want%20to%20permanently%20discard%20this%20message%3F&buttonlabel2=Don't%20Discard&buttonaction2=client:donothing&buttonlabel1=Discard&buttonaction1=client%3Asubmitform%3Fname%3Ddeleteform%26submitname%3Ddiscard%26submitvalue%3Dtrue");
} else {	window.open("client:showalert?sound=none&message=You%20have%20selected%20messages%20to%20discard%20that%20have%20not%20been%20read.%3Cbr%3EAre%20you%20sure%20you%20want%20to%20permanently%20discard%20all%20of%20these%20messages%3F&buttonlabel2=Don't%20Discard&buttonaction2=client:donothing&buttonlabel1=Discard&buttonaction1=client%3Asubmitform%3Fname%3Ddeleteform%26submitname%3Ddiscard%26submitvalue%3Dtrue");
}
}
}
</script>
<print blackandwhite>
<sidebar width=114 height=420 align=left>
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
<table href="wtv-mail:/listmail?mailbox_name=inbox"
cellspacing=0 cellpadding=0>
<tr>
<td abswidth=5>
<td abswidth=90 valign=middle align=left>
<table bgcolor=333b5a cellspacing=0 cellpadding=0>
<tr>
<td absheight=1>
<tr>
<td maxlines=1><shadow><font sizerange=${session_data.isJapaneseClient() ? `SMALL` : `MEDIUM`} color="E7CE4A">Mail list</font></shadow>
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
<table href="javascript:DiscardAlert()" xnocancel
cellspacing=0 cellpadding=0>
<tr>
<td abswidth=5>
<td abswidth=90 valign=middle align=left>
<table bgcolor=333b5a cellspacing=0 cellpadding=0>
<tr>
<td absheight=1>
<tr>
<td maxlines=1><shadow><font sizerange=${session_data.isJapaneseClient() ? `SMALL` : `MEDIUM`} color="E7CE4A">Discard</font></shadow>
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
<table href="wtv-mail:/clearmail?bulk_delete=true&select_all=true&mailbox_name=inbox#bogus"
cellspacing=0 cellpadding=0>
<tr>
<td abswidth=5>
<td abswidth=90 valign=middle align=left>
<table bgcolor=333b5a cellspacing=0 cellpadding=0>
<tr>
<td absheight=1>
<tr>
<td maxlines=1><shadow><font sizerange=${session_data.isJapaneseClient() ? `SMALL` : `MEDIUM`} color="E7CE4A">Mark all</font></shadow>
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
<table href="wtv-guide:/quickhelp?title=CleanUp"
cellspacing=0 cellpadding=0>
<tr>
<td abswidth=5>
<td abswidth=90 valign=middle align=left>
<table bgcolor=333b5a cellspacing=0 cellpadding=0>
<tr>
<td absheight=1>
<tr>
<td maxlines=1><shadow><font sizerange=${session_data.isJapaneseClient() ? `SMALL` : `MEDIUM`} color="E7CE4A">Help</font></shadow>
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
<td colspan=3 height=174 valign=bottom align=right >
<img src="wtv-mail:/ROMCache/BannerMail.gif" width=50 height=96>
<tr><td colspan=3 absheight=36>
</table>
</sidebar>
<body instructions="wtv-guide:/helpindex?title=Index_Mail"
bgcolor="191919" text="42BD52" link="189CD6"
vlink="189CD6" fontsize="medium"
vspace=0
hspace=0
>            
<table cellspacing=0 cellpadding=0 width=100%>
<tr>
<td rowspan=999 abswidth=8>
<td abswidth=420 height=16>
<td rowspan=999 abswidth=18>
<tr>
<td height=35 valign=top>
<font size=+1 color="E7CE4A"><blackface><shadow>
Clean up mail list
<tr>
<td height=6>
<tr>
<td>
Mark messages you want to remove from the mail list, and then choose <b>Discard</b>.
<tr>
<td height=6>
</table>
<table cellspacing=0 cellpadding=0>	<tr>
<td rowspan=999 width=8>
<td height=2 width=438 valign=middle align=center bgcolor="2B2B2B">
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<tr>
<td height=1 valign=top align=left>
<tr>
<td height=2 valign=top align=left bgcolor="0D0D0D">
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
</table>
<table cellspacing=0 cellpadding=0>
<tr>
<td rowspan=999 width=8>
<td>
<table cellspacing=0 cellpadding=2 width=420>
<tr>
<td abswidth=26 height=24 valign=middle align=left>
<td abswidth=118 height=24 valign=middle align=left>
<font size=-1><b>
From
<td abswidth=166 valign=middle align=left>
<font size=-1><b>
Subject
<td abswidth=46 valign=middle align=right>
<font size=-1><b>
Date</td>
<td abswidth=44 height=24 valign=middle align=right>
<font size=-1><b>
Size</td>
</table>
<td rowspan=999 width=18>
</table>
<table cellspacing=0 cellpadding=0>
<tr>
<td rowspan=999 width=8>
<td height=2 width=438 valign=middle align=center bgcolor="2B2B2B">
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<tr>
<td height=1 valign=top align=left>
<tr>
<td height=2 valign=top align=left bgcolor="0D0D0D">
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<tr>
<td height=6>
</table>
<form action="wtv-mail:/validate-clearmail" method="get" name="deleteform">
<input type="hidden" name="mailbox_name" value="inbox">
<table cellspacing=0 cellpadding=0>
<tr>
<td abswidth=8>
<td abswidth=420>`
Object.keys(message_list).forEach(function (k) {
                    var message = message_list[k];
					var message_date = new Date(message.date * 1000);
                    data += `<table cellspacing=0 cellpadding=2 width=420
>
<tr>
<td abswidth=26 align=center valign=middle maxlines=1>
<input type="checkbox" name="sel" value="${message.id}" ${request_headers.query.select_all == "true" ? "checked" : ""}
>
<td abswidth=118 maxlines=1>
${
	message.from_name ? message.from_name : message.from_addr
}
<td abswidth=166 maxlines=1>
${
	wtvshared.stripHTML(message.subject)
		? wtvshared.stripHTML(message.subject)
		: "(No subject)"
}
<td abswidth=46 maxlines=1 align=right>
${message_date.getMonth() + 1 + "/" + message_date.getDate()}
<td abswidth=44 align=right>
0<font size=-1>%
</table>`;
                });
data += `
</table>
</form>
</center>
<form action="wtv-mail:/validate-clearmail" method="get">
<input type="hidden" name="bulk_delete" value="true">
<input type="hidden" name="mailbox_name" value="0">
<input type="hidden" name="select_all" value="true">
</form>
</body>
</html>
`;
        }
    } else {
        mail_end_error("Access Denied");
    }
}
