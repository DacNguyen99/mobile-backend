import { IsString, IsOptional, IsDateString } from 'class-validator';
export class UpdateUserDto {
  @IsString()
  @IsOptional()
  first_name?: string;

  @IsString()
  @IsOptional()
  last_name?: string;

  @IsDateString()
  @IsOptional()
  birthday?: Date;

  @IsString()
  @IsOptional()
  avatar_url?: string;

  @IsOptional()
  setting_bits?: number;
}
