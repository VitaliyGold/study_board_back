import { Module } from '@nestjs/common';
import { UniverseService } from './universe.service';

@Module({
  providers: [UniverseService]
})
export class UniverseModule {}
