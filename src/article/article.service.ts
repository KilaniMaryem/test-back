import { Inject, Injectable, NotFoundException, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateArticleDto} from './create-article.dto';
import { Article } from './article.entity';
import { Admin } from 'src/admin/admin.entity';

@Injectable()
export class ArticleService {
    constructor(
        @InjectRepository(Article)private articleRepository: Repository<Article>,
        @InjectRepository(Admin)private adminRepository: Repository<Admin>
        /*@Inject(forwardRef(() => Repository<Admin>))private adminRepository: Repository<Admin>,
        @Inject(forwardRef(() => Repository<Article>))private articleRepository: Repository<Article>*/
        ) {}
    //-------------------------------------------------------------------------------------------------//
    /*async create(createArticleDto: CreateArticleDto) {
        try {
          const article = this.articleRepository.create(createArticleDto);
          return await this.articleRepository.save(article);
        } catch (error) {
          console.error("Error: ",error); 
        }
      }*/
      
      async create(createArticleDto: CreateArticleDto) {
        // 1. Trouver l'ID de l'administrateur par son username
        const admin = await this.adminRepository.findOne({ where: { adminname: createArticleDto.auteurname } });

        // Vérifier si l'administrateur existe
        if (!admin) {
            throw new NotFoundException('Admin not found');
        }

        // 2. Créer l'article avec l'ID de l'administrateur trouvé
        const article = this.articleRepository.create({
            titre: createArticleDto.titre,
            contenu: createArticleDto.contenu,
            auteur: admin,
        });

        // Enregistrer l'article
        return await this.articleRepository.save(article);
    }
    
    //-------------------------------------------------------------------------------------------------//
    async likeArticle(idArticle: number) {
      const article = await this.articleRepository.findOne({ where: { idArticle } });
      if (!article) {
        throw new NotFoundException('Article non trouvé');
      }
  
      article.likes = (article.likes || 0) + 1;
      return this.articleRepository.save(article);
      }
    //-------------------------------------------------------------------------------------------------//
      async getLikesCount(idArticle: number) {
        const article = await this.articleRepository.findOne({ where: { idArticle } });
        if (!article) {
            throw new NotFoundException('Article non trouvé');
        }
        return article.likes || 0;
    }
    //-------------------------------------------------------------------------------------------------//
    async findAll(){
      return await this.articleRepository.find({ relations: ['auteur'] });    }
    //-------------------------------------------------------------------------------------------------//
    async getArticleById(idArticle: number){
       return await this.articleRepository.findOne({ where: { idArticle } });
    }
  }
