class WTVMail {
    fs = require("fs");
    path = require("path");
    uuid = require("uuid");
    ssid = null;
    unread_mail = 0;
    inbox_store = null;
    sent_store = null;
    saved_store = null;
    wtvrsvc_config = [];
    wtvshared = null;
    wtvmime = null;
    wtvclient = null;
    WTVClientSessionData = null;
    mailstore_dir = null;
    mailboxes = null;
    msgFileExt = ".zmsg";
    trashMailboxName = "Trash";
    defaultColors = {};
    sendmailDefaultBGColor = "#242424";

    constructor(wtvrsvc_config, wtvclient) {
        if (!wtvrsvc_config) throw "wtvrsvc_config required";
        var WTVShared = require("./WTVShared.js")["WTVShared"];
        var WTVMime = require("./WTVMime.js");
        this.WTVClientSessionData = require("./WTVClientSessionData.js");
        this.wtvrsvc_config = wtvrsvc_config;
        this.wtvshared = new WTVShared(wtvrsvc_config);
        this.wtvmime = new WTVMime(wtvrsvc_config);
        this.wtvclient = wtvclient;
        this.ssid = this.wtvclient.ssid;
        this.unread_mail = this.wtvclient.getSessionData("subscriber_unread_mail")
            ? this.wtvclient.getSessionData("subscriber_unread_mail")
            : 0;
        this.mailboxes = [
            // referenced by id, so order is important!
            "Inbox",
            "Sent",
            "Saved",
            this.trashMailboxName,
        ];
        this.defaultColors = {
            bgcolor: "#191919",
            text: "#42DB52",
            link: "#189CD6",
            vlink: "#189CD6",
            cursor: "#cc9933",
        };

        // migrate existing mail from service name based addresses to domain name based addresses (so for prod, @WebTV addresses to @webtv.zone addresses)
        // that way shit doesn't explode
        // this code pisses me off so much
		if (!this.didAddressMigration) {
			const oldShit = this.wtvrsvc_config.config.service_name;
			const newShit = this.wtvrsvc_config.config.domain_name;

			this.mailboxes.forEach((mailboxName) => {
				const mailboxID = this.getMailboxByName(mailboxName);
				if (mailboxID === false) return;
				const messages = this.listMessages(mailboxID, 1000, false);
				if (!messages) return;

				messages.forEach((msg) => {
					if (!msg || (!msg.to_addr && !msg.from_addr)) return;

					let updated = false;
					const replaceDomain = (addr) => {
						if (!addr) return addr;
						const regex = new RegExp(`@${oldShit}$`, 'i');
						if (regex.test(addr)) {
							updated = true;
							return addr.replace(regex, `@${newShit}`);
						}
						return addr;
					};

					msg.to_addr = msg.to_addr
						? msg.to_addr.split(', ').map(replaceDomain).join(', ')
						: msg.to_addr;
					msg.from_addr = replaceDomain(msg.from_addr);

					if (updated) {
						this.updateMessage(msg);
					}
				});
			});

			this.didAddressMigration = true;
		}
	}

    checkMailIntroSeen() {
        return this.wtvclient.getSessionData("subscriber_mail_intro_seen")
            ? this.wtvclient.getSessionData("subscriber_mail_intro_seen")
            : false;
    }

    setMailIntroSeen(seen) {
        this.wtvclient.setSessionData(
            "subscriber_mail_intro_seen",
            seen ? true : false
        );
    }

    mailstoreExists() {
        if (this.mailstore_dir === null) {
            // set mailstore directory local var so we don't call the function every time
            var userstore_dir = this.wtvclient.getUserStoreDirectory();

            // MailStore
            var store_dir = "MailStore" + this.path.sep;
            this.mailstore_dir = userstore_dir + store_dir;
        }
        return this.fs.existsSync(this.mailstore_dir);
    }
    

