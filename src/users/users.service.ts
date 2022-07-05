import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserViewDto } from './dto/create-user-view.dto';
import { CreateUserDto } from './dto/create-user-model.dto';
import { User } from './user.model';
import { Sequelize } from 'sequelize-typescript';
import { StudentsService } from 'src/users/students/students.service';
import * as bcrypt from 'bcryptjs'
import { AdminsService } from './admins/admins.service';
import { adminData, studentData } from 'src/consts/user';
import { StudentDto } from './students/dto/student-model.dto';
import { AdminDto } from './admins/dto/admin-model.dto';

const { v4: uuidv4 } = require('uuid');

@Injectable()
export class UsersService {
    constructor(@InjectModel (User) private userRepository: typeof User, 
        private studentsService: StudentsService,
        private sequelize: Sequelize,
        private adminsService: AdminsService
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
                const user_auth_data: CreateUserDto = {
                    email, 
                    password: hashPassword,
                    user_id: id,
                    role: user_type
                }
    
                await this.userRepository.create(user_auth_data, transactionHost)

                // вот тут пользователь сохранился в табличку user

                let user_data


                // нужно нормально разобраться с типами и структурой
                switch(user_type) {
                    case 1:
                        user_data = { ...dto.user_data, user_id: id }
                        user = await this.adminsService.create(user_data, transactionHost)
                    case 2: 
                        user_data = { ...dto.user_data, user_id: id }
                        user = await this.studentsService.create(user_data, transactionHost)
                }

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
