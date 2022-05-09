import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, Query } from '@nestjs/common';
import { PurchaseService } from './purchase.service';

@Controller('purchase')
export class PurchaseController {

    constructor(private  purchaseService: PurchaseService) {}

    @Get('id')
    async getPurchase(@Res() res, @Query('id') id: string) {
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
    async updatePurchase(@Res() res, @Body() purchaseDTO) {
        const purchase = await this.purchaseService.updatePurchase(purchaseDTO)
        return res.status(HttpStatus.OK).json({message: "successful", data: purchase})
    }

    @Delete()
    async DeletePurchase(@Res() res, @Query('_id') id: string) {
        const purchase = await this.purchaseService.deletePurchase(id)
        return res.status(HttpStatus.OK).json({message: "successful", data: purchase})
    }
}
