var minisrv_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;

const termsOfServiceContent = fs.readFileSync(
    "./ServiceDeps/TermsOfService.txt",
    {encoding: "utf8", flag: "r"}
);

nunjucks.configure({ autoescape: false });

data = nunjucks.render('ServiceDeps/templates/wtv-home/termsPrivacy.njk', { title: "WebTV Terms of Service", body: termsOfServiceContent, isJapaneseClient: session_data.isJapaneseClient()});