import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriasInmobiliariaPageRoutingModule } from './categorias-inmobiliaria-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { CategoriasInmobiliariaPage } from './categorias-inmobiliaria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CategoriasInmobiliariaPageRoutingModule
  ],
  declarations: [CategoriasInmobiliariaPage]
})
export class CategoriasInmobiliariaPageModule {}
