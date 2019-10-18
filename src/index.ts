import {LoopbackAhaduApplication} from './application';
import {ApplicationConfig} from '@loopback/core';
import * as path from 'path';

export {LoopbackAhaduApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new LoopbackAhaduApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
