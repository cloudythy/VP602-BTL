"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const room_schema_1 = require("../../schemas/room.schema");
const user_schema_1 = require("../../schemas/user.schema");
const room_service_1 = require("../../service/room.service");
const user_service_1 = require("../../service/user.service");
const room_controller_1 = require("./room.controller");
let RoomModule = class RoomModule {
};
RoomModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: room_schema_1.Room.name,
                    schema: room_schema_1.RoomSchema,
                },
                {
                    name: user_schema_1.User.name,
                    schema: user_schema_1.UserSchema,
                }
            ]),
        ],
        providers: [room_service_1.RoomService, user_service_1.UserService],
        controllers: [room_controller_1.RoomController],
    })
], RoomModule);
exports.RoomModule = RoomModule;
//# sourceMappingURL=room.module.js.map