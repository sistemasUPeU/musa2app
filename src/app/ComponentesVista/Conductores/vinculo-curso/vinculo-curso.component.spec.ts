import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinculoCursoComponent } from './vinculo-curso.component';

describe('VinculoCursoComponent', () => {
  let component: VinculoCursoComponent;
  let fixture: ComponentFixture<VinculoCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinculoCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinculoCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
