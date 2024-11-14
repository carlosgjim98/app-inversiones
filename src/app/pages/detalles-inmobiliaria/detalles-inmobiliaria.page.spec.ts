import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallesInmobiliariaPage } from './detalles-inmobiliaria.page';

describe('DetallesInmobiliariaPage', () => {
  let component: DetallesInmobiliariaPage;
  let fixture: ComponentFixture<DetallesInmobiliariaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesInmobiliariaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
