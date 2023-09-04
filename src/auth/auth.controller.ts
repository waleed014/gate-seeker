import {
  Controller,
  Request,
  Post,
  UseGuards,
  Body,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { LoginDto } from './dto/logInDto';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Req() req) {
    console.log('>>>>>>.', req.user);
    return await this.authService.login(req);
  }
}
