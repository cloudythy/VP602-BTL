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
exports.WaterInvoiceSchema = exports.WaterInvoice = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const room_schema_1 = require("./room.schema");
let WaterInvoice = class WaterInvoice {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], WaterInvoice.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], WaterInvoice.prototype, "headIndex", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], WaterInvoice.prototype, "tailIndex", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], WaterInvoice.prototype, "pricePerIndex", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], WaterInvoice.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now() }),
    __metadata("design:type", Date)
], WaterInvoice.prototype, "createdDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: room_schema_1.RoomSchema }),
    __metadata("design:type", room_schema_1.Room)
], WaterInvoice.prototype, "room", void 0);
WaterInvoice = __decorate([
    (0, mongoose_1.Schema)()
], WaterInvoice);
exports.WaterInvoice = WaterInvoice;
exports.WaterInvoiceSchema = mongoose_1.SchemaFactory.createForClass(WaterInvoice);
//# sourceMappingURL=water-invoice.schema.js.map