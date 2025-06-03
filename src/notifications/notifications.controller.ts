import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { Notification } from './notification.entity';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Get()
  findAll(): Promise<Notification[]> {
    return this.notificationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Notification> {
    return this.notificationsService.findOne(id);
  }

  @Post()
  create(@Body() notification: Notification): Promise<Notification> {
    return this.notificationsService.create(notification);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.notificationsService.remove(id);
  }
}
