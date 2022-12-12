import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {
  ElectricInvoice,
  ElectricInvoiceDocument,
} from "src/schemas/electric-invoice.schema";

@Injectable()
export class EInvoiceService {
  constructor(
    @InjectModel(ElectricInvoice.name)
    private eInvoiceModel: Model<ElectricInvoiceDocument>
  ) {}
  async createEInvoice(eInvoice: ElectricInvoice): Promise<void> {
    try {
      await this.eInvoiceModel.create(eInvoice);
    } catch (error) {
      console.log(error)
      throw error;
    }
  }
  async getAll(): Promise<ElectricInvoice[]> {
    return await this.eInvoiceModel.find({},{ _id: 1, name: 1, status: 1 });
  }

  async getOne(id:Object): Promise<ElectricInvoice>{
    return await this.eInvoiceModel.findById(id);
  }
  
  async updateOne(eInvoice: ElectricInvoice): Promise<void>{
    await this.eInvoiceModel.updateOne(eInvoice);
  }

  async deleteOne(id:string): Promise<void>{
    //console.log("At service:", eInvoice._id);
    await this.eInvoiceModel.deleteOne({_id:id});
  }
}
