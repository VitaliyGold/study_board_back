import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ViewUserDto } from './dto/view-user-model.dto';
import { User } from './user.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}


    @ApiOperation({ summary: 'Создание одного пользователя' })
    @ApiResponse({ status: 200, type: User })
    @Post('createSingleUser')
    create(@Body() userDto: ViewUserDto) {
        return this.userService.CreateUser(userDto)
    }

    @ApiOperation({ summary: 'Получение всех пользователей' })
    @ApiResponse({ status: 200, type: [User] })
    @Get('getAllUsers')
    getAll() {
        return this.userService.getAllUsers()
    }

}
