import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Room, RoomSchema } from "src/schemas/room.schema";
import { RoomService } from "src/service/room.service";
import { RoomController } from "./room.controller";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Room.name,
        schema: RoomSchema,
      },
    ]),
  ],
  providers: [RoomService],
  controllers: [RoomController],
})
export class RoomModule {}
