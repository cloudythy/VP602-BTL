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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectricInvoiceSchema = exports.ElectricInvoice = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const room_schema_1 = require("./room.schema");
let ElectricInvoice = class ElectricInvoice {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ElectricInvoice.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ElectricInvoice.prototype, "headIndex", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ElectricInvoice.prototype, "tailIndex", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ElectricInvoice.prototype, "pricePerIndex", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], ElectricInvoice.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: room_schema_1.RoomSchema }),
    __metadata("design:type", room_schema_1.Room)
], ElectricInvoice.prototype, "room", void 0);
ElectricInvoice = __decorate([
    (0, mongoose_1.Schema)()
], ElectricInvoice);
exports.ElectricInvoice = ElectricInvoice;
exports.ElectricInvoiceSchema = mongoose_1.SchemaFactory.createForClass(ElectricInvoice);
//# sourceMappingURL=invoice.schema.js.map