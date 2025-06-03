import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IsArchive } from './is_archive.entity';

@Injectable()
export class IsArchiveService {
  constructor(
    @InjectRepository(IsArchive)
    private isArchiveRepository: Repository<IsArchive>,
  ) {}

  findAll(): Promise<IsArchive[]> {
    return this.isArchiveRepository.find({ relations: ['user', 'achievement'] });
  }

  async findOne(user_id: number, arch_id: number): Promise<IsArchive> {
    const isArchiveRecord = await this.isArchiveRepository.findOne({
      where: { user_id, arch_id },
      relations: ['user', 'achievement'],
    });
    if (!isArchiveRecord) {
      throw new NotFoundException(`IsArchive record for User ID ${user_id} and Achievement ID ${arch_id} not found`);
    }
    return isArchiveRecord;
  }

  create(isArchive: IsArchive): Promise<IsArchive> {
    return this.isArchiveRepository.save(isArchive);
  }

  async remove(user_id: number, arch_id: number): Promise<void> {
    await this.isArchiveRepository.delete({ user_id, arch_id });
  }
}
