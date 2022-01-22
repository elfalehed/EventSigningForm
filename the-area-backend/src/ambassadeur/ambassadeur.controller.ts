import { Body, Controller, Get, Post } from '@nestjs/common';
import { AmbassadeurService } from './ambassadeur.service';

@Controller('ambassadeur')
export class AmbassadeurController {
    constructor(
        private readonly ambservice:AmbassadeurService ,
    ){}

@Post('addamb')
async registreAmbassadeur( @Body() Ambasadeur :any){
    const ambasadeur = this.ambservice.Addambassadeur(Ambasadeur);
    return ambasadeur
}
@Get('allamb')
async getAllUser(){
    return await this.ambservice.allambassadeur;
}
}