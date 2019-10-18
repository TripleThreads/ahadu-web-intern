import { Count, Filter, Where } from '@loopback/repository';
import { Contact } from '../models';
import { ContactRepository } from '../repositories';
export declare class ContactController {
    contactRepository: ContactRepository;
    constructor(contactRepository: ContactRepository);
    create(body: unknown): Promise<unknown>;
    count(where?: Where<Contact>): Promise<Count>;
    find(filter?: Filter<Contact>): Promise<Contact[]>;
    updateAll(contact: Contact, where?: Where<Contact>): Promise<Count>;
    findById(id: string): Promise<Contact>;
    updateById(id: string, contact: Contact): Promise<void>;
    UpdateContact(body: unknown): Promise<unknown>;
    deleteById(id: string): Promise<void>;
}
