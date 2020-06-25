/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { RabbitRPC } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

import { SubMessageService } from './sub.message.service';
import { PubMessageService } from '../Pub/pub.message..service';

@Injectable()
export class SubMessageController {
  constructor(
    private readonly messageService: SubMessageService,
    private pubMessage: PubMessageService,
  ) {}

  @RabbitRPC({
    exchange: 'serviceOne',
    routingKey: '1q1',
    queue: 'serviceOne_queue1',
  })
  public async teste(payload: any, context: any) {
    console.log(`${Date.now()} service One health`);
    return {
      message: 'Service One Ok',
    };
  }

  @RabbitRPC({
    exchange: 'serviceOne',
    routingKey: '1q2',
  })
  public async teste2(payload: any, context: any) {
    console.log(`${Date.now()} service One health`);
    const response = await this.pubMessage.sendMessageServiceTwo();

    return {
      messageServiceOne: 'Service One Ok',
      messageServiceTwo: response,
    };
  }

  // @RabbitRPC({
  //   exchange: 'serviceOne',
  //   routingKey: '1q2',
  //   queue: 'serviceOne_queue2',
  //   allowNonJsonMessages: true,
  // })
  // public async teste2(msg: any) {
  //   try {
  //     this.messageService.sendMessage(msg);

  //     return { message: 'bodao' };
  //   } catch (erro) {
  //     return new Nack(true);
  //   }
  // }

  // @RabbitSubscribe({
  //   exchange: 'serviceOne',
  //   routingKey: '1q3',
  //   queue: 'serviceOne_queue3',
  //   allowNonJsonMessages: true,
  // })
  // public async teste3(msg: any) {
  //   this.messageService.sendMessage(msg);
  // }
}
