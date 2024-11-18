import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigurarMisDatosPageRoutingModule } from './configurar-mis-datos-routing.module';

import { ConfigurarMisDatosPage } from './configurar-mis-datos.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigurarMisDatosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ConfigurarMisDatosPage]
})
export class ConfigurarMisDatosPageModule {}
