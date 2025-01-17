import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriasEmpleadosPage } from './categorias-empleados.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriasEmpleadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriasEmpleadosPageRoutingModule {}
