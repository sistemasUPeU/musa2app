import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinculoopcComponent } from './vinculoopc.component';

describe('VinculoopcComponent', () => {
  let component: VinculoopcComponent;
  let fixture: ComponentFixture<VinculoopcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinculoopcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinculoopcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
