import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlanComponent } from './plan_component.entity';

@Injectable()
export class PlanComponentService {
  constructor(
    @InjectRepository(PlanComponent)
    private planComponentRepository: Repository<PlanComponent>,
  ) {}

  findAll(): Promise<PlanComponent[]> {
    return this.planComponentRepository.find({ relations: ['owner', 'category'] });
  }

  async findOne(id: number): Promise<PlanComponent> {
    const planComponent = await this.planComponentRepository.findOne({
      where: { id },
      relations: ['owner', 'category'],
    });
    if (!planComponent) {
      throw new NotFoundException(`PlanComponent with ID ${id} not found`);
    }
    return planComponent;
  }

  async create(planComponent: PlanComponent): Promise<PlanComponent> {
    return this.planComponentRepository.save(planComponent);
  }

  async remove(id: number): Promise<void> {
    await this.planComponentRepository.delete(id);
  }
}
