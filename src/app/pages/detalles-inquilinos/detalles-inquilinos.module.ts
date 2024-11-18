import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesInquilinosPageRoutingModule } from './detalles-inquilinos-routing.module';

import { DetallesInquilinosPage } from './detalles-inquilinos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesInquilinosPageRoutingModule
  ],
  declarations: [DetallesInquilinosPage]
})
export class DetallesInquilinosPageModule {}
