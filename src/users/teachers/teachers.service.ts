import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { createTeacherModelDto } from './dto/createTeacher-model.dto';
import { Teacher } from './teacher.model';


@Injectable()
export class TeachersService {
    constructor(@InjectModel (Teacher) private teachersRepository: typeof Teacher) {}

    async create(dto: createTeacherModelDto, transactionHost) {

        const user = await this.teachersRepository.create(dto, transactionHost)

        return user
    }

    async getForId(teacher_id: string) {
        return this.teachersRepository.findByPk(teacher_id)
    }

    async getList() {
        return this.teachersRepository.findAll()
    }
}
