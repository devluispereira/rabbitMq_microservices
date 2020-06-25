import { Module } from '@nestjs/common';

import { ServiceOneController } from './serviceone.contoller';
import { ServiceOneService } from './serviceone.service';
import { InfraModule } from 'src/infra/infra.module';

@Module({
  imports: [InfraModule],
  controllers: [ServiceOneController],
  providers: [ServiceOneService],
})
export class ServiceOneModule {}
