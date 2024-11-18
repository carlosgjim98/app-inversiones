import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigurarMisDatosPage } from './configurar-mis-datos.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigurarMisDatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurarMisDatosPageRoutingModule {}
