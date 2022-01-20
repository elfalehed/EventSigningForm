import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly userserv :UserService
    ){}

    @Post('/registreUser')
    async registreUser( @Body() user :any){
        const users = this.userserv.Adduser(user);
        return users
    }
}
