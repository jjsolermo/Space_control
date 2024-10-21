import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColonyPageRoutingModule } from './colony-routing.module';

import { ColonyPage } from './colony.page';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ColonyPageRoutingModule
  ],
  declarations: [ColonyPage]
})
export class ColonyPageModule {}
