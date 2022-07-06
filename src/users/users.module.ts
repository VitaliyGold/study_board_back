import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { Student } from 'src/users/students/student.model';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { StudentsModule } from 'src/users/students/students.module';
import { AuthModule } from 'src/auth/auth.module';
import { TeachersModule } from './teachers/teachers.module';


@Module({
  controllers: [ UsersController ],
  providers: [ UsersService ],
  imports: [
    SequelizeModule.forFeature([ User, Student ]),
    StudentsModule,
    TeachersModule,
    forwardRef(() => AuthModule),
  ],
  exports: [ 
    forwardRef(() => UsersService)
  ],
})
export class UsersModule {}
