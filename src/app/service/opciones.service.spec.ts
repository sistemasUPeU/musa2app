import { TestBed } from '@angular/core/testing';

import { OpcionesService } from './opciones.service';

describe('OpcionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpcionesService = TestBed.get(OpcionesService);
    expect(service).toBeTruthy();
  });
});