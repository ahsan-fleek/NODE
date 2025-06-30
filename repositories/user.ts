import {  ObjectId } from 'mongodb';
import { IUser } from '../utils/interfaces/api/user-interface';
import { BaseRepository } from './base-repository';

class UserRepository extends BaseRepository<IUser> {
  constructor() {
    super('users');
  }

  findByEmail(email: string) {
    return this.findOne({ email });
  }

  findByFullName(fullname: string) {
    return this.findOne({ fullname });
  }


  findById(id: string) {
    return this.findOne({ _id: new ObjectId(id) } );
  }

  insertUser(user: IUser) {
    return this.insertOne(user);
  }
}

export default new UserRepository();
