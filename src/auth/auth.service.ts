import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/Signup.dto';
import { LoginDto } from './dto/login.dto';
@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}
  async singup(signUpDto:SignUpDto):Promise<{token:string}> {
    const { name, email, password } = signUpDto;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.userModel.create({
      name,
      email,
      password: hashedPassword,
    });
    const token =this.jwtService.sign({id:user._id})
    return {token}
  }
  async login(logindto:LoginDto):Promise<{token:string}> {
    const { email, password } = logindto;
    const user =await this.userModel.findOne({email})
    if(!user){
      throw new UnauthorizedException("Invalid email or password");
    }
    const ifpasswordMatched= await bcrypt.compare( password,user.password)
    if(!ifpasswordMatched){
      throw new UnauthorizedException("Invalid email or password")
    }
    const token =this.jwtService.sign({id:user._id})
    return {token}
  }
}
