import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AmbassadeurController } from './ambassadeur.controller';
import { AbassadeurSchema } from './ambassadeur.model';
import { AmbassadeurService } from './ambassadeur.service';

@Module({
  imports:[MongooseModule.forFeature([{name:'Ambassadeur',schema:AbassadeurSchema}])],
  controllers: [AmbassadeurController],
  providers: [AmbassadeurService]
})
export class AmbassadeurModule {}
