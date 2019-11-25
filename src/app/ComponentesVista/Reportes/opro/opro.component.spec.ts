import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OproComponent } from './opro.component';

describe('OproComponent', () => {
  let component: OproComponent;
  let fixture: ComponentFixture<OproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
