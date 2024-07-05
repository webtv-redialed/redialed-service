var minisrv_service_file = true;
var userSession = null;
var errpage = null;

var wtvr = new WTVRegister(minisrv_config, SessionStore);

if (session_data.user_id != 0)
  errpage = wtvshared.doErrorPage(
    400,
    "<embed src=wtv-setup:/sounds/nicetry.mid autostart=true><marquee>NO WAY? NO WAY! NO WAY!</marquee>"
  );

// seperate if statements as to not overwrite the first error if multiple occur

if (!errpage) {
  if (request_headers.query.user_password) {
    if (
      request_headers.query.user_password.length <
      minisrv_config.config.passwords.min_length
    )
      errpage = wtvshared.doErrorPage(
        400,
        "<embed src=wtv-setup:/sounds/nicetry.mid autostart=true><marquee>NO WAY? NO WAY! NO WAY!</marquee>"
      );
  } else {
    if (
      request_headers.query.user_password.length >
      minisrv_config.config.passwords.max_length
    )
      errpage = wtvshared.doErrorPage(
        400,
        "<embed src=wtv-setup:/sounds/nicetry.mid autostart=true><marquee>NO WAY? NO WAY! NO WAY!</marquee>"
      );
    else if (
      request_headers.query.user_password !==
      request_headers.query.user_password2
    )
      errpage = wtvshared.doErrorPage(
        400,
        "<embed src=wtv-setup:/sounds/nicetry.mid autostart=true><marquee>NO WAY? NO WAY! NO WAY!</marquee>"
      );
  }
}
var birthdaydata;
var month = request_headers.query.subscriber_birth_month;
var day = request_headers.query.subscriber_birth_date;

  if (month >= 0 && month <= 11 && day >= 1 && day <= 31) {
    if (month == 1 && day > 28) {
      day == 28;
    }
  } else {
    var errpage = wtvshared.doErrorPage(400);
    headers = errpage[0];
    data = errpage[1];
  }
  
  if (!request_headers.query.restricted_web_access) {
	errpage = wtvshared.doErrorPage(400);
  }

if (!errpage) {
  if (
    session_data.getNumberOfUserAccounts() >
    minisrv_config.config.user_accounts.max_users_per_account
  )
    errpage = wtvshared.doErrorPage(
      400,
      "<embed src=wtv-setup:/sounds/nicetry.mid autostart=true><marquee>NO WAY? NO WAY! NO WAY!</marquee>"
    );
  else if (!request_headers.query.user_name)
    errpage = wtvshared.doErrorPage(400, "<embed src=wtv-setup:/sounds/nicetry.mid autostart=true><marquee>NO WAY? NO WAY! NO WAY!</marquee>");
}

if (!errpage) {
  const nonoWords = wtvshared.getDynamicConfig(`nonoWords`);
  const reservedWords = wtvshared.getDynamicConfig(`reservedWords`);
  var lowerusername = request_headers.query.user_name.toLowerCase();

  if (nonoWords.some((v) => lowerusername.includes(v)))
    errpage = wtvshared.doErrorPage(
      400,
      "<embed src=wtv-setup:/sounds/nicetry.mid autostart=true><marquee>NO WAY? NO WAY! NO WAY!</marquee>"
    );
  else if (reservedWords.some((v) => lowerusername.includes(v)))
    errpage = wtvshared.doErrorPage(
      400,
      "<embed src=wtv-setup:/sounds/nicetry.mid autostart=true><marquee>NO WAY? NO WAY! NO WAY!</marquee>"
    );
  else if (lowerusername.length < 5)
  errpage = wtvshared.doErrorPage(
    400,
    "<embed src=wtv-setup:/sounds/nicetry.mid autostart=true><marquee>NO WAY? NO WAY! NO WAY!</marquee>"
  );
else if (lowerusername.length > 16)
  errpage = wtvshared.doErrorPage(
    400,
    "<embed src=wtv-setup:/sounds/nicetry.mid autostart=true><marquee>NO WAY? NO WAY! NO WAY!</marquee>"
  );
else if (!wtvr.checkUsernameSanity(lowerusername))
  errpage = wtvshared.doErrorPage(
    400,
    "<embed src=wtv-setup:/sounds/nicetry.mid autostart=true><marquee>NO WAY? NO WAY! NO WAY!</marquee>"
  );
  else if (!wtvr.checkUsernameAvailable(request_headers.query.user_name))
    errpage = wtvshared.doErrorPage(
      400,
      "<embed src=wtv-setup:/sounds/nicetry.mid autostart=true><marquee>NO WAY? NO WAY! NO WAY!</marquee>"
    );
}

if (errpage) {
  headers = errpage[0];
  data = errpage[1];
} else {
  if (!request_headers.query.display_name)
    request_headers.query.display_name = request_headers.query.username;
  userSession = new WTVClientSessionData(minisrv_config, socket.ssid);
  var freeUserId = session_data.findFreeUserSlot(session_data);
  if (freeUserId) {
	birthdaydata = { month: month, day: day };
    userSession.user_id = freeUserId;
    userSession.setSessionData("subscriber_userid", freeUserId);
    userSession.setSessionData(
      "subscriber_first_name",
      request_headers.query.user_human_name_first
    );
    userSession.setSessionData(
      "subscriber_last_name",
      request_headers.query.user_human_name_last
    );
    userSession.setSessionData(
      "subscriber_name",
      request_headers.query.user_human_name_first +
        " " +
        request_headers.query.user_human_name_last
    );
    userSession.setSessionData(
      "subscriber_username",
      request_headers.query.user_name
    );
	userSession.setSessionData("subscriber_birthday", birthdaydata);
	if (request_headers.query.restricted_web_access == "surfwatch-screening") {
		userSession.setSessionData("subscriber_surfwatch_enabled", true);
	}
    userSession.setSessionData("registered", true);
    userSession.mailstore.createWelcomeMessage();
  }
  if (!userSession.saveSessionData(true, true)) {
    var errpage = wtvshared.doErrorPage(400);
    headers = errpage[0];
    data = errpage[1];
  } else {
    if (request_headers.query.user_password) {
      userSession.setUserPassword(request_headers.query.user_password);
      userSession.setUserLoggedIn(true);
    }

    headers = `302 Moved temporarily
Content-type: text/html
wtv-expire: wtv-setup:/accounts
wtv-expire-all: wtv-home:/home
Location: wtv-setup:/accounts`;
  }
}

if (userSession) userSession = null;
