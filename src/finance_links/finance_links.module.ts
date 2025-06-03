import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinanceLinksService } from './finance_links.service';
import { FinanceLinksController } from './finance_links.controller';
import { FinanceLink } from './finance_link.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FinanceLink])],
  providers: [FinanceLinksService],
  controllers: [FinanceLinksController],
})
export class FinanceLinksModule {}
