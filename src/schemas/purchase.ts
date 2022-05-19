import { Schema } from "mongoose";
import { clientSchema } from "./client"

export const purchaseSchema = new Schema({
    /* id: String, */
    clientId: { type: clientSchema },
    purchasePrice: { type: Number },
    currencyId: { type: String }, //Currency
    quantity: { type: Number },
},
{
  versionKey: false // You should be aware of the outcome after set to false
});