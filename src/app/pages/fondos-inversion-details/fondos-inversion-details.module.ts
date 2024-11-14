import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FondosInversionDetailsPageRoutingModule } from './fondos-inversion-details-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { FondosInversionDetailsPage } from './fondos-inversion-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    FondosInversionDetailsPageRoutingModule
  ],
  declarations: [FondosInversionDetailsPage]
})
export class FondosInversionDetailsPageModule {}
