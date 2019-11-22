import { TestBed } from '@angular/core/testing';

import { UneenvieService } from './uneenvie.service';

describe('UneenvieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UneenvieService = TestBed.get(UneenvieService);
    expect(service).toBeTruthy();
  });
});
