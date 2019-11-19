import { TestBed } from '@angular/core/testing';

import { ServicefrigoService } from './servicefrigo.service';

describe('ServicefrigoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicefrigoService = TestBed.get(ServicefrigoService);
    expect(service).toBeTruthy();
  });
});
