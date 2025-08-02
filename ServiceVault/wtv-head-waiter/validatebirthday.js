var wtvrsvc_service_file = true;

var birthdaydata;
var month = request_headers.query.month;
var day = request_headers.query.day;

if (month >= 0 && month <= 11 && day >= 1 && day <= 31) {
    if (month == 1 && day > 28) {
        day == 28;
    }
    birthdaydata = {month: month, day: day};
    session_data.setSessionData("subscriber_birthday", birthdaydata);
    session_data.saveSessionData();
    headers = `200 OK
wtv-visit: wtv-head-waiter:/login-stage-two`;
} else {
    headers = "400 Please select a valid date of birth.";
}
