# Shit That Needs To Get Done™
### In Progress
- General cleaning up (Fix broken links, pages, etc.)
- Fix the issues with page builder (particularly #15 as it's the most severe arguably)
- Switch to Nunjucks for templating for the entire service

### Top Priority
- Fix the ProtoWeb proxy
- Implement headlines/teasers for the Money center
- Do all the page builder styles
- Scrapbook
- Fix the "Too much data in POST request" error that sometimes happens when sending emails/posting to Discuss. Appears to be related to encryption, so that's going to be *fun*

### Low Priority
- Finish wtv-guide templating then work a data entry job
- Real IMAP/SMTP support for mail
- Consider migrating to a SQL based db
- Support adding a "middle" proxy for HTTP, mainly for use with ProtoWeb (which is what minisrv does). The current implementation makes me want to slide the sewers
- Replace the New York Times as the headlines source for all centers
- Re-base off of the latest version of minisrv as of writing (v0.9.60)/backport stuff if needed
- More Address Book funnies

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
- Page Builder is a fucking nightmare i hate it make it stop i am going to lose it why is it this way i am in pain i can't take it
