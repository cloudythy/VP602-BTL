"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaterInvoiceModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const water_invoice_schema_1 = require("../../schemas/water-invoice.schema");
const water_invoice_service_1 = require("../../service/water-invoice.service");
const water_invoice_controller_1 = require("./water-invoice.controller");
let WaterInvoiceModule = class WaterInvoiceModule {
};
WaterInvoiceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: water_invoice_schema_1.WaterInvoice.name,
                    schema: water_invoice_schema_1.WaterInvoiceSchema,
                },
            ]),
        ],
        providers: [water_invoice_service_1.WaterInvoiceService],
        controllers: [water_invoice_controller_1.WaterInvoiceController],
    })
], WaterInvoiceModule);
exports.WaterInvoiceModule = WaterInvoiceModule;
//# sourceMappingURL=water-invoice.module.js.map