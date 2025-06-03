import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  cate_id!: number;

  @Column()
  name!: string;

  @Column('text')
  description!: string;
}
