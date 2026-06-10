var minisrv_service_file = true;

var alert = new clientShowAlert({
                message: 'DAMMIT!',
                image: 'wtv-tricks:/images/dammit.gif',
                buttonlabel1: "Continue",
                buttonaction1: "client:donothing",
                noback: true,
            }).getURL();
            var headers = `301 Moved
Location: ${alert}
wtv-encrypted: true`
