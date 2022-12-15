import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Room } from "src/schemas/room.schema";
import { RoomService } from "src/service/room.service";

@Controller("/api/v1/room")
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Post("/create")
  @UseGuards(AuthGuard("jwt"))
  async createRoom(@Body() room: Room, @Res() response): Promise<Room> {
    await this.roomService.createRoom(room);
    return response.status(HttpStatus.CREATED).json(room);
  }

  @Get("/get/all")
  @UseGuards(AuthGuard("jwt"))
  async getAll(@Res() response): Promise<Room[]> {
    return response.status(HttpStatus.OK).json(await this.roomService.getAll());
  }

  @Get("get/:id")
  @UseGuards(AuthGuard("jwt"))
  async getOne(@Req() request, @Res() response): Promise<Room> {
    return response
      .status(HttpStatus.OK)
      .json(await this.roomService.getOne(request.params.id));
  }

  @Post("/update")
  @UseGuards(AuthGuard("jwt"))
  async updateRoom(@Body() room: Room, @Res() response): Promise<Room> {
    await this.roomService.updateRoom(room);
    return response.status(HttpStatus.OK).json(room);
  }

  @Get("/delete/:id")
  @UseGuards(AuthGuard("jwt"))
  async deleteRoom(@Req() request, @Res() response): Promise<any> {
    await this.roomService.deleteRoom(request.params.id);
    return response.status(HttpStatus.OK).json({
      message: "OK",
    });
  }
}
