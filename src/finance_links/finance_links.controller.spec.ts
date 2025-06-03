import { Test, TestingModule } from '@nestjs/testing';
import { FinanceLinksController } from './finance_links.controller';

describe('FinanceLinksController', () => {
  let controller: FinanceLinksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinanceLinksController],
    }).compile();

    controller = module.get<FinanceLinksController>(FinanceLinksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
