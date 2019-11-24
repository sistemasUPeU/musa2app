import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManteVComponent } from './mante-v.component';

describe('ManteVComponent', () => {
  let component: ManteVComponent;
  let fixture: ComponentFixture<ManteVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManteVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManteVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
