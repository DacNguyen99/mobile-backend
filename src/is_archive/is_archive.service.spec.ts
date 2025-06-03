import { Test, TestingModule } from '@nestjs/testing';
import { IsArchiveService } from './is_archive.service';

describe('IsArchiveService', () => {
  let service: IsArchiveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IsArchiveService],
    }).compile();

    service = module.get<IsArchiveService>(IsArchiveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
