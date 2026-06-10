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
		console.log("oh my")
		if (request_headers.query.discard == "true") {
			var messages = request_headers.query.sel;
			if (Array.isArray(messages)) {
				for(var i = 0; i < messages.length; i++){
					session_data.mailstore.deleteMessage(messages[i]);
				}
			} else {
				session_data.mailstore.deleteMessage(messages);
			}
		}
	}
}

            headers = `302 Moved
wtv-expire-all: wtv-mail:/listmail
Location: wtv-mail:/listmail`;

