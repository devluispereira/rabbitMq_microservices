/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Post, Body } from '@nestjs/common';
import { ServiceOneService } from './serviceone.service';

@Controller()
export class ServiceOneController {
  constructor(private pubService: ServiceOneService) {}

  @Post('/healthServiceOne')
  public async healthServiceOne(@Body() payload: any): Promise<any> {
    return this.pubService.sendMessageServiceOne();
  }

  @Post('/healthServiceOneAskServiceTwo')
  public async healthServiceOneAskServiceTwo(
    @Body() payload: any,
  ): Promise<any> {
    return this.pubService.sendMessageServiceOneAskServiceTwo();
  }
}
