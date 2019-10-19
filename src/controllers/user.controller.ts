// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


import {HttpErrors, post, requestBody} from '@loopback/rest';
import {User} from '../models';
import {UserRepository} from '../repositories';
import {repository} from '@loopback/repository';
import {Credentials, JWT_SECRET} from '../auth';
import {promisify} from 'util';

const {sign} = require('jsonwebtoken');
const signAsync = promisify(sign);

export class UserController {
  constructor(
    @repository(UserRepository) private userRepository: UserRepository,
  ) {
  }

  @post('/users')
  async createUser(@requestBody() user: User): Promise<User> {
    return this.userRepository.create(user);
  }

  @post('/users/login')
  async login(@requestBody() credentials: Credentials) {
    if (!credentials.username || !credentials.password) throw new HttpErrors.BadRequest('Missing Username or Password');
    const user = await this.userRepository.findOne({where: {username: credentials.username}});
    if (!user) throw new HttpErrors.Unauthorized('Invalid credentials');

    const isPasswordMatched = user.password === credentials.password;
    if (!isPasswordMatched) throw new HttpErrors.Unauthorized('Invalid credentials');

    const tokenObject = {username: credentials.username};
    const token = await signAsync(tokenObject, JWT_SECRET);
    const {username} = user;

    return {
      token,
      id: username,
    };
  }
}
