/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Nack, AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class PubMessageService {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  public async sendMessageServiceTwo(payload: any): Promise<void | object> {
    try {
      await this.amqpConnection.publish('serviceTwo', '2q2', payload);

      return;
    } catch (error) {
      console.log('deu erro');
      return new Nack(true);
    }
  }
}
