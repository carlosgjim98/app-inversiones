import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FondosInversionPageRoutingModule } from './fondos-inversion-routing.module';

import { FondosInversionPage } from './fondos-inversion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FondosInversionPageRoutingModule
  ],
  declarations: [FondosInversionPage]
})
export class FondosInversionPageModule {}
