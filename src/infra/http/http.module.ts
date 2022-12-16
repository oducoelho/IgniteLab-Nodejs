import { Module } from '@nestjs/common';
import { SendNotification } from 'src/applications/use-cases/send-notification';
import { DataBaseModule } from '../database/data.base.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DataBaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification],
})
export class HttpModule {}
