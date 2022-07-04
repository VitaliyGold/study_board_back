import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { Student } from 'src/students/student.model';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { StudentsService } from 'src/students/students.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, StudentsService],
  imports: [
    SequelizeModule.forFeature([User, Student])
  ]
})
export class UsersModule {}
