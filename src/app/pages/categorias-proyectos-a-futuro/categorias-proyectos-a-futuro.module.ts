import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriasProyectosAFuturoPageRoutingModule } from './categorias-proyectos-a-futuro-routing.module';

import { CategoriasProyectosAFuturoPage } from './categorias-proyectos-a-futuro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriasProyectosAFuturoPageRoutingModule
  ],
  declarations: [CategoriasProyectosAFuturoPage]
})
export class CategoriasProyectosAFuturoPageModule {}
