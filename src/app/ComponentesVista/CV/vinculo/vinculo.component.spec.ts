import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinculoComponent } from './vinculo.component';

describe('VinculoComponent', () => {
  let component: VinculoComponent;
  let fixture: ComponentFixture<VinculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
