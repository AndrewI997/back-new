import { Controller, Get, Param, Delete, UseGuards, Request, Patch, Post } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
  
  constructor(private readonly userService: UserService) {}


  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('email') email: string) {
    return this.userService.findOne(email);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getProfile(@Request() req) {
    return req.user
  }

  // @UseGuards(JwtAuthGuard)
  // @Patch('me')
  // update(@Request() req) {
  //   return req.user
  // }

  @Delete(':id')
  remove(@Param('email') email: string) {
    return this.userService.remove(email);
  }
}
