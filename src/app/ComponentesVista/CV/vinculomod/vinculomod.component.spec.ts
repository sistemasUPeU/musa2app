import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinculomodComponent } from './vinculomod.component';

describe('VinculomodComponent', () => {
  let component: VinculomodComponent;
  let fixture: ComponentFixture<VinculomodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinculomodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinculomodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
