import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notification } from './notification.entity';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectRepository(Notification)
    private notificationsRepository: Repository<Notification>,
  ) {}

  findAll(): Promise<Notification[]> {
    return this.notificationsRepository.find({ relations: ['target'] });
  }

  async findOne(id: number): Promise<Notification> {
    const notification = await this.notificationsRepository.findOne({
      where: { noti_id: id },
      relations: ['target'],
    });
    if (!notification) {
      throw new NotFoundException(`Notification with ID ${id} not found`);
    }
    return notification;
  }

  async create(notification: Notification): Promise<Notification> {
    return this.notificationsRepository.save(notification);
  }

  async remove(id: number): Promise<void> {
    await this.notificationsRepository.delete(id);
  }
}
