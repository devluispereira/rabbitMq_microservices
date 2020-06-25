/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@nestjs/common';

import { PubMessageService } from 'src/infra/Pub/pub.message..service';

@Injectable()
export class ServiceOneService {
  constructor(private readonly pubRpcServiceMessage: PubMessageService) {}

  public async sendMessageServiceOne(): Promise<void | object> {
    const response = await this.pubRpcServiceMessage.sendMessageRcp({
      exchange: 'serviceOne',
      routingKey: '1q1',
    });
    return response;
  }

  public async sendMessageServiceOneAskServiceTwo(): Promise<void | object> {
    const response = await this.pubRpcServiceMessage.sendMessageRcp({
      exchange: 'serviceOne',
      routingKey: '1q2',
    });

    return response;
  }
}
