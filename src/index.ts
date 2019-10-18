import {LoopbackAhaduApplication} from './application';
import {ApplicationConfig} from '@loopback/core';
import  {MultipartFormDataBodyParser}  from './parser/body.parser'

export {LoopbackAhaduApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new LoopbackAhaduApplication(options);
  app.bodyParser(MultipartFormDataBodyParser);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
