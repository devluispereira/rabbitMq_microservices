/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Post, Body } from '@nestjs/common';
import { PubMessageService } from './pub.message..service';

@Controller()
export class PubMessageController {
  constructor(private pubService: PubMessageService) {}

  @Post('/sendMessageTesteOne')
  public async sendMessage(@Body() payload: any): Promise<any> {
    await this.pubService.sendMessageServiceOne(payload);
    return;
  }
}
