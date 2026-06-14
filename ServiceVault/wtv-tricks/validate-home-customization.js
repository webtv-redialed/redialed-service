var minisrv_service_file = true;
var wtvt = new WTVTricks(minisrv_config);

var errpage;

if (errpage) {
    headers = errpage[0];
    data = errpage[1];
} else {
    if(!request_headers.query.ignorehome) session_data.setSessionData('alt_home', request_headers.query.home); // Dirty hack to avoid unintentionally resetting this option if the page is accessed from a non-Etude client
    session_data.setSessionData('fast_splash', request_headers.query.fastsplash);
    session_data.setSessionData('splash', request_headers.query.splash);
    session_data.saveSessionData;
    headers = `302 Moved temporarily
wtv-expire-all: wtv-home:/home
wtv-expire-all: wtv-home:/splash
wtv-expire-all: wtv-tricks:/home-customization
Location: wtv-tricks:/tricks-passwd?password=${wtvt.getPasswordByType("low")}
`;
}