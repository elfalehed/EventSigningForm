import { Model } from 'mongoose';
import { User } from './user.model';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    Adduser(user: any): Promise<User & {
        _id: any;
    }>;
    allUsers(): Promise<(User & {
        _id: any;
    })[]>;
}
