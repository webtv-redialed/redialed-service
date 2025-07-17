class WTVCache {
    minisrv_config = [];
    type = null;
	fs = require("fs");
	Parser = require("rss-parser");
	fetch = require("node-fetch");

    constructor(minisrv_config = null) {
        this.minisrv_config = minisrv_config;
    }
	
	makeFriendlyString(string) {
		return string
	}
	
	createNewsArray(data) {
		const array = data.items.slice(0, 3).map(function (item) {
			return {
				title: item.title.replace(/’|‘/g, "'").replace(/“|”/g, '"').replace(/—/g, "-").replace(/[\t\r\n]+/g, "").trim(),
				link:  "http://frogfind.com/read.php?a=" + item.link.replace(/[\t\r\n]+/g, "").trim(),
				content: item.content.replace(/’|‘/g, "'").replace(/“|”/g, '"').replace(/—/g, "-").replace(/[\t\r\n]+/g, "").trim(),
			};
		});
		return array
	}	
	
	async updateNewsCache() {
		let parser = new this.Parser();
		var newsCache = new Object();
		// download and format data from NYT's RSS feeds
		// this code looked so nice before i added this shitass error handling, i am beyond disappointed
		try { newsCache.newsHeadlines = this.createNewsArray(await parser.parseURL("https://rss.nytimes.com/services/xml/rss/nyt/World.xml")) } catch { newsCache.newsHeadlines = null; }
		try { newsCache.regionalHeadlines = this.createNewsArray(await parser.parseURL("https://rss.nytimes.com/services/xml/rss/nyt/US.xml")) } catch { newsCache.regionalHeadlines = null; }
		try { newsCache.businessHeadlines = this.createNewsArray(await parser.parseURL("https://rss.nytimes.com/services/xml/rss/nyt/Business.xml")) } catch { newsCache.businessHeadlines = null; }
		try { newsCache.techHeadlines = this.createNewsArray(await parser.parseURL("https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml")) } catch { newsCache.techHeadlines = null; }
		try { newsCache.liverHeadlines = this.createNewsArray(await parser.parseURL("https://rss.nytimes.com/services/xml/rss/nyt/Travel.xml")) } catch { newsCache.liverHeadlines = null; }
		try { newsCache.nytOpinionHeadlines = this.createNewsArray(await parser.parseURL("https://rss.nytimes.com/services/xml/rss/nyt/sunday-review.xml")) } catch { newsCache.nytOpinionHeadlines = null; }
		try { newsCache.healthHeadlines = this.createNewsArray(await parser.parseURL("https://rss.nytimes.com/services/xml/rss/nyt/Health.xml")) } catch { newsCache.healthHeadlines = null; }
		try { newsCache.opinionHeadlines = this.createNewsArray(await parser.parseURL("https://slate.com/feeds/all.rss")) } catch { newsCache.opinionHeadlines = null; }
		try { newsCache.sportsHeadlines = this.createNewsArray(await parser.parseURL("https://deadspin.com/rss")) } catch { newsCache.sportsHeadlines = null; }
		try { newsCache.entertainmentHeadlines = this.createNewsArray(await parser.parseURL("https://rss.nytimes.com/services/xml/rss/nyt/Arts.xml")) } catch { newsCache.entertainmentHeadlines = null; }
		// set the last updated timestamp and save the file
		newsCache.lastUpdated = Math.floor(Date.now() / 1000)
		this.fs.writeFileSync('./ServiceInfoCache/newsCache.json', JSON.stringify(newsCache));
		console.log(" * Finished downloading news headlines")
		return true
	}
	
	async updateReleaseCache() {
		const genreIDs = {
			28: "Action",
			12: "Adventure",
			16: "Animation",
			35: "Comedy",
			80: "Crime",
			99: "Documentary",
			18: "Drama",
			10751: "Family",
			14: "Fantasy",
			36: "History",
			27: "Horror",
			10402: "Music",
			9648: "Mystery",
			10749: "Romance",
			878: "Science Fiction",
			10770: "TV Movie",
			53: "Thriller",
			10752: "War",
			37: "Western",
		};
		var releaseCache = new Object();
		let parser = new this.Parser();
		// download and format data from the movie DB APIs
		try { 
			let theaterfeed = await this.fetch("https://api.themoviedb.org/3/movie/now_playing", {
				headers: {
					'Authorization': 'Bearer ' + this.minisrv_config.config.movieApiKey
				}
			})
			theaterfeed = await theaterfeed.json()
			releaseCache.theaterReleases = theaterfeed.results.slice(0, 3).map(function (item) {
                return {
                    title: item.title,
                    genre: genreIDs[item.genre_ids[0]],
					link: 'client:showalert?message=nuh uh'
                };
            });
		} catch(e) {
			releaseCache.theaterReleases = null;
			console.log(e)
		}
		try { 
			let dvdfeed = await parser.parseURL("https://filmjabber.com/rss/rss-dvd-upcoming.php");
			releaseCache.dvdReleases = dvdfeed.items.slice(0, 3).map(function (item) {
                return {
                    title: item.title
                        .replace(/’|‘/g, "'")
                        .replace(/“|”/g, '"')
                        .replace(/ /g, " "),
                    link: "http://frogfind.com/read.php?a=" + item.link,
                    content: item.content
                        .replace(/’|‘/g, "'")
                        .replace(/“|”/g, '"')
                        .replace(/—|—|–/, "-")
                        .replace(/ /g, " ")
                        .split("<p>")[0],
                };
            });
		} catch {
			releaseCache.dvdReleases = null;
		}
		try { 
			let cdfeed = await parser.parseURL("https://www.metacritic.com/rss/music");
			releaseCache.cdReleases = cdfeed.items.slice(0, 3).map(function (item) {
                return {
                    title: item.title
                        .replace(/’|‘/g, "'")
                        .replace(/“|”/g, '"')
                        .replace(/ /g, " "),
                    link: "http://frogfind.com/read.php?a=" + item.link.replace(/ /g, ""),
                    content: item.content
                        .replace(/’|‘/g, "'")
                        .replace(/“|”/g, '"')
                        .replace(/—|—|–/, "-")
                        .replace(/ /g, " ")
                        .split("<p>")
                        .pop(),
                };
            });
		} catch {
			releaseCache.cdReleases = null;
		}
		releaseCache.lastUpdated = Math.floor(Date.now() / 1000)
		this.fs.writeFileSync('./ServiceInfoCache/releasesCache.json', JSON.stringify(releaseCache));
		console.log(" * Finished downloading new releases")
		return true
	}
	
	async updateWeatherCache(zip) {
		// Map TWC iconCodes to WebTV icons
		let twcIcons = {
			0: "lightening",
			1: "lightening",
			2: "lightening",
			3: "lightening",
			4: "lightening",
			5: "p_small",
			6: "25",
			7: "O_y_z",
			8: "Y_Z",
			9: "l",
			10: "26",
			11: "18",
			12: "18",
			13: "19",
			14: "22",
			15: "s_Q",
			16: "22",
			17: "T_t_b_x_a",
			18: "o",
			19: "H",
			20: "F",
			21: "H",
			22: "smoke",
			23: "N",
			24: "N",
			25: "I",
			26: "C_c_v",
			27: "06",
			28: "06",
			29: "03",
			30: "03",
			31: "01",
			32: "01",
			33: "02",
			34: "02",
			35: "lightening",
			36: "30",
			37: "sun_thunder",
			38: "sun_thunder",
			39: "rain_sun",
			40: "R_k_m",
			41: "j",
			42: "P",
			43: "P",
			44: "0",
			45: "W_w_L",
			46: "S_g_i",
			47: "T_t_b_x_a",
			70: "0",
		};
		let parser = new this.Parser();
		var weatherCache = new Object();
		// download and format data from NYT's RSS feeds
		// this code looked so nice before i added this shitass error handling, i am beyond disappointed
		var weather = await fetch("https://api.weather.com/v3/wx/observations/current?postalKey=" + zip +":US&units=e&language=en-US&format=json&apiKey=" + this.minisrv_config.config.weatherApiKey)
		weather = await weather.json()
		weatherCache.temp = weather.temperature
        weatherCache.humid = weather.relativeHumidity
        weatherCache.icon = twcIcons[weather.iconCode]
        weatherCache.cond = weather.wxPhraseMedium.toLowerCase()
		var forecast = await fetch("https://api.weather.com/v3/wx/forecast/daily/7day?postalKey=" + zip +":US&units=e&language=en-US&format=json&apiKey=" + this.minisrv_config.config.weatherApiKey)
		forecast = await forecast.json()
		let dayIcons = {};

		for (let i = 0, dayIndex = 0; i < 10; i += 2) {
			let icon = forecast.daypart[0].iconCode[i]
				? forecast.daypart[0].iconCode[i]
				: forecast.daypart[0].iconCode[i + 1];
			dayIcons[dayIndex++] = icon;
		}

		let next5Days = forecast.dayOfWeek.slice(0, 5);
		let daysOfWeek = {};

		// Format 5 day forecast for the page
		for (let i = 0; i < 5; i++) {
			let dayFormatted = next5Days[i].substring(0, 3).toUpperCase();

			daysOfWeek[dayFormatted] = {
				high: forecast.calendarDayTemperatureMax[i],
				low: forecast.calendarDayTemperatureMin[i],
				icon: twcIcons[dayIcons[i]],
			};
		}
		
		weatherCache.forecast = daysOfWeek;
		
		// set the last updated timestamp and save the file
		weatherCache.lastUpdated = Math.floor(Date.now() / 1000)
		this.fs.writeFileSync('./ServiceInfoCache/weather_' + zip + '.json', JSON.stringify(weatherCache));
		console.log(" * Finished downloading weather forecasts")
		return true
	}
	
	async getNewsCache() {
		try {
			const cacheFile = './ServiceInfoCache/newsCache.json';
			var newsCacheRaw = this.fs.readFileSync(cacheFile);
			var newsCache = JSON.parse(newsCacheRaw);
			const now = Math.floor(Date.now() / 1000);
			// check if (and how) we should be downloading new data
			if (newsCache.lastUpdated + 86400 <= now) {
				// news is unreasonably outdated (1+ day old), so force the user to wait while we update it
				console.log(" * News is over a day old, forcing the user to wait while we download the latest headlines");
				await this.updateNewsCache();
				newsCacheRaw = this.fs.readFileSync(cacheFile);
				newsCache = JSON.parse(newsCacheRaw);
			} else if (newsCache.lastUpdated + 3600 <= now) {
				// news is only slightly outdated (1-23 hours old), so treat the update as a background function (no async)
				console.log(" * News has passed its shelf life, downloading new info in the background");
				this.updateNewsCache();
			}
			// data is good to send to the user
			return newsCache;
		} catch {
			// something has gone terribly wrong (the cache file was probably nuked somehow), redo everything from scratch to give us a fresh start
			await this.updateNewsCache();
			const newsCacheRaw = this.fs.readFileSync('./ServiceInfoCache/newsCache.json');
			return JSON.parse(newsCacheRaw);
		}
	}
	
	async getReleaseCache() {
		try {
			// load the file from disk
			var releaseCacheRaw = this.fs.readFileSync('./ServiceInfoCache/releasesCache.json');
			var releaseCache = JSON.parse(releaseCacheRaw);
			const now = Math.floor(Date.now() / 1000);
			// check if (and how) we should be downloading new data
			if (releaseCache.lastUpdated + 604800 <= now) {
				// release info is unreasonably outdated (1+ week old), so force the user to wait while we update it
				console.log(" * Release info is over a week old, forcing the user to wait while we download the latest info");
				await this.updateReleaseCache();
				releaseCacheRaw = this.fs.readFileSync('./ServiceInfoCache/releasesCache.json');
				releaseCache = JSON.parse(releaseCacheRaw);
			} else if (releaseCache.lastUpdated + 86400 <= now) {
				// release info is only slightly outdated (1-7 days old), so treat the update as a background function (no async)
				console.log(" * Release info has passed its shelf life, downloading new info in the background");
				this.updateReleaseCache();
			}
			// data is good to send to the user
			return releaseCache;
		} catch {
			// something has gone terribly wrong (the cache file was probably nuked somehow), redo everything from scratch to give us a fresh start
			await this.updateReleaseCache();
			const releaseCacheRaw = this.fs.readFileSync('./ServiceInfoCache/releasesCache.json');
			return JSON.parse(releaseCacheRaw);
		}
	}
	
	async getWeatherCache(zip) {
		try {
			// for this cache in particular we use individual files, to avoid loading a (potentially large) chunk of useless data every time
			var weatherCacheRaw = this.fs.readFileSync('./ServiceInfoCache/weather_' + zip + '.json');
			var weatherCache = JSON.parse(weatherCacheRaw);
			const now = Math.floor(Date.now() / 1000);
			// check if (and how) we should be downloading new data
			if (weatherCache.lastUpdated + 3600 <= now) {
				// weather is unreasonably outdated (1+ hour old), so force the user to wait while we update it
				console.log(" * Weather is over an hour old, forcing the user to wait while we download the forecasts");
				await this.updateWeatherCache(zip);
				weatherCacheRaw = this.fs.readFileSync('./ServiceInfoCache/weather_' + zip + '.json');
				weatherCache = JSON.parse(weatherCacheRaw);
			} else if (weatherCache.lastUpdated + 1800 <= now) {
				// weather is only slightly outdated (30-60 minutes old), so treat the update as a background function (no async)
				console.log(" * Weather has passed its shelf life, downloading new info in the background");
				this.updateWeatherCache(zip);
			}
			// data is good to send to the user
			return weatherCache;
		} catch {
			// something has gone terribly wrong (probably a new ZIP code), redo everything from scratch to give us a fresh start
			await this.updateWeatherCache(zip);
			const weatherCacheRaw = this.fs.readFileSync('./ServiceInfoCache/weather_' + zip + '.json');
			return JSON.parse(weatherCacheRaw);
		}
	}	
}

module.exports = WTVCache;
