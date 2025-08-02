var wtvrsvc_service_file = true;

headers = `200 OK
Content-type: text/html`

data = `<head>
<title>Tips Index</title>
</head>
<body rightmargin=0 hspace=0 vspace=0 background=/images/tips/tipsIndex.jpg novtilebg bgcolor=5FA38C text=#FFEDAB link=#FFEDAB vlink=#FFEDAB alink=#FFEDAB>
<table cellspacing=0 cellpadding=0 border=0>
<tr>
<td>
<spacer type=block height=5></td>
</tr>
<tr>
<td>
<spacer type=block width=5></td>
<td align=center valign=middle width=90 height=70>
<a href="wtv-home:/home">
<img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width=87 height=67></a>
</td>
</tr>
<tr>
<td><spacer type=block height=12></td>
</tr>
</table>
<table cellspacing=0 cellpadding=0 border=0>
<tr>
<td width=20 height=25></td>
<td width=560 height=25 align=left valign=middle bgcolor=#0F6E68>
<table cellspacing=0 cellpadding=0 border=0>
<tr height=30>
<td rowspan=1 width=6></td>
<td><font color=#9CB9B7 font size="+1"><blackface>Tip Categories</blackface></font></td>
</tr>
</table>
</td>
</tr>
</table>
<table cellpadding=0 cellspacing=0 border=0>
<tr>
<td width=20 height=65></td>
<td width=560 bgcolor=#3C8C81 gradcolor=#107776 gradangle=90>
<table cellspacing=0 cellpadding=0 border=0>
<tr>
<td colspan=2 width=540 height=15 bgcolor=#0F6E68></td>
</tr>
<tr>
<td width=270 bgcolor=#0F6E68 valign=top>
&nbsp;&nbsp<font color="#C1F4ED" size="+1"><a href="#sending"><b>Sending e-mail</b></a><br>
&nbsp;&nbsp<font color=#C1F4ED size="+1"><a href="#receiving"><b>Receiving e-mail</b></a><br>
&nbsp;&nbsp<font color=#C1F4ED size="+1"><a href="#viewing"><b>Web surfing</b></a><br>
&nbsp;&nbsp<font color=#C1F4ED size="+1"><a href="#address"><b>Address book</b></a><br>
&nbsp;&nbsp<font color=#C1F4ED size="+1"><a href="#${session_data.hasCap("client-can-use-messenger") ? `messenger` : `chat`}"><b>${session_data.hasCap("client-can-use-messenger") ? `Messenger/Chat` : `Chat`}</b></a><br>
&nbsp;&nbsp<font color=#C1F4ED size="+1"><a href="#help"><b>Help</b></a><br>
</td>
<td width=270 bgcolor=#0F6E68 valign=top>
<font color=#C1F4ED size="+1"><a href="#equipment"><b>WebTV equipment</b></a><br>
<!-- <font color=#C1F4ED size="+1"><a href="#billing"><b>Billing</b></a><br> -->
<font color=#C1F4ED size="+1"><a href="#settings"><b>Settings</b></a><br>
<font color=#C1F4ED size="+1"><a href="#search"><b>Search</b></a><br>
<font color=#C1F4ED size="+1"><a href="#centers"><b>Centers</b></a><br>
<font color=#C1F4ED size="+1"><a href="#things"><b>Things to do</b></a><br>
<font color=#C1F4ED size="+1"><a href="#shopping"><b>Shopping</b></a><br>`;
if (session_data.hasCap("client-has-tv-experience"))
    data += `
<font color=#C1F4ED size="+1"><a href="#enhanced"><b>Enhanced TV</b></a><br>
<font color=#C1F4ED size="+1"><a href="#listings"><b>TV Listings</b></a><br>`;
data += `
</td>
</tr>
</table>
</td>
</tr>
</table>
<table cellspacing=0 cellpadding=0 border=0>
<tr>
<td rowspan=10><spacer type=block width=19 height=20></td>
<td abswidth=270 bgcolor=#0F6E68 valign=top>
<table cellspacing=0 cellpadding=0 border=0>
<tr>
<td><spacer type=block height=15 width=265></td>
</tr>
<tr>
<td>
&nbsp;&nbsp<font color=#C1F4EDfont size="+1"><a name="sending"><b>Sending e-mail</b></a></font><br>
<font size="+1">
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.delete.email.tmpl>Shorten a forward</a><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.emailaddress.tmpl>E-mail address</a><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.adddelete.tmpl>Add an e-mail address</a><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.reply.tmpl>Reply to e-mail</a><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.carboncopies.tmpl>Carbon copies</a><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.add.original.email.tmpl>Include original e-mail</a><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.spellchecker.tmpl>Spell-checker</a><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.send.tmpl>Send a Web site</a><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.cutcopypaste.tmpl>Cut and paste</a><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.cmdkey.tmpl>Use Cmd keys</a><br>
`;
if (session_data.hasCap("client-has-tv-experience"))
    data += "&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.sendaudio.tmpl>Send audio</a><br>\n"
