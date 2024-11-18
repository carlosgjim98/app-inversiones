import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesProyectosAFuturoPage } from './detalles-proyectos-a-futuro.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesProyectosAFuturoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesProyectosAFuturoPageRoutingModule {}
