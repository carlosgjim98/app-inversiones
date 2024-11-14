import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriasFacturasPage } from './categorias-facturas.page';

describe('CategoriasFacturasPage', () => {
  let component: CategoriasFacturasPage;
  let fixture: ComponentFixture<CategoriasFacturasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasFacturasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
