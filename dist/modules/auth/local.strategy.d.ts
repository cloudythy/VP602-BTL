import { Strategy } from 'passport-local';
import { AuthService } from 'src/service/auth.service';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(phoneNumber: string, password: string): Promise<any>;
}
export {};
