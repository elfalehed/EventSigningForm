import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ambassadeur } from './ambassadeur.model';

@Injectable()
export class AmbassadeurService {
    constructor(
        @InjectModel('Ambassadeur') private readonly ambassadeurModel:Model<Ambassadeur>,
      ) { }
async Addambassadeur(ambassadeur: any) {
    const newambassadeur = new this.ambassadeurModel({
      firstName: ambassadeur.firstname,
      lastName: ambassadeur.lastname,
      email: ambassadeur.email,
      password: ambassadeur.password,
      phone:ambassadeur.phone
    
    });

    return newambassadeur.save()
  }
  async allambassadeur(){
    return await this.ambassadeurModel.find().exec()
   }
}