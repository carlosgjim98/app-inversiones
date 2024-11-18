import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { CategoriasInquilinosPageRoutingModule } from './categorias-inquilinos-routing.module';

import { CategoriasInquilinosPage } from './categorias-inquilinos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    CategoriasInquilinosPageRoutingModule
  ],
  declarations: [CategoriasInquilinosPage]
})
export class CategoriasInquilinosPageModule {}
