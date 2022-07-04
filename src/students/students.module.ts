import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Student } from './student.model';
import { StudentsService } from './students.service';

@Module({
  controllers: [],
  providers: [StudentsService],
  imports: [
    SequelizeModule.forFeature([Student])
  ]
})
export class StudentsModule {}
