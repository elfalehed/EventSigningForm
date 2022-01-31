import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly userserv :UserService
    ){}

    @Post('adduser')
    async registreUser( @Body() user :any){
        const users = this.userserv.Adduser(user);
        console.log(users)
        return users
    }
    @Get('allUsers')
    async getAllUser(){
        
        return await this.userserv.allUsers();
    }
}
