var minisrv_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;

const termsOfServiceContent = fs.readFileSync(
    "./ServiceDeps/TermsOfService.txt",
    {encoding: "utf8", flag: "r"}
);

data = engine.renderFileSync('wtv-home/termsPrivacy', { title: "WebTV Terms of Service", body: termsOfServiceContent, isJapaneseClient: session_data.isJapaneseClient()});