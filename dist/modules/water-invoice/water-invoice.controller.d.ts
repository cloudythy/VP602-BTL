import { WaterInvoice } from "src/schemas/water-invoice.schema";
import { WaterInvoiceService } from "src/service/water-invoice.service";
export declare class WaterInvoiceController {
    private readonly waterInvocieService;
    constructor(waterInvocieService: WaterInvoiceService);
    creatWaterInvoice(waterInvoice: WaterInvoice, response: any): Promise<any>;
    getAll(response: any): Promise<WaterInvoice[]>;
    getOne(response: any, request: any): Promise<WaterInvoice>;
    updateOne(waterInvoice: WaterInvoice, response: any): Promise<WaterInvoice>;
    deleteOne(request: any, response: any): Promise<any>;
}
