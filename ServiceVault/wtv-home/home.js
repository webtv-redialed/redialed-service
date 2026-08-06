// TODO: holy SHIT clean this up
var minisrv_service_file = true;

var isMyBirthday = false;
const date = new Date();
const birthday = session_data.getSessionData("subscriber_birthday");
const birthmonth = birthday.month.toString();
const birthdate = birthday.day.toString();
const todmonth = date.getMonth().toString();
const toddate = date.getDate().toString();

const todaydate = todmonth + toddate;
const thebirthday = birthmonth + birthdate;
var isMyBirthday = todaydate == thebirthday;

const ads = wtvshared.getDynamicConfig(`ads`); //pull ads from DynamicConfig/ads.json
var randAd = ads[Math.floor(Math.random() * ads.length)];

headers = `200 OK
Connection: Keep-Alive
wtv-expire-all: wtv-home:/splash
wtv-expire-all: wtv-flashrom:
Content-Type: text/html`;

if (session_data.getSessionData("subscriber_username"))
	if (request_headers.query.url)
		headers += "\nwtv-visit: " + request_headers.query.url;

var title;

if (isMyBirthday) {
	title = "Happy Birthday, ";
	if (session_data.getSessionData("subscriber_first_name")) {
		title += `${session_data.getSessionData("subscriber_first_name")}!`;
	} else {
		title += `${session_data.getSessionData("subscriber_username")}!`;
	}
} else {
	title = "Home for " + session_data.getSessionData("subscriber_username");
}

// Home page globals
let logoUrl = "wtv-home:/Credits-Introduction"
let helpUrl = "wtv-guide:/help?topic=Index&subtopic=Main&page=1";
let exploreUrl = "wtv-center:/sitemap/SiteMap.tmpl";
let userId = parseInt(session_data.user_id);
let userCount = parseInt(session_data.getNumberOfUserAccounts());
let subscriberName = session_data.getSessionData("subscriber_name");


// Classic Dreamcast home
if (session_data.get("wtv-client-rom-type") == "JP-Fiji") {
	if (session_data.getSessionData("alt_home") == '1') {
		data = engine.renderFileSync('wtv-home/homeClassicDreamcast', { title: title, logoUrl: logoUrl, helpUrl: helpUrl, exploreUrl: exploreUrl, isMyBirthday: isMyBirthday });
		// Grunge Dreamcast home
	} else {
		data = engine.renderFileSync('wtv-home/homeGrungeDreamcast', { title: title, logoUrl: logoUrl, isMyBirthday: isMyBirthday, userCount: userCount, userId: userId, randAd: randAd });
	}
	// Crusty old homepage
} else if (!session_data.hasCap("client-supports-etude-service") || session_data.getSessionData("alt_home") == '1' || request_headers.query.force_old_home) {
	data = engine.renderFileSync('wtv-home/homeClassic', { title: title, logoUrl: logoUrl, helpUrl: helpUrl, exploreUrl: exploreUrl, isMyBirthday: isMyBirthday, hasTVExperience: session_data.hasCap('client-has-tv-experience'), userCount: userCount, userId: userId, randAd: randAd });
	// Crustier older homepage
} else if (session_data.getSessionData("alt_home") == '2' || request_headers.query.force_alpha_home) {
	data = engine.renderFileSync('wtv-home/homeAlpha', { title: title, logoUrl: logoUrl, helpUrl: helpUrl, exploreUrl: exploreUrl, isMyBirthday: isMyBirthday, hasTVExperience: session_data.hasCap('client-has-tv-experience'), userCount: userCount, userId: userId, randAd: randAd, subscriberName: subscriberName });
} else {
	// Grunge, this is where most users will be
	data = engine.renderFileSync('wtv-home/homeGrunge', { title: title, logoUrl: logoUrl, isMyBirthday: isMyBirthday, isJapanese: session_data.isJapaneseClient(), hasTVExperience: session_data.hasCap('client-has-tv-experience'), userCount: userCount, userId: userId, randAd: randAd });
}
