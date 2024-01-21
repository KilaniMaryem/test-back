import { Test, TestingModule } from '@nestjs/testing';
import { VisiteurController } from './visiteur.controller';

describe('VisiteurController', () => {
  let controller: VisiteurController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VisiteurController],
    }).compile();

    controller = module.get<VisiteurController>(VisiteurController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
