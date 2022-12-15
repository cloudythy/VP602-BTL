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
exports.WaterInvoiceController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const water_invoice_schema_1 = require("../../schemas/water-invoice.schema");
const water_invoice_service_1 = require("../../service/water-invoice.service");
let WaterInvoiceController = class WaterInvoiceController {
    constructor(waterInvocieService) {
        this.waterInvocieService = waterInvocieService;
    }
    async creatWaterInvoice(waterInvoice, response) {
        console.log(water_invoice_schema_1.WaterInvoice);
        try {
            await this.waterInvocieService.createWaterInvoice(waterInvoice);
            return response.status(common_1.HttpStatus.CREATED).json({
                waterInvoice,
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                error,
            });
        }
    }
    async getAll(response) {
        const WaterInvoiceList = await this.waterInvocieService.getAll();
        return response.status(common_1.HttpStatus.OK).json(WaterInvoiceList);
    }
    async getOne(response, request) {
        const id = request.params.id;
        const waterInvoice = await this.waterInvocieService.getOne(id);
        return response.status(common_1.HttpStatus.OK).json(waterInvoice);
    }
    async updateOne(waterInvoice, response) {
        await this.waterInvocieService.updateOne(waterInvoice);
        return response.status(common_1.HttpStatus.OK).json(waterInvoice);
    }
    async deleteOne(request, response) {
        await this.waterInvocieService.deleteOne(request.params.id);
        return response.status(common_1.HttpStatus.OK).json({
            "message": "OK"
        });
    }
};
__decorate([
    (0, common_1.Post)("/create"),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt")),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [water_invoice_schema_1.WaterInvoice, Object]),
    __metadata("design:returntype", Promise)
], WaterInvoiceController.prototype, "creatWaterInvoice", null);
__decorate([
    (0, common_1.Get)("/all"),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt")),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WaterInvoiceController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)("/get/:id"),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt")),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], WaterInvoiceController.prototype, "getOne", null);
__decorate([
    (0, common_1.Patch)("/update"),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt")),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [water_invoice_schema_1.WaterInvoice, Object]),
    __metadata("design:returntype", Promise)
], WaterInvoiceController.prototype, "updateOne", null);
__decorate([
    (0, common_1.Get)("/delete/:id"),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt")),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], WaterInvoiceController.prototype, "deleteOne", null);
WaterInvoiceController = __decorate([
    (0, common_1.Controller)("/api/v1/waterInvoice"),
    __metadata("design:paramtypes", [water_invoice_service_1.WaterInvoiceService])
], WaterInvoiceController);
exports.WaterInvoiceController = WaterInvoiceController;
//# sourceMappingURL=water-invoice.controller.js.map