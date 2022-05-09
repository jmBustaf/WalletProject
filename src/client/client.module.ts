import { Module } from '@nestjs/common';
import { clientSchema } from 'src/schemas/client';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [MongooseModule.forFeature([
    {name: 'Client', schema: clientSchema},
  ])],
  controllers: [ClientController],
  providers: [ClientService]
})
export class ClientModule {}