    getSignatureColors(signature = null, sendmail = true) {
        var colors = Object.assign({}, this.defaultColors); // start with default colors
        if (sendmail) colors.bgcolor = this.sendmailDefaultBGColor;

        if (signature) {
            if (signature.length > 0) {
                if (signature.indexOf("<html>") >= 0) {
                    if (signature.indexOf("<body") >= 0) {
                        // parse <body> tag of html signature to get colors
                        const htmlparser2 = require("htmlparser2");
                        const dom = htmlparser2.parseDocument(signature);
                        const body = htmlparser2.DomUtils.getElementsByTagName(
                            "body",
                            dom
                        )[0];
                        if (body.attribs) {
                            for (const [key, value] of Object.entries(body.attribs)) {
                                colors[key] = value;
                            }
                        }
                    }
                }
            }
        }
        if (!colors.cursor) colors.cursor = colors.link;
        return colors;
    }

    mailboxExists(mailboxid) {
        if (mailboxid >= this.mailboxes.length) return null;
        var mailbox_dir = null;
        if (this.mailstoreExists()) {
            var mailbox_name = this.getMailboxById(mailboxid);
            if (!mailbox_name) return null;

            var mailbox_dir = mailbox_name + this.path.sep;
            var store_dir = this.mailstore_dir + mailbox_dir;
        }
        return store_dir !== null ? this.fs.existsSync(store_dir) : false;
    }

    createMailstore() {
        if (this.mailstoreExists() === false) {
            if (!this.fs.existsSync(this.mailstore_dir))
                this.fs.mkdirSync(this.mailstore_dir, {recursive: true});
            return true;
        }
        return false;
    }

    getMailboxById(mailboxid) {
        return mailboxid < this.mailboxes.length
            ? this.mailboxes[mailboxid]
            : false;
    }

    getMailboxByName(mailbox_name) {
        var mailbox_id = false;
        this.mailboxes.every(function (v, k) {
            if (v.toLowerCase() == mailbox_name.toLowerCase()) {
                mailbox_id = k;
                return false;
            }
            return true;
        });
        return mailbox_id;
    }

    getMailboxStoreDir(mailboxid) {
        if (this.mailboxExists(mailboxid)) {
            var mailbox_name = this.getMailboxById(mailboxid);
            return this.mailstore_dir + mailbox_name + this.path.sep;
        }
        return null;
    }

    createMailbox(mailboxid) {
        var mailbox_exists = this.mailboxExists(mailboxid);
        if (mailbox_exists === false) {
            var mailbox_name = this.getMailboxById(mailboxid);
            var mailbox_dir = mailbox_name + this.path.sep;
            var store_dir = this.mailstore_dir + mailbox_dir;
            if (!this.fs.existsSync(store_dir))
                this.fs.mkdirSync(store_dir, {recursive: true});
            return true;
        }
        return mailbox_exists;
    }

    createMessageID() {
        return this.uuid.v1();
    }

    createMessage(
        mailboxid,
        from_addr,
        to_addr,
        msgbody,
        subject = null,
        from_name = null,
        to_name = null,
        signature = null,
        date = null,
        known_sender = false,
        attachments = [],
        url = null,
        url_title = null,
        allow_html = false
    ) {
        if (this.createMailbox(mailboxid)) {
            if (!date) date = Math.floor(Date.now() / 1000);

            var mailbox_path = this.getMailboxStoreDir(mailboxid);
            var message_id = this.createMessageID();
            var message_file = message_id + this.msgFileExt;
            var message_file_out = mailbox_path + message_file;
            var message_data = {
                from_addr: from_addr,
                from_name: from_name,
                to_addr: to_addr,
                to_name: to_name,
                date: date,
                subject: subject,
                body: msgbody,
                known_sender: known_sender,
                signature: signature,
                unread: true,
                attachments: attachments,
                url: url,
                url_title: url_title,
                allow_html: allow_html,
            };
            try {
                if (this.fs.existsSync(message_file_out)) {
                    console.error(
                        " * ERROR: Message with this UUID (" +
                        messageid +
                        ") already exists (should never happen). Message lost."
                    );
                    return false;
                }

                // encode message into json
                var result = this.fs.writeFileSync(
                    message_file_out,
                    JSON.stringify(message_data)
                );
                if (!result) return false;

                // rely on filesystem times for sorting as it is quicker then reading every file
                var file_timestamp = new Date(date * 1000);
                fs.utimesSync(message_file, Date.now(), file_timestamp);
                if (!result)
                    console.error(
                        " WARNING: Setting timestamp on " +
                        message_file +
                        " failed, mail dates will be inaccurate."
                    );
            } catch (e) {
                console.error(
                    " # MailErr: Mail Store failed\n",
                    e,
                    "\n",
                    message_file_out,
                    "\n",
                    message_data,
                    "\n"
                );
            }
            return false;
        }
    }

