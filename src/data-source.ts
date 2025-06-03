import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { User } from './users/user.entity';
import { Achievement } from './achievements/achievement.entity';
import { Category } from './categories/category.entity';
import { Comment } from './comments/comment.entity';
import { FinanceLink } from './finance_links/finance_link.entity';
import { Follower } from './followers/follower.entity';
import { IsArchive } from './is_archive/is_archive.entity';
import { Notification } from './notifications/notification.entity';
import { PlanComponent } from './plan_component/plan_component.entity';
import { Post } from './posts/post.entity';
import { Recipe } from './recipes/recipe.entity';

const configService = new ConfigService();

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: configService.get<string>('DB_HOST'),
    port: configService.get<number>('DB_PORT'),
    username: configService.get<string>('DB_USERNAME'),
    password: configService.get<string>('DB_PASSWORD'),
    database: configService.get<string>('DB_NAME'),
    entities: [
        User,
        Achievement,
        Category,
        Comment,
        FinanceLink,
        Follower,
        IsArchive,
        Notification,
        PlanComponent,
        Post,
        Recipe,
    ],
    synchronize: false,
});

export default AppDataSource;
