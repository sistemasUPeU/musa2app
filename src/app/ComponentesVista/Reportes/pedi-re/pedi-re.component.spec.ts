import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PediReComponent } from './pedi-re.component';

describe('PediReComponent', () => {
  let component: PediReComponent;
  let fixture: ComponentFixture<PediReComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PediReComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PediReComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
