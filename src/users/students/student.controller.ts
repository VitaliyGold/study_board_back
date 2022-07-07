import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Student } from './student.model';
import { StudentsService } from './students.service';


@ApiTags('Студенты')
@Controller()
export class StudentsController {
    constructor(private StudentsService: StudentsService) {}

    @UseGuards(JwtAuthGuard)
    @ApiOperation({ summary: 'Получение всех пользователей' })
    @ApiResponse({ status: 200, type: [Student] })
    @Get('getList')
    getAll() {
        return this.StudentsService.getAllStudents()
    }

    @UseGuards(JwtAuthGuard)
    @ApiOperation({ summary: 'Получение студента по id' })
    @ApiResponse({ status: 200, type: [Student] })
    @Get(':id')
    getStudent(@Param('id') id: string) {
        return this.StudentsService.getStudent(id)
    }

}
