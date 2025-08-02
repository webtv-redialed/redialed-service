var wtvrsvc_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;

var topic = request_headers.query.topic;
switch (topic) {
    case "Home":
    case "Home&Family":
        data = `<HTML>
<head>
<title>Search Home &amp; Family</title>
</head>
<display fontsize=medium showwhencomplete>
<body hspace=0 vspace=0 bgcolor=#0B0D3A text=#000000 link=#0B0D3A vlink=#0B0D3A novtilebg>
<wtvnoscript>
<table cellspacing=0 cellpadding=0 bgcolor=#858779>
<tr>
<td>
<table cellspacing=0 cellpadding=0 width=560 height=80 background="wtv-center:/images/SearchCategoryBG.jpg">
<tr>
<td width=106 align=center href='wtv-tricks:/home' insetselection>
<img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width=87 height=67>
<spacer type=horizontal width=100><td><spacer type=vertical height=70>
<img src="wtv-center:/images/search_home_family_h.gif">
<td width=288 valign=top>
</table>
<table width=560 cellspacing=0 cellpadding=0>
<tr>
<td width=17 bgcolor=#0B0D3A>
<td width=377>
<table cellspacing=0 cellpadding=0 width=377 height=8>
<tr>
<td width=8><img src="wtv-center:/images/CornerTopLeftSearchHome.gif" width=8 height=8>
<td width=352>
</table>
&nbsp;<br>	<table border=0 cellspacing=0 cellpadding=2>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Real_Estate/Buy_a_home?sv=W3">Buy a home</a>
<td width=15>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Living/Home_improvement?sv=W3">Home Improvement</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Family/Cooking?sv=W3">Cooking</a>
<td width=15>	<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Family/Parent_Pages?sv=W3">Parent Pages</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Family/Genealogy?sv=W3">Genealogy</a>
<td width=15>	<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Family/Pets?sv=W3">Pets</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Family/Grandparents?sv=W3">Grandparents</a>
<td width=15>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Family/Spirituality_and_religion?sv=W3">Religion</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/People/Women/Recreation_and_leisure/Home_and_garden?sv=W3">Home &amp; Garden</a>
<td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Family/Teens?sv=W3">Teens</a>
</table>
<spacer type=vertical height=15><br>
<table border=0 cellspacing=0 cellpadding=0 height=31 width=382>
<tr>
<td gradcolor=#858779 bgcolor=#565760 gradangle=90>
<spacer type=horizontal width=23><blackface>Featured Home &amp; Family Sites</blackface>
</table>
<table width=377 cellspacing=0 cellpadding=0>
<tr>
<td width=23>
<td>
<spacer type=vertical height=15><br>
<a selected href="http://www.genhomepage.com"><b>The Genealogy Home Page</b>
</a><br>
<font size=-1>Resources & help with family trees</font>
<p>
<a selected href="http://www.babycenter.com"><b>BabyCenter</b>
</a><br>
<font size=-1>Guidance & gear for new or expectant parents</font>
<p>
<a selected href="http://www.families.com"><b>Family Education Network</b>
</a><br>
<font size=-1>Help with your K-12 child's education</font>
<p>
<a selected href="http://www.bobvila.com"><b>Bob Vila's Home Site</b>
</a><br>
<font size=-1>Home repair, renovation & design info</font>
<p>
<a selected href="http://www.parentsoup.com"><b>Parent Soup</b>
</a><br>
<font size=-1>Expert parenting advice. Child development</font>
<p>
<a selected href="http://www.ctw.org"><b>Children's Television Workshop</b>
</a><br>
<font size=-1>All about Sesame Street. Tips for parents</font>
<p>
<a selected href="http://www.epicurious.com"><b>Epicurious</b>
</a><br>
<font size=-1>Gourmet & Bon Appetit recipes. Fodor's travel</font>
<p>
<a selected href="http://www.garden.com"><b>Garden.com</b>
</a><br>
<font size=-1>The whys, whens & how-to's of gardening</font>
<p>
<a selected href="http://www.disney.com"><b>Disney Online</b>
</a><br>
<font size=-1>Buy videos, plan vacations & send greetings</font>
<p>
<a selected href="http://www.genealogy.com/genealogy/links/index.html"><b>Genealogy.com Site Finder</b>
</a><br>
<font size=-1>Description of over 50,000 genealogy sites</font>
<p>
<a selected href="http://www.iown.com"><b>iOwn.com</b>
</a><br>
<font size=-1>Search for and finance a home</font>
<p>
<a selected href="http://www.pbs.org"><b>PBS Online</b>
</a><br>
<font size=-1>Family education from public television</font>
<p>
<a selected href="http://www.women.com"><b>Women .com</b>
</a><br>
<font size=-1>Links to sites for women, families & kids</font>
<p>
<td width=15>
</table>
<td width=166 valign=top gradcolor=#858779 bgcolor=#0B0D3A gradangle=0>
<spacer type=vertical height=5>
<table width=166 border=0 cellspacing=0 cellpadding=0>
</table>
<spacer type=vertical height=15>
<table border=0 cellspacing=0 cellpadding=0 width=166 height=21>
<tr>
<td gradcolor=#858779 bgcolor=#0C0C1B gradangle=90>&nbsp;<font color=#CCCCB5><blackface>Things to try</blackface></font>
</table>
<table border=0 cellspacing=0 cellpadding=0>
<tr>
<td height=5 colspan=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=http://www.parentsplace.com><font color=#FFFFFF size=-1>Find parenting info</font></a>
<tr>
<td colspan=2 height=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=><font color=#FFFFFF size=-1></font></a>
<tr>
<td colspan=2 height=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=http://www.ourhouse.com/cgi-bin/source.jsp?sourceID=565&placeID=977&creativeID=084><font color=#FFFFFF size=-1>Find a contractor</font></a>
<tr>
<td colspan=2 height=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=><font color=#FFFFFF size=-1></font></a>
<tr>
<td colspan=2 height=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=wtv-author:/welcome><font color=#FFFFFF size=-1>Build a web page</font></a>
<tr>
<td colspan=2 height=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=wtv-Center:/time-savers><font color=#FFFFFF size=-1>More to try...</font></a>
<tr>
<td colspan=2 height=2>
</table>
</table>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=17 bgcolor=#0B0D3A>
<td>
<spacer type=vertical height=10><br>
<table cellspacing=0 cellpadding=0>
<tr>
<td>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=377 height=26 gradcolor=#858779 bgcolor=#565760 gradangle=90><spacer type=horizontal width=23><img src='wtv-center:/images/search_other.gif'>
</table>
<td width=166><img src='wtv-center:/images/infoseek.gif'>
</table>
<spacer type=vertical height=10><br>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=23>
<td>
<table border=0>
<tr>
<td><blackface>Type a word, phrase or web address</blackface>
<tr>
<td>
<form action="wtv-center:search" method="get">
<input name="search-string" nextDown="browseTheWeb" bgcolor=444444 text=ffdd33 cursor=#cc9933 value="" SIZE=35><spacer type=horizontal width=20><font color=E7CE4A><shadow><input type=submit borderimage="file://ROM/Borders/ButtonBorder2.bif" value="Search" usestyle></shadow></font><br>
</form>
<tr>
<td><font size=-1>For best results, be specific. <a href="wtv-guide:/help?topic=Search&subtopic=Tips&BackToName=Search">More search tips</a></font>
</table>
</table>
<spacer type=vertical height=10><br>
</table>
<table cellspacing=0 cellpadding=0 width=560 height=8>
<tr>
<td width=17 bgcolor=#0B0D3A>
<td width=8><img src="wtv-center:/images/CornerBottomLeftSearch.gif" width=8 height=8>
<td width=535>
</table>
<table border=0 cellspacing=0 cellpadding=0 width=560 height=100 bgcolor=#0B0D3A>	<tr>
<td width=17></body>
</HTML>
`;

        break;

    case "People":
        data = `<HTML>
<head>
<title>Search People</title>
</head>
<display fontsize=medium showwhencomplete>
<body hspace=0 vspace=0 bgcolor=#0B0D3A text=#000000 link=#0B0D3A vlink=#0B0D3A novtilebg>
<wtvnoscript>
<table cellspacing=0 cellpadding=0 bgcolor=#858779>
<tr>
<td>
<table cellspacing=0 cellpadding=0 width=560 height=80 background="wtv-center:/images/SearchCategoryBG.jpg">
<tr>
<td width=106 align=center href='wtv-tricks:/home' insetselection>
<img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width=87 height=67>
<spacer type=horizontal width=105><td><spacer type=vertical height=62>
<img src="wtv-center:/images/search_people_h.gif">
<td width=288 valign=top>
</table>
<table width=560 cellspacing=0 cellpadding=0>
<tr>
<td width=17 bgcolor=#0B0D3A>
<td width=377>
<table cellspacing=0 cellpadding=0 width=377 height=8>
<tr>
<td width=8><img src="wtv-center:/images/CornerTopLeftSearchHome.gif" width=8 height=8>
<td width=352>
</table>
&nbsp;<br>	<table border=0 cellspacing=0 cellpadding=2>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/People/Connecting_with_people?sv=W3">Connections</a>
<td width=15>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/People/Mens_resources?sv=W3">Men</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/People/Cultures?sv=W3">Cultures</a>
<td width=15>	<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/People/Famous_people?sv=W3">Personalities</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/People/Gay_community?sv=W3">Gay Community</a>
<td width=15>	<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/People/Romance?sv=W3">Romance</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/People/Genealogy?sv=W3">Genealogy</a>
<td width=15>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/People/Spirituality_and_religion?sv=W3">Religion</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/People/Grandparents?sv=W3">Grandparents</a>
<td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/People/Society?sv=W3">Society</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/People/Hobbies_and_interests?sv=W3">Hobbies</a>
<td width=15>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/People/Women?sv=W3">Women</a>
</table>
<spacer type=vertical height=15><br>
<table border=0 cellspacing=0 cellpadding=0 height=31 width=382>
<tr>
<td gradcolor=#858779 bgcolor=#565760 gradangle=90>
<spacer type=horizontal width=23><blackface>Featured People Sites</blackface>
</table>
<table width=377 cellspacing=0 cellpadding=0>
<tr>
<td width=23>
<td>
<spacer type=vertical height=15><br>
<a selected href="http://www.socialnet.com"><b>SocialNet</b>
</a><br>
<font size=-1>Network Online. Romance, hobbies, business</font>
<p>
<a selected href="http://www.matchmaker.com"><b>Matchmaker.com</b>
</a><br>
<font size=-1>Internet dating service. Free trial</font>
<p>
<a selected href="http://www.one-and-only.com"><b>One and Only</b>
</a><br>
<font size=-1>Huge database of free personal ads. Searches</font>
<p>
<a selected href="http://www.gettingreal.com"><b>Getting Real</b>
</a><br>
<font size=-1>Teen channel with an edge. Chat</font>
<p>
<a selected href="http://www.bolt.com"><b>Bolt</b>
</a><br>
<font size=-1>For teens. Articles, reviews & more</font>
<p>
<a selected href="http://www.myfuture.com"><b>My Future</b>
</a><br>
<font size=-1>Teen center on finances, careers & more</font>
<p>
<a selected href="http://www.seniornet.com"><b>SeniorNet</b>
</a><br>
<font size=-1>Introduction to technology & the Internet</font>
<p>
<a selected href="http://www.thirdage.com"><b>Third Age</b>
</a><br>
<font size=-1>A community for grown-ups on the Web</font>
<p>
<a selected href="http://www.seniorliving.com"><b>Senior Living</b>
</a><br>
<font size=-1>Designed for retirees. Good links resource</font>
<p>
<a selected href="http://www.elderhostel.org"><b>Elderhostel</b>
</a><br>
<font size=-1>Travel & education for folks 55 & older</font>
<p>
<a selected href="http://www.aarp.org"><b>AARP</b>
</a><br>
<font size=-1>Consumer info & free e-mail newsletter</font>
<p>
<a selected href="http://www.planetout.com"><b>PlanetOut</b>
</a><br>
<font size=-1>Gay/lesbian/alternativie lifestyle magazine</font>
<p>
<a selected href="http://www.the-park.com"><b>The Park</b>
</a><br>
<font size=-1>A full-service Web community. Chat, e-mail</font>
<p>
<td width=15>
</table>
<td width=166 valign=top gradcolor=#858779 bgcolor=#0B0D3A gradangle=0>
<spacer type=vertical height=5>
<table border=0 cellspacing=0 cellpadding=0 width=166 height=21>
<tr>
<td gradcolor=#858779 bgcolor=#0C0C1B gradangle=90>&nbsp;<font color=#CCCCB5><blackface>Related Links</blackface></font>
</table>
<table border=0 cellspacing=0 cellpadding=0>
<tr>
<td height=5 colspan=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=wtv-center:/community?info=Romance><font color=#FFFFFF size=-1>Chat &amp; discuss</font></a>
<tr>
<td colspan=2 height=2>
</table>
<spacer type=vertical height=15>
<table width=166 border=0 cellspacing=0 cellpadding=0>
</table>
<spacer type=vertical height=15>
<table border=0 cellspacing=0 cellpadding=0 width=166 height=21>
<tr>
<td gradcolor=#858779 bgcolor=#0C0C1B gradangle=90>&nbsp;<font color=#CCCCB5><blackface>Things to try</blackface></font>
</table>
<table border=0 cellspacing=0 cellpadding=0>
<tr>
<td height=5 colspan=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=http://www.relationships.com><font color=#FFFFFF size=-1>Find a date</font></a>
<tr>
<td colspan=2 height=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=wtv-author:/welcome><font color=#FFFFFF size=-1>Build a web page</font></a>
<tr>
<td colspan=2 height=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=wtv-chat:/chat><font color=#FFFFFF size=-1>Chat with friends</font></a>
<tr>
<td colspan=2 height=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=http://www.whowhere.com/tv><font color=#FFFFFF size=-1>Look up friends</font></a>
<tr>
<td colspan=2 height=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=wtv-news:/lobby><font color=#FFFFFF size=-1>Join discussion groups</font></a>
<tr>
<td colspan=2 height=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=wtv-Center:/time-savers><font color=#FFFFFF size=-1>More to try...</font></a>
<tr>
<td colspan=2 height=2>
</table>
</table>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=17 bgcolor=#0B0D3A>
<td>
<spacer type=vertical height=10><br>
<table cellspacing=0 cellpadding=0>
<tr>
<td>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=377 height=26 gradcolor=#858779 bgcolor=#565760 gradangle=90><spacer type=horizontal width=23><img src='wtv-center:/images/search_other.gif'>
</table>
<td width=166><img src='wtv-center:/images/infoseek.gif'>
</table>
<spacer type=vertical height=10><br>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=23>
<td>
<table border=0>
<tr>
<td><blackface>Type a word, phrase or web address</blackface>
<tr>
<td>
<form action="wtv-center:search" method="get">
<input name="search-string" nextDown="browseTheWeb" bgcolor=444444 text=ffdd33 cursor=#cc9933 value="" SIZE=35><spacer type=horizontal width=20><font color=E7CE4A><shadow><input type=submit borderimage="file://ROM/Borders/ButtonBorder2.bif" value="Search" usestyle></shadow></font><br>
</form>
<tr>
<td><font size=-1>For best results, be specific. <a href="wtv-guide:/help?topic=Search&subtopic=Tips&BackToName=Search">More search tips</a></font>
</table>
</table>
<spacer type=vertical height=10><br>
</table>
<table cellspacing=0 cellpadding=0 width=560 height=8>
<tr>
<td width=17 bgcolor=#0B0D3A>
<td width=8><img src="wtv-center:/images/CornerBottomLeftSearch.gif" width=8 height=8>
<td width=535>
</table>
<table border=0 cellspacing=0 cellpadding=0 width=560 height=100 bgcolor=#0B0D3A>	<tr>
<td width=17>
</body>
</HTML>
`;

        break;

    case "Kids":
        data = `<HTML>
<head>
<title>Search Kids</title>
</head>
<display fontsize=medium showwhencomplete>
<body hspace=0 vspace=0 bgcolor=#0B0D3A text=#000000 link=#0B0D3A vlink=#0B0D3A novtilebg>
<wtvnoscript>
<table cellspacing=0 cellpadding=0 bgcolor=#858779>
<tr>
<td>
<table cellspacing=0 cellpadding=0 width=560 height=80 background="wtv-center:/images/SearchCategoryBG.jpg">
<tr>
<td width=106 align=center href='wtv-tricks:/home' insetselection>
<img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width=87 height=67>
<spacer type=horizontal width=105><td><spacer type=vertical height=62>
<img src="wtv-center:/images/search_kids_h.gif">
<td width=288 valign=top>
</table>
<table width=560 cellspacing=0 cellpadding=0>
<tr>
<td width=17 bgcolor=#0B0D3A>
<td width=377>
<table cellspacing=0 cellpadding=0 width=377 height=8>
<tr>
<td width=8><img src="wtv-center:/images/CornerTopLeftSearchHome.gif" width=8 height=8>
<td width=352>
</table>
&nbsp;<br>	<table border=0 cellspacing=0 cellpadding=2>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/?sv=W3"></a>
</table>
<spacer type=vertical height=15><br>
<table border=0 cellspacing=0 cellpadding=0 height=31 width=382>
<tr>
<td>
<spacer type=horizontal width=23><blackface>Featured Kids Sites</blackface>
</table>
<table width=377 cellspacing=0 cellpadding=0>
<tr>
<td width=23>
<td>
<spacer type=vertical height=15><br>
<td width=15>
</table>
<td width=166 valign=top gradcolor=#858779 bgcolor=#0B0D3A gradangle=0>
<spacer type=vertical height=5>
<table width=166 border=0 cellspacing=0 cellpadding=0>
</table>
<spacer type=vertical height=15>
</table>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=17 bgcolor=#0B0D3A>
<td>
<spacer type=vertical height=10><br>
<table cellspacing=0 cellpadding=0>
<tr>
<td>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=377 height=26 gradcolor=#858779 bgcolor=#565760 gradangle=90><spacer type=horizontal width=23><img src='wtv-center:/images/search_other.gif'>
</table>
<td width=166><img src='wtv-center:/images/infoseek.gif'>
</table>
<spacer type=vertical height=10><br>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=23>
<td>
<table border=0>
<tr>
<td><blackface>Type a word, phrase or web address</blackface>
<tr>
<td>
<form action="wtv-center:search" method="get">
<input name="search-string" nextDown="browseTheWeb" bgcolor=444444 text=ffdd33 cursor=#cc9933 value="" SIZE=35><spacer type=horizontal width=20><font color=E7CE4A><shadow><input type=submit borderimage="file://ROM/Borders/ButtonBorder2.bif" value="Search" usestyle></shadow></font><br>
</form>
<tr>
<td><font size=-1>For best results, be specific. <a href="wtv-guide:/help?topic=Search&subtopic=Tips&BackToName=Search">More search tips</a></font>
</table>
</table>
<spacer type=vertical height=10><br>
</table>
<table cellspacing=0 cellpadding=0 width=560 height=8>
<tr>
<td width=17 bgcolor=#0B0D3A>
<td width=8><img src="wtv-center:/images/CornerBottomLeftSearch.gif" width=8 height=8>
<td width=535>
</table>
<table border=0 cellspacing=0 cellpadding=0 width=560 height=100 bgcolor=#0B0D3A>	<tr>
<td width=17>
</body>
</HTML>
`;

        break;

    case "Games":
        data = `<HTML>
<head>
<title>Search Games</title>
</head>
<display fontsize=medium showwhencomplete>
<body hspace=0 vspace=0 bgcolor=#0B0D3A text=#000000 link=#0B0D3A vlink=#0B0D3A novtilebg>
<wtvnoscript>
<table cellspacing=0 cellpadding=0 bgcolor=#858779>
<tr>
<td>
<table cellspacing=0 cellpadding=0 width=560 height=80 background="wtv-center:/images/SearchCategoryBG.jpg">
<tr>
<td width=106 align=center href='wtv-tricks:/home' insetselection>
<img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width=87 height=67>
<spacer type=horizontal width=105><td><spacer type=vertical height=62>
<img src="wtv-center:/images/search_games_h.gif">
<td width=288 valign=top>
</table>
<table width=560 cellspacing=0 cellpadding=0>
<tr>
<td width=17 bgcolor=#0B0D3A>
<td width=377>
<table cellspacing=0 cellpadding=0 width=377 height=8>
<tr>
<td width=8><img src="wtv-center:/images/CornerTopLeftSearchHome.gif" width=8 height=8>
<td width=352>
</table>
&nbsp;<br>	<table border=0 cellspacing=0 cellpadding=2>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Entertainment/Games/Billiards_and_pool?sv=W3">Billiards</a>
<td width=15>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Entertainment/Games/Game_magazines?sv=W3">Magazines</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Entertainment/Games/Classic_games?sv=W3">Classic</a>
<td width=15>	<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Entertainment/Games/Play_by_mail_and_e_mail_games?sv=W3">Play by mail</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Entertainment/Games/Contests?sv=W3">Contests</a>
<td width=15>	<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Entertainment/Games/Puzzles?sv=W3">Puzzles</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Entertainment/Games/Fantasy_Sports?sv=W3">Fantasy Sports</a>
<td width=15>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Entertainment/Games/Role_playing_games?sv=W3">Role-playing</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Entertainment/Games/Gambling?sv=W3">Gambling</a>
<td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Entertainment/Games/Toys_and_games?sv=W3">Toys</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Entertainment/Games/Lottery?sv=W3">Lottery</a>
<td width=15>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Entertainment/Games/Trivia?sv=W3">Trivia</a>
</table>
<spacer type=vertical height=15><br>
<table border=0 cellspacing=0 cellpadding=0 height=31 width=382>
<tr>
<td gradcolor=#858779 bgcolor=#565760 gradangle=90>
<spacer type=horizontal width=23><blackface>Featured Games Sites</blackface>
</table>
<table width=377 cellspacing=0 cellpadding=0>
<tr>
<td width=23>
<td>
<spacer type=vertical height=15><br>
<td width=15>
</table>
<td width=166 valign=top gradcolor=#858779 bgcolor=#0B0D3A gradangle=0>
<spacer type=vertical height=5>
<table border=0 cellspacing=0 cellpadding=0 width=166 height=21>
<tr>
<td gradcolor=#858779 bgcolor=#0C0C1B gradangle=90>&nbsp;<font color=#CCCCB5><blackface>Games Links</blackface></font>
</table>
<table border=0 cellspacing=0 cellpadding=0>
<tr>
<td height=5 colspan=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=wtv-center:/center?info=Games><font color=#FFFFFF size=-1>WebTV Games</font></a>
<tr>
<td colspan=2 height=2>
</table>
<spacer type=vertical height=15>
<table width=166 border=0 cellspacing=0 cellpadding=0>
</table>
<spacer type=vertical height=15>
</table>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=17 bgcolor=#0B0D3A>
<td>
<spacer type=vertical height=10><br>
<table cellspacing=0 cellpadding=0>
<tr>
<td>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=377 height=26 gradcolor=#858779 bgcolor=#565760 gradangle=90><spacer type=horizontal width=23><img src='wtv-center:/images/search_other.gif'>
</table>
<td width=166><img src='wtv-center:/images/infoseek.gif'>
</table>
<spacer type=vertical height=10><br>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=23>
<td>
<table border=0>
<tr>
<td><blackface>Type a word, phrase or web address</blackface>
<tr>
<td>
<form action="wtv-center:search" method="get">
<input name="search-string" nextDown="browseTheWeb" bgcolor=444444 text=ffdd33 cursor=#cc9933 value="" SIZE=35><spacer type=horizontal width=20><font color=E7CE4A><shadow><input type=submit borderimage="file://ROM/Borders/ButtonBorder2.bif" value="Search" usestyle></shadow></font><br>
</form>
<tr>
<td><font size=-1>For best results, be specific. <a href="wtv-guide:/help?topic=Search&subtopic=Tips&BackToName=Search">More search tips</a></font>
</table>
</table>
<spacer type=vertical height=10><br>
</table>
<table cellspacing=0 cellpadding=0 width=560 height=8>
<tr>
<td width=17 bgcolor=#0B0D3A>
<td width=8><img src="wtv-center:/images/CornerBottomLeftSearch.gif" width=8 height=8>
<td width=535>
</table>
<table border=0 cellspacing=0 cellpadding=0 width=560 height=100 bgcolor=#0B0D3A>	<tr>
<td width=17>
</body>
</HTML>
`;

        break;

    case "Learning":
        data = `<HTML>
<head>
<title>Search Learning</title>
</head>
<display fontsize=medium showwhencomplete>
<body hspace=0 vspace=0 bgcolor=#0B0D3A text=#000000 link=#0B0D3A vlink=#0B0D3A novtilebg>
<wtvnoscript>
<table cellspacing=0 cellpadding=0 bgcolor=#858779>
<tr>
<td>
<table cellspacing=0 cellpadding=0 width=560 height=80 background="wtv-center:/images/SearchCategoryBG.jpg">
<tr>
<td width=106 align=center href='wtv-tricks:/home' insetselection>
<img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width=87 height=67>
<spacer type=horizontal width=105><td><spacer type=vertical height=62>
<img src="wtv-center:/images/search_learning_h.gif">
<td width=288 valign=top>
</table>
<table width=560 cellspacing=0 cellpadding=0>
<tr>
<td width=17 bgcolor=#0B0D3A>
<td width=377>
<table cellspacing=0 cellpadding=0 width=377 height=8>
<tr>
<td width=8><img src="wtv-center:/images/CornerTopLeftSearchHome.gif" width=8 height=8>
<td width=352>
</table>
&nbsp;<br>	<table border=0 cellspacing=0 cellpadding=2>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Education/Adult_education?sv=W3">Adult education</a>
<td width=15>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Education/Internet_for_schools?sv=W3">Internet</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Education/Colleges_and_universities?sv=W3">Colleges</a>
<td width=15>	<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Education/K_12_education?sv=W3">K-12 Schools</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Education/Early_childhood_and_preschool_education?sv=W3">Early Childhood</a>
<td width=15>	<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Education/Libraries?sv=W3">Libraries</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Education/Reference/Encyclopedias?sv=W3">Encyclopedias</a>
<td width=15>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Education/Reference?sv=W3">Reference</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Education/Home_schooling?sv=W3">Home Schooling</a>
<td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Education/Teaching_and_learning?sv=W3">Teaching &amp; Learning</a>
</table>
<spacer type=vertical height=15><br>
<table border=0 cellspacing=0 cellpadding=0 height=31 width=382>
<tr>
<td gradcolor=#858779 bgcolor=#565760 gradangle=90>
<spacer type=horizontal width=23><blackface>Featured Learning Sites</blackface>
</table>
<table width=377 cellspacing=0 cellpadding=0>
<tr>
<td width=23>
<td>
<spacer type=vertical height=15><br>
<td width=15>
</table>
<td width=166 valign=top gradcolor=#858779 bgcolor=#0B0D3A gradangle=0>
<spacer type=vertical height=5>
<table width=166 border=0 cellspacing=0 cellpadding=0>
</table>
<spacer type=vertical height=15>
</table>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=17 bgcolor=#0B0D3A>
<td>
<spacer type=vertical height=10><br>
<table cellspacing=0 cellpadding=0>
<tr>
<td>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=377 height=26 gradcolor=#858779 bgcolor=#565760 gradangle=90><spacer type=horizontal width=23><img src='wtv-center:/images/search_other.gif'>
</table>
<td width=166><img src='wtv-center:/images/infoseek.gif'>
</table>
<spacer type=vertical height=10><br>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=23>
<td>
<table border=0>
<tr>
<td><blackface>Type a word, phrase or web address</blackface>
<tr>
<td>
<form action="wtv-center:search" method="get">
<input name="search-string" nextDown="browseTheWeb" bgcolor=444444 text=ffdd33 cursor=#cc9933 value="" SIZE=35><spacer type=horizontal width=20><font color=E7CE4A><shadow><input type=submit borderimage="file://ROM/Borders/ButtonBorder2.bif" value="Search" usestyle></shadow></font><br>
</form>
<tr>
<td><font size=-1>For best results, be specific. <a href="wtv-guide:/help?topic=Search&subtopic=Tips&BackToName=Search">More search tips</a></font>
</table>
</table>
<spacer type=vertical height=10><br>
</table>
<table cellspacing=0 cellpadding=0 width=560 height=8>
<tr>
<td width=17 bgcolor=#0B0D3A>
<td width=8><img src="wtv-center:/images/CornerBottomLeftSearch.gif" width=8 height=8>
<td width=535>
</table>
<table border=0 cellspacing=0 cellpadding=0 width=560 height=100 bgcolor=#0B0D3A>	<tr>
<td width=17>
</body>
</HTML>
`;

        break;

    case "Sports":
        data = `<HTML>
<head>
<title>Search Sports</title>
</head>
<display fontsize=medium showwhencomplete>
<body hspace=0 vspace=0 bgcolor=#0B0D3A text=#000000 link=#0B0D3A vlink=#0B0D3A novtilebg>
<wtvnoscript>
<table cellspacing=0 cellpadding=0 bgcolor=#858779>
<tr>
<td>
<table cellspacing=0 cellpadding=0 width=560 height=80 background="wtv-center:/images/SearchCategoryBG.jpg">
<tr>
<td width=106 align=center href='wtv-tricks:/home' insetselection>
<img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width=87 height=67>
<spacer type=horizontal width=105><td><spacer type=vertical height=62>
<img src="wtv-center:/images/search_sports_h.gif">
<td width=288 valign=top>
</table>
<table width=560 cellspacing=0 cellpadding=0>
<tr>
<td width=17 bgcolor=#0B0D3A>
<td width=377>
<table cellspacing=0 cellpadding=0 width=377 height=8>
<tr>
<td width=8><img src="wtv-center:/images/CornerTopLeftSearchHome.gif" width=8 height=8>
<td width=352>
</table>
&nbsp;<br>	<table border=0 cellspacing=0 cellpadding=2>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Sports/Baseball?sv=W3">Baseball</a>
<td width=15>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Sports/Motor_sports?sv=W3">Motor sports</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Sports/Basketball?sv=W3">Basketball</a>
<td width=15>	<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Sports/Outdoor_sports?sv=W3">Outdoor sports</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Sports/College_sports?sv=W3">College sports</a>
<td width=15>	<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Sports/Soccer?sv=W3">Soccer</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Sports/Football?sv=W3">Football</a>
<td width=15>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Sports/Tennis?sv=W3">Tennis</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Sports/Golf?sv=W3">Golf</a>
<td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Sports/Womens_sports?sv=W3">Women's sports</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Sports/Hockey?sv=W3">Hockey</a>
<td width=15>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Sports/A_to_Z_sports/P_Z/Wrestling?sv=W3">Wrestling</a>
</table>
<spacer type=vertical height=15><br>
<table border=0 cellspacing=0 cellpadding=0 height=31 width=382>
<tr>
<td gradcolor=#858779 bgcolor=#565760 gradangle=90>
<spacer type=horizontal width=23><blackface>Featured Sports Sites</blackface>
</table>
<table width=377 cellspacing=0 cellpadding=0>
<tr>
<td width=23>
<td>
<spacer type=vertical height=15><br>
<td width=15>
</table>
<td width=166 valign=top gradcolor=#858779 bgcolor=#0B0D3A gradangle=0>
<spacer type=vertical height=5>
<table border=0 cellspacing=0 cellpadding=0 width=166 height=21>
<tr>
<td gradcolor=#858779 bgcolor=#0C0C1B gradangle=90>&nbsp;<font color=#CCCCB5><blackface>Sports Links</blackface></font>
</table>
<table border=0 cellspacing=0 cellpadding=0>
<tr>
<td height=5 colspan=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=wtv-center:/center?info=Sports><font color=#FFFFFF size=-1>WebTV Sports</font></a>
<tr>
<td colspan=2 height=2>
</table>
<spacer type=vertical height=15>
<table width=166 border=0 cellspacing=0 cellpadding=0>
</table>
<spacer type=vertical height=15>
</table>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=17 bgcolor=#0B0D3A>
<td>
<spacer type=vertical height=10><br>
<table cellspacing=0 cellpadding=0>
<tr>
<td>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=377 height=26 gradcolor=#858779 bgcolor=#565760 gradangle=90><spacer type=horizontal width=23><img src='wtv-center:/images/search_other.gif'>
</table>
<td width=166><img src='wtv-center:/images/infoseek.gif'>
</table>
<spacer type=vertical height=10><br>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=23>
<td>
<table border=0>
<tr>
<td><blackface>Type a word, phrase or web address</blackface>
<tr>
<td>
<form action="wtv-center:search" method="get">
<input name="search-string" nextDown="browseTheWeb" bgcolor=444444 text=ffdd33 cursor=#cc9933 value="" SIZE=35><spacer type=horizontal width=20><font color=E7CE4A><shadow><input type=submit borderimage="file://ROM/Borders/ButtonBorder2.bif" value="Search" usestyle></shadow></font><br>
</form>
<tr>
<td><font size=-1>For best results, be specific. <a href="wtv-guide:/help?topic=Search&subtopic=Tips&BackToName=Search">More search tips</a></font>
</table>
</table>
<spacer type=vertical height=10><br>
</table>
<table cellspacing=0 cellpadding=0 width=560 height=8>
<tr>
<td width=17 bgcolor=#0B0D3A>
<td width=8><img src="wtv-center:/images/CornerBottomLeftSearch.gif" width=8 height=8>
<td width=535>
</table>
<table border=0 cellspacing=0 cellpadding=0 width=560 height=100 bgcolor=#0B0D3A>	<tr>
<td width=17>
</body>
</HTML>
`;

        break;

    case "Health":
    case "Health&fitness":
        data = `<HTML>
<head>
<title>Search Health &amp; Fitness</title>
</head>
<display fontsize=medium showwhencomplete>
<body hspace=0 vspace=0 bgcolor=#0B0D3A text=#000000 link=#0B0D3A vlink=#0B0D3A novtilebg>
<wtvnoscript>
<table cellspacing=0 cellpadding=0 bgcolor=#858779>
<tr>
<td>
<table cellspacing=0 cellpadding=0 width=560 height=80 background="wtv-center:/images/SearchCategoryBG.jpg">
<tr>
<td width=106 align=center href='wtv-tricks:/home' insetselection>
<img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width=87 height=67>
<spacer type=horizontal width=108><td><spacer type=vertical height=62>
<img src="wtv-center:/images/search_health_fitness_h.gif">
<td width=288 valign=top>
</table>
<table width=560 cellspacing=0 cellpadding=0>
<tr>
<td width=17 bgcolor=#0B0D3A>
<td width=377>
<table cellspacing=0 cellpadding=0 width=377 height=8>
<tr>
<td width=8><img src="wtv-center:/images/CornerTopLeftSearchHome.gif" width=8 height=8>
<td width=352>
</table>
&nbsp;<br>	<table border=0 cellspacing=0 cellpadding=2>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Health/Alternative_medicine?sv=W3">Alternative Medicine</a>
<td width=15>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Health/Health_insurance?sv=W3">Insurance</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Health/Diseases_and_ailments?sv=W3">Diseases &amp; Ailments</a>
<td width=15>	<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Health/Mental_health?sv=W3">Mental Health</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Health/Drugs_and_health_products?sv=W3">Drugs&nbsp;</a>
<td width=15>	<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Health/Nutrition?sv=W3">Nutrition</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Health/Family_health?sv=W3">Family Health</a>
<td width=15>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Health/Health_reference?sv=W3">Reference Desk</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Health/Fitness?sv=W3">Fitness</a>
<td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Health/Sexual_health?sv=W3">Sexual Health</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Health/Health_advice?sv=W3">Health Advice</a>
<td width=15>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Health/Support_groups?sv=W3">Support Groups</a>
</table>
<spacer type=vertical height=15><br>
<table border=0 cellspacing=0 cellpadding=0 height=31 width=382>
<tr>
<td gradcolor=#858779 bgcolor=#565760 gradangle=90>
<spacer type=horizontal width=23><blackface>Featured Health &amp; Fitness Sites</blackface>
</table>
<table width=377 cellspacing=0 cellpadding=0>
<tr>
<td width=23>
<td>
<spacer type=vertical height=15><br>
<a selected href="http://www.onhealth.com"><b>OnHealth</b>
</a><br>
<font size=-1>Conditions & treatments. A-Z database</font>
<p>
<a selected href="http://healthyideas.com"><b>Healthy Ideas</b>
</a><br>
<font size=-1>Daily guide to healthy living, fitness & diet</font>
<p>
<a selected href="http://www.cmhc.com"><b>Mental Health Net</b>
</a><br>
<font size=-1>Online mental health resources, news & chat</font>
<p>
<a selected href="http://www.thirdage.com/family/caregiving/"><b>ThirdAge Caregiving Center</b>
</a><br>
<font size=-1>Caring for a Senior relative? Resources, more</font>
<p>
<a selected href="http://www.mayohealth.org"><b>Mayo Clinic</b>
</a><br>
<font size=-1>Latest health info from the renowned Clinic</font>
<p>
<a selected href="http://cgi.pathfinder.com/drweil/"><b>Ask Dr Weil</b>
</a><br>
<font size=-1>Answers from the popular physician & author</font>
<p>
<a selected href="http://www.fitnesslink.com/"><b>Fitness Link</b>
</a><br>
<font size=-1>Complete fitness resource. Q&A, news & more</font>
<p>
<a selected href="http://www.hcfa.gov/"><b>HCFA - Medicare & Medicaid Agency</b>
</a><br>
<font size=-1>Latest news on Medicare & Medicaid coverage</font>
<p>
<a selected href="http://americanheart.org"><b>American Heart Association</b>
</a><br>
<font size=-1>Guide to heart health and heart disease</font>
<p>
<a selected href="http://www.bluecares.com/"><b>Blue Cross & Blue Shield</b>
</a><br>
<font size=-1>Info on health insurance, benefits, providers</font>
<p>
<a selected href="http://www.thriveonline.com/shape/"><b>thrive@shape</b>
</a><br>
<font size=-1>Fitness advice. Tips on health subjects</font>
<p>
<a selected href="http://www.mensfitness.com/"><b>Men's Fitness Magazine</b>
</a><br>
<font size=-1>Workouts, nutrition, training, sex & more</font>
<p>
<td width=15>
</table>
<td width=166 valign=top gradcolor=#858779 bgcolor=#0B0D3A gradangle=0>
<spacer type=vertical height=5>
<table border=0 cellspacing=0 cellpadding=0 width=166 height=21>
<tr>
<td gradcolor=#858779 bgcolor=#0C0C1B gradangle=90>&nbsp;<font color=#CCCCB5><blackface>Related Links</blackface></font>
</table>
<table border=0 cellspacing=0 cellpadding=0>
<tr>
<td height=5 colspan=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=wtv-center:/center?info=Health><font color=#FFFFFF size=-1>WebTV Health</font></a>
<tr>
<td colspan=2 height=2>
</table>
<spacer type=vertical height=15>
<table width=166 border=0 cellspacing=0 cellpadding=0>
</table>
<spacer type=vertical height=15>
<table border=0 cellspacing=0 cellpadding=0 width=166 height=21>
<tr>
<td gradcolor=#858779 bgcolor=#0C0C1B gradangle=90>&nbsp;<font color=#CCCCB5><blackface>Things to try</blackface></font>
</table>
<table border=0 cellspacing=0 cellpadding=0>
<tr>
<td height=5 colspan=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=http://yp111.superpages.com/cats/browse/search.phtml?SRC=msn&STYPE=S&PG=L&N=&T=&S=&CB=1&C=Physicians&cb1=&cbf1=&cbdt=Doctors><font color=#FFFFFF size=-1>Find a doctor</font></a>
<tr>
<td colspan=2 height=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=http://my.webmd.com/topic_summary/1592><font color=#FFFFFF size=-1>Get diet tips</font></a>
<tr>
<td colspan=2 height=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=http://moneycentral.msn.com/insure/home.asp><font color=#FFFFFF size=-1>Find insurance</font></a>
<tr>
<td colspan=2 height=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=http://content.health.msn.com/library_overview><font color=#FFFFFF size=-1>Medical library</font></a>
<tr>
<td colspan=2 height=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=http://content.health.msn.com/health-e-tools><font color=#FFFFFF size=-1>Health-e-Meters</font></a>
<tr>
<td colspan=2 height=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=wtv-Center:/time-savers><font color=#FFFFFF size=-1>More to try...</font></a>
<tr>
<td colspan=2 height=2>
</table>
</table>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=17 bgcolor=#0B0D3A>
<td>
<spacer type=vertical height=10><br>
<table cellspacing=0 cellpadding=0>
<tr>
<td>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=377 height=26 gradcolor=#858779 bgcolor=#565760 gradangle=90><spacer type=horizontal width=23><img src='wtv-center:/images/search_other.gif'>
</table>
<td width=166><img src='wtv-center:/images/infoseek.gif'>
</table>
<spacer type=vertical height=10><br>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=23>
<td>
<table border=0>
<tr>
<td><blackface>Type a word, phrase or web address</blackface>
<tr>
<td>
<form action="wtv-center:search" method="get">
<input name="search-string" nextDown="browseTheWeb" bgcolor=444444 text=ffdd33 cursor=#cc9933 value="" SIZE=35><spacer type=horizontal width=20><font color=E7CE4A><shadow><input type=submit borderimage="file://ROM/Borders/ButtonBorder2.bif" value="Search" usestyle></shadow></font><br>
</form>
<tr>
<td><font size=-1>For best results, be specific. <a href="wtv-guide:/help?topic=Search&subtopic=Tips&BackToName=Search">More search tips</a></font>
</table>
</table>
<spacer type=vertical height=10><br>
</table>
<table cellspacing=0 cellpadding=0 width=560 height=8>
<tr>
<td width=17 bgcolor=#0B0D3A>
<td width=8><img src="wtv-center:/images/CornerBottomLeftSearch.gif" width=8 height=8>
<td width=535>
</table>
<table border=0 cellspacing=0 cellpadding=0 width=560 height=100 bgcolor=#0B0D3A>	<tr>
<td width=17>
</body>
</HTML>
`;

        break;

    case "Money":
        data = `<HTML>
<head>
<title>Search Money</title>
</head>
<display fontsize=medium showwhencomplete>
<body hspace=0 vspace=0 bgcolor=#0B0D3A text=#000000 link=#0B0D3A vlink=#0B0D3A novtilebg>
<wtvnoscript>
<table cellspacing=0 cellpadding=0 bgcolor=#858779>
<tr>
<td>
<table cellspacing=0 cellpadding=0 width=560 height=80 background="wtv-center:/images/SearchCategoryBG.jpg">
<tr>
<td width=106 align=center href='wtv-tricks:/home' insetselection>
<img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width=87 height=67>
<spacer type=horizontal width=108><td><spacer type=vertical height=62>
<img src="wtv-center:/images/search_money_h.gif">
<td width=288 valign=top>
</table>
<table width=560 cellspacing=0 cellpadding=0>
<tr>
<td width=17 bgcolor=#0B0D3A>
<td width=377>
<table cellspacing=0 cellpadding=0 width=377 height=8>
<tr>
<td width=8><img src="wtv-center:/images/CornerTopLeftSearchHome.gif" width=8 height=8>
<td width=352>
</table>
&nbsp;<br>	<table border=0 cellspacing=0 cellpadding=2>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Money/Banking?sv=W3">Banking &amp; Lending</a>
<td width=15>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Money/Investing?sv=W3">Investing</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Money/Bonds?sv=W3">Bonds</a>
<td width=15>	<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Money/Mutual_funds?sv=W3">Mutual funds</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Money/Financial_planning?sv=W3">Financial planning</a>
<td width=15>	<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Money/Stocks?sv=W3">Stocks</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Money/Insurance?sv=W3">Insurance</a>
<td width=15>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Money/Taxes?sv=W3">Taxes</a>
</table>
<spacer type=vertical height=15><br>
<table border=0 cellspacing=0 cellpadding=0 height=31 width=382>
<tr>
<td gradcolor=#858779 bgcolor=#565760 gradangle=90>
<spacer type=horizontal width=23><blackface>Featured Money Sites</blackface>
</table>
<table width=377 cellspacing=0 cellpadding=0>
<tr>
<td width=23>
<td>
<spacer type=vertical height=15><br>
<a selected href="http://www.fool.com"><b>Motley Fool</b>
</a><br>
<font size=-1>Great starting place for new investors</font>
<p>
<a selected href="http://www.morningstar.com"><b>MorningStar</b>
</a><br>
<font size=-1>Specialized mutual fund education & investing</font>
<p>
<a selected href="http://www.money.com"><b>Money Magazine</b>
</a><br>
<font size=-1>Personal money management tools, articles</font>
<p>
<a selected href="http://moneycentral.msn.com/"><b>MoneyCentral Investor</b>
</a><br>
<font size=-1>Online trading, stock quotes & more</font>
<p>
<a selected href="http://www.ameritrade.com/"><b>Ameritrade</b>
</a><br>
<font size=-1>Trade stocks, mutual funds & bonds. Secure</font>
<p>
<a selected href="http://wellsfargo.com/home/"><b>Wells Fargo</b>
</a><br>
<font size=-1>Online banking. Pay bills, make transfers</font>
<p>
<a selected href="http://www.etrade.com/"><b>E*Trade</b>
</a><br>
<font size=-1>Stock quotes and online transactions. Easy</font>
<p>
<a selected href="http://www.bankrate.com"><b>Bank Rate Monitor</b>
</a><br>
<font size=-1>Credit card deals & interest rates. Free</font>
<p>
<a selected href="http://www.insweb.com"><b>InsWeb</b>
</a><br>
<font size=-1>One stop for insurance rates & quotes</font>
<p>
<a selected href="http://www.homeadvisor.msn.com"><b>HomeAdvisor</b>
</a><br>
<font size=-1>Shop for your new home. Financing & listings</font>
<p>
<a selected href="http://www.bankamerica.com"><b>Bank of America</b>
</a><br>
<font size=-1>U.S. economy info. Tips about your money</font>
<p>
<a selected href="http://www.americanexpress.com/homepage/personal.shtml"><b>American Express</b>
</a><br>
<font size=-1>Online credit application. Business & travel</font>
<p>
<a selected href="http://finance.yahoo.com"><b>Yahoo!Finance</b>
</a><br>
<font size=-1>Late-breaking market news. Tax support</font>
<p>
<a selected href="http://cbs.marketwatch.com/news/newsroom.htx"><b>CBS MarketWatch</b>
</a><br>
<font size=-1>Get 10 quotes at once. Market analyses</font>
<p>
<td width=15>
</table>
<td width=166 valign=top gradcolor=#858779 bgcolor=#0B0D3A gradangle=0>
<spacer type=vertical height=5>
<table border=0 cellspacing=0 cellpadding=0 width=166 height=21>
<tr>
<td gradcolor=#858779 bgcolor=#0C0C1B gradangle=90>&nbsp;<font color=#CCCCB5><blackface>Money Links</blackface></font>
</table>
<table border=0 cellspacing=0 cellpadding=0>
<tr>
<td height=5 colspan=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=wtv-center:/center?info=content/Money/Money&base=center/Money/MoneyBase.tmpl><font color=#FFFFFF size=-1>WebTV Money</font></a>
<tr>
<td colspan=2 height=2>
</table>
<spacer type=vertical height=15>
<table width=166 border=0 cellspacing=0 cellpadding=0>
</table>
<spacer type=vertical height=15>
<table border=0 cellspacing=0 cellpadding=0 width=166 height=21>
<tr>
<td gradcolor=#858779 bgcolor=#0C0C1B gradangle=90>&nbsp;<font color=#CCCCB5><blackface>Things to try</blackface></font>
</table>
<table border=0 cellspacing=0 cellpadding=0>
<tr>
<td height=5 colspan=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=http://app1.firstusa.com/card.cfm/XEC89/6WVG><font color=#FFFFFF size=-1></font></a>
<tr>
<td colspan=2 height=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=wtv-explore2:/programming/tryit/tryit.onlinebanking.tmpl><font color=#FFFFFF size=-1>Bank online</font></a>
<tr>
<td colspan=2 height=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=><font color=#FFFFFF size=-1>Find a mutual fund</font></a>
<tr>
<td colspan=2 height=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=><font color=#FFFFFF size=-1>Find a new job</font></a>
<tr>
<td colspan=2 height=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=><font color=#FFFFFF size=-1>Get insurance</font></a>
<tr>
<td colspan=2 height=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=wtv-Center:/time-savers><font color=#FFFFFF size=-1>More to try...</font></a>
<tr>
<td colspan=2 height=2>
</table>
</table>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=17 bgcolor=#0B0D3A>
<td>
<spacer type=vertical height=10><br>
<table cellspacing=0 cellpadding=0>
<tr>
<td>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=377 height=26 gradcolor=#858779 bgcolor=#565760 gradangle=90><spacer type=horizontal width=23><img src='wtv-center:/images/search_other.gif'>
</table>
<td width=166><img src='wtv-center:/images/infoseek.gif'>
</table>
<spacer type=vertical height=10><br>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=23>
<td>
<table border=0>
<tr>
<td><blackface>Type a word, phrase or web address</blackface>
<tr>
<td>
<form action="wtv-center:search" method="get">
<input name="search-string" nextDown="browseTheWeb" bgcolor=444444 text=ffdd33 cursor=#cc9933 value="" SIZE=35><spacer type=horizontal width=20><font color=E7CE4A><shadow><input type=submit borderimage="file://ROM/Borders/ButtonBorder2.bif" value="Search" usestyle></shadow></font><br>
</form>
<tr>
<td><font size=-1>For best results, be specific. <a href="wtv-guide:/help?topic=Search&subtopic=Tips&BackToName=Search">More search tips</a></font>
</table>
</table>
<spacer type=vertical height=10><br>
</table>
<table cellspacing=0 cellpadding=0 width=560 height=8>
<tr>
<td width=17 bgcolor=#0B0D3A>
<td width=8><img src="wtv-center:/images/CornerBottomLeftSearch.gif" width=8 height=8>
<td width=535>
</table>
<table border=0 cellspacing=0 cellpadding=0 width=560 height=100 bgcolor=#0B0D3A>	<tr>
<td width=17>
</body>
</HTML>
`;

        break;

    case "Travel":
        data = `<HTML>
<head>
<title>Search Travel</title>
</head>
<display fontsize=medium showwhencomplete>
<body hspace=0 vspace=0 bgcolor=#0B0D3A text=#000000 link=#0B0D3A vlink=#0B0D3A novtilebg>
<wtvnoscript>
<table cellspacing=0 cellpadding=0 bgcolor=#858779>
<tr>
<td>
<table cellspacing=0 cellpadding=0 width=560 height=80 background="wtv-center:/images/SearchCategoryBG.jpg">
<tr>
<td width=106 align=center href='wtv-tricks:/home' insetselection>
<img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width=87 height=67>
<spacer type=horizontal width=108><td><spacer type=vertical height=62>
<img src="wtv-center:/images/search_travel_h.gif">
<td width=288 valign=top>
</table>
<table width=560 cellspacing=0 cellpadding=0>
<tr>
<td width=17 bgcolor=#0B0D3A>
<td width=377>
<table cellspacing=0 cellpadding=0 width=377 height=8>
<tr>
<td width=8><img src="wtv-center:/images/CornerTopLeftSearchHome.gif" width=8 height=8>
<td width=352>
</table>
&nbsp;<br>	<table border=0 cellspacing=0 cellpadding=2>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Travel/Air_travel?sv=W3">Air travel</a>
<td width=15>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Travel/Budget_travel?sv=W3">Money Savers</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Travel/Business_travel?sv=W3">Business travel</a>
<td width=15>	<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Travel/Places_to_visit?sv=W3">Places to visit</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Travel/Cruises?sv=W3">Cruises</a>
<td width=15>	<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Travel/Travelers_checklist?sv=W3">Travel checklist</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Travel/Lodging?sv=W3">Lodging</a>
<td width=15>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Travel/Travel_guides?sv=W3">Travel guides</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Travel/Maps?sv=W3">Maps</a>
<td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Travel/Vacationing_ideas?sv=W3">Vacation ideas</a>
</table>
<spacer type=vertical height=15><br>
<table border=0 cellspacing=0 cellpadding=0 height=31 width=382>
<tr>
<td gradcolor=#858779 bgcolor=#565760 gradangle=90>
<spacer type=horizontal width=23><blackface>Featured Travel Sites</blackface>
</table>
<table width=377 cellspacing=0 cellpadding=0>
<tr>
<td width=23>
<td>
<spacer type=vertical height=15><br>
<a selected href="http://www.travel.org/"><b>Travel.Org</b>
</a><br>
<font size=-1>Directory of travel sites</font>
<p>
<a selected href="http://www.fodors.com/"><b>Fodor's Travel Online</b>
</a><br>
<font size=-1>Guides, resources & forums by the publisher</font>
<p>
<a selected href="http://www.travelzoo.com/"><b>Travel Zoo</b>
</a><br>
<font size=-1>Airfare news. Discounts on flights, lodging</font>
<p>
<a selected href="http://www.bbchannel.com/"><b>Bed and Breakfast Channel</b>
</a><br>
<font size=-1>Search for bed & breakfast inns. Big database</font>
<p>
<a selected href="http://www.aaa.com/"><b>AAA</b>
</a><br>
<font size=-1>AAA's info on car care, travel & membership</font>
<p>
<a selected href="http://www.biztravel.com/"><b>BizTravel.com</b>
</a><br>
<font size=-1>Everything for the business traveler</font>
<p>
<a selected href="http://www.lonelyplanet.com/"><b>Lonely Planet</b>
</a><br>
<font size=-1>Reliabe & no-frills travel, worldwide</font>
<p>
<a selected href="http://www.amtrak.com/"><b>Amtrak</b>
</a><br>
<font size=-1>Train routes, schedules, fares & packages</font>
<p>
<a selected href="http://www.lowestfare.com/"><b>LowestFare.com</b>
</a><br>
<font size=-1>Search for lowest airfares & discount trips</font>
<p>
<a selected href="http://expedia.msn.com/"><b>MSN Expedia Travel</b>
</a><br>
<font size=-1>Full-service travel agent. Free guides & maps</font>
<p>
<a selected href="http://travel.epicurious.com/"><b>Epicurious Travel</b>
</a><br>
<font size=-1>Places to go, advice on what to see</font>
<p>
<a selected href="http://www.spectrav.com/"><b>Specialty Travel Index</b>
</a><br>
<font size=-1>Exotic adventure from 600+ travel operators</font>
<p>
<a selected href="http://travel.priceline.com/"><b>PriceLine</b>
</a><br>
<font size=-1>Bid on airline tickets. Popular, economical</font>
<p>
<a selected href="http://expedia.msn.com/etn/"><b>Travel Network</b>
</a><br>
<font size=-1>Best vacation options. Cruises, resorts, more</font>
<p>
<a selected href="http://www.aa.com/"><b>American Airlines</b>
</a><br>
<font size=-1>Book your trip online. Weekly special fares</font>
<p>
<td width=15>
</table>
<td width=166 valign=top gradcolor=#858779 bgcolor=#0B0D3A gradangle=0>
<spacer type=vertical height=5>
<table border=0 cellspacing=0 cellpadding=0 width=166 height=21>
<tr>
<td gradcolor=#858779 bgcolor=#0C0C1B gradangle=90>&nbsp;<font color=#CCCCB5><blackface>Travel Links</blackface></font>
</table>
<table border=0 cellspacing=0 cellpadding=0>
<tr>
<td height=5 colspan=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=wtv-center:/center?info=Travel><font color=#FFFFFF size=-1>WebTV Travel</font></a>
<tr>
<td colspan=2 height=2>
</table>
<spacer type=vertical height=15>
<table width=166 border=0 cellspacing=0 cellpadding=0>
</table>
<spacer type=vertical height=15>
<table border=0 cellspacing=0 cellpadding=0 width=166 height=21>
<tr>
<td gradcolor=#858779 bgcolor=#0C0C1B gradangle=90>&nbsp;<font color=#CCCCB5><blackface>Things to try</blackface></font>
</table>
<table border=0 cellspacing=0 cellpadding=0>
<tr>
<td height=5 colspan=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=><font color=#FFFFFF size=-1></font></a>
<tr>
<td colspan=2 height=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=><font color=#FFFFFF size=-1></font></a>
<tr>
<td colspan=2 height=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=><font color=#FFFFFF size=-1></font></a>
<tr>
<td colspan=2 height=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=http://www.mapquest.com><font color=#FFFFFF size=-1>Get a map</font></a>
<tr>
<td colspan=2 height=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=wtv-center:/center?info=AroundTown><font color=#FFFFFF size=-1>Get weather forecast</font></a>
<tr>
<td colspan=2 height=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=wtv-Center:/time-savers><font color=#FFFFFF size=-1>More to try...</font></a>
<tr>
<td colspan=2 height=2>
</table>
</table>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=17 bgcolor=#0B0D3A>
<td>
<spacer type=vertical height=10><br>
<table cellspacing=0 cellpadding=0>
<tr>
<td>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=377 height=26 gradcolor=#858779 bgcolor=#565760 gradangle=90><spacer type=horizontal width=23><img src='wtv-center:/images/search_other.gif'>
</table>
<td width=166><img src='wtv-center:/images/infoseek.gif'>
</table>
<spacer type=vertical height=10><br>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=23>
<td>
<table border=0>
<tr>
<td><blackface>Type a word, phrase or web address</blackface>
<tr>
<td>
<form action="wtv-center:search" method="get">
<input name="search-string" nextDown="browseTheWeb" bgcolor=444444 text=ffdd33 cursor=#cc9933 value="" SIZE=35><spacer type=horizontal width=20><font color=E7CE4A><shadow><input type=submit borderimage="file://ROM/Borders/ButtonBorder2.bif" value="Search" usestyle></shadow></font><br>
</form>
<tr>
<td><font size=-1>For best results, be specific. <a href="wtv-guide:/help?topic=Search&subtopic=Tips&BackToName=Search">More search tips</a></font>
</table>
</table>
<spacer type=vertical height=10><br>
</table>
<table cellspacing=0 cellpadding=0 width=560 height=8>
<tr>
<td width=17 bgcolor=#0B0D3A>
<td width=8><img src="wtv-center:/images/CornerBottomLeftSearch.gif" width=8 height=8>
<td width=535>
</table>
<table border=0 cellspacing=0 cellpadding=0 width=560 height=100 bgcolor=#0B0D3A>	<tr>
<td width=17>
</body>
</HTML>
`;

        break;

    case "Hobbies":
        data = `<HTML>
<head>
<title>Search Hobbies</title>
</head>
<display fontsize=medium showwhencomplete>
<body hspace=0 vspace=0 bgcolor=#0B0D3A text=#000000 link=#0B0D3A vlink=#0B0D3A novtilebg>
<wtvnoscript>
<table cellspacing=0 cellpadding=0 bgcolor=#858779>
<tr>
<td>
<table cellspacing=0 cellpadding=0 width=560 height=80 background="wtv-center:/images/SearchCategoryBG.jpg">
<tr>
<td width=106 align=center href='wtv-tricks:/home' insetselection>
<img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width=87 height=67>
<spacer type=horizontal width=108><td><spacer type=vertical height=62>
<img src="wtv-center:/images/search_hobbies_h.gif">
<td width=288 valign=top>
</table>
<table width=560 cellspacing=0 cellpadding=0>
<tr>
<td width=17 bgcolor=#0B0D3A>
<td width=377>
<table cellspacing=0 cellpadding=0 width=377 height=8>
<tr>
<td width=8><img src="wtv-center:/images/CornerTopLeftSearchHome.gif" width=8 height=8>
<td width=352>
</table>
&nbsp;<br>	<table border=0 cellspacing=0 cellpadding=2>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Living/Arts_and_crafts?sv=W3">Arts &amp; Crafts</a>
<td width=15>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Living/Food_and_drink?sv=W3">Food &amp; drink</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Family/Spirituality_and_religion/Astrology?sv=W3">Astrology</a>
<td width=15>	<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Living/Gardening?sv=W3">Gardening</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Automotive?sv=W3">Automotive</a>
<td width=15>	<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Family/Genealogy?sv=W3">Genealogy</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Off_the_beaten_path?sv=W3">Bizarre</a>
<td width=15>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Living/Hobbies_and_interests?sv=W3">Interests</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Entertainment/Books?sv=W3">Books &amp; writing</a>
<td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Entertainment/Movies?sv=W3">Movies</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Living/Hobbies/Collecting?sv=W3">Collecting</a>
<td width=15>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Entertainment/Music?sv=W3">Music</a>
</table>
<spacer type=vertical height=15><br>
<table border=0 cellspacing=0 cellpadding=0 height=31 width=382>
<tr>
<td gradcolor=#858779 bgcolor=#565760 gradangle=90>
<spacer type=horizontal width=23><blackface>Featured Hobbies Sites</blackface>
</table>
<table width=377 cellspacing=0 cellpadding=0>
<tr>
<td width=23>
<td>
<spacer type=vertical height=15><br>
<a selected href="http://www.curioscape.com"><b>Curioscape</b>
</a><br>
<font size=-1>Starting place for collectors' searches</font>
<p>
<a selected href="http://www.parascope.com "><b>Parascope</b>
</a><br>
<font size=-1>Info on UFOs, conspiracies & the paranormal</font>
<p>
<a selected href="http://www.stardate.utexas.edu "><b>StarDate Online</b>
</a><br>
<font size=-1>Daily astronomy & star-guide. Tip of the day</font>
<p>
<a selected href="http://www.wine-lovers-page.com/"><b>Robin Garr's Wine Lovers' Page</b>
</a><br>
<font size=-1>Learn about wines. 30-Second Wine Advisor</font>
<p>
<a selected href="http://www.popularwoodworking.com"><b>Popular Woodworking</b>
</a><br>
<font size=-1>Tool reviews, tips & free plans from PW</font>
<p>
<a selected href="http://www.vg.com"><b>Virtual Garden</b>
</a><br>
<font size=-1>Regional tips. Searchable Time/Life database</font>
<p>
<a selected href="http://www.cyndislist.com/howto.htm"><b>Cyndi's List</b>
</a><br>
<font size=-1>Resources for building your own family tree</font>
<p>
<a selected href="http://cartalk.cars.com"><b>Car Talk</b>
</a><br>
<font size=-1>Car reports & advice. Featuring Tom & Ray</font>
<p>
<a selected href="http://www.birder.com"><b>Birder.com</b>
</a><br>
<font size=-1>Birding! Hotspots, backyard advice & chat</font>
<p>
<a selected href="http://www.ebay.com"><b>Ebay</b>
</a><br>
<font size=-1>Web auctions. Great for collectors. Fun, safe</font>
<p>
<a selected href="http://www.foodtv.com"><b>TV Food Network</b>
</a><br>
<font size=-1>Free recipes, menu ideas, e-mail cooking live</font>
<p>
<td width=15>
</table>
<td width=166 valign=top gradcolor=#858779 bgcolor=#0B0D3A gradangle=0>
<spacer type=vertical height=5>
<table width=166 border=0 cellspacing=0 cellpadding=0>
</table>
<spacer type=vertical height=15>
<table border=0 cellspacing=0 cellpadding=0 width=166 height=21>
<tr>
<td gradcolor=#858779 bgcolor=#0C0C1B gradangle=90>&nbsp;<font color=#CCCCB5><blackface>Things to try</blackface></font>
</table>
<table border=0 cellspacing=0 cellpadding=0>
<tr>
<td height=5 colspan=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=http://cgi.ebay.com/aw-cgi/eBayISAPI.dll?RedirectEnter&partner=WebTV&loc=http://pages.ebay.com/toys-index.html><font color=#FFFFFF size=-1>Buy & sell Beanies</font></a>
<tr>
<td colspan=2 height=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=http://cgi.ebay.com/aw-cgi/eBayISAPI.dll?RedirectEnter&partner=WebTV&loc=http://pages.ebay.com/antiques-index.html><font color=#FFFFFF size=-1>Find antiques</font></a>
<tr>
<td colspan=2 height=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=http://cgi.ebay.com/aw-cgi/eBayISAPI.dll?RedirectEnter&partner=WebTV&loc=http://pages.ebay.com/coins-index.html><font color=#FFFFFF size=-1>Sell coins & stamps</font></a>
<tr>
<td colspan=2 height=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=http://www.amazon.com/exec/obidos/redirect?tag=webtv-homepage40&path=subst/home/music.html><font color=#FFFFFF size=-1>Find music & books</font></a>
<tr>
<td colspan=2 height=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=http://www.virtualvin.com><font color=#FFFFFF size=-1>Get wine tips</font></a>
<tr>
<td colspan=2 height=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=wtv-Center:/time-savers><font color=#FFFFFF size=-1>More to try...</font></a>
<tr>
<td colspan=2 height=2>
</table>
</table>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=17 bgcolor=#0B0D3A>
<td>
<spacer type=vertical height=10><br>
<table cellspacing=0 cellpadding=0>
<tr>
<td>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=377 height=26 gradcolor=#858779 bgcolor=#565760 gradangle=90><spacer type=horizontal width=23><img src='wtv-center:/images/search_other.gif'>
</table>
<td width=166><img src='wtv-center:/images/infoseek.gif'>
</table>
<spacer type=vertical height=10><br>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=23>
<td>
<table border=0>
<tr>
<td><blackface>Type a word, phrase or web address</blackface>
<tr>
<td>
<form action="wtv-center:search" method="get">
<input name="search-string" nextDown="browseTheWeb" bgcolor=444444 text=ffdd33 cursor=#cc9933 value="" SIZE=35><spacer type=horizontal width=20><font color=E7CE4A><shadow><input type=submit borderimage="file://ROM/Borders/ButtonBorder2.bif" value="Search" usestyle></shadow></font><br>
</form>
<tr>
<td><font size=-1>For best results, be specific. <a href="wtv-guide:/help?topic=Search&subtopic=Tips&BackToName=Search">More search tips</a></font>
</table>
</table>
<spacer type=vertical height=10><br>
</table>
<table cellspacing=0 cellpadding=0 width=560 height=8>
<tr>
<td width=17 bgcolor=#0B0D3A>
<td width=8><img src="wtv-center:/images/CornerBottomLeftSearch.gif" width=8 height=8>
<td width=535>
</table>
<table border=0 cellspacing=0 cellpadding=0 width=560 height=100 bgcolor=#0B0D3A>	<tr>
<td width=17>
</body>
</HTML>
`;

        break;

    case "News":
        data = `<HTML>
<head>
<title>Search News</title>
</head>
<display fontsize=medium showwhencomplete>
<body hspace=0 vspace=0 bgcolor=#0B0D3A text=#000000 link=#0B0D3A vlink=#0B0D3A novtilebg>
<wtvnoscript>
<table cellspacing=0 cellpadding=0 bgcolor=#858779>
<tr>
<td>
<table cellspacing=0 cellpadding=0 width=560 height=80 background="wtv-center:/images/SearchCategoryBG.jpg">
<tr>
<td width=106 align=center href='wtv-tricks:/home' insetselection>
<img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width=87 height=67>
<spacer type=horizontal width=108><td><spacer type=vertical height=62>
<img src="wtv-center:/images/search_news_h.gif">
<td width=288 valign=top>
</table>
<table width=560 cellspacing=0 cellpadding=0>
<tr>
<td width=17 bgcolor=#0B0D3A>
<td width=377>
<table cellspacing=0 cellpadding=0 width=377 height=8>
<tr>
<td width=8><img src="wtv-center:/images/CornerTopLeftSearchHome.gif" width=8 height=8>
<td width=352>
</table>
&nbsp;<br>	<table border=0 cellspacing=0 cellpadding=2>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/News/Broadcast_news?sv=W3">Broadcast News</a>
<td width=15>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/News/Newspapers?sv=W3">Newspapers</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/News/Current_stories?sv=W3">Current Stories</a>
<td width=15>	<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/News/Science_news?sv=W3">Science</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/News/Health_news?sv=W3">Health</a>
<td width=15>	<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/News/Technology_news?sv=W3">Technology</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/News/Horoscopes?sv=W3">Horoscopes</a>
<td width=15>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/News/U_S_news?sv=W3">U.S.</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/News/Lottery?sv=W3">Lottery</a>
<td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/News/Weather?sv=W3">Weather</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/News/Magazines?sv=W3">Magazines</a>
<td width=15>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/News/World_news?sv=W3">World</a>
</table>
<spacer type=vertical height=15><br>
<table border=0 cellspacing=0 cellpadding=0 height=31 width=382>
<tr>
<td gradcolor=#858779 bgcolor=#565760 gradangle=90>
<spacer type=horizontal width=23><blackface>Featured News Sites</blackface>
</table>
<table width=377 cellspacing=0 cellpadding=0>
<tr>
<td width=23>
<td>
<spacer type=vertical height=15><br>
<a selected href="http://www.allnewspapers.com"><b>AllNewspapers</b>
</a><br>
<font size=-1>Online newspapers, local to international</font>
<p>
<a selected href="http://www.ABCNews.com"><b>ABC News</b>
</a><br>
<font size=-1>News, chat & more from the ABC network</font>
<p>
<a selected href="http://www.cnn.com"><b>CNN</b>
</a><br>
<font size=-1>Online home of the Cable News Network</font>
<p>
<a selected href="http://www.msnbc.com"><b>MSNBC</b>
</a><br>
<font size=-1>News, polls and special reports</font>
<p>
<a selected href="http://www.nytimes.com"><b>New York Times</b>
</a><br>
<font size=-1>All the news that's fit to surf</font>
<p>
<a selected href="http://www.salon1999.com"><b>Salon</b>
</a><br>
<font size=-1>Only-on-the-Web news & commentary</font>
<p>
<a selected href="http://www.slate.com"><b>Slate</b>
</a><br>
<font size=-1>Reviews, wit & opinion</font>
<p>
<a selected href="http://www.time.com"><b>TIME.com</b>
</a><br>
<font size=-1>The best of TIME Magazine. Archive</font>
<p>
<a selected href="http://www.usatoday.com"><b>USA Today</b>
</a><br>
<font size=-1>News, sports & weather from the national daily</font>
<p>
<a selected href="http://www.washingtonpost.com"><b>Washington Post</b>
</a><br>
<font size=-1>Award-winning reporting. Nice search feature</font>
<p>
<a selected href="http://www.latimes.com"><b>Los Angeles Times</b>
</a><br>
<font size=-1>Local to world news from the West's top paper</font>
<p>
<a selected href="http://www.nandotimes.com"><b>Nando Times</b>
</a><br>
<font size=-1>One of the Web's first news sites</font>
<p>
<a selected href="http://www.dejanews.com"><b>Deja News</b>
</a><br>
<font size=-1>Discussions on a variety of news topics</font>
<p>
<a selected href="http://www.cnet.com"><b>Cnet</b>
</a><br>
<font size=-1>News & reports about all things hi-tech</font>
<p>
<td width=15>
</table>
<td width=166 valign=top gradcolor=#858779 bgcolor=#0B0D3A gradangle=0>
<spacer type=vertical height=5>
<table border=0 cellspacing=0 cellpadding=0 width=166 height=21>
<tr>
<td gradcolor=#858779 bgcolor=#0C0C1B gradangle=90>&nbsp;<font color=#CCCCB5><blackface>News Links</blackface></font>
</table>
<table border=0 cellspacing=0 cellpadding=0>
<tr>
<td height=5 colspan=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=wtv-center:/center?info=News><font color=#FFFFFF size=-1>WebTV News</font></a>
<tr>
<td colspan=2 height=2>
</table>
<spacer type=vertical height=15>
<table width=166 border=0 cellspacing=0 cellpadding=0>
</table>
<spacer type=vertical height=15>
<table border=0 cellspacing=0 cellpadding=0 width=166 height=21>
<tr>
<td gradcolor=#858779 bgcolor=#0C0C1B gradangle=90>&nbsp;<font color=#CCCCB5><blackface>Things to try</blackface></font>
</table>
<table border=0 cellspacing=0 cellpadding=0>
<tr>
<td height=5 colspan=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=wtv-center:/center?info=WebTVToday><font color=#FFFFFF size=-1>Get Member News</font></a>
<tr>
<td colspan=2 height=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=http://www.msnbc.com/find.asp><font color=#FFFFFF size=-1>Search MSNBC</font></a>
<tr>
<td colspan=2 height=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=http://www.classifieds2000.com><font color=#FFFFFF size=-1>Search classifieds</font></a>
<tr>
<td colspan=2 height=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=><font color=#FFFFFF size=-1>Check horoscopes</font></a>
<tr>
<td colspan=2 height=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=wtv-center:/center?info=Games&tab=2><font color=#FFFFFF size=-1>Get lottery results</font></a>
<tr>
<td colspan=2 height=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=wtv-Center:/time-savers><font color=#FFFFFF size=-1>More to try...</font></a>
<tr>
<td colspan=2 height=2>
</table>
</table>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=17 bgcolor=#0B0D3A>
<td>
<spacer type=vertical height=10><br>
<table cellspacing=0 cellpadding=0>
<tr>
<td>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=377 height=26 gradcolor=#858779 bgcolor=#565760 gradangle=90><spacer type=horizontal width=23><img src='wtv-center:/images/search_other.gif'>
</table>
<td width=166><img src='wtv-center:/images/infoseek.gif'>
</table>
<spacer type=vertical height=10><br>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=23>
<td>
<table border=0>
<tr>
<td><blackface>Type a word, phrase or web address</blackface>
<tr>
<td>
<form action="wtv-center:search" method="get">
<input name="search-string" nextDown="browseTheWeb" bgcolor=444444 text=ffdd33 cursor=#cc9933 value="" SIZE=35><spacer type=horizontal width=20><font color=E7CE4A><shadow><input type=submit borderimage="file://ROM/Borders/ButtonBorder2.bif" value="Search" usestyle></shadow></font><br>
</form>
<tr>
<td><font size=-1>For best results, be specific. <a href="wtv-guide:/help?topic=Search&subtopic=Tips&BackToName=Search">More search tips</a></font>
</table>
</table>
<spacer type=vertical height=10><br>
</table>
<table cellspacing=0 cellpadding=0 width=560 height=8>
<tr>
<td width=17 bgcolor=#0B0D3A>
<td width=8><img src="wtv-center:/images/CornerBottomLeftSearch.gif" width=8 height=8>
<td width=535>
</table>
<table border=0 cellspacing=0 cellpadding=0 width=560 height=100 bgcolor=#0B0D3A>	<tr>
<td width=17>
</body>
</HTML>
`;

        break;

    case "Women":
        data = `<HTML>
<head>
<title>Search Women</title>
</head>
<display fontsize=medium showwhencomplete>
<body hspace=0 vspace=0 bgcolor=#0B0D3A text=#000000 link=#0B0D3A vlink=#0B0D3A novtilebg>
<wtvnoscript>
<table cellspacing=0 cellpadding=0 bgcolor=#858779>
<tr>
<td>
<table cellspacing=0 cellpadding=0 width=560 height=80 background="wtv-center:/images/SearchCategoryBG.jpg">
<tr>
<td width=106 align=center href='wtv-tricks:/home' insetselection>
<img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width=87 height=67>
<spacer type=horizontal width=108><td><spacer type=vertical height=62>
<img src="wtv-center:/images/search_women_h.gif">
<td width=288 valign=top>
</table>
<table width=560 cellspacing=0 cellpadding=0>
<tr>
<td width=17 bgcolor=#0B0D3A>
<td width=377>
<table cellspacing=0 cellpadding=0 width=377 height=8>
<tr>
<td width=8><img src="wtv-center:/images/CornerTopLeftSearchHome.gif" width=8 height=8>
<td width=352>
</table>
&nbsp;<br>	<table border=0 cellspacing=0 cellpadding=2>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/People/Women/Womens_arts_and_entertainment?sv=W3">Entertainment</a>
<td width=15>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/People/Women/Womens_organizations?sv=W3">Organizations</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/People/Women/Fashion_and_style?sv=W3">Fashion</a>
<td width=15>	<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/People/Women/Womens_recreation_and_leisure?sv=W3">Recreation</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/People/Women/Womens_business_and_finance?sv=W3">Finance</a>
<td width=15>	<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/People/Women/Women_and_relationships?sv=W3">Relationships</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/People/Women/Womens_health?sv=W3">Health</a>
<td width=15>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/People/Women/Womens_sports?sv=W3">Sports</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/People/Women/Womens_cultures_and_lifestyles?sv=W3">Lifestyles</a>
<td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/People/Women/Womens_travel?sv=W3">Travel</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/People/Women/Motherhood?sv=W3">Mothers</a>
<td width=15>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/People/Women/Young_women_and_girls?sv=W3">Young Women &amp; Girls</a>
</table>
<spacer type=vertical height=15><br>
<table border=0 cellspacing=0 cellpadding=0 height=31 width=382>
<tr>
<td gradcolor=#858779 bgcolor=#565760 gradangle=90>
<spacer type=horizontal width=23><blackface>Featured Women Sites</blackface>
</table>
<table width=377 cellspacing=0 cellpadding=0>
<tr>
<td width=23>
<td>
<spacer type=vertical height=15><br>
<td width=15>
</table>
<td width=166 valign=top gradcolor=#858779 bgcolor=#0B0D3A gradangle=0>
<spacer type=vertical height=5>
<table width=166 border=0 cellspacing=0 cellpadding=0>
</table>
<spacer type=vertical height=15>
</table>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=17 bgcolor=#0B0D3A>
<td>
<spacer type=vertical height=10><br>
<table cellspacing=0 cellpadding=0>
<tr>
<td>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=377 height=26 gradcolor=#858779 bgcolor=#565760 gradangle=90><spacer type=horizontal width=23><img src='wtv-center:/images/search_other.gif'>
</table>
<td width=166><img src='wtv-center:/images/infoseek.gif'>
</table>
<spacer type=vertical height=10><br>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=23>
<td>
<table border=0>
<tr>
<td><blackface>Type a word, phrase or web address</blackface>
<tr>
<td>
<form action="wtv-center:search" method="get">
<input name="search-string" nextDown="browseTheWeb" bgcolor=444444 text=ffdd33 cursor=#cc9933 value="" SIZE=35><spacer type=horizontal width=20><font color=E7CE4A><shadow><input type=submit borderimage="file://ROM/Borders/ButtonBorder2.bif" value="Search" usestyle></shadow></font><br>
</form>
<tr>
<td><font size=-1>For best results, be specific. <a href="wtv-guide:/help?topic=Search&subtopic=Tips&BackToName=Search">More search tips</a></font>
</table>
</table>
<spacer type=vertical height=10><br>
</table>
<table cellspacing=0 cellpadding=0 width=560 height=8>
<tr>
<td width=17 bgcolor=#0B0D3A>
<td width=8><img src="wtv-center:/images/CornerBottomLeftSearch.gif" width=8 height=8>
<td width=535>
</table>
<table border=0 cellspacing=0 cellpadding=0 width=560 height=100 bgcolor=#0B0D3A>	<tr>
<td width=17>
</body>
</HTML>
`;

        break;

    default:
        data = `<HTML>
<head>
<title>Search Entertainment</title>
</head>
<display fontsize=medium showwhencomplete>
<body hspace=0 vspace=0 bgcolor=#0B0D3A text=#000000 link=#0B0D3A vlink=#0B0D3A novtilebg>
<wtvnoscript>
<table cellspacing=0 cellpadding=0 bgcolor=#858779>
<tr>
<td>
<table cellspacing=0 cellpadding=0 width=560 height=80 background="wtv-center:/images/SearchCategoryBG.jpg">
<tr>
<td width=106 align=center href='wtv-tricks:/home' insetselection>
<img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width=87 height=67>
<spacer type=horizontal width=105><td><spacer type=vertical height=62>
<img src="wtv-center:/images/search_entertainment_h.gif">
<td width=288 valign=top>
</table>
<table width=560 cellspacing=0 cellpadding=0>
<tr>
<td width=17 bgcolor=#0B0D3A>
<td width=377>
<table cellspacing=0 cellpadding=0 width=377 height=8>
<tr>
<td width=8><img src="wtv-center:/images/CornerTopLeftSearchHome.gif" width=8 height=8>
<td width=352>
</table>
&nbsp;<br>	<table border=0 cellspacing=0 cellpadding=2>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Entertainment/Books?sv=W3">Books</a>
<td width=15>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Entertainment/Humor_and_fun?sv=W3">Humor</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Entertainment/Celebrities?sv=W3">Celebrities</a>
<td width=15>	<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Entertainment/Movies?sv=W3">Movies</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Entertainment/Festivals_and_events?sv=W3">Events</a>
<td width=15>	<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Entertainment/Music?sv=W3">Music</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Entertainment/Fashion_and_style?sv=W3">Fashion</a>
<td width=15>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Entertainment/Entertainment_news?sv=W3">News</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Entertainment/Food_and_drink?sv=W3">Food &amp; drink</a>
<td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Entertainment/Science_fiction_fantasy_horror?sv=W3">Sci-fi</a>
<tr><td width=18>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Entertainment/Horoscopes?sv=W3">Horoscopes</a>
<td width=15>
<td>
<font color=#0A0A3C>&#128;</font>
<a selected href="http://www.go.com/WebDir/Entertainment/Television?sv=W3">Television</a>
</table>
<spacer type=vertical height=15><br>
<table border=0 cellspacing=0 cellpadding=0 height=31 width=382>
<tr>
<td gradcolor=#858779 bgcolor=#565760 gradangle=90>
<spacer type=horizontal width=23><blackface>Featured Entertainment Sites</blackface>
</table>
<table width=377 cellspacing=0 cellpadding=0>
<tr>
<td width=23>
<td>
<spacer type=vertical height=15><br>
<td width=15>
</table>
<td width=166 valign=top gradcolor=#858779 bgcolor=#0B0D3A gradangle=0>
<spacer type=vertical height=5>
<table border=0 cellspacing=0 cellpadding=0 width=166 height=21>
<tr>
<td gradcolor=#858779 bgcolor=#0C0C1B gradangle=90>&nbsp;<font color=#CCCCB5><blackface>Related Links</blackface></font>
</table>
<table border=0 cellspacing=0 cellpadding=0>
<tr>
<td height=5 colspan=2>
<tr>
<td width=20 align=center valign=top>
<font color=#DEDEA3>&#128;</font>
<td valign=top>
<a href=wtv-center:/center?info=Entertainment><font color=#FFFFFF size=-1>Entertainment</font></a>
<tr>
<td colspan=2 height=2>
</table>
<spacer type=vertical height=15>
<table width=166 border=0 cellspacing=0 cellpadding=0>
</table>
<spacer type=vertical height=15>
</table>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=17 bgcolor=#0B0D3A>
<td>
<spacer type=vertical height=10><br>
<table cellspacing=0 cellpadding=0>
<tr>
<td>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=377 height=26 gradcolor=#858779 bgcolor=#565760 gradangle=90><spacer type=horizontal width=23><img src='wtv-center:/images/search_other.gif'>
</table>
<td width=166><img src='wtv-center:/images/infoseek.gif'>
</table>
<spacer type=vertical height=10><br>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=23>
<td>
<table border=0>
<tr>
<td><blackface>Type a word, phrase or web address</blackface>
<tr>
<td>
<form action="wtv-center:search" method="get">
<input name="search-string" nextDown="browseTheWeb" bgcolor=444444 text=ffdd33 cursor=#cc9933 value="" SIZE=35><spacer type=horizontal width=20><font color=E7CE4A><shadow><input type=submit borderimage="file://ROM/Borders/ButtonBorder2.bif" value="Search" usestyle></shadow></font><br>
</form>
<tr>
<td><font size=-1>For best results, be specific. <a href="wtv-guide:/help?topic=Search&subtopic=Tips&BackToName=Search">More search tips</a></font>
</table>
</table>
<spacer type=vertical height=10><br>
</table>
<table cellspacing=0 cellpadding=0 width=560 height=8>
<tr>
<td width=17 bgcolor=#0B0D3A>
<td width=8><img src="wtv-center:/images/CornerBottomLeftSearch.gif" width=8 height=8>
<td width=535>
</table>
<table border=0 cellspacing=0 cellpadding=0 width=560 height=100 bgcolor=#0B0D3A>	<tr>
<td width=17>
</body>
</HTML>
`;

        break;
}
