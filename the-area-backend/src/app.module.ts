import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AmbassadeurModule } from './ambassadeur/ambassadeur.module';

@Module({
  imports: [MongooseModule.forRoot(`mongodb://localhost:27017/exemple`), UserModule, AmbassadeurModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
