import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriasInquilinosPageRoutingModule } from './categorias-inquilinos-routing.module';

import { CategoriasInquilinosPage } from './categorias-inquilinos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriasInquilinosPageRoutingModule
  ],
  declarations: [CategoriasInquilinosPage]
})
export class CategoriasInquilinosPageModule {}
