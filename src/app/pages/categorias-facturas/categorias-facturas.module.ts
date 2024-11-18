import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicModule } from '@ionic/angular';

import { CategoriasFacturasPageRoutingModule } from './categorias-facturas-routing.module';

import { CategoriasFacturasPage } from './categorias-facturas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CategoriasFacturasPageRoutingModule
  ],
  declarations: [CategoriasFacturasPage]
})
export class CategoriasFacturasPageModule {}
