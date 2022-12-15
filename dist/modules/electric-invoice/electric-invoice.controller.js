"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectricInvoiceController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const electric_invoice_schema_1 = require("../../schemas/electric-invoice.schema");
const electric_invoice_service_1 = require("../../service/electric-invoice.service");
let ElectricInvoiceController = class ElectricInvoiceController {
    constructor(eInvocieService) {
        this.eInvocieService = eInvocieService;
    }
    async createInvoice(eInvoice, response) {
        console.log(eInvoice);
        try {
            await this.eInvocieService.createEInvoice(eInvoice);
            return response.status(common_1.HttpStatus.CREATED).json({
                eInvoice,
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                error,
            });
        }
    }
    async getAll(response) {
        const eInvoiceList = await this.eInvocieService.getAll();
        return response.status(common_1.HttpStatus.OK).json(eInvoiceList);
    }
    async getOne(response, request) {
        const id = request.params.id;
        const eInvoice = await this.eInvocieService.getOne(id);
        return response.status(common_1.HttpStatus.OK).json(eInvoice);
    }
    async updateOne(eInvoice, response) {
        await this.eInvocieService.updateOne(eInvoice);
        return response.status(common_1.HttpStatus.OK).json(eInvoice);
    }
    async deleteOne(request, response) {
        await this.eInvocieService.deleteOne(request.params.id);
        return response.status(common_1.HttpStatus.OK).json();
    }
};
__decorate([
    (0, common_1.Post)("/create"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [electric_invoice_schema_1.ElectricInvoice, Object]),
    __metadata("design:returntype", Promise)
], ElectricInvoiceController.prototype, "createInvoice", null);
__decorate([
    (0, common_1.Get)("/all"),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ElectricInvoiceController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)("/get/:id"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ElectricInvoiceController.prototype, "getOne", null);
__decorate([
    (0, common_1.Patch)("/update"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [electric_invoice_schema_1.ElectricInvoice, Object]),
    __metadata("design:returntype", Promise)
], ElectricInvoiceController.prototype, "updateOne", null);
__decorate([
    (0, common_1.Get)("/delete/:id"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ElectricInvoiceController.prototype, "deleteOne", null);
ElectricInvoiceController = __decorate([
    (0, common_1.Controller)("/api/v1/einvoice"),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt")),
    __metadata("design:paramtypes", [electric_invoice_service_1.EInvoiceService])
], ElectricInvoiceController);
exports.ElectricInvoiceController = ElectricInvoiceController;
//# sourceMappingURL=electric-invoice.controller.js.map