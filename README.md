# redialed-nodejs
The WebTV Redialed Service. **This software is provided AS IS with NO WARRANTY, operators may contract bed bugs**

koko please fix this shit

# jarhead called, he wants his todo.txt back

## Server issues to fix ~~before launch~~ during public beta

### Required
- General cleaning up (Fix broken links, pages, etc.) (mostly done)
- Fix Discuss being a pain in the ass
- Mitigate session persistence issues
- Fix flashrom bug where the upgrade will restart on firmware < 2.2
- Eventually enforce a limit on how much users can store within their accounts, important for Page Builder scrapbook

### Optional
- Finish wtv-guide templating then work a data entry job
- address book funnies
- Real IMAP/SMTP support for mail
- *Consider migrating to a SQL based db* (realistically this should have been done before PB)
- Favorites keys, this is a basic feature but may require batshit insane programming to keep things in sync
- Make Halen produce valid TMPFS files for each and every build with a script (he is bored)
- Scrapbook

### Stuff that Halen is mad about
- wtv-head-waiter is full of encrypted requests when it shouldn't be
- ~~"WebTV could not be contacted."~~ FIXED WITH A SHITTY HACK, *ACTUALLY* FIX THIS LATER
- Some templating inaccuracies and conditions that are not accounted for
- Awful "database" (JASONNNNNNN) [see Optional]
- Messagewatch server response sucks balls

### In progress
- Potential smart card authentication feature
- Relegate reused code blocks to their own respective functions
- TV listings for WebTV Plus users

### Finished
- Chat still has that issue where trying to use the Channel List or Enter panel breaks (Fixed: 11/24/21 Fix: Simple JS string detector)
- Add GoToTitle.gif to wtv-chat:/type and fix Chat listing banner size (Fixed: 11/24/21 Fix: idk just do it)
- Get someone with an old classic to test the server (Done: 11/28/21 Notes: Issues observed seem to be build dependent)
- Add a bad word filter to registration (Done: 12/9/21 Solution: .includes check on username)
- Fix service buttons on the keyboard (Done 12/11/21 Fix: wtv-mail, favorite, search-url headers in head-waiter)
- Finish converting all the tips to be MiniSrv friendly, and replace any mention of MSN TV in them with WebTV (Done 1/1/22)
- Make registration follow the flow of the original better (Done: 1/11/22 Fix: Set value of header on each page)
- Add brand detection, so we can show proper button images (Done: 1/14/22 Fix: 9th number of SSID is brand ID)
- Finish smart card support for the two people who still have them (Done: 1/15/22)
- Figure out a way to use the original URLs for centers intead of a redirect (Fixed: 1/16/22 Fix: Use switch instead of else if you idiot)
- Get the teasers on 2.5 home to cycle (Fixed: 1/18/22 Fix: document.embed.src to external page for each teaser)
- Add updating news and weather to Centers + Home (Done: 1/21/22 Fix: find someone who actually knows what the hell they're doing)
- Look into making home load faster on LC2.5 (Done: 1/31/22 Fix: Preload bigger assets on the splash page)
- Fix registration name checking (Done: 8/26/22 Fix: thievery)
- Recreate Shopping and Money centers (Done: 9/27/22 Fix: You should motivate yourself, NOW.)
- Convert "Things to Try" to the 1999 style (Done: 9/27/22 Fix: get SWF'd)
- Get original banners and pages for Search (Done: 9/27/22 Fix: Ass Shet drop, page still blows on bf0 though)
- Fix the MSN messenger contact panel (Done: 10/8/22 Fix: get WNI'd, literally just return 1)
- Add caching, custom topics, and fix accuracy issues in centers (Done: 1/3/23)
- Figure out why MessageWatch doesn't work
- Fix the hellish nightmare known as the Weather teasers so they look like the original
- Do all the page builder styles
- Moved to new VPS
- DynamicConfig, more jasons for everybody

## Notes for service configuration
`includes/config.json` is supposed to contain configuration info applied to *all* instances. `user_config` is for this specific instance. Please take care before modifying either. This is being done to reduce clashing between configs and eliminate potential for misconfiguration.

Please make sure of the following:
- Service IP is correct and the service can be accessed from it
- Guest users are *not* enabled
- Registration is open on public services
- Appropriate API keys are functional for things like time zone determination
