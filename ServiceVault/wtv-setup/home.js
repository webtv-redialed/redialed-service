var wtvrsvc_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;

const splash = session_data.getSessionData('splash')
const isPlus = session_data.hasCap('client-has-tv-experience')
const supportsEtude = session_data.hasCap('client-supports-etude-service')


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
<TR>
<TD>
<TD COLSPAN=4 HEIGHT=0 VALIGN=top ALIGN=left>
<tr>
<TD>
<td colspan=4 height=2 valign=middle align=center bgcolor="2B2B2B">
<spacer type=block width=436 height=1>
<tr>
<TD>
<td colspan=4 height=1 valign=top align=left>
<tr>
<TD>
<td colspan=4 height=2 valign=top align=left bgcolor="0D0D0D">
<spacer type=block width=436 height=1>
<TR>
<TD>
<TD COLSPAN=4 HEIGHT=4 VALIGN=top ALIGN=left>
<TR>
<TD>
<TD COLSPAN=2 VALIGN=top ALIGN=left>
<TD VALIGN=top ALIGN=right>
<font color="#E7CE4A" size=-1><shadow>`, hasTuner: session_data.hasCap('client-has-tuner'), isJapaneseClient: session_data.isJapaneseClient(), button: true});