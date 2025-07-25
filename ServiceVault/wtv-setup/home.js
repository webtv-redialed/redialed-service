var minisrv_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;

const splash = session_data.getSessionData('splash')
const isPlus = session_data.hasCap('client-has-tv-experience')
const supportsEtude = session_data.hasCap('client-supports-etude-service')
nunjucks.configure({ autoescape: false });

data = nunjucks.render('ServiceDeps/templates/wtv-setup/setupGeneral.njk', { title: `${isPlus ? 'Web ' : ''}Home options`, body: `<td abswidth=20>
<tr><td>
<td width=215 height=236 valign=top align=left>
<p>Use these options to customize how your ${isPlus ? 'Web Home' : 'Home'} page looks and acts.${!supportsEtude ? `<br><br>
<font size=-2>Your &boxname; receiver is currently running an older version of the software that does not support the new ${isPlus ? 'Web Home' : 'Home'} page.<br><br>${session_data.get('wtv-client-rom-type') == 'bf0app' ? 'Upgrades are not being offered for your &boxname; at this time.' : 'You may opt to upgrade your &boxname; the next time you log into WebTV.'}` : ''}
<td width=20>
<td width=198 valign=top align=left>
<form action=wtv-setup:/validate-home-options><input type=hidden autosubmit=onleave>
<table cellspacing=0 cellpadding=0>
<tr><td valign=middle>
<input type=checkbox name=home value=1${!supportsEtude ? ' checked disabled><input type=hidden name=ignorehome value=1' : session_data.getSessionData('alt_home') == '1' ? ' checked' : ''}>
<td abswidth=4>
<td valign=bottom>
<font size=-1>Classic home <a href="client:showalert?message=Enable this option to use the classic 1998 ${isPlus ? 'Web Home' : 'Home'} page design rather than the current one.&buttonlabel1=Dismiss&buttonaction1=client:doNothing&buttonlabel2=Preview&buttonaction2=wtv-home:/home?force_old_home%3Dtrue"><img src=images/HelpButton.gif width=20 height=20 align=absbottom></a></font>
<tr><td absheight=8>
<tr><td valign=top>
</table>
<table cellspacing=0 cellpadding=0>
<tr><td valign=middle>
<input type=checkbox name=fastsplash value=1${session_data.getSessionData('fast_splash') == '1' ? ' checked' : ''}>
<td abswidth=4>
<td valign=bottom>
<font size=-1>Faster splash <a href="client:showalert?message=<font size%3D3>Enable this option to skip the 4-second delay that allows the splash jingle to play out in full.<spacer type%3D vertical size%3D24><font size%3D2>Note that you may not see a difference in load times if you're on a slow connection.&buttonlabel1=Dismiss&buttonaction1=client:doNothing"><img src=images/HelpButton.gif width=20 height=20 align=absbottom></a></font>
<tr><td absheight=8>
<tr><td valign=top>
</table>
<table cellspacing=0 cellpadding=0>
<tr><td valign=top>
<script>function preview(){switch(document.forms[0].splash.selectedIndex){
case 0:location.href='client:showSplash?message=<font size%3D1>Let WebTV choose a splash logo.&action=client:doNothing&image=wtv-setup:/images/SplashPreviewAuto.gif'
break
case 1:location.href='client:showSplash?message=<font size%3D1>The default WebTV splash logo.&action=client:doNothing&image=wtv-setup:/images/SplashPreview.gif'
break
case 2:location.href='client:showSplash?message=<font size%3D1>The MSN TV splash logo.&action=client:doNothing&image=wtv-setup:/images/SplashPreviewMSN.gif'
break
case 3:location.href='client:showSplash?message=<font size%3D1>A Pride splash logo.&action=client:doNothing&image=wtv-setup:/images/SplashPreviewPride.gif'
break
case 4:location.href='client:showSplash?message=<font size%3D1>A darker Pride splash logo.&action=client:doNothing&image=wtv-setup:/images/SplashPreviewMulticolor.gif'
break
default:return
}}</script>
<font size=-1>Splash logo: <a href="client:showalert?message=Use the dropdown menu to change the splash logo that appears when you log into WebTV.&buttonlabel1=Dismiss&buttonaction1=client:doNothing"><img src=images/HelpButton.gif width=20 height=20 align=absbottom></a>
<spacer type=vertical height=40><font size=-2><select name=splash width=182 usestyle insetselection onchange="preview();return false">
<option value=auto${splash == 'auto' || !splash ? ' selected' : ''}>Automatic</option>
<option value=default${splash == 'default' ? ' selected' : ''}>Default</option>
<option value=MSN${splash == 'MSN' ? ' selected' : ''}>MSN TV</option>
<option value=pride${splash == 'pride' ? ' selected' : ''}>Pride</option>
<option value=multicolor${splash == 'multicolor' ? ' selected' : ''}>Pride (dark)</option>
</select></font></font>
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