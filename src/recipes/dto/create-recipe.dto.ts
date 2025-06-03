import { IsString, IsNotEmpty, IsNumber, IsUrl, IsOptional, IsDateString } from 'class-validator';

export class CreateRecipeDto {
  @IsString()
  @IsNotEmpty()
  recipe_name: string;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsString()
  @IsNotEmpty()
  to_vendor: string;

  @IsNumber()
  @IsNotEmpty()
  category_id: number;

  @IsUrl()
  @IsOptional()
  image_url?: string;

  @IsNumber()
  @IsNotEmpty()
  amount: number;
}
