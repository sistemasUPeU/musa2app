import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolusComponent } from './rolus.component';

describe('RolusComponent', () => {
  let component: RolusComponent;
  let fixture: ComponentFixture<RolusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
