import { Room } from "src/schemas/room.schema";
import { RoomService } from "src/service/room.service";
import { UserService } from "src/service/user.service";
export declare class RoomController {
    private readonly roomService;
    private readonly userService;
    constructor(roomService: RoomService, userService: UserService);
    createRoom(room: Room, response: any): Promise<Room>;
    getAll(response: any): Promise<Room[]>;
    getOne(request: any, response: any): Promise<Room>;
    updateRoom(room: Room, response: any, req: any): Promise<Room>;
    deleteRoom(request: any, response: any): Promise<any>;
}
