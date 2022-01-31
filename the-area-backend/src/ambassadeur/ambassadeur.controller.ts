import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Ambassadeur } from './ambassadeur.model';
import { AmbassadeurService } from './ambassadeur.service';

@Controller('ambassadeur')
export class AmbassadeurController {
    constructor(
        private readonly ambservice:AmbassadeurService ,
    ){}

@Post('addamb')
async registreAmbassadeur( @Body() Ambasadeur :any){
    const ambasadeur = this.ambservice.Addambassadeur(Ambasadeur);
    console.log(ambasadeur)
    return ambasadeur
}
@Get('allamb')
async getAllUser(){
    console.log("hello")
    return await this.ambservice.allambassadeur();
}
@Get('/:id')
    async getUser( @Param() params): Promise<Ambassadeur> {
        return await this.ambservice.getambassabyid(params.id);
    }
}