var minisrv_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;

const nunjucks = require('nunjucks');
nunjucks.configure({ autoescape: false });

// this sucks slightly less now
let sitetitle = `${session_data.hasCap('client-has-tv-experience') ? 'Web ' : ''}Home options`

data = nunjucks.render('ServiceDeps/templates/wtv-setup/setupGeneral.njk', { title: sitetitle, body: `<td abswidth=20>
<tr><td>
<td width=215 height=236 valign=top align=left>
<p>Use these options to customize how your ${session_data.hasCap('client-has-tv-experience') ? 'Web Home' : 'Home'} page looks and acts.${!session_data.hasCap('client-supports-etude-service') ? `<br><br>
<font size=-2>Your &boxname; receiver is currently running an older version of the software that does not support the new home page.<br><br>${session_data.get('wtv-client-rom-type') == 'bf0app' ? 'Upgrades are not being offered for your &boxname; at this time.' : 'You may opt to upgrade your &boxname; the next time you log into WebTV.'}` : ''}
<td width=20>
<td width=198 valign=top align=left>
<form action=wtv-setup:/validate-home-options><input type=hidden autosubmit=onleave>
<table cellspacing=0 cellpadding=0>
<tr><td valign=middle>
<input type=checkbox name=home value=1${!session_data.hasCap('client-supports-etude-service') ? ' checked disabled><input type=hidden name=ignorehome value=1' : session_data.getSessionData('alt_home') == '1' ? ' checked' : ''}>
<td abswidth=4>
<td valign=bottom>
<font size=-1>Classic home <a href="client:showalert?message=Enable this option to use the classic 1998 home page design rather than the current one.&buttonlabel1=Dismiss&buttonaction1=client:doNothing&buttonlabel2=Preview&buttonaction2=wtv-home:/home?force_old_home%3Dtrue"><img src=images/HelpButton.gif width=20 height=20 align=absbottom></a></font>
<tr><td absheight=8>
<tr><td valign=top>
</table>
<table cellspacing=0 cellpadding=0>
<tr><td valign=middle>
<input type=checkbox name=fastsplash value=1${session_data.getSessionData('fast_splash') == '1' ? ' checked' : ''}>
<td abswidth=4>
<td valign=bottom>
<font size=-1>Faster splash <a href="client:showalert?message=Enable this option to skip the 4-second delay that allows the splash jingle to play out in full.<br>You may not see a difference if you're on a slow connection.&buttonlabel1=Dismiss&buttonaction1=client:doNothing"><img src=images/HelpButton.gif width=20 height=20 align=absbottom></a></font>
<tr><td absheight=8>
<tr><td valign=top>
</table>
<table cellspacing=0 cellpadding=0>
<tr><td valign=top>
<script>function preview(){switch(document.forms[0].splash.selectedIndex){
case 0:location.href='client:showSplash?message=<font size%3D1>Let WebTV choose a splash logo.&action=client:doNothing&image=wtv-setup:/images/SplashPreviewAuto.gif'
break
case 1:location.href='client:showSplash?message=<font size%3D1>A splash logo with a blue background.&action=client:doNothing&image=wtv-setup:/images/SplashPreviewSKCro.gif'
break
case 2:location.href='client:showSplash?message=<font size%3D1>A pride month splash logo.&action=client:doNothing&image=wtv-setup:/images/SplashPreviewPride.gif'
break
case 3:location.href='client:showSplash?message=<font size%3D1>A darker pride month splash logo.&action=client:doNothing&image=wtv-setup:/images/SplashPreviewMulticolor.gif'
break
case 4:location.href='client:showSplash?message=<font size%3D1>A brighter pride month splash logo.&action=client:doNothing&image=wtv-setup:/images/SplashPreviewSupergay.gif'
break
case 5:location.href='client:showSplash?message=<font size%3D1>joeb&action=client:doNothing&image=wtv-setup:/images/SplashPreviewJoeb.gif'
break
default:return;
}}</script>
<font size=-1>Splash logo: <a href="client:showalert?message=Use the dropdown menu to change the splash logo that appears when you log into WebTV.&buttonlabel1=Dismiss&buttonaction1=client:doNothing"><img src=images/HelpButton.gif width=20 height=20 align=absbottom></a>
<spacer type=vertical height=48><font size=-2><select name=splash usestyle insetselection onchange="preview();return false">
<option value=auto${session_data.getSessionData('splash') == 'auto' || !session_data.getSessionData('splash') ? ' selected' : ''}>Automatic</option>
<option value=SKCro${session_data.getSessionData('splash') == 'SKCro' ? ' selected' : ''}>SKCro Blue</option>
<option value=pride${session_data.getSessionData('splash') == 'pride' ? ' selected' : ''}>Pride Month</option>
<option value=multicolor${session_data.getSessionData('splash') == 'multicolor' ? ' selected' : ''}>Pride Month Dark</option>
<option value=supergay${session_data.getSessionData('splash') == 'supergay' ? ' selected' : ''}>Pride Month Bright</option>
<option value=joeb${session_data.getSessionData('splash') == 'joeb' ? ' selected' : ''}>joeb</option>
</select></font></font>
<tr><td absheight=10>
<tr><td valign=top>
</table>
<tr><td><td colspan=4 height=14 valign=top align=left>
<tr><td><td colspan=4 height=2 valign=middle align=center bgcolor=2b2b2b>
<spacer type=block width=436 height=1>
<tr><td><td colspan=4 height=1 valign=top align=left>
<tr><td><td colspan=4 height=2 valign=top align=left bgcolor=0d0d0d>
<spacer type=block width=436 height=1>
<tr><td><td colspan=4 height=4 valign=top align=left>
<tr><td><td colspan=3 valign=top align=right>
<font color=e7ce4a size=-1 effect=shadow>
<input type=submit name=Done value=Done width=103 borderimage=file://ROM/Borders/ButtonBorder2.bif name=Button2 usestyle width=103>
</font></form>
<td></table>`, hasTuner: session_data.hasCap('client-has-tuner'), isJapaneseClient: session_data.isJapaneseClient()});