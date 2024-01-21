import { Module } from '@nestjs/common';
import { NoteController } from './note.controller';
import { NoteService } from './note.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from './note.entity';
import { Article } from 'src/article/article.entity';
import { Visiteur } from 'src/visiteur/visiteur.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Note, Article, Visiteur]),
  ],
  controllers: [NoteController],
  providers: [NoteService]
})
export class NoteModule {}
