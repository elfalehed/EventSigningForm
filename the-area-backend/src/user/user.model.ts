import * as  Mongoose  from 'mongoose';
// TO DO : missing fields (see models.ts)
export const UsersSchema = new Mongoose.Schema({
    firstName: { type: String},
    lastName: { type: String},
    email: { type: String, required:true},
    description:{ type: String },
   
   


  });

export interface User extends Mongoose.Document {  
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  
}