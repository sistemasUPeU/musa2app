import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseropComponent } from './userop.component';

describe('UseropComponent', () => {
  let component: UseropComponent;
  let fixture: ComponentFixture<UseropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
