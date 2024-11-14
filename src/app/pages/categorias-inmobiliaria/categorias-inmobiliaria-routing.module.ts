import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriasInmobiliariaPage } from './categorias-inmobiliaria.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriasInmobiliariaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriasInmobiliariaPageRoutingModule {}
