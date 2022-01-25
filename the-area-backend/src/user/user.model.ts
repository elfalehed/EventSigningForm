import * as  Mongoose  from 'mongoose';
import { UserRoleEnum } from 'src/enum/user-role';
// TO DO : missing fields (see models.ts)
export const UsersSchema = new Mongoose.Schema({
    firstName: { type: String},
    lastName: { type: String},
    email: { type: String, required:true},
    sexe:{ type: String },
    gouvernerat:{ type: String },
    universite:{ type: String },
    paye:{ type: Boolean },
    tel:{ type: Number },
    cin:{type: Number},
    birthday:{type:Date},
    role:{type:String,default:UserRoleEnum.Participant}
  });

export interface User extends Mongoose.Document {  
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  cin:number;
  sexe:string;
  birthday:Date;
  tel:number;
  gouvernerat:string;
  universite:string;
  paye:Boolean;
  role : UserRoleEnum;
  
}