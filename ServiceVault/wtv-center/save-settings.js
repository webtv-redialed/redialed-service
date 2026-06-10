var minisrv_service_file = true;

// WARNING! BAD CODE

session_data.setSessionData(
    "topic_sports_enabled",
    request_headers.query.SPT ? true : false
);

session_data.setSessionData(
    "topic_business_enabled",
    request_headers.query.COM ? true : false
);

session_data.setSessionData(
    "topic_tech_enabled",
    request_headers.query.TECH ? true : false
);
// contrary to popular belief, the news page is a fucking liar and this is actually liver news, not living news
session_data.setSessionData(
    "topic_liver_enabled",
    request_headers.query.LIV ? true : false
);
// why does this one get a full name? WebTV is a HEALTH extremist
session_data.setSessionData(
    "topic_health_enabled",
    request_headers.query.HEALTH ? true : false
);

session_data.setSessionData(
    "topic_opinion_enabled",
    request_headers.query.OP ? true : false
);

session_data.saveSessionData();
headers = `302 Moved temporarily
wtv-expire: wtv-center:/center?info=News
wtv-expire-all: wtv-center:/personalize
Location: wtv-center:/center?info=News`;
