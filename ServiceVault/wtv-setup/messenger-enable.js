var wtvrsvc_service_file = true;

if (
    !session_data.getSessionData("messenger_password") ||
    !session_data.getSessionData("messenger_email") ||
    !session_data.getSessionData("messenger_domain")
) {
    headers = `302 Moved temporarily
Content-type: text/html
Location: wtv-setup:/messenger-account
`;
} else {
    if (!session_data.getSessionData("messenger_enabled") == 1) {
        session_data.setSessionData("messenger_enabled", 1);
        session_data.saveSessionData;
        var justenabled = "true";
        var enablestatus = "1";
    } else {
        session_data.setSessionData("messenger_enabled", 0);
        session_data.saveSessionData;
        var justenabled = "false";
        var enablestatus = "0";
    }

    headers = `302 Moved temporarily
Content-type: text/html
wtv-expire: wtv-setup:/messenger
Location: wtv-setup:/messenger?just_enabled=${justenabled}
wtv-messenger-enable: ${enablestatus}
`;
}
