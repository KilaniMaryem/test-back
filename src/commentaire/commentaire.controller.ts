import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { CommentaireService } from './commentaire.service';
import { Commentaire } from './commentaire.entity';

@Controller('commentaire')
export class CommentaireController {
    constructor(private readonly commentaireService: CommentaireService) {}
    //--------------------------------------------------------------------//
    @Post(':idArticle/:idVisiteur')
    async ajouterCommentaire(
    @Param('idArticle') idArticle: number,
    @Param('idVisiteur') idVisiteur: number,
    @Body('contenu') contenu: string,
    ) {
        return await this.commentaireService.ajouterCommentaire(idArticle, idVisiteur, contenu);
    }
    //--------------------------------------------------------------------//
    @Get(':idArticle')
    async getCommentairesByArticleId(@Param('idArticle') idArticle: number) : Promise<Commentaire[]>{
      return await this.commentaireService.getCommentairesByArticleId(idArticle);
    }
}
