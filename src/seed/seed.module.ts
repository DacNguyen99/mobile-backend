import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeedService } from './seed.service';
import { User } from '../users/user.entity';
import { Category } from '../categories/category.entity';
import { Post } from '../posts/post.entity';
import { Comment } from '../comments/comment.entity';
import { Achievement } from '../achievements/achievement.entity';
import { FinanceLink } from '../finance_links/finance_link.entity';
import { Follower } from '../followers/follower.entity';
import { IsArchive } from '../is_archive/is_archive.entity';
import { Notification } from '../notifications/notification.entity';
import { PlanComponent } from '../plan_component/plan_component.entity';
import { Recipe } from '../recipes/recipe.entity';
import { UsersModule } from '../users/users.module';
import { CategoriesModule } from '../categories/categories.module';
import { PostsModule } from '../posts/posts.module';
import { CommentsModule } from '../comments/comments.module';
import { AchievementsModule } from '../achievements/achievements.module';
import { FinanceLinksModule } from '../finance_links/finance_links.module';
import { FollowersModule } from '../followers/followers.module';
import { IsArchiveModule } from '../is_archive/is_archive.module';
import { NotificationsModule } from '../notifications/notifications.module';
import { PlanComponentModule } from '../plan_component/plan_component.module';
import { RecipesModule } from '../recipes/recipes.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Category,
      Post,
      Comment,
      Achievement,
      FinanceLink,
      Follower,
      IsArchive,
      Notification,
      PlanComponent,
      Recipe,
    ]),
    UsersModule,
    CategoriesModule,
    PostsModule,
    CommentsModule,
    AchievementsModule,
    FinanceLinksModule,
    FollowersModule,
    IsArchiveModule,
    NotificationsModule,
    PlanComponentModule,
    RecipesModule,
  ],
  providers: [SeedService],
  exports: [SeedService],
})
export class SeedModule {}
