import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriasProyectosAFuturoPage } from './categorias-proyectos-a-futuro.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriasProyectosAFuturoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriasProyectosAFuturoPageRoutingModule {}
