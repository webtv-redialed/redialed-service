var minisrv_service_file = true;

headers = `200 OK
Content-Type: text/html`;

data = engine.renderFileSync('wtv-tricks/tricksGeneric', { title: "It Is Done.", header: "You Did It!", body: `You should now have DOOM and YDKJ links in the "LC2 Games" folder in favorites.
<p>
If they don't work then tough luck ig.
<p>
Have Fun!`, leaveLink: "wtv-home:/home", leaveLinkName: "Go home."});