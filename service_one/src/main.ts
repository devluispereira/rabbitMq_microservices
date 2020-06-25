import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  Transport,
  MicroserviceOptions,
  RmqOptions,
} from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule);

  await app.listen(() => console.log('MicroServiceOne running'));
}
bootstrap();
