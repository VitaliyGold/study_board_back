import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RoleDto } from './dto/role.dto';
import { Role } from './role.model';
import { RolesService } from './roles.service';


@ApiTags('Роли')
@Controller('roles')
export class RolesController {
    constructor(private rolesService: RolesService) {}
        
    @ApiOperation({ summary: 'Получение списка ролей' })
    @ApiResponse({ status: 200, type: [Role] })
    @Get('list')
    getAll() {
        return this.rolesService.getAll()
    }

    @ApiOperation({ summary: 'Получение роли по id' })
    @ApiResponse({ status: 200, type: Role })
    @Get(':id')
    getRole(@Param('id') role_id: number) {
        return this.rolesService.getForId(role_id)
    }

    @ApiOperation({ summary: 'Создание новой роли' })
    @ApiResponse({ status: 200, type: Role })
    @Post('create')
        createNewRole(@Body() roleDto: RoleDto) {
        return this.rolesService.create(roleDto)
    }

}
