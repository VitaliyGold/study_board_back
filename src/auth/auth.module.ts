import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    JwtModule.register({
      secret: 's3pp3&?ff28',
      signOptions: {
        expiresIn: '24h'
      }
    }),
    UsersModule
  ],
  exports: [
    forwardRef(() => AuthService),
    JwtModule
  ]
})
export class AuthModule {}
