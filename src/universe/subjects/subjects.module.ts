import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Subject } from './subject.model';
import { SubjectsServices } from './subjects.service';
import { SubjectsConroller } from './subjects.controller';

@Module({
  controllers: [SubjectsConroller],
  providers: [SubjectsServices],
  imports: [
    SequelizeModule.forFeature([Subject])
  ],
})
export class SubjectsModule {}
