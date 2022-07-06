import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Student } from './student.model';
import { StudentsService } from './students.service';


@ApiTags('Студенты')
@Controller('students')
export class StudentsController {
    constructor(private StudentsService: StudentsService) {}

    @ApiOperation({ summary: 'Получение всех пользователей' })
    @ApiResponse({ status: 200, type: [Student] })
    @Get('allStudents')
    getAll() {
        return this.StudentsService.getAllStudents()
    }

    @ApiOperation({ summary: 'Получение студента по id' })
    @ApiResponse({ status: 200, type: [Student] })
    @Get(':id')
    getStudent(@Param('id') id: string) {
        return this.StudentsService.getStudent(id)
    }

}
