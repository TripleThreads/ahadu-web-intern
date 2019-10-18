import { DefaultCrudRepository } from '@loopback/repository';
import { Contact, ContactRelations } from '../models';
import { MongodbDataSource } from '../datasources';
export declare class ContactRepository extends DefaultCrudRepository<Contact, typeof Contact.prototype.id, ContactRelations> {
    constructor(dataSource: MongodbDataSource);
}
