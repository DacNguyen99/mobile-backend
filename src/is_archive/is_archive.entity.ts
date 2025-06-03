import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../users/user.entity';
import { Achievement } from '../achievements/achievement.entity';

@Entity()
export class IsArchive {
  @PrimaryColumn()
  user_id!: number;

  @PrimaryColumn()
  arch_id!: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user!: User;

  @ManyToOne(() => Achievement)
  @JoinColumn({ name: 'arch_id' })
  achievement!: Achievement;

  @Column()
  timestamp!: Date;
}
