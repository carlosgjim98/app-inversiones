import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesTuristicoPage } from './detalles-turistico.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesTuristicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesTuristicoPageRoutingModule {}
