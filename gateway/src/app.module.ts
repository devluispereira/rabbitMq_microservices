import { Module } from '@nestjs/common';

import { InfraModule } from './infra/infra.module';
import { ServiceOneModule } from './serviceOne/serviceone.module';

@Module({
  imports: [ServiceOneModule],
})
export class AppModule {}
