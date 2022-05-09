import { Schema } from "mongoose";

export const purchaseSchema = new Schema({
    /* id: String, */
    clientId: { type: String },
    purchasePrice: { type: Number },
    currencyId: { type: String }, //Currency
    quantity: { type: Number },
},
{
  versionKey: false // You should be aware of the outcome after set to false
});

/* import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PurchaseDocument = Purchase & Document;

@Schema()
export class Purchase {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  description: string;
}

export const PurchaseSchema = SchemaFactory.createForClass(Purchase); */