    createWelcomeMessage() {
        var welcomeTemplate = this.wtvshared
            .getTemplate("wtv-mail", "welcomeMail.txt")
            .toString("ascii");
        var end_of_headers = false;
        var msg = "";
        var self = this;
        var to_addr =
            this.wtvclient.getSessionData("subscriber_username") +
            "@" +
            this.wtvrsvc_config.config.domain_name;
        var to_name = this.wtvclient.getSessionData("subscriber_name");
        var available_tags = {
            ...this.wtvrsvc_config.config,
            user_address: to_addr,
            user_name: to_name,
        };
        var from_name,
            from_addr,
            subj = null;
        var lines = welcomeTemplate.replace(/\r/g, "").split("\n");
        lines.forEach((line) => {
            if (line.indexOf(": ") > 1 && !end_of_headers) {
                var header = [
                    line.slice(0, line.indexOf(":")),
                    line.slice(line.indexOf(":") + 2).trim(),
                ];
                switch (header[0].toLowerCase()) {
                    case "from":
                        if (header[1].indexOf("<") >= 0) {
                            var email = header[1].match(/(.+) \<(.+)\>/);
                            if (email) {
                                from_name = email[1];
                                from_addr = email[2];
                            } else {
                                var email = header[1].match(/\<(.+)\>/);
                                from_addr = email[1];
                            }
                        } else if (header[1].indexOf("@") >= 0) {
                            from_addr = header[1];
                        }
                        break;

                    case "subject":
                        subj = header[1];
                        break;
                }
            } else if (line == "") end_of_headers = true;
            else {
                msg +=
                    line.replace(/\$\{(\w{1,})\}/g, function (x) {
                        var out = "";
                        var tag = x.replace("${", "").replace("}", "");
                        if (available_tags[tag]) out = available_tags[tag];
                        return out;
                    }) + "\n";
            }
        });
        return this.createMessage(
            0,
            from_addr,
            to_addr,
            msg,
            subj,
            from_name,
            to_name,
            null,
            null,
            true,
            [],
            null,
            null,
            true
        );
    }

    getMessage(mailboxid, messageid) {
        if (this.createMailbox(mailboxid)) {
            var mailbox_path = this.getMailboxStoreDir(mailboxid);
            var message_file = messageid + this.msgFileExt;
            var message_file_in = mailbox_path + this.path.sep + message_file;
            var message_data_raw = null;

            if (this.fs.existsSync(message_file_in))
                message_data_raw = this.fs.readFileSync(message_file_in);
            else console.error(" # MailErr: could not find ", message_file_in);

            if (message_data_raw) {
                var message_data = JSON.parse(message_data_raw);
                message_data.mailbox_path = mailbox_path;
                message_data.message_file = message_file;
                if (message_data) {
                    message_data.id = messageid;
                    // backwards compat
                    if (!message_data.attachments) message_data.attachments = [];

                    return message_data;
                } else
                    console.error(
                        " # MailErr: could not parse json in ",
                        message_file_in
                    );
            }
        }
        return false;
    }

