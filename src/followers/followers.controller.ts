import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { FollowersService } from './followers.service';
import { Follower } from './follower.entity';

@Controller('followers')
export class FollowersController {
  constructor(private readonly followersService: FollowersService) {}

  @Get()
  findAll(): Promise<Follower[]> {
    return this.followersService.findAll();
  }

  @Get(':follower/:followee')
  findOne(@Param('follower') follower: number, @Param('followee') followee: number): Promise<Follower> {
    return this.followersService.findOne(follower, followee);
  }

  @Post()
  create(@Body() follower: Follower): Promise<Follower> {
    return this.followersService.create(follower);
  }

  @Delete(':follower/:followee')
  remove(@Param('follower') follower: number, @Param('followee') followee: number): Promise<void> {
    return this.followersService.remove(follower, followee);
  }
}
