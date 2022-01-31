import * as  Mongoose  from 'mongoose';
import { UserRoleEnum } from 'src/enum/user-role';
// TO DO : missing fields (see models.ts)
export const UsersSchema = new Mongoose.Schema({
  FirstName: { type: String},
  LastName: { type: String},
  mail: { type: String, required:true},
  Gender:{ type: String },
  governorate:{ type: String },
  university:{ type: String },
  pay:{ type: Boolean },
  Phone:{ type: Number },
  cin:{type: Number},
  DateOfBirth:{type:Date},
  role:{type:String,default:UserRoleEnum.Participant}
  });

export interface User extends Mongoose.Document {  
  id: string;
  FirstName: string;
  LastName: string;
  mail: string;
  cin:number;
  Gender:string;
  DateOfBirth:Date;
  Phone:number;
  governorate:string;
  university:string;
  pay:Boolean;
  role : UserRoleEnum;
  
}