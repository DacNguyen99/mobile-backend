import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { PlanComponentService } from './plan_component.service';
import { PlanComponent } from './plan_component.entity';

@Controller('plan-components')
export class PlanComponentController {
  constructor(private readonly planComponentService: PlanComponentService) {}

  @Get()
  findAll(): Promise<PlanComponent[]> {
    return this.planComponentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<PlanComponent> {
    return this.planComponentService.findOne(id);
  }

  @Post()
  create(@Body() planComponent: PlanComponent): Promise<PlanComponent> {
    return this.planComponentService.create(planComponent);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.planComponentService.remove(id);
  }
}
