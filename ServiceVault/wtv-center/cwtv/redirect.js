var wtvrsvc_service_file = true;

const clubWebTVURL = fs.readFileSync(
    "./ServiceDeps/clubWebTVURL.txt",
    {encoding: "utf8", flag: "r"}
);

headers = `302 Moved temporarily
Location: ${clubWebTVURL}`

