import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionesDComponent } from './revisiones-d.component';

describe('RevisionesDComponent', () => {
  let component: RevisionesDComponent;
  let fixture: ComponentFixture<RevisionesDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisionesDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisionesDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
