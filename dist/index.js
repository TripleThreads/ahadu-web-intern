"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = require("./application");
exports.LoopbackAhaduApplication = application_1.LoopbackAhaduApplication;
const body_parser_1 = require("./parser/body.parser");
async function main(options = {}) {
    const app = new application_1.LoopbackAhaduApplication(options);
    app.bodyParser(body_parser_1.MultipartFormDataBodyParser);
    await app.boot();
    await app.start();
    const url = app.restServer.url;
    console.log(`Server is running at ${url}`);
    console.log(`Try ${url}/ping`);
    return app;
}
exports.main = main;
//# sourceMappingURL=index.js.map