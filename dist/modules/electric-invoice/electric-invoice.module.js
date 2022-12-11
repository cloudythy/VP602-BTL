"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectricInvoiceModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const electric_invoice_schema_1 = require("../../schemas/electric-invoice.schema");
const electric_invoice_service_1 = require("../../service/electric-invoice.service");
const electric_invoice_controller_1 = require("./electric-invoice.controller");
let ElectricInvoiceModule = class ElectricInvoiceModule {
};
ElectricInvoiceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: electric_invoice_schema_1.ElectricInvoice.name,
                    schema: electric_invoice_schema_1.ElectricInvoiceSchema,
                },
            ]),
        ],
        providers: [electric_invoice_service_1.EInvoiceService],
        controllers: [electric_invoice_controller_1.ElectricInvoiceController],
    })
], ElectricInvoiceModule);
exports.ElectricInvoiceModule = ElectricInvoiceModule;
//# sourceMappingURL=electric-invoice.module.js.map