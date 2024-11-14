import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriasEmpleadosPageRoutingModule } from './categorias-empleados-routing.module';

import { CategoriasEmpleadosPage } from './categorias-empleados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriasEmpleadosPageRoutingModule
  ],
  declarations: [CategoriasEmpleadosPage]
})
export class CategoriasEmpleadosPageModule {}
