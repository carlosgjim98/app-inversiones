import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriasTuristicoPage } from './categorias-turistico.page';

describe('CategoriasTuristicoPage', () => {
  let component: CategoriasTuristicoPage;
  let fixture: ComponentFixture<CategoriasTuristicoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasTuristicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
