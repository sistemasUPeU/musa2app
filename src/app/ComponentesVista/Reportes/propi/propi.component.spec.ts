import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropiComponent } from './propi.component';

describe('PropiComponent', () => {
  let component: PropiComponent;
  let fixture: ComponentFixture<PropiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
