import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Achievement {
  @PrimaryGeneratedColumn()
  arch_id!: number;

  @Column()
  title!: string;

  @Column({ default: 'https://default.image.url/path' })
  image_url: string;

  @Column({ type: 'int', default: 0 })
  condition: number;

  @Column({ nullable: true })
  description!: string;
}
