import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admin } from './admin.model';
import { AdminsService } from './admins.service';
import { AdminsConroller } from './admins.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [AdminsConroller],
  providers: [AdminsService],
  imports: [
    SequelizeModule.forFeature([Admin]),
    forwardRef(() => AuthModule),
  ],
  exports: [AdminsService]
})
export class AdminsModule {}
