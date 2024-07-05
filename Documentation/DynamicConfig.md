# DynamicConfig
This was created to help solve one of the biggest problems with minisrv. Restarting the server/including configs in files that use them is kind of an ass thing to do in a production environment, so I poorly constructed this to patch that up for parts of the config that may need to be updated more regularly. You're welcome, even though you did not want this.
# ~~just use your common sense~~
- ads.json, used by the service's home page to display user-submitted advertisements
- nonoWords.json, list of bad words (e.g. user tries to register as "FuckFace9000")
- reservedWords.json, list of reserved words (e.g. user tries to register as "RedialedSuperAdmin")
- flashrom, folder containing flashrom metadata
# Need anything else?
too bad
