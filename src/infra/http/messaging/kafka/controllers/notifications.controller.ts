import { SendNotification } from '@applications/use-cases/send-notification';
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { Send } from 'express';

interface SendNotificaitonsPayLoad {
  content: string;
  category: string;
  recipientId: string;
}

@Controller()
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @EventPattern('notifications.send-notification')
  async handleSendNotification(
    @Payload() { content, category, recipientId }: SendNotificaitonsPayLoad,
  ) {
    await this.sendNotification.execute({
      content,
      category,
      recipientId,
    });
  }
}
