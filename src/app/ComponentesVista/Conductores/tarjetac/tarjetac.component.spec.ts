import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetacComponent } from './tarjetac.component';

describe('TarjetacComponent', () => {
  let component: TarjetacComponent;
  let fixture: ComponentFixture<TarjetacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
