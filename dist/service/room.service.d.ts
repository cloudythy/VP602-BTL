import { Model } from "mongoose";
import { Room, RoomDocument } from "src/schemas/room.schema";
export declare class RoomService {
    private roomModel;
    constructor(roomModel: Model<RoomDocument>);
    createRoom(room: Room): Promise<void>;
    getAll(): Promise<Room[]>;
    getOne(id: any): Promise<Room>;
    updateRoom(room: any): Promise<void>;
    deleteRoom(room: any): Promise<void>;
}
