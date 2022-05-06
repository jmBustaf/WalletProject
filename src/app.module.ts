import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PurchaseModule } from './purchase/purchase.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ PurchaseModule, MongooseModule.forRoot('mongodb+srv://Pruebas:vtEiXJEFd9NCA7HP@clusterhugoproject.j6emb.mongodb.net/TestDB?retryWrites=true&w=majority') ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
