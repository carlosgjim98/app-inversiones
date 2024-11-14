import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriasFacturasPageRoutingModule } from './categorias-facturas-routing.module';

import { CategoriasFacturasPage } from './categorias-facturas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriasFacturasPageRoutingModule
  ],
  declarations: [CategoriasFacturasPage]
})
export class CategoriasFacturasPageModule {}
