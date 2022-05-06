import { Module } from '@nestjs/common';
import { purchaseSchema } from 'src/schemas/purchase';
import { PurchaseController } from './purchase.controller';
import { PurchaseService } from './purchase.service';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [MongooseModule.forFeature([
    {name: 'Purchase', schema: purchaseSchema},
  ])],
  controllers: [PurchaseController],
  providers: [PurchaseService]
})
export class PurchaseModule {}
