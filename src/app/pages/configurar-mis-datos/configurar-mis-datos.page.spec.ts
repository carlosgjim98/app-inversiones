import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigurarMisDatosPage } from './configurar-mis-datos.page';

describe('ConfigurarMisDatosPage', () => {
  let component: ConfigurarMisDatosPage;
  let fixture: ComponentFixture<ConfigurarMisDatosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurarMisDatosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
