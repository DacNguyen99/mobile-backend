import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Post } from '../posts/post.entity';
import { User } from '../users/user.entity';

@Entity()
export class Comment {
  @PrimaryColumn()
  post_id!: number;

  @PrimaryColumn()
  user_id!: number;

  @ManyToOne(() => Post)
  @JoinColumn({ name: 'post_id' })
  post!: Post;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user!: User;

  @Column()
  cmt_date!: Date;

  @Column('text')
  comment!: string;
}
