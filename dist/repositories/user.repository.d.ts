import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { User, UserRelations, Contact } from '../models';
import { MongodbDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { ContactRepository } from './contact.repository';
export declare class UserRepository extends DefaultCrudRepository<User, typeof User.prototype.id, UserRelations> {
    protected contactRepositoryGetter: Getter<ContactRepository>;
    readonly contacts: HasManyRepositoryFactory<Contact, typeof User.prototype.password>;
    constructor(dataSource: MongodbDataSource, contactRepositoryGetter: Getter<ContactRepository>);
}
