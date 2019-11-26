import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionGrupoComponent } from './configuracion-grupo.component';

describe('ConfiguracionGrupoComponent', () => {
  let component: ConfiguracionGrupoComponent;
  let fixture: ComponentFixture<ConfiguracionGrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracionGrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