    updateMessage(message_data) {
        // encode message into json
        var message_out = new Object();
        Object.assign(message_out, message_data);
        delete message_out.mailbox_path;
        delete message_out.message_file;
        var result = this.fs.writeFileSync(
            message_data.mailbox_path + this.path.sep + message_data.message_file,
            JSON.stringify(message_out)
        );
        if (!result) return false;

        // rely on filesystem times for sorting as it is quicker then reading every file
        var file_timestamp = new Date(message_data.date * 1000);
        fs.utimesSync(message_file, Date.now(), file_timestamp);
        if (!result)
            console.error(
                " WARNING: Setting timestamp on " +
                message_file +
                " failed, mail dates will be inaccurate."
            );
    }

    checkMessageIdSanity(messageid) {
        return /^[A-Za-z0-9\-]{36}$/.test(messageid);
    }

    listMessages(mailboxid, limit, reverse_sort = false, offset = 0) {
        if (this.createMailbox(mailboxid)) {
            var mailbox_path = this.getMailboxStoreDir(mailboxid);
            var self = this;
            var files = this.fs
                .readdirSync(mailbox_path)
                .map(function (v) {
                    var message_data_raw = null;
                    var message_date = null;
                    var message_path = mailbox_path + self.path.sep + v;
                    if (self.fs.existsSync(message_path))
                        message_data_raw = self.fs.readFileSync(message_path);
                    if (message_data_raw) {
                        var message_data = JSON.parse(message_data_raw);
                        if (message_data) message_date = message_data.date;
                    }
                    var message_date_ret = message_date
                        ? message_date
                        : self.fs
                            .statSync(mailbox_path + self.path.sep + v)
                            .mtime.getTime();
                    self.fs.statSync(mailbox_path + self.path.sep + v).mtime.getTime();
                    return {
                        name: v,
                        time: message_date_ret,
                    };
                })
                .sort(function (a, b) {
                    if (!reverse_sort) return b.time - a.time;
                    else return a.time - b.time;
                })
                .map(function (v) {
                    if (
                        v.name.substring(v.name.length - self.msgFileExt.length) ===
                        self.msgFileExt
                    )
                        return v.name.substring(0, v.name.length - 5);
                });

            if (files.length == 0) return false; // no messages
            else {
                // todo filter previous results when offset
                var messagelist_out = new Array();
                Object.keys(files).forEach(function (k) {
                    var message = self.getMessage(mailboxid, files[k]);
                    if (message) messagelist_out.push(mailboxid, message);
                    else console.error(" # MailErr: reading message ID: ", files[k]);
                });
                return messagelist_out.filter(function (n) {
                    return n;
                });
            }
        }
        return null; // error
    }

    countMessages(mailboxid) {
        var messages = this.listMessages(mailboxid, 100, false);
        var message_count = Object.keys(messages).length;
        return message_count ? message_count : 0;
    }

    countUnreadMessages(mailboxid) {
        var messages = this.listMessages(mailboxid, 100, false);
        var unread = 0;
        Object.keys(messages).forEach(function (k) {
            if (messages[k].unread) unread++;
        });
        return unread;
    }

    getMailboxIcon() {
        var icon_image = null;
        switch (this.countMessages(0)) {
            case 0:
                icon_image = "OpenMailbox0.gif";
                break;
            case 1:
                icon_image = "OpenMailbox1.gif";
                break;
            default:
                icon_image = "OpenMailbox2.gif";
                break;
        }
        return icon_image;
    }

