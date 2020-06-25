import { Module } from '@nestjs/common';

import { InfraModule } from './infra/infra.module';

@Module({
  imports: [InfraModule],
})
export class AppModule {}
