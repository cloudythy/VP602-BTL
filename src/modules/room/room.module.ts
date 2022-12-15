import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Room, RoomSchema } from "src/schemas/room.schema";
import { User, UserSchema } from "src/schemas/user.schema";
import { RoomService } from "src/service/room.service";
import { UserService } from "src/service/user.service";
import { RoomController } from "./room.controller";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Room.name,
        schema: RoomSchema,
      },
      {
        name: User.name,
        schema: UserSchema,
      }
    ]),
  ],
  providers: [RoomService, UserService],
  controllers: [RoomController],
})
export class RoomModule {}
