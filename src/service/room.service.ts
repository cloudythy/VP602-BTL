import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Room, RoomDocument } from "src/schemas/room.schema";

@Injectable()
export class RoomService {
  constructor(
    @InjectModel(Room.name) private roomModel: Model<RoomDocument>
  ) {};

  async createRoom(room: Room): Promise<void>{
    await this.roomModel.create(room);
  }

  async getAll():Promise<Room[]>{
    return await this.roomModel.find();
  }

  async getOne(name):Promise<Room>{
    return await this.roomModel.findOne({name:name});
  }

  async getStatus(name):Promise<boolean>{
    return (await this.roomModel.findOne({name:name})).status;
  }

  async updateRoom(room): Promise<void>{
    await this.roomModel.findOneAndUpdate({name:room.name}, room);
  }

  async deleteRoom(room): Promise<void>{
    await this.roomModel.deleteOne({name:room.name})
  }
}
