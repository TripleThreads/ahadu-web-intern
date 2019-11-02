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
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
let Contact = class Contact extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
__decorate([
    repository_1.property({
        type: 'string',
        id: true,
        generated: true,
    }),
    __metadata("design:type", String)
], Contact.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Contact.prototype, "name", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Contact.prototype, "city", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Contact.prototype, "sub_city", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Contact.prototype, "house_number", void 0);
__decorate([
    repository_1.property({
        type: 'date',
        required: true,
    }),
    __metadata("design:type", String)
], Contact.prototype, "date_of_birth", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Contact.prototype, "phone_number", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Contact.prototype, "photo", void 0);
__decorate([
    repository_1.property({
        type: 'boolean',
        default: false,
    }),
    __metadata("design:type", Boolean)
], Contact.prototype, "is_favorite", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Contact.prototype, "userId", void 0);
Contact = __decorate([
    repository_1.model({ settings: { strict: false } }),
    __metadata("design:paramtypes", [Object])
], Contact);
exports.Contact = Contact;
//# sourceMappingURL=contact.model.js.map