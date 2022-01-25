import * as  Mongoose  from 'mongoose';
import { UserRoleEnum } from 'src/enum/user-role';
// TO DO : missing fields (see models.ts)
export const AbassadeurSchema = new Mongoose.Schema({
    firstName: { type: String},
    lastName: { type: String},
    email: { type: String, required:true},
    password: { type: String},
    phone: { type: String},
    sexe:{ type: String },
    gouvernerat:{ type: String },
    universite:{ type: String },
    paye:{ type: Boolean },
    cin:{type: Number},
    birthday:{type:Date},
    role:{type:String,default:UserRoleEnum.Ambassadeur}
  });

export interface Ambassadeur extends Mongoose.Document {  
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password:string;
  phone:number;
  sexe:string;
  birthday:Date;
  gouvernerat:string;
  universite:string;
  role : UserRoleEnum;
  
}