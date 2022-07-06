import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Admin } from './admin.model';
import { AdminsService } from './admins.service';


@ApiTags('Админы')
@Controller('admins')
export class AdminsConroller {
    constructor(private AdminsService: AdminsService) {}

    @UseGuards(JwtAuthGuard)
    @ApiOperation({ summary: 'Получение всех администраторов' })
    @ApiResponse({ status: 200, type: [Admin] })
    @Get('getList')
    getAll() {
        return this.AdminsService.getAll()
    }

    @UseGuards(JwtAuthGuard)
    @ApiOperation({ summary: 'Получение админа по id' })
    @ApiResponse({ status: 200, type: [Admin] })
    @Get(':id')
    getStudent(@Param('id') id: string) {
        return this.AdminsService.getForId(id)
    }

}
