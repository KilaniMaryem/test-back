import { Test, TestingModule } from '@nestjs/testing';
import { VisiteurService } from './visiteur.service';

describe('VisiteurService', () => {
  let service: VisiteurService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VisiteurService],
    }).compile();

    service = module.get<VisiteurService>(VisiteurService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
