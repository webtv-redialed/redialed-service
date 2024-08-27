# WebTV Redialed
The WebTV Redialed Service, currently based on zefie's [MiniSrv](https://github.com/zefie/zefie_wtvp_minisrv) project. **This software is provided AS IS, with NO WARRANTY.**

This service is not designed to be ran anywhere except on the main Redialed server. It's assumed that you know what you're doing when running it; no help for setting up the server will be provided for any reason. **You're on your own, kid**.

## Setup + running the service
- Run `npm install` to install all dependencies.
- Configure the service to your preferences (see the below section)
- Run the service: `npm start`. If you get an error with the code `ERR_OSSL_EVP_UNSUPPORTED`, try `npm run start17` instead.
  
## Notes for service configuration
`includes/config.json` can be used as a reference for what settings you can configure. Though be warned, it's supposed to contain configuration info applied to *all* instances. `user_config.json` is for this specific instance. Please take care before modifying either. This is being done to reduce clashing between configs and eliminate potential for misconfiguration.

Please make sure of the following:
- Service IP is correct and the service can be accessed from it
- Guest users are *not* enabled
- Registration is open on public services
- Appropriate API keys are functional for things like time zone determination
