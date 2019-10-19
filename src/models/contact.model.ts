import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Contact extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  city: string;

  @property({
    type: 'string',
    required: true,
  })
  sub_city: string;

  @property({
    type: 'string',
    required: true,
  })
  house_number: string;

  @property({
    type: 'date',
    required: true,
  })
  date_of_birth: string;

  @property({
    type: 'string',
    required: true,
  })
  phone_number: string;

  @property({
    type: 'string',
    required: true,
  })
  photo: string;

  @property({
    type: 'boolean',
    default: false,
  })
  is_favorite?: boolean;

  @property({
    type: 'string',
  })
  userId?: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Contact>) {
    super(data);
  }
}

export interface ContactRelations {
    // describe navigational properties here
}

export type ContactWithRelations = Contact & ContactRelations;
