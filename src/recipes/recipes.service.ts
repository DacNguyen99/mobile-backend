import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recipe } from './recipe.entity';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.entity';

@Injectable()
export class RecipesService {
  constructor(
    @InjectRepository(Recipe)
    private recipesRepository: Repository<Recipe>,
    private readonly usersService: UsersService,
  ) {}

  async findByEmail(email: string): Promise<Recipe[]> {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new Error('User not found');
    }
    return this.recipesRepository.find({
      where: { owner: user },
      relations: ['owner'],
    });
  }
  async create(createRecipeDto: CreateRecipeDto, userEmail: string): Promise<Recipe> {
    const user: User = await this.usersService.findByEmail(userEmail);
    if (!user) {
      throw new Error('User not found');
    }

    const recipe = this.recipesRepository.create({
      ...createRecipeDto,
      owner: user,
    });

    return this.recipesRepository.save(recipe);
  }
}
