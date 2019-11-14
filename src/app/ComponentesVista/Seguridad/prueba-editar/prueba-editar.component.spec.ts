import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaEditarComponent } from './prueba-editar.component';

describe('PruebaEditarComponent', () => {
  let component: PruebaEditarComponent;
  let fixture: ComponentFixture<PruebaEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
