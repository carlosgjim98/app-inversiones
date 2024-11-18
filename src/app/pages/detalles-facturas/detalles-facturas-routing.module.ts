import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesFacturasPage } from './detalles-facturas.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesFacturasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesFacturasPageRoutingModule {}
