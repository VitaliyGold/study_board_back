import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Teacher } from './teacher.model';
import { TeachersService } from './teachers.service';


@ApiTags('Преподаватели')
@Controller()
export class TeachersController {
    constructor(private TeachersService: TeachersService) {}

    @ApiOperation({ summary: 'Получение всех учителей' })
    @ApiResponse({ status: 200, type: [Teacher] })
    @Get('getList')
    getList() {
        return this.TeachersService.getList()
    }

    @ApiOperation({ summary: 'Получение учителя по id' })
    @ApiResponse({ status: 200, type: [Teacher] })
    @Get(':id')
    getForId(@Param('id') student_id: string) {
        return this.TeachersService.getForId(student_id)
    }

}
