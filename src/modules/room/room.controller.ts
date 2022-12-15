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
import { UserService } from "src/service/user.service";

@Controller("/api/v1/room")
export class RoomController {
  constructor(private readonly roomService: RoomService, private readonly userService: UserService) {}

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

  @Get("get/:name")
  @UseGuards(AuthGuard("jwt"))
  async getOne(@Req() request, @Res() response): Promise<Room> {
    return response
      .status(HttpStatus.OK)
      .json(await this.roomService.getOne(request.params.name));
  }

  @Post("/update")
  @UseGuards(AuthGuard("jwt"))
  async updateRoom(@Body() room: Room, @Res() response, @Req() req): Promise<Room> {
    if(room.status == true && (await this.roomService.getStatus(room.name)==false)){
      const user = await this.userService.findOne(req.user.phonenumber)
      user.room = room;
      await this.userService.updateOne(user)
    }
    await this.roomService.updateRoom(room);
    return response.status(HttpStatus.OK).json(room);
  }

  @Get("/delete/:name")
  @UseGuards(AuthGuard("jwt"))
  async deleteRoom(@Req() request, @Res() response): Promise<any> {
    await this.roomService.deleteRoom(request.params.name);
    return response.status(HttpStatus.OK).json({
      message: "OK",
    });
  }
}
