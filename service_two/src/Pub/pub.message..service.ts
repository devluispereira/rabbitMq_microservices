/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@nestjs/common';

import { Nack, AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class PubMessageService {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  public async sendMessageServiceOne(payload: any): Promise<void | object> {
    try {
      await this.amqpConnection.publish('serviceOne', '1q2', payload);

      return;
    } catch (error) {
      console.log('deu erro');
      return new Nack(true);
    }
  }
}
