import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async signIn(email: string, pass: string): Promise<any> {
        const user = await this.usersService.findOneByEmail(email);
        if(!user) throw new UnauthorizedException();
        
        const passwordHash = compareSync(pass, user.password);
        if (!passwordHash) throw new UnauthorizedException();

        const { password, ...result } = user;
        const payload = {
            sub: user.id,
            ...result
        }

        return {
            user: result,
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}
