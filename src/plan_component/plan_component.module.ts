import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanComponentService } from './plan_component.service';
import { PlanComponentController } from './plan_component.controller';
import { PlanComponent } from './plan_component.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PlanComponent])],
  providers: [PlanComponentService],
  controllers: [PlanComponentController],
})
export class PlanComponentModule {}
