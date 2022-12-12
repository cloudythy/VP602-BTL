import { Model } from "mongoose";
import { WaterInvoice, WaterInvoiceDocument } from "src/schemas/Water-invoice.schema";
export declare class WaterInvoiceService {
    private waterInvoiceModel;
    constructor(waterInvoiceModel: Model<WaterInvoiceDocument>);
    createWaterInvoice(eInvoice: WaterInvoice): Promise<void>;
    getAll(): Promise<WaterInvoice[]>;
    getOne(id: Object): Promise<WaterInvoice>;
    updateOne(waterInvoice: WaterInvoice): Promise<void>;
    deleteOne(id: string): Promise<void>;
}
