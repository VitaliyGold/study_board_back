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
        if (!authDto.email || !authDto.password) {
            throw new UnauthorizedException({ message: 'Вы ввели пустые значения' })
        }
        const user = await this.userService.getUserByEmail(authDto.email)
        if ( !user ) {
            throw new HttpException('Такого пользователя не существует', HttpStatus.BAD_REQUEST)
        }
        const passwordEquals = await bcrypt.compare(authDto.password, user.password)
        if (!passwordEquals) {
            throw new HttpException('Неправильный пароль', HttpStatus.BAD_REQUEST)
        }
        return this.generateToken(user)

    }
}
