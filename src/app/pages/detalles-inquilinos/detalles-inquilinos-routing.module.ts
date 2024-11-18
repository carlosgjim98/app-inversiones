import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesInquilinosPage } from './detalles-inquilinos.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesInquilinosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesInquilinosPageRoutingModule {}
