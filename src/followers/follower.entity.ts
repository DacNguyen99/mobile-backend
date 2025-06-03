import { Entity, PrimaryColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Follower {
  @PrimaryColumn()
  follower!: number;

  @PrimaryColumn()
  followee!: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'follower' })
  followerUser!: User;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'followee' })
  followeeUser!: User;

  @Column()
  timestamp!: Date;
}
