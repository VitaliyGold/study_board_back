import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Subject } from './subject.model';
import { SubjectCreateDto } from './dto/subject-create.dto';


@Injectable()
export class SubjectsServices {
    constructor(@InjectModel (Subject) private subjectsRepository: typeof Subject) {}

    async create(dto: SubjectCreateDto) {
        return this.subjectsRepository.create(dto)
    }

    async getForId(subject_id: string) {
        return this.subjectsRepository.findByPk(subject_id)
    }

    async getListForIds(subject_id_list: string[]) {
        return this.subjectsRepository.findAll({ where: {
            subject_id: subject_id_list
        }})
    }

    async getList() {
        return this.subjectsRepository.findAll()
    }
}
