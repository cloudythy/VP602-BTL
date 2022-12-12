import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {
  WaterInvoice,
  WaterInvoiceDocument,
} from "src/schemas/Water-invoice.schema";

@Injectable()
export class WaterInvoiceService {
  constructor(
    @InjectModel(WaterInvoice.name)
    private waterInvoiceModel: Model<WaterInvoiceDocument>
  ) {}
  async createWaterInvoice(eInvoice: WaterInvoice): Promise<void> {
    try {
      await this.waterInvoiceModel.create(eInvoice);
    } catch (error) {
      console.log(error)
      throw error;
    }
  }
  async getAll(): Promise<WaterInvoice[]> {
    return await this.waterInvoiceModel.find({},{ _id: 1, name: 1, status: 1 });
  }

  async getOne(id:Object): Promise<WaterInvoice>{
    return await this.waterInvoiceModel.findById(id);
  }
  
  async updateOne(waterInvoice: WaterInvoice): Promise<void>{
    await this.waterInvoiceModel.updateOne(waterInvoice);
  }

  async deleteOne(id:string): Promise<void>{
    await this.waterInvoiceModel.deleteOne({_id:id});
  }
}
