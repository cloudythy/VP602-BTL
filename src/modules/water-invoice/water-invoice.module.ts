import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import {
  WaterInvoice,
  WaterInvoiceSchema,
} from "src/schemas/water-invoice.schema";
import { WaterInvoiceService } from "src/service/water-invoice.service";
import { WaterInvoiceController } from "./water-invoice.controller";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: WaterInvoice.name,
        schema: WaterInvoiceSchema,
      },
    ]),
  ],
  providers: [WaterInvoiceService],
  controllers: [WaterInvoiceController],
})
export class WaterInvoiceModule {}
