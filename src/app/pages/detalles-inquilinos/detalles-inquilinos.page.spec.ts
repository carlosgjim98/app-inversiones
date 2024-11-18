import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallesInquilinosPage } from './detalles-inquilinos.page';

describe('DetallesInquilinosPage', () => {
  let component: DetallesInquilinosPage;
  let fixture: ComponentFixture<DetallesInquilinosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesInquilinosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
