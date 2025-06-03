import { Test, TestingModule } from '@nestjs/testing';
import { FinanceLinksService } from './finance_links.service';

describe('FinanceLinksService', () => {
  let service: FinanceLinksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FinanceLinksService],
    }).compile();

    service = module.get<FinanceLinksService>(FinanceLinksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
