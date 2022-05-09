import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IClient } from '../interfaces/client'
import { ClientDTO } from 'src/dto/client';


@Injectable()
export class ClientService {

    constructor(@InjectModel('Client') private clientModel: Model<IClient>) {}

    public async getClient(id: string): Promise<IClient>
    {
        const client = await this.clientModel.findById(id)
        return client
    }

    public async getClients(): Promise<IClient[]>
    {
        const clients = await this.clientModel.find();
        return clients;
    }

    public async createClient(client: ClientDTO): Promise<IClient>
    {
        const newClient = new this.clientModel(client);
        return await newClient.save()
    }

    public async updateClient(client: ClientDTO): Promise<IClient>
    {
        const updatedClient = await this.clientModel.findByIdAndUpdate(client._id, client, {new: true})
        return updatedClient;
    }

    public async deleteClient(id: string): Promise<IClient>
    {
        const deletedClient = await this.clientModel.findByIdAndDelete(id)
        return deletedClient;
    }
}
