import { JwtService } from "@nestjs/jwt";
import { User } from "src/schemas/user.schema";
import { AuthService } from "src/service/auth.service";
export declare class AuthController {
    private readonly authService;
    private jwtService;
    constructor(authService: AuthService, jwtService: JwtService);
    getSignUp(res: any): Promise<any>;
    getLogin(res: any): Promise<any>;
    signUp(response: any, user: User): Promise<any>;
    login(user: any): Promise<any>;
}
