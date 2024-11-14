import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriasFacturasPage } from './categorias-facturas.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriasFacturasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriasFacturasPageRoutingModule {}
