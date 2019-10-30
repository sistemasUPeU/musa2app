import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarubigeoComponent } from './registrarubigeo.component';

describe('RegistrarubigeoComponent', () => {
  let component: RegistrarubigeoComponent;
  let fixture: ComponentFixture<RegistrarubigeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarubigeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarubigeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
