import * as Mongoose from 'mongoose';
import { UserRoleEnum } from 'src/enum/user-role';
export declare const AbassadeurSchema: Mongoose.Schema<any, Mongoose.Model<any, any, any, any>, any, any>;
export interface Ambassadeur extends Mongoose.Document {
    id: string;
    cin: Number;
    FirstName: string;
    LastName: string;
    mail: string;
    psw: string;
    Gender: string;
    DateOfBirth: string;
    Phone: Number;
    governorate: string;
    university: string;
    role: UserRoleEnum;
}
