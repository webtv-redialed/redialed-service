# DynamicConfig
These are config files that can be updated without restarting the server. One of minisrv's biggest problems is having to restart it any time you have to update the config, which is asinine in a production environment like Redialed, so this is the solution to that for configs that may need to be updated often.

- ads.json: used by the service's home page to display user-submitted advertisements
- authorizedPOSTers.json: users we can steal livers from
- nonoWords.json: list of bad words (e.g. user tries to register as "FuckFace9000")
- reservedWords.json: list of reserved words (e.g. user tries to register as "RedialedSuperAdmin")
- randomAdjective.json: list of adjectives for random username generation on debug servers
- randomNoun.json: ditto, but nouns
- flashrom: folder containing flashrom metadata

