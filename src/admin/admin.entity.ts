import { Article } from "src/article/article.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Admin {
    @PrimaryGeneratedColumn()
    idAdmin: number;
  
    @Column()
    adminname: string;

    @OneToMany(() => Article, (article) => article.auteur)
    articlesEcrits: Article[];
}
