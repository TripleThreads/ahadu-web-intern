import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {User, UserRelations, Contact} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {ContactRepository} from './contact.repository';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {

  public readonly contacts: HasManyRepositoryFactory<Contact, typeof User.prototype.password>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('ContactRepository') protected contactRepositoryGetter: Getter<ContactRepository>,
  ) {
    super(User, dataSource);
    this.contacts = this.createHasManyRepositoryFactoryFor('contacts', contactRepositoryGetter,);
  }
}
