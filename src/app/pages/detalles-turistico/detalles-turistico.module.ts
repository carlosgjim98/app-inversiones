import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesTuristicoPageRoutingModule } from './detalles-turistico-routing.module';

import { DetallesTuristicoPage } from './detalles-turistico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesTuristicoPageRoutingModule
  ],
  declarations: [DetallesTuristicoPage]
})
export class DetallesTuristicoPageModule {}
