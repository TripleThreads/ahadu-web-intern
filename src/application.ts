import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';
import {RestExplorerBindings, RestExplorerComponent} from '@loopback/rest-explorer';
import {RepositoryMixin} from '@loopback/repository';
import {RestApplication, RestBindings} from '@loopback/rest';
import {ServiceMixin} from '@loopback/service-proxy';
import * as path from 'path';
import {MySequence} from './sequence';

import {AuthenticationBindings} from '@loopback/authentication';
import {
  MyAuthActionProvider,
  MyAuthAuthenticationStrategyProvider,
  MyAuthBindings,
  MyAuthMetadataProvider,
} from './auth';
import {CustomRejectProvider} from "./providers/CustomRejectProvider";

export class LoopbackAhaduApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    // Set up the custom sequence
    this.sequence(MySequence);

    // Set up default home page
    this.static('/', path.join(__dirname, '../public'));

    // Customize @loopback/rest-explorer configuration here
    this.bind(RestExplorerBindings.CONFIG).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);

    this.bind(AuthenticationBindings.METADATA).toProvider(MyAuthMetadataProvider);
    this.bind(MyAuthBindings.STRATEGY).toProvider(MyAuthAuthenticationStrategyProvider);
    this.bind(AuthenticationBindings.AUTH_ACTION).toProvider(MyAuthActionProvider);
    this.bind(RestBindings.SequenceActions.REJECT).toProvider(CustomRejectProvider); // for custom errors

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };
  }
}
