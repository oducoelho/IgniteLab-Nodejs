import { Notification } from '../entidades/notification';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
}
