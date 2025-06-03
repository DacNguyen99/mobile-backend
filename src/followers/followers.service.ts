import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Follower } from './follower.entity';

@Injectable()
export class FollowersService {
  constructor(
    @InjectRepository(Follower)
    private followersRepository: Repository<Follower>,
  ) {}

  findAll(): Promise<Follower[]> {
    return this.followersRepository.find({ relations: ['followerUser', 'followeeUser'] });
  }

  async findOne(follower: number, followee: number): Promise<Follower> {
    const followerRecord = await this.followersRepository.findOne({
      where: { follower, followee },
      relations: ['followerUser', 'followeeUser'],
    });
    if (!followerRecord) {
      throw new NotFoundException(`Follower relationship between Follower ID ${follower} and Followee ID ${followee} not found`);
    }
    return followerRecord;
  }

  create(follower: Follower): Promise<Follower> {
    return this.followersRepository.save(follower);
  }

  async remove(follower: number, followee: number): Promise<void> {
    await this.followersRepository.delete({ follower, followee });
  }
}
