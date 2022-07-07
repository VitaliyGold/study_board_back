import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Student } from './student.model';
import { StudentsService } from './students.service';
import { StudentsController } from './student.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [StudentsController],
  providers: [StudentsService],
  imports: [
    SequelizeModule.forFeature([Student]),
    forwardRef(() => AuthModule),
  ],
  exports: [StudentsService]
})
export class StudentsModule {}
