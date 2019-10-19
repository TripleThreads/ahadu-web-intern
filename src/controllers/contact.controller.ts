import {Count, CountSchema, Filter, repository, Where} from '@loopback/repository';
import {
    del,
    get,
    getFilterSchemaFor,
    getModelSchemaRef,
    getWhereSchemaFor,
    param,
    patch,
    post,
    put,
    requestBody,
} from '@loopback/rest';
import {Contact} from '../models';
import {ContactRepository} from '../repositories';
import {secured, SecuredType} from '../auth';

export class ContactController {
    constructor(
      @repository(ContactRepository)
      public contactRepository: ContactRepository,
    ) {
    }

    @secured(SecuredType.IS_AUTHENTICATED)
    @post('/contacts', {
        responses: {
            200: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                        },
                    },
                },
                description: 'Contact model instance',
            },
        },
    })
    async create(
      @requestBody({
          description: 'multipart/form-data value.',
          required: true,
          content: {
              'multipart/form-data': {
                  schema: {type: 'object'},
              },
          },
      })
        body: unknown,
    ) {
        return body;
    }


    @secured(SecuredType.IS_AUTHENTICATED)
    @get('/contacts/count', {
        responses: {
            '200': {
                description: 'Contact model count',
                content: {'application/json': {schema: CountSchema}},
            },
        },
    })
    async count(
      @param.query.object('where', getWhereSchemaFor(Contact)) where?: Where<Contact>,
    ): Promise<Count> {
        return this.contactRepository.count(where);
    }

    @secured(SecuredType.IS_AUTHENTICATED)
    @get('/contacts', {
        responses: {
            '200': {
                description: 'Array of Contact model instances',
                content: {
                    'application/json': {
                        schema: {type: 'array', items: getModelSchemaRef(Contact)},
                    },
                },
            },
        },
    })
    async find(
      @param.query.object('filter', getFilterSchemaFor(Contact)) filter?: Filter<Contact>,
    ): Promise<Contact[]> {
        return this.contactRepository.find(filter);
    }

    @secured(SecuredType.IS_AUTHENTICATED)
    @patch('/contacts', {
        responses: {
            '200': {
                description: 'Contact PATCH success count',
                content: {'application/json': {schema: CountSchema}},
            },
        },
    })
    async updateAll(
      @requestBody({
          content: {
              'application/json': {
                  schema: getModelSchemaRef(Contact, {partial: true}),
              },
          },
      })
        contact: Contact,
      @param.query.object('where', getWhereSchemaFor(Contact)) where?: Where<Contact>,
    ): Promise<Count> {
        return this.contactRepository.updateAll(contact, where);
    }

    @secured(SecuredType.IS_AUTHENTICATED)
    @get('/contacts/{id}', {
        responses: {
            '200': {
                description: 'Contact model instance',
                content: {'application/json': {schema: getModelSchemaRef(Contact)}},
            },
        },
    })
    async findById(@param.path.string('id') id: string): Promise<Contact> {
        return this.contactRepository.findById(id);
    }

    @secured(SecuredType.IS_AUTHENTICATED)
    @put('/contacts/{id}', {
        responses: {
            '204': {
                description: 'Contact PATCH success',
            },
        },
    })
    async updateById(
      @param.path.string('id') id: string,
      @requestBody({
          content: {
              'application/json': {
                  schema: getModelSchemaRef(Contact, {partial: true}),
              },
          },
      })
        contact: Contact,
    ): Promise<void> {
        await this.contactRepository.replaceById(id, contact);
    }

    @secured(SecuredType.IS_AUTHENTICATED)
    @patch('/contacts/{id}', {
        responses: {
            200: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                        },
                    },
                },
                description: 'Contact model instance',
            },
        },
    })

    async UpdateContact(
      @requestBody({
          description: 'multipart/form-data value.',
          required: true,
          content: {
              'multipart/form-data': {
                  schema: {type: 'object'},
              },
          },
      })
        body: unknown,
    ) {
        return body;
    }

    @secured(SecuredType.IS_AUTHENTICATED)
    @del('/contacts/{id}', {
        responses: {
            '204': {
                description: 'Contact DELETE success',
            },
        },
    })
    async deleteById(@param.path.string('id') id: string): Promise<void> {
        await this.contactRepository.deleteById(id);
    }
}
