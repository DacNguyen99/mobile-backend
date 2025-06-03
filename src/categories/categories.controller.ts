import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './category.entity';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  findAll(): Promise<Category[]> {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Category> {
    return this.categoriesService.findOne(id);
  }

  @Post()
  create(@Body() category: Category): Promise<Category> {
    return this.categoriesService.create(category);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.categoriesService.remove(id);
  }
}
