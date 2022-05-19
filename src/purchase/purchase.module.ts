import { Module } from '@nestjs/common';
import { purchaseSchema } from 'src/schemas/purchase';
import { PurchaseController } from './purchase.controller';
import { PurchaseService } from './purchase.service';
import { ClientService } from 'src/client/client.service';
import { MongooseModule } from "@nestjs/mongoose";
import { clientSchema } from 'src/schemas/client';

@Module({
  imports: [MongooseModule.forFeature([
    {name: 'Purchase', schema: purchaseSchema},
    {name: 'Client', schema: clientSchema},
  ])],
  controllers: [PurchaseController],
  providers: [PurchaseService, ClientService]
})
export class PurchaseModule {}
