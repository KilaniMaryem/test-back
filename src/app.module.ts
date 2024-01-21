import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteModule } from './note/note.module';
import { VisiteurModule } from './visiteur/visiteur.module';
import { CommentaireModule } from './commentaire/commentaire.module';
import { ArticleModule } from './article/article.module';
import { Article } from './article/article.entity';
import { Admin } from 'typeorm';
import { Visiteur } from './visiteur/visiteur.entity';
import { Note } from './note/note.entity';
import { Commentaire } from './commentaire/commentaire.entity';
import { AdminModule } from './admin/admin.module';




@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'',
      database:'testProjWeb',
      //type: 'postgres',
      //url: process.env.DATABASE_URL,
      //autoLoadEntities: true,
      synchronize: false,
      entities:["dist/**/*.entity{.ts,.js}"],
      //entities:[Article,Admin,Visiteur,Note,Commentaire],
    }),
    ArticleModule,
    CommentaireModule,
    VisiteurModule,
    NoteModule,
    AdminModule
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
