import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriasProyectosAFuturoPage } from './categorias-proyectos-a-futuro.page';

describe('CategoriasProyectosAFuturoPage', () => {
  let component: CategoriasProyectosAFuturoPage;
  let fixture: ComponentFixture<CategoriasProyectosAFuturoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasProyectosAFuturoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
