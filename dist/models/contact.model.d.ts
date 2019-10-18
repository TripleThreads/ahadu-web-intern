import { Entity } from '@loopback/repository';
export declare class Contact extends Entity {
    id: string;
    name: string;
    phone_number: string;
    photo: string;
    [prop: string]: any;
    constructor(data?: Partial<Contact>);
}
export interface ContactRelations {
}
export declare type ContactWithRelations = Contact & ContactRelations;
