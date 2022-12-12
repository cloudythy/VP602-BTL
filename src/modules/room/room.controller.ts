import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  Res,
} from "@nestjs/common";
import { Room } from "src/schemas/room.schema";
import { RoomService } from "src/service/room.service";

@Controller("/api/v1/room")
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Post("/create")
  async createRoom(@Body() room: Room, @Res() response): Promise<Room> {
    await this.roomService.createRoom(room);
    return response.status(HttpStatus.CREATED).json(room);
  }

  @Get("/get/all")
  async getAll(@Res() response): Promise<Room[]> {
    return response.status(HttpStatus.OK).json(await this.roomService.getAll());
  }

  @Get("get/:id")
  async getOne(@Req() request, @Res() response): Promise<Room> {
    return response
      .status(HttpStatus.OK)
      .json(await this.roomService.getOne(request.params.id));
  }

  @Post("/update")
  async updateRoom(@Body() room: Room, @Res() response): Promise<Room> {
    await this.roomService.updateRoom(room);
    return response.status(HttpStatus.OK).json(room);
  }

  @Get("/delete/:id")
  async deleteRoom(@Req() request, @Res() response): Promise<any> {
    await this.roomService.deleteRoom(request.params.id);
    return response.status(HttpStatus.OK).json({
      message: "OK",
    });
  }
}
