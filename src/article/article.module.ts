import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './article.entity';
import { Admin } from 'src/admin/admin.entity';


@Module({
  controllers: [ArticleController],
  providers: [ArticleService],
  imports:[TypeOrmModule.forFeature([Article,Admin])]
})
export class ArticleModule {}
