import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserViewDto } from './dto/create-user-view.dto';
import { CreateUserDto } from './dto/create-user-model.dto';
import { User } from './user.model';
import { Student } from 'src/students/student.model';
import { Sequelize } from 'sequelize-typescript';
import { ListOfRepository } from './helpers/listOfRepository';
import { StudentsService } from 'src/students/students.service';
import { studentData } from 'src/consts/user';

const { v4: uuidv4 } = require('uuid');

@Injectable()
export class UsersService {
    constructor(@InjectModel (User) private userRepository: typeof User, 
        private studentsService: StudentsService,
        private sequelize: Sequelize
    ) {}

    async CreateUser(dto: CreateUserViewDto) {

        const id = uuidv4();
        const user_type = dto.user_type;
        let user = null

        try {
            await this.sequelize.transaction(async t => {
                const transactionHost = { transaction: t };
    
                const { email, password } = dto.user_data
    
                const new_user_data: CreateUserDto = {
                    email, 
                    password,
                    user_id: id,
                    role: user_type
                }
    
                await this.userRepository.create(new_user_data, transactionHost)

                const user_data = { ...dto.user_data, user_id: id }
    
                // вот тут пользователь сохранился в табличку user

                user = await this.studentsService.create(user_data, transactionHost)
            })
        } catch(e) {
            console.log(e)
            return
        }

        return user
    }

    async getAllUsers() {
        return this.userRepository.findAll()
    }
}
