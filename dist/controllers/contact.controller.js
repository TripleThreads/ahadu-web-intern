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
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const auth_1 = require("../auth");
let ContactController = class ContactController {
    constructor(contactRepository) {
        this.contactRepository = contactRepository;
    }
    async create(body) {
        return body;
    }
    async count(where) {
        return this.contactRepository.count(where);
    }
    async find(filter) {
        return this.contactRepository.find(filter);
    }
    async updateAll(contact, where) {
        return this.contactRepository.updateAll(contact, where);
    }
    async findById(id) {
        return this.contactRepository.findById(id);
    }
    async updateById(id, contact) {
        await this.contactRepository.replaceById(id, contact);
    }
    async UpdateContact(body) {
        return body;
    }
    async deleteById(id) {
        await this.contactRepository.deleteById(id);
    }
};
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.post('/contacts', {
        responses: {
            200: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                        },
                    },
                },
                description: 'Contact model instance',
            },
        },
    }),
    __param(0, rest_1.requestBody({
        description: 'multipart/form-data value.',
        required: true,
        content: {
            'multipart/form-data': {
                schema: { type: 'object' },
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "create", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.get('/contacts/count', {
        responses: {
            '200': {
                description: 'Contact model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Contact))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "count", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.get('/contacts', {
        responses: {
            '200': {
                description: 'Array of Contact model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Contact) },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Contact))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "find", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.patch('/contacts', {
        responses: {
            '200': {
                description: 'Contact PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Contact, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Contact))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Contact, Object]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "updateAll", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.get('/contacts/{id}', {
        responses: {
            '200': {
                description: 'Contact model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Contact) } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "findById", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.put('/contacts/{id}', {
        responses: {
            '204': {
                description: 'Contact PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Contact, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Contact]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "updateById", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.patch('/contacts/{id}', {
        responses: {
            200: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                        },
                    },
                },
                description: 'Contact model instance',
            },
        },
    }),
    __param(0, rest_1.requestBody({
        description: 'multipart/form-data value.',
        required: true,
        content: {
            'multipart/form-data': {
                schema: { type: 'object' },
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "UpdateContact", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.del('/contacts/{id}', {
        responses: {
            '204': {
                description: 'Contact DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "deleteById", null);
ContactController = __decorate([
    __param(0, repository_1.repository(repositories_1.ContactRepository)),
    __metadata("design:paramtypes", [repositories_1.ContactRepository])
], ContactController);
exports.ContactController = ContactController;
//# sourceMappingURL=contact.controller.js.map