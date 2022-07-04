import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { Student } from 'src/students/student.model';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { StudentsModule } from 'src/students/students.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [ UsersController ],
  providers: [ UsersService ],
  imports: [
    SequelizeModule.forFeature([ User, Student ]),
    StudentsModule,
    forwardRef(() => AuthModule),
  ],
  exports: [ UsersService ]
})
export class UsersModule {}
