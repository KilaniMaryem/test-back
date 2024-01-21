import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './create-article.dto';

@Controller('article')
export class ArticleController {
    constructor(private readonly articleService: ArticleService) {}
    @Get()
    findAll() {
      return this.articleService.findAll();
    }
    //-------------------------------------------------------------------------------------------------//
    @Post('add')
    create(@Body() createArticleDto: CreateArticleDto) {
      return this.articleService.create(createArticleDto);
    }
    //-------------------------------------------------------------------------------------------------//
    @Get(':id')
    async getArticleById(@Param('id') idArticle: number){
        return this.articleService.getArticleById(idArticle);
    }
    //-------------------------------------------------------------------------------------------------//
    @Post(':id/like')
    async likeArticle(@Param('id') idArticle: number){
        return this.articleService.likeArticle(idArticle);
    }
    //-------------------------------------------------------------------------------------------------//
    @Get(':id/likes')
    async getLikesCount(@Param('id') idArticle: number){
        return this.articleService.getLikesCount(idArticle);
    }

}

