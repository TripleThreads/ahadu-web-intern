import {inject, Provider} from "@loopback/context";

import {HttpError} from "http-errors";
import {HandlerContext, Reject, RestBindings} from "@loopback/rest";
import {ErrorWriterOptions} from "strong-error-handler";

export class CustomRejectProvider implements Provider<Reject> {
    constructor(
        @inject(RestBindings.ERROR_WRITER_OPTIONS, {optional: true})
        protected errorWriterOptions?: ErrorWriterOptions,
    ) {
    }

    value(): Reject {
        return (context, error) => this.action(context, error);
    }

    action({request, response}: HandlerContext, error: Error) {
        const err = <HttpError>error;

        let statusCode = err.statusCode || err.status || 500;

        let body = {};

        if (error.message.indexOf("duplicate key error collection: ahadu.User") !== -1) {
            statusCode = 409;
            body = {
                message: 'Username already taken'// convert err to plain data object
            };
            response.statusMessage = "Conflict " + 'Username already taken';
        }

        response.statusCode = statusCode;
        response.setHeader('Content-Type', 'application/json; charset=utf-8');
        response.end(JSON.stringify(body), 'utf-8');

    }
}