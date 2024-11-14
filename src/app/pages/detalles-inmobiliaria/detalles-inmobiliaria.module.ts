import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesInmobiliariaPageRoutingModule } from './detalles-inmobiliaria-routing.module';

import { DetallesInmobiliariaPage } from './detalles-inmobiliaria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesInmobiliariaPageRoutingModule
  ],
  declarations: [DetallesInmobiliariaPage]
})
export class DetallesInmobiliariaPageModule {}
