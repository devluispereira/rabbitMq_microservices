/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@nestjs/common';

import { Nack, AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class PubMessageService {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  public async sendMessageServiceTwo(): Promise<void | object> {
    try {
      const response = await this.amqpConnection.request({
        exchange: 'serviceTwo',
        routingKey: '2q1',
      });

      return response;
    } catch (error) {
      console.log('deu erro');
      return new Nack(true);
    }
  }
}
