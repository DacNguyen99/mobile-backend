import { Test, TestingModule } from '@nestjs/testing';
import { PlanComponentController } from './plan_component.controller';

describe('PlanComponentController', () => {
  let controller: PlanComponentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlanComponentController],
    }).compile();

    controller = module.get<PlanComponentController>(PlanComponentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
