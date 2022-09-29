import { Controller, Request, Post, Get, UseGuards, Body } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { CreateUserDto } from 'src/user/dto/create-user.dto';


@Controller('auth')
export class AuthController {
  
  constructor(
    private authService: AuthService
  ) { }


  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('register')
  registration(@Body() dto: CreateUserDto) {
    return this.authService.registration(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

}
