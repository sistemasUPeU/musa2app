import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PediAComponent } from './pedi-a.component';

describe('PediAComponent', () => {
  let component: PediAComponent;
  let fixture: ComponentFixture<PediAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PediAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PediAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
