import { Room } from "src/schemas/room.schema";
import { RoomService } from "src/service/room.service";
export declare class RoomController {
    private readonly roomService;
    constructor(roomService: RoomService);
    createRoom(room: Room, response: any): Promise<Room>;
    getAll(response: any): Promise<Room[]>;
    getOne(request: any, response: any): Promise<Room>;
    updateRoom(room: Room, response: any): Promise<Room>;
    deleteRoom(request: any, response: any): Promise<any>;
}
