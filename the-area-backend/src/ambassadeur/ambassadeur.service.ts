import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { Ambassadeur } from './ambassadeur.model';

@Injectable()
export class AmbassadeurService {
    constructor(
        @InjectModel('Ambassadeur') private readonly ambassadeurModel:Model<Ambassadeur>,
      ) { }
async Addambassadeur(ambassadeur: any) {

  const hashedPassword = await bcrypt.hash(ambassadeur.password, 10);
    const newambassadeur = new this.ambassadeurModel({
      firstName: ambassadeur.firstname,
      lastName: ambassadeur.lastname,
      email: ambassadeur.email,
      password: hashedPassword,
      phone:ambassadeur.phone,
      cin:ambassadeur.cin,
      sexe:ambassadeur.sexe,
      birthday:ambassadeur.birthday,
      gouvernerat:ambassadeur.gouvernerat,
      universite:ambassadeur.universite,
      role:ambassadeur.role
    });

    return newambassadeur.save()
  }
  async allambassadeur(){
    return await this.ambassadeurModel.find().exec()
   }
   async getambassabyid(id: string): Promise<any>{
    let ambassadeu = await  this.ambassadeurModel.findById(id).exec()
    return {
      id:ambassadeu.id,
      firstName:ambassadeu.firstName,
      lastName:ambassadeu.lastName,
      email:ambassadeu.email,
      phone:ambassadeu.phone,
      sexe:ambassadeu.sexe,
      birthday:ambassadeu.birthday,
      gouvernerat:ambassadeu.gouvernerat,
      universite:ambassadeu.universite,
      
    }
   }
}