import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { IsArchiveService } from './is_archive.service';
import { IsArchive } from './is_archive.entity';

@Controller('is-archive')
export class IsArchiveController {
  constructor(private readonly isArchiveService: IsArchiveService) {}

  @Get()
  findAll(): Promise<IsArchive[]> {
    return this.isArchiveService.findAll();
  }

  @Get(':user_id/:arch_id')
  findOne(@Param('user_id') user_id: number, @Param('arch_id') arch_id: number): Promise<IsArchive> {
    return this.isArchiveService.findOne(user_id, arch_id);
  }

  @Post()
  create(@Body() isArchive: IsArchive): Promise<IsArchive> {
    return this.isArchiveService.create(isArchive);
  }

  @Delete(':user_id/:arch_id')
  remove(@Param('user_id') user_id: number, @Param('arch_id') arch_id: number): Promise<void> {
    return this.isArchiveService.remove(user_id, arch_id);
  }
}
