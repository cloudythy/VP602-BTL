import { Model } from "mongoose";
import { ElectricInvoice, ElectricInvoiceDocument } from "src/schemas/electric-invoice.schema";
export declare class EInvoiceService {
    private eInvoiceModel;
    constructor(eInvoiceModel: Model<ElectricInvoiceDocument>);
    createEInvoice(eInvoice: ElectricInvoice): Promise<void>;
    getAll(): Promise<ElectricInvoice[]>;
    getOne(id: Object): Promise<ElectricInvoice>;
    updateOne(eInvoice: ElectricInvoice): Promise<void>;
    deleteOne(id: string): Promise<void>;
}
