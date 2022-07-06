import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RoleDto } from './dto/role.dto';
import { Role } from './role.model';

@Injectable()
export class RolesService {
    constructor(@InjectModel (Role) private rolesRepository: typeof Role){}

    async create(dto: RoleDto) {
        const new_role = await this.rolesRepository.create(dto)
        return new_role
    }

    async getForId(role_id: number) {
        return this.rolesRepository.findByPk(role_id)
    }

    async getAll() {
        return this.rolesRepository.findAll()
    }
}
