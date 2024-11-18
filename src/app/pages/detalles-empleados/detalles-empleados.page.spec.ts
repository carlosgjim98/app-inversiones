import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallesEmpleadosPage } from './detalles-empleados.page';

describe('DetallesEmpleadosPage', () => {
  let component: DetallesEmpleadosPage;
  let fixture: ComponentFixture<DetallesEmpleadosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesEmpleadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
