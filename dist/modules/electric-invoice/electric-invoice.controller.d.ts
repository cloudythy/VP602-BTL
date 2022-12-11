import { ElectricInvoice } from "src/schemas/electric-invoice.schema";
import { EInvoiceService } from "src/service/electric-invoice.service";
export declare class ElectricInvoiceController {
    private readonly eInvocieService;
    constructor(eInvocieService: EInvoiceService);
    createInvoice(eInvoice: ElectricInvoice, response: any): Promise<any>;
    getAll(response: any): Promise<ElectricInvoice[]>;
    getOne(response: any, request: any): Promise<ElectricInvoice>;
    updateOne(eInvoice: ElectricInvoice, response: any): Promise<ElectricInvoice>;
    deleteOne(eInvoice: ElectricInvoice, response: any): Promise<any>;
}
