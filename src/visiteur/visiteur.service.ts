import { Injectable } from '@nestjs/common';
import { CreateVisiteurDto } from './create-visiteur.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Visiteur } from './visiteur.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VisiteurService {
    constructor(
        @InjectRepository(Visiteur)private visiteurRepository: Repository<Visiteur>
        ){}
    async create(createVisiteurDto: CreateVisiteurDto) {
        try {
          const visiteur = this.visiteurRepository.create(createVisiteurDto);
          return await this.visiteurRepository.save(visiteur);
        } catch (error) {
          console.error("Error: ",error); 
        }
      }
}
