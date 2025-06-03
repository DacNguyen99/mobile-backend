import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentsRepository: Repository<Comment>,
  ) {}

  findAll(): Promise<Comment[]> {
    return this.commentsRepository.find({ relations: ['post', 'user'] });
  }

  async findOne(post_id: number, user_id: number): Promise<Comment> {
    const comment = await this.commentsRepository.findOne({
      where: { post_id, user_id },
      relations: ['post', 'user'],
    });
    if (!comment) {
      throw new NotFoundException(`Comment for Post ID ${post_id} and User ID ${user_id} not found`);
    }
    return comment;
  }

  create(comment: Comment): Promise<Comment> {
    return this.commentsRepository.save(comment);
  }

  async remove(post_id: number, user_id: number): Promise<void> {
    await this.commentsRepository.delete({ post_id, user_id });
  }
}
