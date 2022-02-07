import * as Mongoose from 'mongoose';
import { UserRoleEnum } from 'src/enum/user-role';
export declare const UsersSchema: Mongoose.Schema<any, Mongoose.Model<any, any, any, any>, any, any>;
export interface User extends Mongoose.Document {
    id: string;
    FirstName: string;
    LastName: string;
    mail: string;
    cin: number;
    Gender: string;
    DateOfBirth: Date;
    Phone: number;
    governorate: string;
    university: string;
    pay: Boolean;
    role: UserRoleEnum;
}
