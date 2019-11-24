import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinculoproComponent } from './vinculopro.component';

describe('VinculoproComponent', () => {
  let component: VinculoproComponent;
  let fixture: ComponentFixture<VinculoproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinculoproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinculoproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
