import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarcajaComponent } from './registrarcaja.component';

describe('RegistrarcajaComponent', () => {
  let component: RegistrarcajaComponent;
  let fixture: ComponentFixture<RegistrarcajaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarcajaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarcajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
