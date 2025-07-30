var minisrv_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;



data = nunjucks.render('ServiceDeps/templates/wtv-home/termsPrivacy.njk', { title: "WebTV Service Privacy Statement", body: `<CENTER><B>WebTV Service Privacy Statement</B></font><br>
<B><font size="-1">(Release date January 2, 2024)</B></CENTER></font>
<td abswidth=20>
<tr>
<td>
<td valign=top align=left>
<p>The purpose of this WebTV server is to recreate the 1999 WebTV experience using pages and assets from that era, and continuing to maintain it with new features/QOL improvemnts, without losing the WebTV look and feel. There will be inaccuracies in some areas. If you do find any, please report them to @hiden64 or @webtv on Discord.</p>
<p><b>With Whom Personal Information Is Shared and What Is Collected</b><br>
<p>When you register with a WebTV account on this server, you are sharing the following:</p>
<ul>
	<li>Your IP Address</li>
    <li>Your WebTV SSID (Silicon Serial ID)</li>
    <li>Your name</li>
	<li>Your ZIP Code</li>
    <li>Pages you access</li>
  </ul> 
  <p>This information is shared with the server operators.</p>
<p><b>Your IP Address</b><br>
<p>Both the IP address you used to sign up for WebTV, and the IP address you last signed in with are stored to help ensure that terminated users are kept off the service.</p>
  <p><b>Your Silicon Serial ID</b><br>
<p>Your Silicon Serial ID (SSID) is used to identify you on the network. Anyone with your SSID can impersonate you on the network, so don't share it. This ID is stored on our servers when you sign up, however it will not be shared with anyone except the server operators.</p>
  <p><b>Your Name</b><br>
<p>The name that you enter while signing up will be stored on our servers, however it will not be shared with anyone except the server operators.</p>
  <p><b>Your ZIP Code</b><br>
<p>The ZIP Code you enter to set weather info will be stored on our servers, and will only be sent to The Weather Channel to get current data. You are not required to enter a ZIP code, however it is required to fully utilize weather forecasting.</p>
  <p><b>Pages you access</b><br>
<p>All pages you visit and images you download will be temporarily logged for security reasons. This includes WebTV Network pages and Internet Web sites. This information can not be traced back to you, and will only be viewable to server operators for a short time. IRC Chat messages will <b><i>not</i></b> be logged, however server operators can see what servers you are connecting to.</p>
<p><b>How We Help Protect Children's Privacy</b><br>
<p>We do not knowingly collect information from children under the age of 13 to comply with COPPA. If the account creator is under 13, the main user and all secondary accounts will be terminated. All secondary users under 13 must be accompanied by a parent or guardian while using this service.</p>
<p>This Privacy Statement can change at any time, and without warning. If you do not agree with this Privacy Statement, please disconnect and contact @hiden64 on Discord to terminate your account.</p>
<td>`, isJapaneseClient: session_data.isJapaneseClient()});