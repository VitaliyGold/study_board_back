import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { Student } from 'src/users/students/student.model';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { StudentsModule } from 'src/users/students/students.module';
import { AuthModule } from 'src/auth/auth.module';
import { Admin } from './admins/admin.model';
import { AdminsModule } from './admins/admins.module';

@Module({
  controllers: [ UsersController ],
  providers: [ UsersService ],
  imports: [
    SequelizeModule.forFeature([ User, Student, Admin ]),
    AdminsModule,
    StudentsModule,
    AuthModule,
  ],
  exports: [
    UsersService,
  ]
})
export class UsersModule {}
