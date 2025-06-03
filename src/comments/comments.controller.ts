import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { Comment } from './comment.entity';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get()
  findAll(): Promise<Comment[]> {
    return this.commentsService.findAll();
  }

  @Get(':post_id/:user_id')
  findOne(@Param('post_id') post_id: number, @Param('user_id') user_id: number): Promise<Comment> {
    return this.commentsService.findOne(post_id, user_id);
  }

  @Post()
  create(@Body() comment: Comment): Promise<Comment> {
    return this.commentsService.create(comment);
  }

  @Delete(':post_id/:user_id')
  remove(@Param('post_id') post_id: number, @Param('user_id') user_id: number): Promise<void> {
    return this.commentsService.remove(post_id, user_id);
  }
}
