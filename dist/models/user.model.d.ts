import { Entity } from '@loopback/repository';
import { Contact } from './contact.model';
export declare class User extends Entity {
    username: string;
    password: string;
    contacts: Contact[];
    [prop: string]: any;
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export declare type UserWithRelations = User & UserRelations;
