import { TestBed } from '@angular/core/testing';

import { VinculoCursoService } from './vinculo-curso.service';

describe('VinculoCursoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VinculoCursoService = TestBed.get(VinculoCursoService);
    expect(service).toBeTruthy();
  });
});