data += `
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.accents.tmpl>Add accents</a><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.specialcharacters.tmpl>Special characters</a><br>
`;
if (session_data.hasCap("client-has-tuner"))
    data += "&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.videomail.tmpl>Send snapshots</a><br>\n"
data += `
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.signature.tmpl>Signature</a><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.enhancing.e-mail.tmpl>Background color</a><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.blindcc.tmpl>Try blind cc</a><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.emailbreak.tmpl>Finish writing e-mail<br><spacer type=block width=40>later</a><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.delete.line.tmpl>Delete text quickly</a><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.replyall.tmpl>Reply to all</a><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.onscreenkeyboard.tmpl>On-screen keyboard</a><br>
<br>
&nbsp;&nbsp<font color=#C1F4ED font size="+1"><a name="receiving"><b>Receiving e-mail</b></a></font><br>
<font size="+1">
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.messagelight.tmpl>Message light</a><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.emailstorage.tmpl>Save e-mail</a><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.scrapbook.tmpl>Add pics to Scrapbook</a><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.remotemail.tmpl>Remote mail</a><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.deleted.email.tmpl>Restore deleted e-mail</a><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.deletespam.tmpl>Delete spam quickly</a><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.change.messagelight.tmpl>Set time to check mail</a><br>
<!-- &nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.junkmail.tmpl>Turn on junk mail filter</a><br></font> -->
<br>
&nbsp;&nbsp<font color=#C1F4ED font size="+1"><a name="viewing"><b>Web surfing</b></a></font><br>
<font size="+1">&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.frogfind.tmpl>View Web pages on<br><spacer type=block width=40> FrogFind</a><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.back.tmpl>Back button</a><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.reload.tmpl>Reload</a><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.scrolling.tmpl>Scrolling</a><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.speed.scrolling.tmpl>Speed scrolling</a><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.hangup.tmpl>Disconnect quickly</a></font><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.onscreenkeyboard.tmpl>On-screen keyboard</a><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.popups.tmpl>Navigate drop-down<br><spacer type=block width=40>lists</a></font><br>
<br>
&nbsp;&nbsp<font color=#C1F4ED font size ="+1"><a name="address"><b>Address book</b></a></font><br>
<font size="+1">&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.address.tmpl>The basics</a><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.add.address.tmpl>Add an address</a><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.changeaddress.tmpl>Change of address</a><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.groupaddress.tmpl>Group address</a><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.address.shortcut.tmpl>Address Book shortcut</a><br>
<br>`
if (session_data.hasCap("client-can-use-messenger")) {
    data += `
&nbsp;&nbsp<font color=#C1F4ED font size="+1"><a name="messenger"><b>Messenger/Chat</b></a></font><br>
<font size="+1">&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.messenger.tmpl>Intro to Messenger</a><br>
<!-- &nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.passport.messenger.tmpl>Need a Passport to use<br><spacer type=block width=40>Messenger</a><br> -->
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.emoticons.tmpl>Emoticons</a><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.messenger.shortcut.tmpl>See who's online</a><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.messenger.invite.tmpl>Group chat</a><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.messenger.allow.tmpl>Availability settings</a><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.addbuddies.tmpl>Add a buddy</a><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.blockbuddies.tmpl>Block a buddy</a><br>`;
} else {
    data += `&nbsp;&nbsp<font color=#C1F4ED font size="+1"><a name="chat"><b>Chat</b></a></font><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.emoticons.tmpl>Emoticons</a><br>`;
}
data += `<br>
&nbsp;&nbsp<font color=#C1F4ED font size="+1"><a name="help"><b>Help</b></a></font><br>
<font size="+1">&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.helpcenterb.tmpl>Help intro</a><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.helputilities.tmpl>View your box's info</a><br>
<!-- &nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.helpcentera.tmpl>Find an Answer</a><br> -->
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.webwords.tmpl>Web words</a><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.statusboard.tmpl>Status board</a><br>
<!-- &nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.webtvhints.tmpl>Hints by mail</a><br> -->
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.connectionspeed.tmpl>Get connected faster</a><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.newuser.tmpl>New users</a></font><br>
&nbsp;&nbsp<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.feature.request.tmpl>Submit feature request</a></font><br>
<br>
</td>
</tr>
</table>
<td abswidth=270 bgcolor=#0F6E68 valign=top>
<table cellspacing=0 cellpadding=0 border=0>
<tr>
<td><spacer type=block height=15 width=265></td>
</tr>
<tr>
<td>
<font color=#C1F4EDfont size="+1"><a name="equipment"><b>WebTV equipment</b></a></font><br>
<font size="+1"><img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.compatibleprinters.tmpl>Compatible printers</a><br>
<font size="+1"><img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.digitalcameras.tmpl>Digital Cameras</a><br>
<font size="+1"><img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.camcorders.tmpl>Find a camcorder</a><br>
<!-- <br>
<font color=#C1F4ED font size="+1"><a name="billing"><b>Billing</b></a></font><br>
<font size="+1"><img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.billing.tmpl>Check your balance</a></font><br>
<font size="+1"><img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.oneplan.tmpl>2 for 1 Web access</a></font><br>
<font size="+1"><img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.bankpayment.tmpl>Automatic bank payment</a></font><br>
<font size="+1"><img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.accountinfo.tmpl>Change account info</a><br></font> -->
<br>
<font color=#C1F4ED font size="+1"><a name="settings"><b>Settings</b></a></font><br>
<font size="+1"><img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.adddelete.tmpl>Add an e-mail address</a><br>
<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.changename.tmpl>Change your name</a><br>
<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.kidaccount.tmpl>Kid safe</a><br>
<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.accounts.tmpl>Add a user</a><br>
<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.textsize.tmpl>Change text size</a><br>
<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.weathercity.tmpl>Weather: changing cities</a><br>
<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.deletecookies.tmpl>Delete your cookies</a><br>
<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.switchusers.tmpl>Switch users fast</a><br>
<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.music.tmpl>Background music</a><br>
<br>
<font color=#C1F4EDfont size="+1"><a name="search"><b>Search</b></a></font><br>
<font size="+1"><img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.searchtips.tmpl>Search help</a><br>
<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.favorites.tmpl>Favorites</a><br>
<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.searchexplore.tmpl>Recommended sites</a><br>
<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.peoplesearch2.tmpl>Search for people</a><br>
<br>
<font color=#C1F4ED><a name="centers"><b>Centers</b></a></font><br>
<font size="+1"><img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.welcomewebtvtoday.tmpl>WebTV Today</a><br>
<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.welcomearoundtown.tmpl>Around Town</a><br>
<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.welcomenews.tmpl>News</a><br>
<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.welcomesports.tmpl>Sports</a><br>
<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.welcomeentertainment.tmpl>Entertainment</a><br>
<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.welcomemoney.tmpl>Money</a><br>
<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.centersmap.tmpl>Centers Map</a><br>
<br>
<font color=#C1F4ED font size="+1"><a name="things"><b>Things to do</b></a></font><br>
<font size="+1"><img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.thingstotry.tmpl>Things to Try</a><br>
<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.pagebuilder.tmpl>Page Builder</a><br>
<!-- <img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.carreview.tmpl>Car review</a><br> -->
<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.scrapbook.tmpl>Add pics to Scrapbook</a><br>
<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.ebayphotos.tmpl>Add photos on eBay</a><br>
<br>
<font color=#C1F4ED font size="+1"><a name="shopping"><b>Shopping</b></a></font><br>
<font size="+1"><img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.shopping.tmpl>Shopping</a><br>
<font size="+1"><img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.shopping.categories.tmpl>Shopping categories</a><br>`;
if (session_data.get("wtv-client-rom-type") == "US-WEBSTAR-disk-0MB-16MB-softmodem-CPU5230")
    data += `
<br>
<font color=#C1F4ED font size="+1"><a name="tvcontrols"><b>TV Controls</b></a></font><br>
<font size="+1"><img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.mercury.record.tmpl>Record</a></font><br>
<font size="+1"><img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.mercury.replay.tmpl>Replay</a></font><br>
<font size="+1"><img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.mercury.fastforward.tmpl>Fast-Forward</a></font><br>
<font size="+1"><img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.mercury.slowmo.tmpl>Slow motion</a></font><br>
<font size="+1"><img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.mercury.watchrecord.tmpl>Watch & record</a></font><br>
<font size="+1"><img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.mercury.pip.tmpl>PIP</a></font><br>
<br>
<font color=#C1F4ED font size="+1"><a name="enhancedmerc"><b>Enhanced TV</b></a></font><br>
<font size="+1"><img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.mercury.search.tmpl>Search</a></font><br>
<font size="+1"><img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.mercury.myshows.tmpl>My shows</a></font><br>
<font size="+1"><img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.mercury.fullscreen.tmpl>Full-screen TV</a></font><br>
<font size="+1"><img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.mercury.favoritechannels.tmpl>Favorite channels</a></font><br>
<font size="+1"><img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.mercury.reminder.tmpl>Set reminders</a></font><br>`;
else if (session_data.hasCap("client-has-tv-experience"))
data += `
<br>
<font color=#C1F4ED font size="+1"><a name="enhanced"><b>Enhanced TV (Plus Only)</b></a></font><br>
<font size="+1"><img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.tvwindow.tmpl>TV window</a><br>
<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.tvrecord.tmpl>Record</a><br>
<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.pipmove.tmpl>Move PIP window</a><br>
<img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.tvremind.tmpl>Remind</a></font><br>
<br>
<font color=#C1F4ED font size="+1"><a name="listings"><b>TV Listings (Plus Only)</b></a></font><br>
<font size="+1"><img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.epg.tvlistings.tmpl>Listings</a><br>
<font size="+1"><img src='/images/tips/icon.gif'>&nbsp;&nbsp<a href=wtv-center:/programming/tips/tips.tvlistingstime.tmpl>Set auto retrieve time</a><br>`;
data += `
</td>
</tr>
<tr>
<td><spacer type=block width=260 height=8></td>
</tr>
</table>
</table>
<table bgcolor="#ADA573" cellspacing=0 cellpadding=0 border=0>
<tr>
<tr><spacer type=block height=15></tr>
<td width=15 height=25 bgcolor="#5FA38C">
<td bgcolor="#5FA38C" gradangle=90 valign=left>
<blackface><font color="#FFEDAB">More Centers</font></blackface>
<td width=400 bgcolor="#5FA38C">
</table>
<table cellspacing=0 cellpadding=0 valign=top> 
<tr><td width=21> 
<td width=524 height=120 valign=top> 
<table cellspacing=0 cellpadding=0> 
<tr><td width=524 height=16> 
<tr><td> 
<table cellspacing=0 cellpadding=0> 
<tr><td width=16> 
<td width=156> 
<font size=+1 color=#f7e7bd>&#128; </font><a href=wtv-center:/center?info=WebTVToday><font color=#f7e7bd>WebTV Today</font> <td width=100> 
<font size=+1 color=#f7e7bd>&#128; </font><a href=wtv-center:/center?info=News><font color=#f7e7bd>News</font></a> <td width=110> <font color="f7e7bd">&#128; </font><a href=wtv-center:/center?info=Shopping><font color=#f7e7bd>Shopping</font></a> <td width=1> <spacer type=horizontal width=35><FONT SIZE=+1 COLOR=#FFFFFF>&#128; </font><a href="wtv-guide:/help"><font color=#FFFFFF>Help</font></a> <tr><td><spacer type=vertical size=4><td><td><td><td> <tr><td width=16> <td> <font color="f7e7bd">&#128; </font><a href=wtv-center:/center?info=Entertainment><font color=#f7e7bd>Entertainment</font></a> <td> <font size=+1 color=#f7e7bd>&#128; </font><a href=wtv-center:/center?info=Sports><font color=#f7e7bd>Sports</font></a> <td> <font size=+1 color=#f7e7bd>&#128; </font><a href=wtv-center:/center?info=Money><font color=#f7e7bd>Money</font></a> <td> 
<spacer type=horizontal width=35><FONT SIZE=+1 COLOR=#FFFFFF>&#128; </font><a href="wtv-center:/search-page"><font color=#FFFFFF>Search</font></a> <tr><td><spacer type=vertical size=5><td><td><td><td> <tr><td width=16> <TD> 
<TD> 
<td> 
<td> 
</table> </table> 
</body>
</html>`;
