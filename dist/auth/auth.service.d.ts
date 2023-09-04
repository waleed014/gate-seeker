import { LoginDto } from './dto/logInDto';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    login(logInDto: LoginDto): Promise<{
        user: (email: string, password: string) => Promise<any>;
        access_token: string;
    }>;
}
