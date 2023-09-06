import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { UserService } from "src/user/user.service";
import { AuthService } from "../services/auth.service";
import { Injectable, UnauthorizedException } from "@nestjs/common";


@Injectable()
export class LocalStrategy extends  PassportStrategy(Strategy, 'local'){

    constructor(
        private readonly  _authService: AuthService, 
    ){        
        super({
            usernameField: 'email',
        })
    }

    async validate(username: string, password:string){

        const user = await this._authService.validateUSer(username,password)
        if(!user) throw new UnauthorizedException('User Not Found');
        return user;
    }    
}