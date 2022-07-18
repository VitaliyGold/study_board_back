import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserViewDto } from './dto/create-user-view.dto';
import { CreateUserDto } from './dto/create-user-model.dto';
import { User } from './user.model';
import { Sequelize } from 'sequelize-typescript';
import { StudentsService } from 'src/users/students/students.service';
import * as bcrypt from 'bcryptjs'
import { AdminsService } from './admins/admins.service';
import { TeachersService } from './teachers/teachers.service';

const { v4: uuidv4 } = require('uuid');

@Injectable()
export class UsersService {
    constructor(@InjectModel (User) private userRepository: typeof User, 
        private studentsService: StudentsService,
        private sequelize: Sequelize,
        private adminsService: AdminsService,
        private teachersServive: TeachersService
    ) {}

    async createUser(dto: CreateUserViewDto) {

        const { email, password } = dto.user_data
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
                const user_auth_data: CreateUserDto = {
                    email,
                    password: hashPassword,
                    role: dto.user_type
                }   
    
                const { user_id } = await this.userRepository.create(user_auth_data, transactionHost)

                let user_data
                // нужно нормально разобраться с типами и структурой
                switch(user_type) {
                    case 1:
                        user_data = { ...dto.user_data, user_id }
                        user = await this.adminsService.create(user_data, transactionHost)
                        break;
                    case 2:
                        console.log(124)
                        user_data = { ...dto.user_data, user_id }
                        user = await this.studentsService.create(user_data, transactionHost)
                        break
                    case 3: 
                        user_data = { ...dto.user_data, user_id }
                        user = await this.teachersServive.create(user_data, transactionHost)
                        break
                }

            })
        } catch(e) {
            console.log(e)
            throw new HttpException('Ошибка при создании пользователя', HttpStatus.BAD_REQUEST)
        }
        return user
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({ where: {email} })
        return user
    }

    async getList() {
        return this.userRepository.findAll()
    }
}
