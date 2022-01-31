import * as  Mongoose  from 'mongoose';
import { UserRoleEnum } from 'src/enum/user-role';
// TO DO : missing fields (see models.ts)
export const AbassadeurSchema = new Mongoose.Schema({
  FirstName: { type: String},
  LastName: { type: String},
  mail: { type: String, required:true},
  psw: { type: String},
  Phone: { type: Number},
    Gender:{ type: String },
    governorate:{ type: String },
    university:{ type: String },
    cin:{type: Number},
    DateOfBirth:{type:Date},
    role:{type:String,default:UserRoleEnum.Ambassadeur}
  });

export interface Ambassadeur extends Mongoose.Document {  
  id: string;
  cin:Number;
  FirstName: string;
  LastName: string;
  mail: string;
  psw:string,
  Gender: string;
  DateOfBirth: string;
  Phone: Number;
  governorate: string;
  university: string;
  role : UserRoleEnum;
  
}