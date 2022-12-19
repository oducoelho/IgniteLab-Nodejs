import { SendNotification } from '@applications/use-cases/send-notification';
import { DataBaseModule } from '@infra/database/data.base.module';
import { Module } from '@nestjs/common';
import { NotificationsController } from './kafka/controllers/notifications.controller';
import { KafkaConsumerService } from './kafka/kafka-consumer.service';
@Module({
  imports: [DataBaseModule],
  providers: [KafkaConsumerService, SendNotification],
  controllers: [NotificationsController],
})
export class MessagingModule {}
