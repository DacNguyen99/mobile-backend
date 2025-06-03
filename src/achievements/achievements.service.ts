import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Achievement } from './achievement.entity';

@Injectable()
export class AchievementsService {
  constructor(
    @InjectRepository(Achievement)
    private achievementsRepository: Repository<Achievement>,
  ) {}

  findAll(): Promise<Achievement[]> {
    return this.achievementsRepository.find();
  }

  async findOne(id: number): Promise<Achievement> {
    const achievement = await this.achievementsRepository.findOne({
      where: { arch_id: id },
    });
    if (!achievement) {
      throw new NotFoundException(`Achievement with ID ${id} not found`);
    }
    return achievement;
  }

  async create(achievement: Achievement): Promise<Achievement> {
    return this.achievementsRepository.save(achievement);
  }

  async remove(id: number): Promise<void> {
    await this.achievementsRepository.delete(id);
  }
}
