var minisrv_service_file = true;

headers = `200 OK
Content-Type: text/html
wtv-input-timeout: 86400`;

data = engine.renderFileSync('wtv-tricks/tricksGeneric', { title: "Stayin' Alive", header: "Stayin' Alive ", body: `Your WebTV will now stay connected and not time-out for 24 hours.
<p>
The next time you power off and sign-on the disconnect time will be restored
to normal.
<p>
Boogie on down!`, leaveLink: "wtv-home:/home", leaveLinkName: "Go home."});