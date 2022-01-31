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
      FirstName: user.FirstName,
      LastName: user.LastName,
      mail: user.mail,
      cin:user.cin,
      Gender:user.sexe,
      DateOfBirth:user.DateOfBirth,
      Phone:user.Phone,
      governorate:user.governorate,
      university:user.university,
      pay:user.pay,
    });

    return newUser.save()
  }
  async allUsers(){
    return await this.userModel.find().exec()
   }
}
