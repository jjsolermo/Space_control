import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecnologyPageRoutingModule } from './tecnology-routing.module';

import { TecnologyPage } from './tecnology.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    TecnologyPageRoutingModule
  ],
  declarations: [TecnologyPage]
})
export class TecnologyPageModule {}
