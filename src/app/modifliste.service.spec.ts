import { TestBed } from '@angular/core/testing';

import { ModiflisteService } from './modifliste.service';

describe('ModiflisteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModiflisteService = TestBed.get(ModiflisteService);
    expect(service).toBeTruthy();
  });
});
