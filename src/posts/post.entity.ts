import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  post_id!: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'author_id' })
  author!: User;

  @Column()
  publish_date!: Date;

  @Column()
  total_likes!: number;

  @Column()
  total_cmts!: number;

  @Column('text')
  content!: string;

  @Column('text')
  image_url!: string;
}
