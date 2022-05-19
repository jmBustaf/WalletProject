import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, Query } from '@nestjs/common';
import { ClientDTO } from 'src/dto/client';
import { ParamsClientDTO } from 'src/dto/params-clients';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {

    constructor(private clientService: ClientService) {}

    @Get('id')
    async getClient(@Res() res, @Query('id') id: ParamsClientDTO) {
        const client = await this.clientService.getClient(id)
        return res.status(HttpStatus.OK).json({message: "successful", data: client})
    }

    @Get('/list')
    async listClient(@Res() res) {
        const clients = await this.clientService.getClients()
        return res.status(HttpStatus.OK).json({message: "successful", data: clients})
    }

    @Post()  
    async createClient(@Res() res, @Body() clientDTO: ClientDTO) {
        const client = await this.clientService.createClient(clientDTO)
        return res.status(HttpStatus.OK).json({message: "successful", data: client})
    }

    @Put()
    async updateClient(@Res() res, @Body() clientDTO: ClientDTO, @Query('id') id: string) {
        const client = await this.clientService.updateClient(id, clientDTO)
        return res.status(HttpStatus.OK).json({message: "successful", data: client})
    }

    @Delete()
    async DeleteClient(@Res() res, @Query('id') id: ParamsClientDTO) {
        const client = await this.clientService.deleteClient(id)
        return res.status(HttpStatus.OK).json({message: "successful", data: client})
    }
}
