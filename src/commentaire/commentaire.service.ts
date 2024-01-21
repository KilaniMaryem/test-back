import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Commentaire } from './commentaire.entity';
import { Repository } from 'typeorm';
import { Article } from 'src/article/article.entity';
import { Visiteur } from 'src/visiteur/visiteur.entity';

@Injectable()
export class CommentaireService {
    constructor(
        @InjectRepository(Commentaire)
        private readonly commentaireRepository: Repository<Commentaire>,
        @InjectRepository(Article)
        private readonly articleRepository: Repository<Article>,
        @InjectRepository(Visiteur)
        private readonly visiteurRepository: Repository<Visiteur>,
      ) {}
    //--------------------------------------------------------------------------------------//
    async ajouterCommentaire(idArticle: number, idVisiteur: number, contenu: string) {
        const article = await this.articleRepository.findOne({ where: { idArticle } });
        const auteurCommentaire = await this.visiteurRepository.findOne({ where: { idVisiteur } });
    
        if (!article) {
          throw new NotFoundException('Article non trouvé');
        }

        if (!auteurCommentaire) {
            throw new NotFoundException('Visiteur non trouvé');
          }
    
        const commentaire = this.commentaireRepository.create({ article, auteurCommentaire, contenu });
        return this.commentaireRepository.save(commentaire);
      }
    //--------------------------------------------------------------------------------------//
    async getCommentairesByArticleId(idArticle: number) {
        const article = await this.articleRepository.findOne({ where: {idArticle }, relations: ['commentaires', 'commentaires.auteurCommentaire']});
        
        if (!article) {
              throw new NotFoundException('Article non trouvé');
        }
        return article.commentaires || [];
    }
      
}
