import {Entity, model, property, hasMany} from '@loopback/repository';
import {Contact} from './contact.model';

@model({settings: {strict: false}})
export class User extends Entity {
  @property({
    type: 'string',
    required: true,
    id: true,
  })
  username: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @hasMany(() => Contact)
  contacts: Contact[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
