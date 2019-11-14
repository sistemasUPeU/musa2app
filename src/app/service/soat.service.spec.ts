import { TestBed } from '@angular/core/testing';

import { SoatService } from './soat.service';

describe('SoatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SoatService = TestBed.get(SoatService);
    expect(service).toBeTruthy();
  });
});
