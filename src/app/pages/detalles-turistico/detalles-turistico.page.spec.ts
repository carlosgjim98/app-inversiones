import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallesTuristicoPage } from './detalles-turistico.page';

describe('DetallesTuristicoPage', () => {
  let component: DetallesTuristicoPage;
  let fixture: ComponentFixture<DetallesTuristicoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesTuristicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
