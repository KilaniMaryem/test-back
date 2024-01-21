import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { NoteService } from './note.service';

@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}
  //--------------------------------------------------------------------------------------//
  @Post(':idVisiteur/:idArticle')
  async noterArticle(
    @Param('idVisiteur') idVisiteur: number,
    @Param('idArticle') idArticle: number,
    @Body('valeur') valeur: number,){
      return await this.noteService.noterArticle(idVisiteur, idArticle, valeur);
      }
  //--------------------------------------------------------------------------------------//
   @Get(':idArticle')
    async getNoteGeneraleByArticleId(@Param('idArticle') idArticle: number) {
      return await this.noteService.getNoteGeneraleByArticleId(idArticle);
    }
  //--------------------------------------------------------------------------------------//
  @Get(':idArticle/liste')
  async getNotesByArticleId(@Param('idArticle') idArticle: number) {
    return await this.noteService.getNotesByArticleId(idArticle);
  }

}
