import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShipsPageRoutingModule } from './ships-routing.module';

import { ShipsPage } from './ships.page';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ShipsPageRoutingModule
  ],
  declarations: [ShipsPage]
})
export class ShipsPageModule {}
