import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';
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
import * as bcrypt from 'bcrypt';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    @InjectRepository(Category) private categoriesRepository: Repository<Category>,
    @InjectRepository(Post) private postsRepository: Repository<Post>,
    @InjectRepository(Comment) private commentsRepository: Repository<Comment>,
    @InjectRepository(Achievement) private achievementsRepository: Repository<Achievement>,
    @InjectRepository(FinanceLink) private financeLinksRepository: Repository<FinanceLink>,
    @InjectRepository(Follower) private followersRepository: Repository<Follower>,
    @InjectRepository(IsArchive) private isArchiveRepository: Repository<IsArchive>,
    @InjectRepository(Notification) private notificationsRepository: Repository<Notification>,
    @InjectRepository(PlanComponent) private planComponentRepository: Repository<PlanComponent>,
    @InjectRepository(Recipe) private recipesRepository: Repository<Recipe>,
  ) {}

  async seed() {
    await this.usersRepository.save([
      { user_id: 1, first_name: 'Minh', last_name: 'Nguyen Tuan', email: 'minh.nguyentuan@example.com', password_hash: await bcrypt.hash('password123', 10), birthday: new Date('1990-01-01'), avatar_url: 'https://i.pravatar.cc/150?img=1', setting_bits: 15 },
      { user_id: 2, first_name: 'Jane', last_name: 'Smith', email: 'jane.smith@example.com', password_hash: await bcrypt.hash('password123', 10), birthday: new Date('1985-05-15'), avatar_url: 'https://i.pravatar.cc/150?img=2', setting_bits: 10 },
      { user_id: 3, first_name: 'Michael', last_name: 'Brown', email: 'michael.brown@example.com', password_hash: await bcrypt.hash('password123', 10), birthday: new Date('1992-07-21'), avatar_url: 'https://i.pravatar.cc/150?img=3', setting_bits: 20 },
      { user_id: 4, first_name: 'Emily', last_name: 'Davis', email: 'emily.davis@example.com', password_hash: await bcrypt.hash('password123', 10), birthday: new Date('1988-12-11'), avatar_url: 'https://i.pravatar.cc/150?img=4', setting_bits: 5 },
      { user_id: 5, first_name: 'David', last_name: 'Wilson', email: 'david.wilson@example.com', password_hash: await bcrypt.hash('password123', 10), birthday: new Date('1995-03-30'), avatar_url: 'https://i.pravatar.cc/150?img=5', setting_bits: 8 },
    ]);

    await this.categoriesRepository.save([
      { cate_id: 1, name: 'Ăn uống', description: 'Chi phí bỏ ra để ăn uống' },
      { cate_id: 2, name: 'Giải trí', description: 'Chi phí bỏ ra để giải trí' },
      { cate_id: 3, name: 'Mua sắm', description: 'Chi phí bỏ ra để mua sắm' },
      { cate_id: 4, name: 'Đi lại', description: 'Chi phí bỏ ra để đi lại' },
      { cate_id: 5, name: 'Điện nước', description: 'Chi phí bỏ ra để trả tiền điện nước' },
      { cate_id: 6, name: 'Lương', description: 'Lương' },
      { cate_id: 7, name: 'Đầu tư', description: 'Chi phí bỏ ra để đầu tư' },
      { cate_id: 8, name: 'Giáo dục', description: 'Chi phí bỏ ra để học tập' },
    ]);

    await this.postsRepository.save([
      { post_id: 1, author_id: 1, publish_date: new Date('2024-05-01'), total_likes: 0, total_cmts: 3, content: 'Thay vì ăn một ngày 3 bữa, mỗi bữa 50k, hãy ăn một ngày 4 bữa, mỗi bữa 30k. Bạn sẽ thấy mình ăn nhiều hơn, nhưng tiền bỏ ra lại ít đi :D', image_url: 'https://th.bing.com/th/id/OIP.rTaIj-BBeiXi3YexP1Z0JAHaEp?rs=1&pid=ImgDetMain' },
      { post_id: 2, author_id: 2, publish_date: new Date('2024-05-02'), total_likes: 0, total_cmts: 0, content: 'This is the second post content.', image_url: 'https://th.bing.com/th/id/OIP.rTaIj-BBeiXi3YexP1Z0JAHaEp?rs=1&pid=ImgDetMain' },
    ]);

    await this.commentsRepository.save([
      { post_id: 1, user_id: 2, cmt_date: new Date('2024-05-01 10:00:00'), comment: 'Nghe ảo vậy:)))' },
      { post_id: 1, user_id: 3, cmt_date: new Date('2024-05-02 11:00:00'), comment: 'Very informative.' },
      { post_id: 1, user_id: 4, cmt_date: new Date('2024-05-03 12:00:00'), comment: 'Thanks for sharing!' },
    ]);

    await this.achievementsRepository.save([
      { arch_id: 1, title: 'Vua ăn sáng', image_url: 'https://placehold.co/400', condition: 100000, description: 'Chi tiêu 100.000đ cho bữa sáng trong một tuần' },
      { arch_id: 2, title: 'Vua ăn mày', image_url: 'https://placehold.co/400', condition: 10000, description: 'Chi tiêu 10.000đ cho bữa sáng trong một tuần' },
      { arch_id: 3, title: 'Người tối cổ', image_url: 'https://placehold.co/400', condition: 0, description: 'Chi tiêu 0đ cho giải trí trong một tuần' },
      { arch_id: 4, title: 'Không biết xài tiền', image_url: 'https://placehold.co/400', condition: 3000000, description: 'Tổng chi tiêu 3.000.000đ trong một tháng' },
    ] as DeepPartial<Achievement>[]);

    await this.financeLinksRepository.save([
      { id: 1, owner_id: 1, type: 'Credit Card', phone_num: '', issuer: 'Visa', card_number: '6219 8610 2888 8075', expire_date: new Date('2022-01-01'), name: 'MINH NGUYEN TUAN' } as DeepPartial<FinanceLink>,
      { id: 2, owner_id: 1, type: 'Debit Card', phone_num: '', issuer: 'Visa', card_number: '6219 8610 2888 8075', expire_date: new Date('2024-11-30'), name: 'BINANCE TEAM' } as DeepPartial<FinanceLink>,
      { id: 3, owner_id: 1, type: 'E-wallet', phone_num: '0123456789', issuer: 'Ví Momo', card_number: '', expire_date: null as unknown as DeepPartial<Date>, name: 'MINH NGUYEN TUAN' } as DeepPartial<FinanceLink>,
      { id: 4, owner_id: 1, type: 'E-wallet', phone_num: '0123456789', issuer: 'Zalo Pay', card_number: '', expire_date: null as unknown as DeepPartial<Date>, name: 'MINH NGUYEN TUAN' } as DeepPartial<FinanceLink>,
      { id: 5, owner_id: 1, type: 'E-wallet', phone_num: '0123456789', issuer: 'VNPay', card_number: '', expire_date: null as unknown as DeepPartial<Date>, name: 'MINH NGUYEN TUAN' } as DeepPartial<FinanceLink>,
    ]);

    await this.followersRepository.save([
      { follower: 1, followee: 2, timestamp: new Date('2024-05-20 10:00:00') },
      { follower: 2, followee: 3, timestamp: new Date('2024-05-21 11:00:00') },
      { follower: 3, followee: 1, timestamp: new Date('2024-05-22 12:00:00') },
      { follower: 1, followee: 3, timestamp: new Date('2024-05-23 13:00:00') },
      { follower: 2, followee: 1, timestamp: new Date('2024-05-24 14:00:00') },
    ]);

    await this.isArchiveRepository.save([
      { user_id: 1, arch_id: 1, timestamp: new Date('2024-05-01 10:00:00') },
    ]);

    await this.notificationsRepository.save([
      { noti_id: 1, type: 'Broadcast', target_id: null, title: 'Thông báo bảo trì', image_url: '', content: 'Hệ thống sẽ bảo trì vào tuần tới (chưa biết ngày nào).', time: new Date('2024-05-26 10:00:00') },
      { noti_id: 2, type: 'Target', target_id: 1, title: 'Thanh toán thành công', image_url: '', content: 'Hóa đơn tiền điện tháng 4/2024 đã được thanh toán', time: new Date('2024-05-25 09:00:00') },
      { noti_id: 3, type: 'Target', target_id: 1, title: 'Hóa đơn sắp tới', image_url: '', content: 'Sắp đến lúc thanh toán hóa đơn tiền điện nước tháng 5/2024', time: new Date('2024-05-25 09:00:00') },
      { noti_id: 4, type: 'Target', target_id: 1, title: 'Thanh toán thành công', image_url: '', content: 'Thanh toán Netflix tháng 4/2024', time: new Date('2024-05-22 06:00:00') },
      { noti_id: 5, type: 'Target', target_id: 1, title: 'Mở khóa thành tựu', image_url: '', content: 'Chúc mừng bạn mở khóa được thành tựu 10, tiêu ít hơn 500.000đ một tuần', time: new Date('2024-05-22 06:00:00') },
      { noti_id: 6, type: 'Target', target_id: 1, title: 'Cảnh báo chi tiêu', image_url: '', content: 'Sắp đạt ngưỡng chi tiêu tuần, còn lại 50.000đ cho chi tiêu trong tuần này.', time: new Date('2024-05-22 06:00:00') },
      { noti_id: 7, type: 'Target', target_id: 1, title: 'Gợi ý chi tiêu', image_url: '', content: 'Di chuyển bằng Grab sớm hơn 30 phút giúp tiết kiệm.', time: new Date('2024-05-22 06:00:00') },
      { noti_id: 8, type: 'Target', target_id: 1, title: 'Thanh toán thành công', image_url: '', content: 'Thanh toán hóa đơn CircleK qua ví Momo thành công.', time: new Date('2024-05-22 06:00:00') },
      { noti_id: 9, type: 'Broadcast', target_id: null, title: 'Cập nhật bản vá', image_url: '', content: 'Một lỗi nghiêm trọng vừa được phát hiện, vui lòng cập nhật bản vá khẩn cấp!!!!', time: new Date('2024-05-22 06:00:00') },
    ]);

    await this.planComponentRepository.save([
      { id: 1, owner_id: 1, type: 'Weekly', week: 1, month: null as unknown as number, year: null as unknown as number, limit_amount: 1250000, color_hex: 'FF5733', category_id: 1 } as DeepPartial<PlanComponent>,
      { id: 2, owner_id: 1, type: 'Monthly', week: null as unknown as number, month: 2, year: null as unknown as number, limit_amount: 1250000, color_hex: '33FF57', category_id: 2 } as DeepPartial<PlanComponent>,
      { id: 3, owner_id: 1, type: 'Monthly', week: null as unknown as number, month: 2, year: null as unknown as number, limit_amount: 1250000, color_hex: '33FF57', category_id: 3 } as DeepPartial<PlanComponent>,
      { id: 4, owner_id: 1, type: 'Yearly', week: null as unknown as number, month: null as unknown as number, year: 2024, limit_amount: 1250000, color_hex: '3357FF', category_id: 7 } as DeepPartial<PlanComponent>,
      { id: 5, owner_id: 1, type: 'Weekly', week: 2, month: null as unknown as number, year: null as unknown as number, limit_amount: 1250000, color_hex: 'FF5733', category_id: 3 } as DeepPartial<PlanComponent>,
      { id: 6, owner_id: 2, type: 'Monthly', week: null as unknown as number, month: 3, year: null as unknown as number, limit_amount: 1250000, color_hex: '57FF33', category_id: 2 } as DeepPartial<PlanComponent>,
    ]);

    await this.recipesRepository.save([
      { recipe_id: 1, owner_id: 1, avatar_url: 'https://th.bing.com/th/id/OIP.bTgoyhk0ZaoilosSUAw5yAHaHa?rs=1&pid=ImgDetMain', recipe_name: 'Lương 4/2024', status: 'Done', to_vendor: 'Google Company', category_id: 6, image_url: 'https://placehold.co/600x400', amount: 1250000 },
      { recipe_id: 2, owner_id: 1, avatar_url: 'https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png', recipe_name: 'Thanh toán Netflix 4/2024', status: 'Done', to_vendor: 'Netflix', category_id: 2, image_url: 'https://placehold.co/600x400', amount: -252000 },
    ]);

    console.log('Seeding completed!');
  }
}
