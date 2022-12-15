import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "./user.service";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const result = await this.validateUser(user.phonenumber, user.password);
    if (result == null) {
      throw new UnauthorizedException();
    } else {
      const payload = { username: user.username, sub: user.userId };
      return {
        user: result._doc,
        access_token: this.jwtService.sign(payload),
      };
    }
  }

  async signUp(user: any) {
    const userFromDB = await this.usersService.findOne(user.phonenumber);
    if(userFromDB != null){
      return false;
    } else{
      const salt = await bcrypt.genSalt(15);
      user.password = await bcrypt.hash(user.password, salt);
      await this.usersService.createOne(user);
      return true;
    }
  }
}
