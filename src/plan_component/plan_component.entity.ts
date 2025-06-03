import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../users/user.entity';
import { Category } from '../categories/category.entity';

@Entity()
export class PlanComponent {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'owner_id' })
  owner!: User;

  @Column()
  type!: string;

  @Column({ nullable: true })
  week!: number;

  @Column({ nullable: true })
  month!: number;

  @Column({ nullable: true })
  year!: number;

  @Column()
  limit_amount!: number;

  @Column()
  color_hex!: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category!: Category;
}
