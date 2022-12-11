import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import {
  ElectricInvoice,
  ElectricInvoiceSchema,
} from "src/schemas/electric-invoice.schema";
import { EInvoiceService } from "src/service/electric-invoice.service";
import { ElectricInvoiceController } from "./electric-invoice.controller";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: ElectricInvoice.name,
        schema: ElectricInvoiceSchema,
      },
    ]),
  ],
  providers: [EInvoiceService],
  controllers: [ElectricInvoiceController],
})
export class ElectricInvoiceModule {}
