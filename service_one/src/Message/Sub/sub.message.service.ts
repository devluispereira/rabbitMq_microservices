import { Nack } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SubMessageService {
  public async sendMessage(msg: any) {
    console.log(msg);
    return new Nack(false);
  }
}
