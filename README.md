# WebTV Redialed
This is a replacement service for WebTV/MSN TV (1st generation) clients, originally based on zefie's [minisrv](https://github.com/zefie/zefie_wtvp_minisrv) project. **This software is provided AS IS, with NO WARRANTY.**

This service is not designed to be ran anywhere except on the main Redialed server. It's assumed that you know what you're doing when running it; no help for setting up the server will be provided for any reason. **You're on your own, kid.**

## Setup + running the service
- Run `npm install` to install all dependencies.
- Configure the service to your preferences (see the below section)
- Run the service: `npm start`. If you get an error with the code `ERR_OSSL_EVP_UNSUPPORTED`, try `npm run startossl` instead.
  
## Notes for service configuration 
`includes/config.json` is the default configuration file that applies to *all* instances. If you wish to change the server's configuration from the defaults, please put your configuration changes in `user_config.json`. The file should be created in the root directory of the repository, and will be ignored by Git. We do this as to not have environment-specific and potentially sensitive configuration options (API keys, Tricks passwords, etc) exposed in a public repo.

Please make sure of the following:
- Service IP is correct and the service can be accessed from it
- Guest users are *not* enabled
- Registration is open on public services
- Appropriate API keys are functional for things like time zone determination, and sensitive passwords such as the Tricks password should not be left as their defaults

## For developers
If you'd like to contribute something but have no idea where to start, check [our to-do list](Documentation/todo.md). We would especially appreciate if you contributed something that's marked as "top priority".
