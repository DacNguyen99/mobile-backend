import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get('by-email')
  async getRecipesByEmail(@Query('email') email: string) {
    return this.recipesService.findByEmail(email);
  }
  @Post()
  async createRecipe(@Body() createRecipeDto: CreateRecipeDto, @Query('email') email: string) {
    return this.recipesService.create(createRecipeDto, email);
  }
}
