import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { AchievementsModule } from './achievements/achievements.module';
import { FinanceLinksModule } from './finance_links/finance_links.module';
import { FollowersModule } from './followers/followers.module';
import { IsArchiveModule } from './is_archive/is_archive.module';
import { NotificationsModule } from './notifications/notifications.module';
import { PlanComponentModule } from './plan_component/plan_component.module';
import { RecipesModule } from './recipes/recipes.module';
import { SeedModule } from './seed/seed.module';  // Add this line

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT') || 5432,
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    AuthModule,
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
    SeedModule,
  ],
})
export class AppModule {}