    checkUserExists(username, directory = null) {
        // returns the user's ssid, and user_id and userid in an array if true, false if not
        var search_dir = this.wtvrsvc_config.config.SessionStore + '/accounts';
        var return_val = false;
        var self = this;
        if (directory) search_dir = directory;
        this.fs.readdirSync(search_dir).forEach((file) => {
            if (self.fs.lstatSync(search_dir + self.path.sep + file).isDirectory() || self.fs.lstatSync(search_dir + self.path.sep + file).isSymbolicLink()) 
			{
				// i hate this so much, but it's the only way to make node's shitass syntax happy while including support for symlinks
				if (!return_val) {
					return_val = self.checkUserExists(
						username,
						search_dir + self.path.sep + file
					);
				}
            }
            if (!file.match(/user[0-5].json/gi)) return;
            try {
                var temp_session_data_file = self.fs.readFileSync(
                    search_dir + self.path.sep + file,
                    "Utf8"
                );
                var temp_session_data = JSON.parse(temp_session_data_file);
                if (
                    temp_session_data.subscriber_username.toLowerCase() ==
                    username.toLowerCase()
                ) {
                    return_val = search_dir
                        .replace(
                            this.wtvrsvc_config.config.SessionStore +
                            self.path.sep +
                            "accounts" +
                            self.path.sep,
                            ""
                        )
                        .replace("user", "")
                        .split(self.path.sep);
                    return_val.push(temp_session_data.subscriber_name);
                }
            } catch (e) {
                console.error(" # Error parsing Session Data JSON", file, e);
            }
        });
        return return_val;
    }

    getUserMailstore(username) {
        var user_data = this.checkUserExists(username);
        if (user_data) {
            var user_wtvsession = new this.WTVClientSessionData(
                this.wtvrsvc_config,
                user_data[0]
            );
            user_wtvsession.user_id = user_data[1];
            var user_mailstore = new WTVMail(this.wtvrsvc_config, user_wtvsession);
            return user_mailstore;
        }
        return false;
    }

    sendMessageToAddr(
        from_addr,
        to_addr,
        msgbody,
        subject = null,
        from_name = null,
        to_name = null,
        signature = null,
        attachments = [],
        url = null,
        url_title = null
    ) {
        if (!to_addr)
            return "Your message could not be sent.<p>You must specify an addressee in the <blackface>To:</blackface> area.";
		
		var toaddrarray = to_addr.split(', ');
		// protect against abuse by adding duplicates of a user's address to flood their inbox
		var recipients = toaddrarray.reduce((result, element) => {
			var normalize = x => typeof x === 'string' ? x.toLowerCase() : x;

			var normalizedElement = normalize(element);
			if (result.every(otherElement => normalize(otherElement) !== normalizedElement))
			  result.push(element);

			return result;
		  }, []);
		// protect against shitasses spamming a bunch of people
		if (recipients.length > 20)
			return "You can only send a message to a maximum of 20 people at once."
		
		var usernames = [];
		var realnames = [];
		var mailstores = [];

		for (let i = 0; i < recipients.length; i++) {
			var addr = recipients[i].split("@")[0];
			recipients[i] = addr + "@" + this.wtvrsvc_config.config.domain_name;
			usernames.push(addr)
		}

        // do user related shenanigans before sending the message, that way if something goes wrong (user doesn't exist)
		// the sender can correct it before sending to everyone listed before the problem user in the "To:" box
		for (let i = 0; i < usernames.length; i++) {
			var dest_user_mailstore = this.getUserMailstore(usernames[i]);
			// user does not exist
			if (!dest_user_mailstore)
				return (
					"<strong>" +
					recipients[i] +
					"</strong> is not a valid WebTV user name.<p>Please correct it and try again."
				);

			var userExistsData = this.checkUserExists(usernames[i]);
			realnames.push(userExistsData[2]);

			// check if the destination user's Inbox exists yet
			if (!dest_user_mailstore.mailboxExists(0)) {
				// mailbox does not yet exist, create it
				var mailbox_exists = dest_user_mailstore.createMailbox(0);
				// Just created Inbox for the first time, so create the welcome message
				if (mailbox_exists) dest_user_mailstore.createWelcomeMessage();
			}
			if (dest_user_mailstore.mailboxExists(0)) {
				mailstores.push(dest_user_mailstore)
			}
		}
		to_name = (realnames.join(", "))
		to_addr = (recipients.join(", "))

		// if the mailbox exists, deliver the message to all users
		for (let i = 0; i < mailstores.length; i++) {
			var result = mailstores[i].createMessage(
				0,
				from_addr,
				to_addr,
				msgbody,
				subject,
				from_name,
				to_name,
				signature,
				null,
				this.isInUserAddressBook(to_addr, from_addr),
				attachments,
				url,
				url_title,
				true
			);
		}

		// clean up
		dest_user_mailstore = null;
		recipients = null;
		usernames = null;
		realnames = null;
		mailstores = null;
		return true;
    }

