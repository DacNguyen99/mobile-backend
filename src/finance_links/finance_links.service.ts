import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FinanceLink } from './finance_link.entity';

@Injectable()
export class FinanceLinksService {
  constructor(
    @InjectRepository(FinanceLink)
    private financeLinksRepository: Repository<FinanceLink>,
  ) {}

  findAll(): Promise<FinanceLink[]> {
    return this.financeLinksRepository.find({ relations: ['owner'] });
  }

  async findOne(id: number): Promise<FinanceLink> {
    const financeLink = await this.financeLinksRepository.findOne({
      where: { id },
      relations: ['owner'],
    });
    if (!financeLink) {
      throw new NotFoundException(`FinanceLink with ID ${id} not found`);
    }
    return financeLink;
  }

  async create(financeLink: FinanceLink): Promise<FinanceLink> {
    return this.financeLinksRepository.save(financeLink);
  }

  async remove(id: number): Promise<void> {
    await this.financeLinksRepository.delete(id);
  }
}
