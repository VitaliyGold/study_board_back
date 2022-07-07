import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { Student } from 'src/users/students/student.model';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { StudentsModule } from 'src/users/students/students.module';
import { AuthModule } from 'src/auth/auth.module';
import { TeachersModule } from './teachers/teachers.module';
import { Admin } from './admins/admin.model';
import { AdminsModule } from './admins/admins.module';
import { RouterModule } from '@nestjs/core';
import { TeachersService } from './teachers/teachers.service';
import { StudentsService } from './students/students.service';
import { AdminsService } from './admins/admins.service';
import { Teacher } from './teachers/teacher.model';
import { routes } from 'src/routes';

@Module({
  controllers: [ UsersController ],
  providers: [ UsersService, TeachersService, StudentsService, AdminsService ],
  imports: [
    SequelizeModule.forFeature([ User, Student, Admin, Teacher ]),
    forwardRef(() => AuthModule),
    RouterModule.register(routes),
    StudentsModule,
    AdminsModule,
    TeachersModule
  ],
  exports: [ 
    UsersService
  ],
})
export class UsersModule {}
