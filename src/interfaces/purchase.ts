import { Document } from "mongoose"

export interface IPurchase extends Document {
    /* id: string, */
    clientId: string;
    purchasePrice: number;
    currencyId: string; //Currency
    quantity: number;
  }