import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PurchaseModule } from './purchase/purchase.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientModule } from './client/client.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ ConfigModule.forRoot(), MongooseModule.forRoot(process.env.MONGODB),
             PurchaseModule, ClientModule, ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
