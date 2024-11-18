import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallesFacturasPage } from './detalles-facturas.page';

describe('DetallesFacturasPage', () => {
  let component: DetallesFacturasPage;
  let fixture: ComponentFixture<DetallesFacturasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesFacturasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
