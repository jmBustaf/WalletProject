import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, Query } from '@nestjs/common';
import { ParamsPurchaseDTO } from 'src/dto/params-purchase';
import { PurchaseService } from './purchase.service';
import { ParamsClientDTO } from 'src/dto/params-clients';

@Controller('purchase')
export class PurchaseController {

    constructor(private  purchaseService: PurchaseService) {}

    @Get('id')
    async getPurchase(@Res() res, @Query('id') id: ParamsPurchaseDTO) {
        const purchase = await this.purchaseService.getPurchase(id)
        return res.status(HttpStatus.OK).json({message: "successful", data: purchase})
    }

    @Get('/list')
    async listPurchase(@Res() res) {
        const purchases = await this.purchaseService.getPurchases()
        return res.status(HttpStatus.OK).json({message: "successful", data: purchases})
    }

    @Post()  
    async createPurchase(@Res() res, @Body() purchaseDTO) {
        const purchase = await this.purchaseService.createPurchase(purchaseDTO)
        return res.status(HttpStatus.OK).json({message: "successful", data: purchase})
    }

    @Put()
    async updatePurchase(@Res() res, @Body() purchaseDTO, @Query('id') id: ParamsClientDTO) {
        const purchase = await this.purchaseService.updatePurchase(id, purchaseDTO)
        return res.status(HttpStatus.OK).json({message: "successful", data: purchase})
    }

    @Delete()
    async DeletePurchase(@Res() res, @Query('id') id: ParamsPurchaseDTO) {
        const purchase = await this.purchaseService.deletePurchase(id)
        return res.status(HttpStatus.OK).json({message: "successful", data: purchase})
    }
}
