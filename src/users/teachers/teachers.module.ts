import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Teacher } from './teacher.model';
import { TeachersService } from './teachers.service';
import { TeachersController } from './teachers.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [TeachersController],
  providers: [TeachersService],
  imports: [
    SequelizeModule.forFeature([Teacher]),
    forwardRef(() => AuthModule),
  ],
  exports: [TeachersService]
})
export class TeachersModule {}
