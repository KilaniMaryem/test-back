import { Article } from "src/article/article.entity";
import { Visiteur } from "src/visiteur/visiteur.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Commentaire {
    @PrimaryGeneratedColumn()
    idCommentaire: number;
  
    @Column()
    contenu: string;
  
    @ManyToOne(() => Article, (article) => article.commentaires)
    @JoinColumn({ name: 'articleId' })
    article: Article;
    
    @ManyToOne(() => Visiteur, (visiteur) => visiteur.commentaires)
    @JoinColumn({ name: 'auteurCommentaireId' })
    auteurCommentaire: Visiteur;
  }
