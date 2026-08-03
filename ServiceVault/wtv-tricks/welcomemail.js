var minisrv_service_file = true;

session_data.mailstore.createWelcomeMessage();

headers = `200 OK
Content-Type: text/html`;

data = engine.renderFileSync('wtv-tricks/tricksGeneric', { title: "Welcome... again!", header: "Mail from the girl herself", body: `Looks like you've got new mail in your inbox!
<p>
You can now experience the joys of the message light.
<p>
Have fun!`, leaveLink: "wtv-mail:/listmail", leaveLinkName: "Turn it off!!!"});
