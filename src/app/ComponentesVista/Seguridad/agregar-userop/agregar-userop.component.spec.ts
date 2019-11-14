import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarUseropComponent } from './agregar-userop.component';

describe('AgregarUseropComponent', () => {
  let component: AgregarUseropComponent;
  let fixture: ComponentFixture<AgregarUseropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarUseropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarUseropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
