import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { FinanceLinksService } from './finance_links.service';
import { FinanceLink } from './finance_link.entity';

@Controller('finance-links')
export class FinanceLinksController {
  constructor(private readonly financeLinksService: FinanceLinksService) {}

  @Get()
  findAll(): Promise<FinanceLink[]> {
    return this.financeLinksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<FinanceLink> {
    return this.financeLinksService.findOne(id);
  }

  @Post()
  create(@Body() financeLink: FinanceLink): Promise<FinanceLink> {
    return this.financeLinksService.create(financeLink);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.financeLinksService.remove(id);
  }
}
