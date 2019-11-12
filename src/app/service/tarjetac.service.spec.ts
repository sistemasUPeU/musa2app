import { TestBed } from '@angular/core/testing';

import { TarjetacService } from './tarjetac.service';

describe('TarjetacService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TarjetacService = TestBed.get(TarjetacService);
    expect(service).toBeTruthy();
  });
});
