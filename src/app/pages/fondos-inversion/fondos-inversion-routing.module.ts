import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FondosInversionPage } from './fondos-inversion.page';

const routes: Routes = [
  {
    path: '',
    component: FondosInversionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FondosInversionPageRoutingModule {}
