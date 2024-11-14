import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriasTuristicoPage } from './categorias-turistico.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriasTuristicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriasTuristicoPageRoutingModule {}
