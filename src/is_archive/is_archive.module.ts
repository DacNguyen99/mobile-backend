import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IsArchiveService } from './is_archive.service';
import { IsArchiveController } from './is_archive.controller';
import { IsArchive } from './is_archive.entity';

@Module({
  imports: [TypeOrmModule.forFeature([IsArchive])],
  providers: [IsArchiveService],
  controllers: [IsArchiveController],
})
export class IsArchiveModule {}
