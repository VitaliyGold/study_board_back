import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserViewDto } from './dto/create-user-view.dto';
import { CreateUserDto } from './dto/create-user-model.dto';
import { User } from './user.model';
import { Sequelize } from 'sequelize-typescript';
import { StudentsService } from 'src/users/students/students.service';
import * as bcrypt from 'bcryptjs'

const { v4: uuidv4 } = require('uuid');

@Injectable()
export class UsersService {
    constructor(@InjectModel (User) private userRepository: typeof User, 
        private studentsService: StudentsService,
        private sequelize: Sequelize
    ) {}

    async createUser(dto: CreateUserViewDto) {

        const { email, password } = dto.user_data
        const id = uuidv4();
        const user_type = dto.user_type;

        let user = null

        const candidate = await this.getUserByEmail(email)
        if (candidate) {
            throw new HttpException('Такой пользователь уже существует', HttpStatus.BAD_REQUEST)
        }

        const hashPassword = await bcrypt.hash(password, 7)

        try {
            await this.sequelize.transaction(async t => {
                const transactionHost = { transaction: t }
                const new_user_data: CreateUserDto = {
                    email, 
                    password: hashPassword,
                    user_id: id,
                    role: user_type
                }
    
                await this.userRepository.create(new_user_data, transactionHost)

                const user_data = { ...dto.user_data, user_id: id }
    
                // вот тут пользователь сохранился в табличку user

                user = await this.studentsService.create(user_data, transactionHost)
            })
        } catch(e) {
            throw new HttpException('Ошибка при создании пользователя', HttpStatus.BAD_REQUEST)
        }

        return user
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({ where: {email} })
        return user
    }

    async getAllUsers() {
        return this.userRepository.findAll()
    }
}
