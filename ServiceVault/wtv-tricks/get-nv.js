var minisrv_service_file = true;
headers = `200 OK
Content-Type: text/html
wtv-nvstorage-dump: wtv-tricks:/post-nvstorage-dump`;

data = engine.renderFileSync('wtv-tricks/tricksGeneric', { title: "NVRAM Dump", header: "NVRAM Dump ", body: `Your WebTV is dumping its NVRAM and sending it to the WebTV Service for use by the server operators.
<p>
This will take a few seconds, and then your NVRAM contents will be preserved. You will be shortly redirected to the home page.`, goHomeAuto: true});