import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FondosInversionDetailsPage } from './fondos-inversion-details.page';

describe('FondosInversionDetailsPage', () => {
  let component: FondosInversionDetailsPage;
  let fixture: ComponentFixture<FondosInversionDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FondosInversionDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
