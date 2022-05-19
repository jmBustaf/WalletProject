import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IPurchase } from '../interfaces/purchase'
import { PurchaseDTO } from 'src/dto/purchase';
import { ParamsPurchaseDTO } from 'src/dto/params-purchase';
import { ClientService } from 'src/client/client.service';
import { ParamsClientDTO } from 'src/dto/params-clients';


@Injectable()
export class PurchaseService {

    constructor(@InjectModel('Purchase') private purchaseModel: Model<IPurchase>,
                private  clientService: ClientService) {}

    public async getPurchase(id: ParamsPurchaseDTO): Promise<IPurchase>
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

    public async updatePurchase(id: ParamsClientDTO, purchase: PurchaseDTO): Promise<IPurchase>
    {
        // TODO buscar el cliente antes de enviar el purchase
        const client = await this.clientService.getClient(id)

        const updatedPurchase = await this.purchaseModel.findByIdAndUpdate(id, purchase, {new: true})
        return updatedPurchase;
    }

    public async deletePurchase(id: ParamsPurchaseDTO): Promise<IPurchase>
    {
        const deletedPurchase = await this.purchaseModel.findByIdAndDelete(id)
        return deletedPurchase;
    }
}
