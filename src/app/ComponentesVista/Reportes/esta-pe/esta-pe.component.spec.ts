import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstaPeComponent } from './esta-pe.component';

describe('EstaPeComponent', () => {
  let component: EstaPeComponent;
  let fixture: ComponentFixture<EstaPeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstaPeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstaPeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
