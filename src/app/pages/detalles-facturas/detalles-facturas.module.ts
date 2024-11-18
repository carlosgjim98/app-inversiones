import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { DetallesFacturasPageRoutingModule } from './detalles-facturas-routing.module';

import { DetallesFacturasPage } from './detalles-facturas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule ,
    DetallesFacturasPageRoutingModule
  ],
  declarations: [DetallesFacturasPage]
})
export class DetallesFacturasPageModule {}
