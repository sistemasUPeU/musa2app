import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradadeproductoComponent } from './entradadeproducto.component';

describe('EntradadeproductoComponent', () => {
  let component: EntradadeproductoComponent;
  let fixture: ComponentFixture<EntradadeproductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntradadeproductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradadeproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
