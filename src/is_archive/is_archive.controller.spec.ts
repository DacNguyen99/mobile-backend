import { Test, TestingModule } from '@nestjs/testing';
import { IsArchiveController } from './is_archive.controller';

describe('IsArchiveController', () => {
  let controller: IsArchiveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IsArchiveController],
    }).compile();

    controller = module.get<IsArchiveController>(IsArchiveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
