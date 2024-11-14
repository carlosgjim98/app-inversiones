import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriasInquilinosPage } from './categorias-inquilinos.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriasInquilinosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriasInquilinosPageRoutingModule {}
