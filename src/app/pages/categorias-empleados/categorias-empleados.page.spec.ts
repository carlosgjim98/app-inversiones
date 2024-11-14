import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriasEmpleadosPage } from './categorias-empleados.page';

describe('CategoriasEmpleadosPage', () => {
  let component: CategoriasEmpleadosPage;
  let fixture: ComponentFixture<CategoriasEmpleadosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasEmpleadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
