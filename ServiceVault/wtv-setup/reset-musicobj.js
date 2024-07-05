var music_obj = {};
session_data.setSessionData("wtv-bgmusic", Object.assign({}, music_obj));
session_data.saveSessionData();
headers = `302 Moved temporarily
Location: wtv-setup:/choose-bg-songs`;
