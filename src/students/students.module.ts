import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Student } from './student.model';
import { StudentsService } from './students.service';
import { StudentsController } from './student.controller';

@Module({
  controllers: [StudentsController],
  providers: [StudentsService],
  imports: [
    SequelizeModule.forFeature([Student])
  ],
  exports: [StudentsService]
})
export class StudentsModule {}
