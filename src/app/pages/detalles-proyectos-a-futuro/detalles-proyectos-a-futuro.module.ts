import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { DetallesProyectosAFuturoPageRoutingModule } from './detalles-proyectos-a-futuro-routing.module';

import { DetallesProyectosAFuturoPage } from './detalles-proyectos-a-futuro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    DetallesProyectosAFuturoPageRoutingModule
  ],
  declarations: [DetallesProyectosAFuturoPage]
})
export class DetallesProyectosAFuturoPageModule {}
