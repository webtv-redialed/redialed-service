var wtvrsvc_service_file = true;

if (session_data.getSessionData("infocenter_cache") == null) {
    var object = new Object()
    session_data.setSessionData("infocenter_cache", object);
    session_data.saveSessionData();
}

request_is_async = true; // Make us async

var accounts = session_data.listPrimaryAccountUsers()

const fetch = require('node-fetch');

// If you update this teaser, make sure you update Weather2.js as well, or the illusion will be broken and you'll be sad

// Map TWC iconCodes to WebTV icons
let twcIcons = {
    "0": "lightening",
    "1": "lightening",
    "2": "lightening",
    "3": "lightening",
    "4": "lightening",
    "5": "p_small",
    "6": "25",
    "7": "O_y_z",
    "8": "Y_Z",
    "9": "l",
    "10": "26",
    "11": "18",
    "12": "18",
    "13": "19",
    "14": "22",
    "15": "s_Q",
    "16": "22",
    "17": "T_t_b_x_a",
    "18": "o",
    "19": "H",
    "20": "F",
    "21": "H",
    "22": "smoke",
    "23": "N",
    "24": "N",
    "25": "I",
    "26": "C_c_v",
    "27": "06",
    "28": "06",
    "29": "03",
    "30": "03",
    "31": "01",
    "32": "01",
    "33": "02",
    "34": "02",
    "35": "lightening",
    "36": "30",
    "37": "sun_thunder",
    "38": "sun_thunder",
    "39": "rain_sun",
    "40": "R_k_m",
    "41": "j",
    "42": "P",
    "43": "P",
    "44": "0",
    "45": "W_w_L",
    "46": "S_g_i",
    "47": "T_t_b_x_a",
    "70": "0"
}

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`

async function loadCurrentData() {
    if (session_data.getSessionData("infocenter_cache").currentWeather == null) {
        var cache = new Object();

        Object.assign(cache, session_data.getSessionData("infocenter_cache"));

        cache.currentWeather = {
            "data": "You shouldn't be seeing this, either stop looking in peoples sessionstore or report this as a bug if you're a user",
            "time": 0
        }
        session_data.setSessionData("infocenter_cache", cache);
        session_data.saveSessionData();
    }

// Grab ZIP from user's account, then grab current data from TWC's API
    try {
        if (parseInt(session_data.getSessionData("infocenter_cache").currentWeather.time) + 3600 >= Math.floor(Date.now() / 1000)) {
            console.log("* Using cached weather data")
            return session_data.getSessionData("infocenter_cache").currentWeather.data
        } else {
            console.log("* Using new weather data")
            const response = await fetch('https://api.weather.com/v3/wx/observations/current?postalKey=' + (accounts.subscriber.subscriber_zip_code || "98052") + ':US&units=e&language=en-US&format=json&apiKey=' + wtvrsvc_config.config.weatherApiKey);
            const weather = await response.json();

            const currentData = {
                "temp": weather.temperature,
                "humid": weather.relativeHumidity,
                "icon": weather.iconCode,
                "cond": weather.wxPhraseMedium.toLowerCase()
            };

            var cache = new Object();

            Object.assign(cache, session_data.getSessionData("infocenter_cache"));

            cache.currentWeather = {
                "data": currentData,
                "time": Math.floor(Date.now() / 1000)
            }
            session_data.setSessionData("infocenter_cache", cache);
            session_data.saveSessionData();
            return currentData;
        }
    } catch (e) {
        console.log(e)
        return null;
    }
};

function titleCase(str) {

// ZCS returns all uppercase, so we manually make the first character of each word uppercase

    return str.toLowerCase().split(' ').map(function (item) {
        return item[0].toUpperCase() + item.substring(1)
    }).join(' ');
}

function renderPage(weatherData) {
    const {getByZip} = require('zcs');
    let cityZIP = getByZip(accounts.subscriber.subscriber_zip_code || "98052");
    let cityname = titleCase(cityZIP.city);
// Temporary teaser layout because I give up
    data = `
<html>
	<head><display></head>
	<body>

		<table cellspacing=0 cellpadding=0 width=373 height=193 bgcolor=949484>
			<tr>
				<td>
					<table cellspacing=0 cellpadding=0 width=373 height=193 background="wtv-content:/ROMCache/BackgroundNews.swf">
						<tr>
							<td colspan=2 width=373 height=44>
								<spacer>
						<tr>
							<td width=12>
								<spacer>
							<td valign=TOP align=LEFT width=361 height=149>
								<spacer>
								<table cellspacing=0 cellpadding=0>
									<tr>
										<td WIDTH=90 ROWSPAN=20>
										<TD HEIGHT=10>
									<tr>
										<td>
											<table cellspacing=0 cellpadding=0>

												<td width=140 colspan=2>
			<table border=0 cellspacing=0 cellpadding=0>
				<tr>
					<td valign=BOTTOM align=left MAXLINES=1 HEIGHT=20>
						<font color=313939><b>Weather for ${cityname}</b></font>
					<td width=10>
			</table>
	<tr>
		<td HEIGHT=60>
			<table border=0 cellspacing=0 cellpadding=0>
				<tr><br>
					<td width=68 VALIGN=MIDDLE ALIGN=LEFT><img name="weather_icon" src="wtv-home:/ROMCache/weather/${twcIcons[weatherData.icon]}.gif" width=68 height=60>
					<td valign=middle align=left>
					<form name=teaserForm>
						<font color="#000000"><blackface><input id=disp1 type=text size=20 usestyle nobackground border=0 marginheight=3 nocursor noselect value="CURRENT"></blackface></font><br>
						<font color="#000000"><b>        <input id=disp2 type=text size=25 usestyle nobackground border=0 marginheight=3 nocursor noselect value="humidity: ${weatherData.humid}%"></b></font>

						<!-- these aren't for display -- they just hold information until the Javascript -->
						<!-- comes along and copies it into the one that does display.                   -->
					</form>
			</table>
			</td>
		</tr>
		<tr>
		<td align=right VALIGN=MIDDLE HEIGHT=30>
				<font size=-1 color=313939><b>forecast from Weather Channel<SPACER TYPE=HORIZONTAL SIZE=10>


											</table>
								</table>
					</TABLE>
		</TABLE>


</body>
</html>`;
    return data;
}

// Wait until valid data is recieved before loading the page
(async () => {
    sendToClient(socket, headers, renderPage(await loadCurrentData()));
})();
