import { Test, TestingModule } from '@nestjs/testing';
import { PlanComponentService } from './plan_component.service';

describe('PlanComponentService', () => {
  let service: PlanComponentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlanComponentService],
    }).compile();

    service = module.get<PlanComponentService>(PlanComponentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
