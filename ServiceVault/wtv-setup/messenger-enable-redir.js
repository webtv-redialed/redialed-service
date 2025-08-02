var wtvrsvc_service_file = true;

// this file's sole purpose in life is to turn messenger off and on when changing accounts, so the user doesn't have to relog

headers = `302 Moved temporarily
Content-type: text/html
Location: wtv-setup:/messenger?just_enabled=true
wtv-messenger-enable: 1
`;
