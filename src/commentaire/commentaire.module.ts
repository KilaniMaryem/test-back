import { Module } from '@nestjs/common';
import { CommentaireController } from './commentaire.controller';
import { CommentaireService } from './commentaire.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Commentaire } from './commentaire.entity';
import { Article } from 'src/article/article.entity';
import { Visiteur } from 'src/visiteur/visiteur.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Commentaire, Article, Visiteur]),
  ],
  controllers: [CommentaireController],
  providers: [CommentaireService]
})
export class CommentaireModule {}
