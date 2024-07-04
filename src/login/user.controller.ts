// user.controller.ts

import { Controller, Post, Body, NotFoundException, Param, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async signUp(@Body() userDto: any): Promise<any> {
    return this.userService.signUp(userDto);
  }

  @Post('login')
  async login(@Body('email') email: string, @Body('password') password: string): Promise<any> {
    try {
      return await this.userService.signIn(email, password);
    } catch (error) {
      throw new NotFoundException('Invalid email or password');
    }
  }

  @Post('logout/:userId')
  async logout(@Param('userId') userId: string): Promise<any> {
    try {
      return await this.userService.signOut(userId);
    } catch (error) {
      throw new NotFoundException('User not found');
    }
  }

  @Get('time-spent/:userId')
  async getTimeSpent(@Param('userId') userId: string): Promise<any> {
    try {
      return await this.userService.getUserTimeSpent(userId);
    } catch (error) {
      throw new NotFoundException('User not found');
    }
  }
}
