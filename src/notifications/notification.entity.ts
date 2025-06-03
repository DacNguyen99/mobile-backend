import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Notification {
  @PrimaryGeneratedColumn()
  noti_id!: number;

  @Column()
  type!: string;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'target_id' })
  target!: User;

  @Column()
  title!: string;

  @Column('text')
  image_url!: string;

  @Column('text')
  content!: string;

  @Column('timestamp')
  time!: Date;
}
