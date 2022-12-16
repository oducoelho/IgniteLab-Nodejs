import { Notification } from '../../src/applications/entidades/notification';
import { NotificationsRepository } from '../../src/applications/repositories/notifications-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
