import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PurchaseModule } from './purchase/purchase.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientModule } from './client/client.module';

@Module({
  imports: [ MongooseModule.forRoot('mongodb+srv://Pruebas:vtEiXJEFd9NCA7HP@clusterhugoproject.j6emb.mongodb.net/WalletDB?retryWrites=true&w=majority'),
             PurchaseModule, ClientModule, ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
