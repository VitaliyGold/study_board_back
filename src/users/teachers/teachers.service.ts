import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Teacher } from './teacher.model';
import { teacherModelDto } from './dto/createTeacher-view.dto';


@Injectable()
export class TeachersService {
    constructor(@InjectModel (Teacher) private teachersRepository: typeof Teacher) {}

    async create(dto: teacherModelDto, transactionHost) {

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
