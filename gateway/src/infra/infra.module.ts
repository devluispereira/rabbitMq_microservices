import { Module } from '@nestjs/common';

import {
  RabbitMQModule,
  MessageHandlerErrorBehavior,
} from '@golevelup/nestjs-rabbitmq';

import { PubMessageService } from './Pub/pub.message..service';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'gateway',
          type: 'direct',
        },
      ],
      uri: 'amqp://localhost:5672',
      defaultSubscribeErrorBehavior: MessageHandlerErrorBehavior.NACK,
      defaultRpcErrorBehavior: MessageHandlerErrorBehavior.NACK,
    }),
  ],
  providers: [PubMessageService],
  exports: [PubMessageService],
})
export class InfraModule {}
