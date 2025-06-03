import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { AchievementsService } from './achievements.service';
import { Achievement } from './achievement.entity';

@Controller('achievements')
export class AchievementsController {
  constructor(private readonly achievementsService: AchievementsService) {}

  @Get()
  findAll(): Promise<Achievement[]> {
    return this.achievementsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Achievement> {
    return this.achievementsService.findOne(id);
  }

  @Post()
  create(@Body() achievement: Achievement): Promise<Achievement> {
    return this.achievementsService.create(achievement);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.achievementsService.remove(id);
  }
}
