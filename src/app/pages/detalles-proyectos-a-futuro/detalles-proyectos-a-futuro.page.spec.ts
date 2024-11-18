import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallesProyectosAFuturoPage } from './detalles-proyectos-a-futuro.page';

describe('DetallesProyectosAFuturoPage', () => {
  let component: DetallesProyectosAFuturoPage;
  let fixture: ComponentFixture<DetallesProyectosAFuturoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesProyectosAFuturoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
