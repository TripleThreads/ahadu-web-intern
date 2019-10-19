import { Entity } from '@loopback/repository';
export declare class Contact extends Entity {
    id: string;
    name: string;
    city: string;
    sub_city: string;
    house_number: string;
    date_of_birth: string;
    phone_number: string;
    photo: string;
    is_favorite?: boolean;
    userId?: string;
    [prop: string]: any;
    constructor(data?: Partial<Contact>);
}
export interface ContactRelations {
}
export declare type ContactWithRelations = Contact & ContactRelations;
