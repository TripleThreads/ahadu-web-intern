"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const repositories_1 = require("../repositories");
const models_1 = require("../models");
const multer = require("multer");
const FORM_DATA = 'multipart/form-data';
let MultipartFormDataBodyParser = class MultipartFormDataBodyParser {
    constructor(contactRepository) {
        this.contactRepository = contactRepository;
        this.name = FORM_DATA;
    }
    supports(mediaType) {
        return mediaType.startsWith(FORM_DATA);
    }
    async parse(request) {
        const upload = multer({ dest: 'public/uploads/' });
        return new Promise((resolve, reject) => {
            upload.any()(request, {}, err => {
                if (err)
                    return reject(err);
                resolve({
                    value: {
                        files: request.files,
                        fields: request.fields,
                    },
                });
                const contact = new models_1.Contact();
                try {
                    // copy all attributes
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    Object.keys(request.body).forEach((key) => {
                        contact[key] = request.body[key];
                    });
                    contact['photo'] = request.files[0].filename;
                    if (request.method === 'POST') {
                        return this.contactRepository.save(contact);
                    }
                    else if (request.method === 'PATCH') {
                        const id = request.path.split('/')[2];
                        return this.contactRepository.updateById(id, contact);
                    }
                }
                catch (e) {
                    const id = request.path.split('/')[2];
                    return this.contactRepository.updateById(id, contact);
                }
            });
        });
    }
};
MultipartFormDataBodyParser = __decorate([
    __param(0, repository_1.repository(repositories_1.ContactRepository)),
    __metadata("design:paramtypes", [repositories_1.ContactRepository])
], MultipartFormDataBodyParser);
exports.MultipartFormDataBodyParser = MultipartFormDataBodyParser;
//# sourceMappingURL=body.parser.js.map