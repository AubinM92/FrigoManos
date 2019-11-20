import { TestBed } from '@angular/core/testing';

import { UnerecetteService } from './unerecette.service';

describe('UnerecetteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnerecetteService = TestBed.get(UnerecetteService);
    expect(service).toBeTruthy();
  });
});
