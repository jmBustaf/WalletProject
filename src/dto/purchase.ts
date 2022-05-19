import { ClientDTO } from "./client";

export class PurchaseDTO {
    _id: string;
    clientId: ClientDTO;
    purchasePrice: number;
    currencyId: string; //Currency
    quantity: number;
}