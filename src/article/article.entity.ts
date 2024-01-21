import { Admin } from "src/admin/admin.entity";
import { Commentaire } from "src/commentaire/commentaire.entity";
import { Note } from "src/note/note.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Article {
 @PrimaryGeneratedColumn()
 idArticle: number;

 @Column()
 titre: string;

 @Column()
 contenu: string;
 
 @Column({ default: 0})
 likes: number;

 ////Un article a une note generale= moyenne des notes attribuées
 @Column({ default: 0 ,type: 'decimal', scale: 1})
 noteGenerale: number;

 ////Un article est ecrit par un auteur=un admin
 @ManyToOne(() => Admin, (admin) => admin.articlesEcrits )
 @JoinColumn({ name: 'auteurId' })
 auteur: Admin;

 ////Un article peut avoir plusieurs commentaires 
 @OneToMany(() => Commentaire, (commentaire) => commentaire.article)
 commentaires: Commentaire[];

 ////Un article peut avoir plusieurs notes
 @OneToMany(() => Note, (note) => note.article)
 notes: Note[];
 


}
