import { Visiteur } from './visiteur.entity';

describe('Visiteur', () => {
  it('should be defined', () => {
    expect(new Visiteur()).toBeDefined();
  });
});
