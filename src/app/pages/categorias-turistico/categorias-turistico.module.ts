import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriasTuristicoPageRoutingModule } from './categorias-turistico-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { CategoriasTuristicoPage } from './categorias-turistico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CategoriasTuristicoPageRoutingModule
  ],
  declarations: [CategoriasTuristicoPage]
})
export class CategoriasTuristicoPageModule {}
