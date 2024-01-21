import { Article } from "src/article/article.entity";
import { Visiteur } from "src/visiteur/visiteur.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  idNote: number;

  @Column()
  valeur: number;

  ////Plusieurs notes peuvent etre attribuées à un meme article par differents evaluateurs
  @ManyToOne(() => Article, (article) => article.notes)
  @JoinColumn({ name: 'articleId' })
  article: Article;

  ////Une note est attribuée par un et un seul évaluateur
  @OneToOne(() => Visiteur)
  @JoinColumn({ name: 'evaluateurId' })
  evaluateur: Visiteur;
}
