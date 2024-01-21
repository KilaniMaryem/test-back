import { Body, Controller, Post } from '@nestjs/common';
import { VisiteurService } from './visiteur.service';
import { CreateVisiteurDto } from './create-visiteur.dto';

@Controller('visiteur')
export class VisiteurController {
    constructor(private readonly visiteurService: VisiteurService) {}
    @Post('add')
    create(@Body() createVisiteurDto: CreateVisiteurDto) {
      return this.visiteurService.create(createVisiteurDto);
    }
}
