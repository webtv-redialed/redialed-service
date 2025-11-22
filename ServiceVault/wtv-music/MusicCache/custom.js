var wtvrsvc_service_file = true;
headers = `200 OK
Content-Type: audio/midi`;
data = ``;

// tails1154 was here WOOOOOOOOO
if (!session_data.getSessionData("subscriber_custombgmusic")) {
	// We don't have a custom background music to play, so show the SIX SEVEN (kill me) error ("You don't have a custom background song") or something like that
	var errpage = wtvshared.doErrorPage(67);
        headers = errpage[0];
        data = errpage[1];
} else {
	// We do have a song, so send a redirect to that song
	headers = `300 Moved
Location: ${session_data.getSessionData("subscriber_custombgmusic")}`;
}
	
if (data == ``) {
	// We should never get here
	var errpage = wtvshared.doErrorPage(400);
	headers = errpage[0];
	data = errpage[1];
}
