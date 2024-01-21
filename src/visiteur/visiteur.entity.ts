import { Commentaire } from "src/commentaire/commentaire.entity";

import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Visiteur {
    @PrimaryGeneratedColumn()
    idVisiteur: number;
  
    @Column()
    username: string;

    ////Le visiteur peut laisser plusieurs commentaires différents
    @OneToMany(() => Commentaire, (commentaire) => commentaire.auteurCommentaire)
    commentaires: Commentaire[];

    ////Le visiteur attribue une seule note, s'il veut attribuée une nvlle val, elle sera MAJ
    @Column()
    noteAttribuee: number;
}
