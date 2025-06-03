import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class FinanceLink {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'owner_id' })
  owner!: User;

  @Column()
  type!: string;

  @Column({ nullable: true })
  phone_num!: string;

  @Column()
  issuer!: string;

  @Column({ nullable: true })
  card_number!: string;

  @Column({ type: 'date', nullable: true })
  expire_date!: Date;

  @Column()
  name!: string;
}
