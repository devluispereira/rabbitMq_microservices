import { Module } from '@nestjs/common';

import {
  RabbitMQModule,
  MessageHandlerErrorBehavior,
} from '@golevelup/nestjs-rabbitmq';
import { PubMessageController } from './Pub/pub.message.controller';
import { PubMessageService } from './Pub/pub.message..service';
import { SubMessageService } from './Sub/sub.message.service';
import { SubMessageController } from './Sub/sub.message.RabbitController';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'serviceOne',
          type: 'direct',
        },
      ],
      uri: 'amqp://localhost:5672',
      defaultSubscribeErrorBehavior: MessageHandlerErrorBehavior.NACK,
      defaultRpcErrorBehavior: MessageHandlerErrorBehavior.NACK,
    }),
  ],
  providers: [SubMessageService, SubMessageController, PubMessageService],
  controllers: [PubMessageController],
})
export class AppModule {}
