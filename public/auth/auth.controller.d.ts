import { AuthService } from './auth.service';
import { SignUpDto } from './dto/Signup.dto';
import { LoginDto } from './dto/Login.dto';
export declare class AuthController {
    private authservice;
    constructor(authservice: AuthService);
    signup(signUpDto: SignUpDto): Promise<{
        token: string;
    }>;
    login(logindto: LoginDto): Promise<{
        token: string;
    }>;
}
