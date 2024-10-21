import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecnologyPage } from './tecnology.page';

const routes: Routes = [
  {
    path: '',
    component: TecnologyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecnologyPageRoutingModule {}
