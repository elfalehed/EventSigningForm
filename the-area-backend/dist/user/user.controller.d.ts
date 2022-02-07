import { UserService } from './user.service';
export declare class UserController {
    private readonly userserv;
    constructor(userserv: UserService);
    registreUser(user: any): Promise<import("./user.model").User & {
        _id: any;
    }>;
    getAllUser(): Promise<(import("./user.model").User & {
        _id: any;
    })[]>;
}
