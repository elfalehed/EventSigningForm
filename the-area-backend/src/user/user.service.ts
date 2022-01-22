import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserRoleEnum } from 'src/enum/user-role';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
  ) { }
  async Adduser(user: any) {
    const newUser = new this.userModel({
      firstName: user.firstname,
      lastName: user.lastname,
      email: user.email,

    });

    return newUser.save()
  }
  async allUsers(){
    return await this.userModel.find().exec()
   }
}
