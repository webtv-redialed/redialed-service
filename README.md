# WebTV Redialed
The WebTV Redialed Service, currently based on zefie's [MiniSrv](https://github.com/zefie/zefie_wtvp_minisrv) project. **This software is provided AS IS, with NO WARRANTY.**

## Setup + running the service
- Run `npm install` to install all dependencies.
- Configure the service to your preferences (see the below section)
- Run the service: `npm start`. If you get an error with the code `ERR_OSSL_EVP_UNSUPPORTED`, try `npm start17` instead.
  
## Notes for service configuration
`includes/config.json` can be used as a reference for what settings you can configure. Though be warned, it's supposed to contain configuration info applied to *all* instances. `user_config.json` is for this specific instance. Please take care before modifying either. This is being done to reduce clashing between configs and eliminate potential for misconfiguration.

Please make sure of the following:
- Service IP is correct and the service can be accessed from it
- Guest users are *not* enabled
- Registration is open on public services
- Appropriate API keys are functional for things like time zone determination
