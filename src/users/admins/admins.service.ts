import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AdminDto } from './dto/admin-model.dto';
import { Admin } from './admin.model';


@Injectable()
export class AdminsService {
    constructor(@InjectModel (Admin) private adminsRepository: typeof Admin) {}

    async create(dto: AdminDto, transactionHost) {

        const user = await this.adminsRepository.create(dto, transactionHost)

        return user
    }

    async getForId(admin_id: string) {
        return this.adminsRepository.findByPk(admin_id)
    }

    async getAll() {
        return this.adminsRepository.findAll()
    }
}
