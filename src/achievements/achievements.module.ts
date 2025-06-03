import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AchievementsService } from './achievements.service';
import { AchievementsController } from './achievements.controller';
import { Achievement } from './achievement.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Achievement])],
  providers: [AchievementsService],
  controllers: [AchievementsController],
})
export class AchievementsModule {}
