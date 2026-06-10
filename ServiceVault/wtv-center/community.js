var minisrv_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;

const infoCenter = request_headers.query.info;
switch (infoCenter) {
    case "Entertainment":
        data = `<html>
<head>
<title>Entertainment - Chat &amp; Discuss
</title>
</head>
<display fontsize=medium>
<body bgcolor=73637B text=8C8494 link=DED7BD vlink=DED7BD vspace=0 hspace=0>
<table cellspacing=0 cellpadding=0>
<tr>
<td height=80 width=394 bgcolor=8C8494 gradcolor=4A4252 gradangle=90 valign=top>
<table height=80 width=394 cellspacing=0 cellpadding=0 background=wtv-center:/ROMCache/centers/entertainment/bg_topleft.jpg novtilebg nohtilebg>
<tr>
<td width=98 height=67 align=center valign=middle>
<a href="wtv-home:/home"><img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width=87 height=67></a>
<td width=296 align=right valign=top>
<spacer type=vertical size=10><br>
</table>
<td width=166 bgcolor=4A4252 gradcolor=000000 gradangle=90 valign=top>
<table cellspacing=0 cellpadding=0>
<tr>
<td valign=top>
<spacer type=vertical size=10><br>
<td valign=top>
<spacer type=vertical size=10><br>
<spacer type=horizontal size=6>
</table>
</table>
<table cellspacing=0 cellpadding=0 bgcolor=4A4252>
<tr>
<td height=20 bgcolor=8C8494>
<td valign=top>
<img src="wtv-center:/ROMCache/centers/entertainment/TopRoundedCorner.gif" width=8 height=11>
<tr>
<td height=230 bgcolor=8C8494 gradcolor=73637B gradangle=0>
<td>
<td valign=top>
<table width= border=5 cellpadding=0 cellspacing=0>
<tr>
<td valign=top>
<font size=+2>&#128;&nbsp;</font>
<td colspan=2>
<blackface><font color=DED7BD size=+2>Chat</font></blackface>
<spacer type=vertical height=4><br>
<a href="wtv-chat:/home">Start chatting with other people online.
</a><spacer type=vertical height=12><br>
<tr>
<td>
<td valign=top>
<tr>
<td height=18>
<tr>
<td valign=top>
<font size=+2>&#128;&nbsp;</font>
<td colspan=2>
<a href="wtv-news:lobby"><blackface><font color=DED7BD size=+2>Discuss</font></blackface></a>
<spacer type=vertical height=4><br>
Read and write messages in thousands of discussion groups, including these top entertainment discussions.
<spacer type=vertical height=12><br>
<tr>
<td>
<td valign=top>
&#128;&nbsp;<a href=wtv-news:/news?group=rec.arts.books selected><b>Books</b></a>
<spacer type=vertical height=4><br>
&#128;&nbsp;<a href=wtv-news:/news?group=alt.gossip.celebrities selected><b>Celebrity Gossip</b></a>
<spacer type=vertical height=4><br>
&#128;&nbsp;<a href=wtv-news:/news?group=alt.fan.actors selected><b>Fan clubs</b></a>
<spacer type=vertical height=4><br>
&#128;&nbsp;<a href=wtv-news:/news?group=alt.discuss.entertainment.movies selected><b>Movie Discussions</b></a>
<spacer type=vertical height=4><br>
&#128;&nbsp;<a href=wtv-news:/news?group=rec.arts.movies.reviews selected><b>Movie Reviews</b></a>
<td valign=top>
<spacer type=vertical height=4><br>
&#128;&nbsp;<a href=wtv-news:/news?group=alt.discuss.entertainment.music.rock selected><b>Rock Music</b></a>
<spacer type=vertical height=4><br>
&#128;&nbsp;<a href=wtv-news:/news?group=rec.music.classical selected><b>Classical Music</b></a>
<spacer type=vertical height=4><br>
&#128;&nbsp;<a href=wtv-news:/news?group=alt.showbiz.gossip selected><b>Showbiz Gossip</b></a>
<spacer type=vertical height=4><br>
&#128;&nbsp;<a href=wtv-news:/news?group=alt.binaries.tv.us-sitcoms selected><b>TV Sitcoms</b></a>
<spacer type=vertical height=4><br>
&#128;&nbsp;<a href=wtv-news:/news?group=alt.tv.talkshows.daytime selected><b>TV Talkshows</b></a>
<tr>
<td height=30>
<tr>
<td width=18>
<td width=225>
<td width=241>
</table>
<tr>
<td height=10 bgcolor=73637B>
<td valign=bottom>
<img src="wtv-center:/ROMCache/centers/entertainment/BottomRoundedCorner.gif" width=10 height=10>
<tr>
<td height=44 bgcolor=73637B>
<td bgcolor=73637B>
<td align=right bgcolor=73637B>
<font size=+1 color=DED7BD>&#128;</font>
<a href=wtv-center:/center?info=Entertainment>Back to Entertainment</a>
<spacer type=horizontal width=35>	<tr>
<td width=21 height=0>
<td width=55>
<td width=484>
</table>
</body>
</html>
`;
        break;

    case "News":
        data = `<html>
<head>
<title>News - Chat &amp; Discuss
</title>
</head>
<display fontsize=medium>
<body bgcolor=5A737B text=84949C link=DED7BD vlink=DED7BD vspace=0 hspace=0>
<table cellspacing=0 cellpadding=0>
<tr>
<td height=80 width=394 bgcolor=84949C gradcolor=384952 gradangle=90 valign=top>
<table height=80 width=394 cellspacing=0 cellpadding=0 background=wtv-center:/ROMCache/centers/news/news_masthead.jpg novtilebg nohtilebg>
<tr>
<td width=98 height=67 align=center valign=middle>
<a href="wtv-home:/home"><img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width=87 height=67></a>
<td width=296 align=right valign=top>
<spacer type=vertical size=10><br>
</table>
<td width=166 bgcolor=384952 gradcolor=000000 gradangle=90 valign=top>
<table cellspacing=0 cellpadding=0>
<tr>
<td valign=top>
<spacer type=vertical size=10><br>
<td valign=top>
<spacer type=vertical size=10><br>
<spacer type=horizontal size=6>
</table>
</table>
<table cellspacing=0 cellpadding=0 bgcolor=384952>
<tr>
<td height=20 bgcolor=84949C>
<td valign=top>
<img src="wtv-center:/ROMCache/centers/news/TopRoundedCorner.gif" width=8 height=11>
<tr>
<td height=230 bgcolor=84949C gradcolor=5A737B gradangle=0>
<td>
<td valign=top>
<table width= border=5 cellpadding=0 cellspacing=0>
<tr>
<td valign=top>
<font size=+2>&#128;&nbsp;</font>
<td colspan=2>
<blackface><font color=DED7BD size=+2>Chat</font></blackface>
<spacer type=vertical height=4><br>
<a href="wtv-chat:/home">Start chatting with other people online.
</a><spacer type=vertical height=12><br>
<tr>
<td>
<td valign=top>
<tr>
<td height=18>
<tr>
<td valign=top>
<font size=+2>&#128;&nbsp;</font>
<td colspan=2>
<a href="wtv-news:lobby"><blackface><font color=DED7BD size=+2>Discuss</font></blackface></a>
<spacer type=vertical height=4><br>
Read and write messages in thousands of discussion groups, including these top news discussions.
<spacer type=vertical height=12><br>
<tr>
<td>
<td valign=top>
&#128;&nbsp;<a href=wtv-news:/news?group=alt.future.millennium selected><b>The Millennium</b></a>
<spacer type=vertical height=4><br>
&#128;&nbsp;<a href=wtv-news:/news?group=alt.discuss.politics selected><b>Politics</b></a>
<spacer type=vertical height=4><br>
&#128;&nbsp;<a href=wtv-news:/news?group=alt.president.clinton selected><b>Clinton</b></a>
<spacer type=vertical height=4><br>
&#128;&nbsp;<a href=wtv-news:/news?group=alt.politics.usa.congress selected><b>Congress</b></a>
<spacer type=vertical height=4><br>
&#128;&nbsp;<a href=wtv-news:/news?group=alt.politics.democrats.d selected><b>Democrats</b></a>
<spacer type=vertical height=4><br>
&#128;&nbsp;<a href=wtv-news:/news?group=alt.politics.elections selected><b>Elections</b></a>
<td valign=top>
<spacer type=vertical height=4><br>
&#128;&nbsp;<a href=wtv-news:/news?group=alt.politics.europe.misc selected><b>Europe</b></a>
<spacer type=vertical height=4><br>
&#128;&nbsp;<a href=wtv-news:/news?group=alt.politics.media selected><b>Media</b></a>
<spacer type=vertical height=4><br>
&#128;&nbsp;<a href=wtv-news:/news?group=alt.politics.usa.republican selected><b>Republicans</b></a>
<spacer type=vertical height=4><br>
&#128;&nbsp;<a href=wtv-news:/news?group=clari.world.gov.politics selected><b>World</b></a>
<spacer type=vertical height=4><br>
&#128;&nbsp;<a href=wtv-news:/news?browse=alt.politics selected><b>More news</b></a>
<tr>
<td height=30>
<tr>
<td width=18>
<td width=225>
<td width=241>
</table>
<tr>
<td height=10 bgcolor=5A737B>
<td valign=bottom>
<img src="wtv-center:/ROMCache/centers/news/BottomRoundedCorner.gif" width=10 height=10>
<tr>
<td height=44 bgcolor=5A737B>
<td bgcolor=5A737B>
<td align=right bgcolor=5A737B>
<font size=+1 color=DED7BD>&#128;</font>
<a href=wtv-center:/center?info=News>Back to News</a>
<spacer type=horizontal width=35>	<tr>
<td width=21 height=0>
<td width=55>
<td width=484>
</table>
</body>
</html>
`;
        break;

    case "Sports":
        data = `<html>
<head>
<title>Sports - Chat &amp; Discuss
</title>
</head>
<display fontsize=medium>
<body bgcolor=#845A42 text=#8C7B63 link=DED7BD vlink=DED7BD vspace=0 hspace=0>
<table cellspacing=0 cellpadding=0>
<tr>
<td height=80 width=394 bgcolor=#946F57 gradcolor=#4A3121 gradangle=90 valign=top>
<table height=80 width=394 cellspacing=0 cellpadding=0 background=wtv-center:/ROMCache/centers/sports/sports_masthead.jpg novtilebg nohtilebg>
<tr>
<td width=98 height=67 align=center valign=middle>
<a href="wtv-home:/home"><img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width=87 height=67></a>
<td width=296 align=right valign=top>
<spacer type=vertical size=10><br>
</table>
<td width=166 bgcolor=#4A3121 gradcolor=#000000 gradangle=90 valign=top>
<table cellspacing=0 cellpadding=0>
<tr>
<td valign=top>
<spacer type=vertical size=10><br>
<td valign=top>
<spacer type=vertical size=10><br>
<spacer type=horizontal size=6>
</table>
</table>
<table cellspacing=0 cellpadding=0 bgcolor=#4A3121>
<tr>
<td height=20 bgcolor=#946F57>
<td valign=top>
<img src="wtv-center:/ROMCache/centers/sports/TopRoundedCorner.gif" width=8 height=11>
<tr>
<td height=230 bgcolor=#946F57 gradcolor=#845A42 gradangle=0>
<td>
<td valign=top>
<table width= border=5 cellpadding=0 cellspacing=0>
<tr>
<td valign=top>
<font size=+2>&#128;&nbsp;</font>
<td colspan=2>
<blackface><font color=DED7BD size=+2>Chat</font></blackface>
<spacer type=vertical height=4><br>
<a href="wtv-chat:/home">Start chatting with other people online.
</a><spacer type=vertical height=12><br>
<tr>
<td>
<td valign=top>
<tr>
<td height=18>
<tr>
<td valign=top>
<font size=+2>&#128;&nbsp;</font>
<td colspan=2>
<a href="wtv-news:lobby"><blackface><font color=DED7BD size=+2>Discuss</font></blackface></a>
<spacer type=vertical height=4><br>
Read and write messages in thousands of discussion groups, including these top sports discussions.
<spacer type=vertical height=12><br>
<tr>
<td>
<td valign=top>
&#128;&nbsp;<a href=wtv-news:/news?search=baseball selected><b>Baseball</b></a>
<spacer type=vertical height=4><br>
&#128;&nbsp;<a href=wtv-news:/news?search=nba selected><b>Basketball</b></a>
<spacer type=vertical height=4><br>
&#128;&nbsp;<a href=wtv-news:/news?search=college+sports selected><b>College sports</b></a>
<spacer type=vertical height=4><br>
&#128;&nbsp;<a href=wtv-news:/news?search=football+pro selected><b>Football</b></a>
<spacer type=vertical height=4><br>
&#128;&nbsp;<a href=wtv-news:/news?group=rec.sport.golf selected><b>Golf</b></a>
<td valign=top>
<spacer type=vertical height=4><br>
&#128;&nbsp;<a href=wtv-news:/news?search=Hockey+nhl selected><b>Hockey</b></a>
<spacer type=vertical height=4><br>
&#128;&nbsp;<a href=wtv-news:/news?search=nascar selected><b>Nascar</b></a>
<spacer type=vertical height=4><br>
&#128;&nbsp;<a href=wtv-news:/news?browse=rec.sports selected><b>Recreational sports</b></a>
<spacer type=vertical height=4><br>
&#128;&nbsp;<a href=wtv-news:/news?group=rec.sport.pro-wrestling selected><b>Wrestling</b></a>
<spacer type=vertical height=4><br>
&#128;&nbsp;<a href=wtv-news:/news?browse=alt.sports selected><b>More sports</b></a>
<tr>
<td height=30>
<tr>
<td width=18>
<td width=225>
<td width=241>
</table>
<tr>
<td height=10 bgcolor=#845A42>
<td valign=bottom>
<img src="wtv-center:/ROMCache/centers/sports/BottomRoundedCorner.gif" width=10 height=10>
<tr>
<td height=44 bgcolor=#845A42>
<td bgcolor=#845A42>
<td align=right bgcolor=#845A42>
<font size=+1 color=DED7BD>&#128;</font>
<a href=wtv-center:/center?info=Sports>Back to Sports</a>
<spacer type=horizontal width=35>	<tr>
<td width=21 height=0>
<td width=55>
<td width=484>
</table>
</body>
</html>
`;
        break;

    case "Money":
        data = `<html>
<head>
<title>Money - Chat &amp; Discuss
</title>
</head>
<display fontsize=medium>
<body bgcolor=ADBDB3 text=ADBDB3 link=DED7BD vlink=DED7BD vspace=0 hspace=0>
<table cellspacing=0 cellpadding=0>
<tr>
<td height=80 width=394 bgcolor=ADBDB3 gradcolor=42514A gradangle=90 valign=top>
<table height=80 width=394 cellspacing=0 cellpadding=0 background=/images/centers/money/masthead.jpg novtilebg nohtilebg>
<tr>
<td width=98 height=67 align=center valign=middle>
<a href="wtv-home:/home"><img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width=87 height=67></a>
<td width=296 align=right valign=top>
<spacer type=vertical size=10><br>
</table>
<td width=166 bgcolor=42514A gradcolor=42514A gradangle=90 valign=top>
<table cellspacing=0 cellpadding=0>
<tr>
<td valign=top>
<spacer type=vertical size=10><br>
<td valign=top>
<spacer type=vertical size=10><br>
<spacer type=horizontal size=6>
</table>
</table>
<table cellspacing=0 cellpadding=0 bgcolor=42514A>
<tr>
<td height=20 bgcolor=ADBDB3>
<td valign=top>
<img src="/images/centers/money/TopRoundedCorner.gif" width=8 height=11>
<tr>
<td height=230 bgcolor=ADBDB3 gradcolor=ADBDB3 gradangle=0>
<td>
<td valign=top>
<table width= border=5 cellpadding=0 cellspacing=0>
<tr>
<td valign=top>
<font size=+2>&#128;&nbsp;</font>
<td colspan=2>
<blackface><font color=DED7BD size=+2>Chat</font></blackface>
<spacer type=vertical height=4><br>
<a href="wtv-chat:/home">Start chatting with other people online.
</a><spacer type=vertical height=12><br>
<tr>
<td>
<td valign=top>
<tr>
<td height=18>
<tr>
<td valign=top>
<font size=+2>&#128;&nbsp;</font>
<td colspan=2>
<a href="wtv-news:lobby"><blackface><font color=DED7BD size=+2>Discuss</font></blackface></a>
<spacer type=vertical height=4><br>
Read and write messages in thousands of discussion groups, including these top money discussions.
<spacer type=vertical height=12><br>
<tr>
<td>
<td valign=top>
&#128;&nbsp;<a href=wtv-news:/news?browse=misc.consumers selected><b>Consumer issues</b></a>
<spacer type=vertical height=4><br>
&#128;&nbsp;<a href=wtv-news:/news?group=misc.invest.financial-plan selected><b>Financial planning</b></a>
<spacer type=vertical height=4><br>
&#128;&nbsp;<a href=wtv-news:/news?group=alt.business.insurance selected><b>Insurance</b></a>
<spacer type=vertical height=4><br>
&#128;&nbsp;<a href=wtv-news:/news?group=misc.legal.moderated selected><b>Legal issues</b></a>
<td valign=top>
<spacer type=vertical height=4><br>
&#128;&nbsp;<a href=wtv-news:/news?group=misc.invest.mutual-funds selected><b>Mutual funds</b></a>
<spacer type=vertical height=4><br>
&#128;&nbsp;<a href=wtv-news:/news?group=alt.invest.real-estate selected><b>Real estate</b></a>
<spacer type=vertical height=4><br>
&#128;&nbsp;<a href=wtv-news:/news?group=misc.invest.stocks selected><b>Stocks</b></a>
<spacer type=vertical height=4><br>
&#128;&nbsp;<a href=wtv-news:/news?browse=misc.invest selected><b>More money</b></a>
<tr>
<td height=30>
<tr>
<td width=18>
<td width=225>
<td width=241>
</table>
<tr>
<td height=10 bgcolor=ADBDB3>
<td valign=bottom>
<img src="/images/centers/money/BottomLeftCornerMoney.gif" width=10 height=10>
<tr>
<td height=44 bgcolor=ADBDB3>
<td bgcolor=ADBDB3>
<td align=right bgcolor=ADBDB3>
<font size=+1 color=DED7BD>&#128;</font>
<a href=wtv-center:/center?info=Money>Back to Money</a>
<spacer type=horizontal width=35>	<tr>
<td width=21 height=0>
<td width=55>
<td width=484>
</table>
</body>
</html>
`;
        break;

    case "News":
        data = ``;
        break;

    case "News":
        data = ``;
        break;

    case "News":
        data = ``;
        break;
}
