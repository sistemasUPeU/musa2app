import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarRuserComponent } from './agregar-ruser.component';

describe('AgregarRuserComponent', () => {
  let component: AgregarRuserComponent;
  let fixture: ComponentFixture<AgregarRuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarRuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarRuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
