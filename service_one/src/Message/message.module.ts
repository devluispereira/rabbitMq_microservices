import {
  RabbitMQModule,
  MessageHandlerErrorBehavior,
} from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { SubMessageService } from './Sub/sub.message.service';
import { SubMessageController } from './Sub/sub.message.RabbitController';
import { PubMessageService } from './Pub/pub.message..service';
import { PubMessageController } from './Pub/pub.message.controller';

@Module({
  imports: [
    RabbitMQModule.build({
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
export class RabbitMessage {}
