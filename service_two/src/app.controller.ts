import { Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, Payload, Ctx, RmqContext } from '@nestjs/microservices';
import {
  AmqpConnection,
  InjectRabbitMQConfig,
} from '@golevelup/nestjs-rabbitmq';

@Controller()
export class AppController {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  @Post('/')
  public async sendHelloWord(): Promise<any> {
    const response = await this.amqpConnection.request({
      exchange: 'teste',
      routingKey: '2',
      payload: {
        Test: 'test',
      },
    });
    return console.log(response);
  }
}
