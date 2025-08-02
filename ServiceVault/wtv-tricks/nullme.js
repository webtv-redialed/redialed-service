var wtvrsvc_service_file = true;

if (session_data) {
    if (session_data.data_store.wtvsec_login) {
        if (session_data.data_store.wtvsec_login.ticket_store) {
            if (session_data.data_store.wtvsec_login.ticket_store.user_id != null) {
                if (session_data.data_store.wtvsec_login.ticket_store.user_id >= 0)
                    session_data.switchUserID("-1");
            }
        }
    }
}

headers = "400 You are now nullified.";
