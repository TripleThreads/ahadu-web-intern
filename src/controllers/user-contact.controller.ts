import {Count, CountSchema, Filter, repository, Where} from '@loopback/repository';
import {del, get, getModelSchemaRef, getWhereSchemaFor, param, patch, post, requestBody} from '@loopback/rest';
import {Contact} from '../models';
import {UserRepository} from '../repositories';
import {secured, SecuredType} from '../auth';

export class UserContactController {

  constructor(
    @repository(UserRepository) protected userRepository: UserRepository,
  ) { }

  @secured(SecuredType.IS_AUTHENTICATED)
  @get('/users/{id}/contacts', {
    responses: {
      '200': {
        description: 'Array of Contact\'s belonging to User',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Contact)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Contact>,
  ): Promise<Contact[]> {
    return this.userRepository.contacts(id).find(filter);
  }

  @secured(SecuredType.IS_AUTHENTICATED)
  @post('/users/{id}/contacts', {
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
  @patch('/users/{id}/contacts', {
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
  @del('/users/{id}/contacts', {
    responses: {
      '200': {
        description: 'User.Contact DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Contact)) where?: Where<Contact>,
  ): Promise<Count> {
    return this.userRepository.contacts(id).delete(where);
  }
}
