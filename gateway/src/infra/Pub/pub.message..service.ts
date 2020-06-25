/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@nestjs/common';

import { Nack, AmqpConnection } from '@golevelup/nestjs-rabbitmq';
type RequestOptions = {
  exchange: string;
  routingKey: string;
};

@Injectable()
export class PubMessageService {
  constructor(private amqpConnection: AmqpConnection) {}

  public async sendMessage(
    receiver: RequestOptions,
    payload?: object,
  ): Promise<void | {}> {
    try {
      const response = await this.amqpConnection.request({
        exchange: receiver.exchange,
        routingKey: receiver.routingKey,
        payload: payload,
      });

      return response;
    } catch (error) {
      console.log('deu erro');
      return new Nack(true);
    }
  }
}
