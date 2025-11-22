// Tell the service runner this script is async
request_is_async = true;
var wtvrsvc_service_file = true;
headers = `200 OK
Content-Type: application/Music`;
data = ``;

// tails1154 was here WOOOOOOOOO
(async () => {
  if (!session_data.getSessionData("subscriber_custombgmusic")) {
    // We don't have a custom background music to play, so show the SIX SEVEN (kill me) error ("You don't have a custom background song") or something like that
    headers = `400 You don't have a custom background song set
Content-Type: text/html`;
    data = `<html><h1>You don't have a custom background song set.</h1><a href="wtv-music:/MusicCache/setcustom">Set one</a></html>`;
    sendToClient(socket, headers, data);
  } else {
    // We do have a song, so fetch it and return its data
    try {
      const customUrl = session_data.getSessionData("subscriber_custombgmusic");
      const response = await fetch(customUrl);
      const buffer = await response.arrayBuffer();

      headers = `200 OK
Content-Type: application/Music
Content-Length: ${buffer.byteLength}`;
      data = Buffer.from(buffer);

      sendToClient(socket, headers, data);
    } catch (err) {
      // Handle fetch errors gracefully
      headers = `500 Internal Server Error
Content-Type: text/html`;
      data = `<html><h1>Error fetching custom music.</h1><p>${err.message}</p></html>`;
      sendToClient(socket, headers, data);
    }
  }
})();
