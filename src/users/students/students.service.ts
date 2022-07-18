import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { StudentDto } from './dto/student-model.dto';
import { Student } from './student.model';


@Injectable()
export class StudentsService {
    constructor(@InjectModel (Student) private studentsRepository: typeof Student) {}

    async create(dto: StudentDto, transactionHost) {
        const user = await this.studentsRepository.create(dto, transactionHost)
        return user
    }

    async getForId(student_id: string) {
        return this.studentsRepository.findByPk(student_id)
    }

    async getList() {
        return this.studentsRepository.findAll()
    }
}
