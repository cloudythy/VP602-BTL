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

  async getOne(id):Promise<Room>{
    return await this.roomModel.findById(id);
  }

  async updateRoom(room): Promise<void>{
    await this.roomModel.findByIdAndUpdate(room._id, room);
  }

  async deleteRoom(room): Promise<void>{
    await this.roomModel.deleteOne({_id:room._id})
  }
}
