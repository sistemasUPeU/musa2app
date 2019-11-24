import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManteComponent } from './mante.component';

describe('ManteComponent', () => {
  let component: ManteComponent;
  let fixture: ComponentFixture<ManteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
