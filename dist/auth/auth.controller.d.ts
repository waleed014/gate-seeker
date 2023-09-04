import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        user: (email: string, password: string) => Promise<any>;
        access_token: string;
    }>;
}
