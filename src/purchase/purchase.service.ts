import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IPurchase } from '../interfaces/purchase'
import { PurchaseDTO } from 'src/dto/purchase';


@Injectable()
export class PurchaseService {

    constructor(@InjectModel('Purchase') private purchaseModel: Model<IPurchase>) {}

    public async getPurchase(id: string): Promise<IPurchase>
    {
        const purchase = await this.purchaseModel.findById(id)
        return purchase
    }

    public async getPurchases(): Promise<IPurchase[]>
    {
        const purchases = await this.purchaseModel.find();
        return purchases;
    }

    public async createPurchase(purchase: PurchaseDTO): Promise<IPurchase>
    {
        const newPurchase = new this.purchaseModel(purchase);
        return await newPurchase.save()
    }

    public async updatePurchase(id: string, purchase: PurchaseDTO): Promise<IPurchase>
    {
        const updatedPurchase = await this.purchaseModel.findByIdAndUpdate(id, purchase, {new: true})
        return updatedPurchase;
    }

    public async deletePurchase(id: string): Promise<IPurchase>
    {
        const deletedPurchase = await this.purchaseModel.findByIdAndDelete(id)
        return deletedPurchase;
    }
}
