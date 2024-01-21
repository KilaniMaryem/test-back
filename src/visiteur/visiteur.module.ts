import { Module } from '@nestjs/common';
import { VisiteurController } from './visiteur.controller';
import { VisiteurService } from './visiteur.service';
import { Visiteur } from './visiteur.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [VisiteurController],
  providers: [VisiteurService],
  imports:[TypeOrmModule.forFeature([Visiteur])]

})
export class VisiteurModule {}
