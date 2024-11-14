import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriasInmobiliariaPage } from './categorias-inmobiliaria.page';

describe('CategoriasInmobiliariaPage', () => {
  let component: CategoriasInmobiliariaPage;
  let fixture: ComponentFixture<CategoriasInmobiliariaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasInmobiliariaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
