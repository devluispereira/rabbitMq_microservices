/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { RabbitSubscribe, RabbitRPC, Nack } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

import { SubMessageService } from './sub.message.service';

@Injectable()
export class SubMessageController {
  constructor(private readonly messageService: SubMessageService) {}

  @RabbitRPC({
    exchange: 'serviceTwo',
    routingKey: '2q1',
    queue: 'serviceTwo_queue1',
  })
  public async teste(payload: any, context: any) {
    console.log(`${Date.now()} service Two health`);
    return {
      message: 'Service Two Ok',
    };
  }
}
