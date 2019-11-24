import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VincComponent } from './vinc.component';

describe('VincComponent', () => {
  let component: VincComponent;
  let fixture: ComponentFixture<VincComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VincComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VincComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
