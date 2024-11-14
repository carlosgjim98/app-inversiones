import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FondosInversionDetailsPage } from './fondos-inversion-details.page';

const routes: Routes = [
  {
    path: '',
    component: FondosInversionDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FondosInversionDetailsPageRoutingModule {}
