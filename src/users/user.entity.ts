import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { Recipe } from '../recipes/recipe.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ nullable: true })
  first_name: string;

  @Column({ nullable: true })
  last_name: string;

  @Column()
  email: string;

  @Column()
  password_hash: string;

  @Column({ type: 'date', nullable: true })
  birthday: Date;

  @Column({ nullable: true })
  avatar_url: string;

  @Column({ nullable: true })
  setting_bits: number;

  @OneToMany(() => Recipe, recipe => recipe.owner)
  recipes: Recipe[];
}
