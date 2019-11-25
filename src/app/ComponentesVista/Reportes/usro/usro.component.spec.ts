import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsroComponent } from './usro.component';

describe('UsroComponent', () => {
  let component: UsroComponent;
  let fixture: ComponentFixture<UsroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
