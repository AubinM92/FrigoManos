import { TestBed } from '@angular/core/testing';

import { ChoixajoutrecettelisteService } from './choixajoutrecetteliste.service';

describe('ChoixajoutrecettelisteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChoixajoutrecettelisteService = TestBed.get(ChoixajoutrecettelisteService);
    expect(service).toBeTruthy();
  });
});