    isInUserAddressBook(address_to_check, address_to_look_for) {
        // unimplemented
        return false;
    }

    getMessageMailboxName(messageid) {
        // returns the mailbox id of which the message was found for the current user
        var self = this;
        var mailbox_name = false;
        if (this.checkMessageIdSanity(messageid)) {
            if (this.mailstoreExists()) {
                this.fs.readdirSync(this.mailstore_dir).every((mailbox) => {
                    if (mailbox_name) return false;
                    self.fs.readdirSync(self.mailstore_dir + mailbox).every((file) => {
                        var regexSearch = messageid + self.msgFileExt;
                        var re = new RegExp(regexSearch, "ig");
                        if (!file.match(re)) return true;
                        mailbox_name = mailbox;
                        return false;
                    });
                    return true;
                });
            }
        }
        return mailbox_name;
    }

    getMessageMailboxID(messageid) {
        var mailbox_name = this.getMessageMailboxName(messageid);
        if (!mailbox_name) return false;
        return this.getMailboxByName(mailbox_name);
    }

    getMessageByID(messageid) {
        var mailbox_name = this.getMessageMailboxName(messageid);
        if (!mailbox_name) return false;

        var mailboxid = this.mailboxes.findIndex((value) => value == mailbox_name);

        if (mailboxid !== false) return this.getMessage(mailboxid, messageid);
        return null;
    }

    moveMailMessage(messageid, dest_mailbox_id) {
        // returns true if successful, false if failed.
        var currentMailbox = this.getMessageMailboxID(messageid);
        // Same mailbox
        if (dest_mailbox_id == currentMailbox) return false;

        // Invalid destination mailbox ID
        if (dest_mailbox_id > this.mailboxes.length - 1 || dest_mailbox_id < 0)
            return false;

        if (!this.mailboxExists(dest_mailbox_id))
            this.createMailbox(dest_mailbox_id);

        var currentMailStoreDir = this.getMailboxStoreDir(currentMailbox);
        if (!currentMailStoreDir) return false;

        var destMailStoreDir = this.getMailboxStoreDir(dest_mailbox_id);
        if (!destMailStoreDir) return false;

        var currentMailFile =
            currentMailStoreDir + this.path.sep + messageid + this.msgFileExt;
        var destMailFile =
            destMailStoreDir + this.path.sep + messageid + this.msgFileExt;

        // File exists
        if (this.fs.existsSync(destMailFile)) return false;

        return this.fs.renameSync(currentMailFile, destMailFile);
    }

    deleteMessage(messageid) {
        var currentMailbox = this.getMessageMailboxName(messageid);
        var trashMailbox = this.getMailboxByName(this.trashMailboxName);
        if (currentMailbox != trashMailbox) {
            // if not in the trash, move it to trash
            return this.moveMailMessage(messageid, trashMailbox);
        } else {
            // if its already in the trash, delete it forever
            var currentMailFile =
                this.getMailboxStoreDir(trashMailbox) +
                this.path.sep +
                messageid +
                this.msgFileExt;
            if (this.fs.fileExistsSync(currentMailFile))
                return this.fs.unlink(currentMailFile);
            else return false;
        }
    }

    setMessageReadStatus(messageid, read = true) {
        var message = this.getMessageByID(messageid);
        if (!message) return false;

        message.unread = !read;
        this.updateMessage(message);
        return true;
    }
}

module.exports = WTVMail;
