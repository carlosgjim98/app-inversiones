import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriasInquilinosPage } from './categorias-inquilinos.page';

describe('CategoriasInquilinosPage', () => {
  let component: CategoriasInquilinosPage;
  let fixture: ComponentFixture<CategoriasInquilinosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasInquilinosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
