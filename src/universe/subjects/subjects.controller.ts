import { Body, Controller, Get, Param, UseGuards, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { SubjectsServices } from './subjects.service';
import { Subject } from './subject.model';
import { SubjectCreateDto } from './dto/subject-create.dto';

@ApiTags('Предметы')
@Controller('subjects')
export class SubjectsConroller {
    constructor(private service: SubjectsServices) {}

    @UseGuards(JwtAuthGuard)
    @ApiOperation({ summary: 'Получение всех пользователей' })
    @ApiResponse({ status: 200, type: [Subject] })
    @Post('create')
    create(@Body() dto: SubjectCreateDto) {
        return this.service.create(dto)
    }

    @UseGuards(JwtAuthGuard)
    @ApiOperation({ summary: 'Получение всех предметов' })
    @ApiResponse({ status: 200, type: [Subject] })
    @Get('getList')
    getList() {
        return this.service.getList()
    }

    @UseGuards(JwtAuthGuard)
    @ApiOperation({ summary: 'Получение предмета по id' })
    @ApiResponse({ status: 200, type: [Subject] })
    @Get(':id')
    getStudent(@Param('id') id: string) {
        return this.service.getForId(id)
    }

}
