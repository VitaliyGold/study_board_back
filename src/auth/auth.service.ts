import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/user.model';
import { UsersService } from 'src/users/users.service';
const bcrypt = require('bcryptjs');

@Injectable()
export class AuthService {

    constructor(private jwtService: JwtService, private userService: UsersService) {}

    async login(authDto: AuthDto) {
        return this.validateUser(authDto)
    }

    private async generateToken(user: User) {
        const payload = { email: user.email, user_id: user.user_id, role: user.role }
        console.log(payload)
        return {
            token: this.jwtService.sign(payload)
        }

    }

    private async validateUser(authDto: AuthDto) {
        const user = await this.userService.getUserByEmail(authDto.email)
        const passwordEquals = await bcrypt.compare(authDto.password, user.password)
        if (!user || !passwordEquals) {
            throw new UnauthorizedException({ message: 'Такого пользователя не существует' })
        }
        return this.generateToken(user)

    }
}
