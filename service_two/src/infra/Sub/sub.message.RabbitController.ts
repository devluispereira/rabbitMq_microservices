/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { RabbitSubscribe, RabbitRPC, Nack } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

import { SubMessageService } from './sub.message.service';

@Injectable()
export class SubMessageController {
  constructor(private readonly messageService: SubMessageService) {}

  @RabbitSubscribe({
    exchange: 'serviceTwo',
    routingKey: '2q1',
    queue: 'serviceOne_queue1',
    queueOptions: {},
  })
  public async teste(payload: any, context: any) {
    try {
      this.messageService.sendMessage(payload);
    } catch (error) {
      return new Nack(true);
    }
  }

  @RabbitRPC({
    exchange: 'serviceTwo',
    routingKey: '2q2',
    queue: 'serviceTwo_queue2',
    allowNonJsonMessages: true,
  })
  public async teste2(msg: any) {
    try {
      this.messageService.sendMessage(msg);

      return { message: 'bodao' };
    } catch (erro) {
      return new Nack(true);
    }
  }

  @RabbitSubscribe({
    exchange: 'serviceTwo',
    routingKey: '2q3',
    queue: 'serviceTwo_queue3',
    allowNonJsonMessages: true,
  })
  public async teste3(msg: any) {
    this.messageService.sendMessage(msg);
  }
}
