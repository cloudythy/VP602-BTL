import { JwtService } from "@nestjs/jwt";
import { UserService } from "./user.service";
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UserService, jwtService: JwtService);
    validateUser(username: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        user: any;
        access_token: string;
    }>;
    signUp(user: any): Promise<boolean>;
}
