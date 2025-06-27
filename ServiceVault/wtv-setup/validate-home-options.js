var minisrv_service_file = true;
var errpage;

if (errpage) {
    headers = errpage[0];
    data = errpage[1];
} else {
    session_data.setSessionData('alt_home', request_headers.query.home);
    session_data.setSessionData('splash', request_headers.query.splash);
    session_data.saveSessionData;
    headers = `302 Moved temporarily
wtv-expire-all: wtv-home:/home
wtv-expire-all: wtv-home:/splash
wtv-expire-all: wtv-setup:/home
Location: wtv-setup:/setup
`;
}