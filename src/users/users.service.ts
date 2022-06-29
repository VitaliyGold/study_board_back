import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ViewUserDto } from './dto/view-user-model.dto';
import { UserDto } from './dto/user-model.dto';
import { User } from './user.model';

const { v4: uuidv4 } = require('uuid');

@Injectable()
export class UsersService {
    constructor(@InjectModel (User) private userRepository: typeof User) {}

    async CreateUser(dto: ViewUserDto) {
        const id = uuidv4();

        const userData: UserDto = {
            ...dto,
            user_id: id
        }
        console.log(userData)

        const user = await this.userRepository.create(userData)

        return user
    }

    async getAllUsers() {
        return this.userRepository.findAll()
    }
}
