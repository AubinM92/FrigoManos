import { TestBed } from '@angular/core/testing';

import { ModifRecetteService } from './modif-recette.service';

describe('ModifRecetteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModifRecetteService = TestBed.get(ModifRecetteService);
    expect(service).toBeTruthy();
  });
});
