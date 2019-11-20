import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnularventaComponent } from './anularventa.component';

describe('AnularventaComponent', () => {
  let component: AnularventaComponent;
  let fixture: ComponentFixture<AnularventaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnularventaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnularventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
