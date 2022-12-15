import { Body, Controller, Get, HttpStatus, Post, Res } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/schemas/user.schema";
import { AuthService } from "src/service/auth.service";

@Controller("/api/v1")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private jwtService: JwtService
  ) {}

  @Get("/signup")
  async getSignUp(@Res() res): Promise<any> {
    return res.status(HttpStatus.OK).json({});
  }

  @Get("/login")
  async getLogin(@Res() res): Promise<any> {
    return res.status(HttpStatus.OK).json({
      message: "OK",
    });
  }

  @Post("/signup")
  async signUp(@Res() response, @Body() user: User) {
    console.log(user);
    const createSuccess = await this.authService.signUp(user);
    if (createSuccess) {
      return response.status(HttpStatus.CREATED).json({
        user,
      });
    } else {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: "User already exists",
      });
    }
  }

  @Post("/login")
  async login(@Body() user): Promise<any> {
    console.log(user);
    return this.authService.login(user);
  }
}
