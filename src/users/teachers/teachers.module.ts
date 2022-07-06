import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Teacher } from './teacher.model';
import { TeachersService } from './teachers.service';
import { TeachersController } from './teachers.controller';

@Module({
  controllers: [TeachersController],
  providers: [TeachersService],
  imports: [
    SequelizeModule.forFeature([Teacher])
  ],
  exports: [TeachersService]
})
export class TeachersModule {}
