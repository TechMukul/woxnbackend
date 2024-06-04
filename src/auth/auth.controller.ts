import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/Signup.dto';
import { LoginDto } from './dto/Login.dto';


@Controller('auth')
export class AuthController {
    constructor(
        private authservice:AuthService
    ){
    }
    @Post("/signup")
     signup(@Body() signUpDto:SignUpDto):Promise<{token:string}>{
        return this.authservice.singup(signUpDto)
     }
     @Post("/login")
     login(@Body() logindto:LoginDto):Promise<{token:string}>{
        return this.authservice.login(logindto)
     }
}
