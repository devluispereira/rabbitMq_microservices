import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import { EventPattern, Ctx } from '@nestjs/microservices';

@Injectable()
export class MessageService {
  public async sendMessage(msg: {}) {
    return console.log(msg);
  }
}
