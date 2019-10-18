import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    username: string;
    password: string;
    [prop: string]: any;
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export declare type UserWithRelations = User & UserRelations;
