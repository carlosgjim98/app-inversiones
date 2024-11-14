import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FondosInversionPage } from './fondos-inversion.page';

describe('FondosInversionPage', () => {
  let component: FondosInversionPage;
  let fixture: ComponentFixture<FondosInversionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FondosInversionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
