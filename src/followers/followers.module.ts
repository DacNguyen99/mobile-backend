import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FollowersService } from './followers.service';
import { FollowersController } from './followers.controller';
import { Follower } from './follower.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Follower])],
  providers: [FollowersService],
  controllers: [FollowersController],
})
export class FollowersModule {}
