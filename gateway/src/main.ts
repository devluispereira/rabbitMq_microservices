import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3333, () =>
    console.log(
      'MicroServiceOne running, connect to RMQ and expose HTTP post on 3333',
    ),
  );
}
bootstrap();
