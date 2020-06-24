/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  RabbitSubscribe,
  RabbitRPC,
  Nack,
  AmqpConnection,
} from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

import { SubMessageService } from './sub.message.service';

@Injectable()
export class SubMessageController {
  constructor(private readonly messageService: SubMessageService) {}

  @RabbitSubscribe({
    exchange: 'serviceOne',
    routingKey: '1q1',
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
    exchange: 'serviceOne',
    routingKey: '1q2',
    queue: 'serviceOne_queue2',
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
    exchange: 'serviceOne',
    routingKey: '1q3',
    queue: 'serviceOne_queue3',
    allowNonJsonMessages: true,
  })
  public async teste3(msg: any) {
    this.messageService.sendMessage(msg);
  }
}
