import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from './note.entity';
import { Article } from 'src/article/article.entity';
import { Visiteur } from 'src/visiteur/visiteur.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NoteService {
    constructor(
        @InjectRepository(Note) private readonly noteRepository: Repository<Note>,
        @InjectRepository(Article) private readonly articleRepository: Repository<Article>,
        @InjectRepository(Visiteur) private readonly visiteurRepository: Repository<Visiteur>,
      ) {}
      //-------------------------------------------------------------------------------------------//
      async noterArticle(idVisiteur: number, idArticle: number, valeur: number) {
        const article = await this.articleRepository.findOne({ where: { idArticle } });
        const evaluateur = await this.visiteurRepository.findOne({ where: { idVisiteur } });
    
        if (!article) {
          throw new NotFoundException('Article non trouvé');
        }
        if (!evaluateur) {
            throw new NotFoundException('Visiteur non trouvé');
          }
    
        // Vérifiez si le visiteur a déjà noté cet article
        const existingNote = await this.noteRepository.findOne({
            where: { evaluateur: { idVisiteur: idVisiteur }, article: { idArticle: idArticle } },
          });
        if (existingNote) {
          // Mettez à jour la note existante
          existingNote.valeur = valeur;
          await this.noteRepository.save(existingNote);
        } else {
          // Créez une nouvelle note
          const newNote = this.noteRepository.create({ article, evaluateur, valeur });
          await this.noteRepository.save(newNote);
        }
    
        // Calculer la note générale de l'article
        const notes = await this.noteRepository.find({ where: { article }, select: ['valeur'] });
        const moyenne = notes.reduce((sum, note) => sum + note.valeur, 0) / notes.length;
        article.noteGenerale = moyenne;
    
        // Mettez à jour l'article avec la nouvelle note générale
        return this.articleRepository.save(article);
      }
      //-------------------------------------------------------------------------------------------//
      async getNotesByArticleId(idArticle: number) {
        const article = await this.articleRepository.findOne({ where: {idArticle }, relations: ['notes']});
        
        if (!article) {
              throw new NotFoundException('Article non trouvé');
        }
        return article.notes || [];
      }
      //-------------------------------------------------------------------------------------------//
      async getNoteGeneraleByArticleId(idArticle: number) {
        const article = await this.articleRepository.findOne({ where: {idArticle }});
        
        if (!article) {
              throw new NotFoundException('Article non trouvé');
        }
        console.log(article);
        return article.noteGenerale || 0;
      }
    
}
