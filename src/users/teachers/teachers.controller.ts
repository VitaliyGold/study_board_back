import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Teacher } from './teacher.model';
import { TeachersService } from './teachers.service';


@ApiTags('Преподаватели')
@Controller('teachers')
export class TeachersController {
    constructor(private TeachersService: TeachersService) {}

    @ApiOperation({ summary: 'Получение всех учителей' })
    @ApiResponse({ status: 200, type: [Teacher] })
    @Get('getList')
    getAll() {
        return this.TeachersService.getList()
    }

    @ApiOperation({ summary: 'Получение учителя по id' })
    @ApiResponse({ status: 200, type: [Teacher] })
    @Get(':id')
    getStudent(@Param('id') id: string) {
        return this.TeachersService.getForId(id)
    }

}
