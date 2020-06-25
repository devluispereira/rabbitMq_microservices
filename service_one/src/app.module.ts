import { Module } from '@nestjs/common';

import { InfraModule } from './Infra/infra.module';

@Module({
  imports: [InfraModule],
})
export class AppModule {}
