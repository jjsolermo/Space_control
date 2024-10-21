import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'ships',
    loadChildren: () => import('./ships/ships.module').then( m => m.ShipsPageModule)
  },
  {
    path: 'tecnology',
    loadChildren: () => import('./tecnology/tecnology.module').then( m => m.TecnologyPageModule)
  },
  {
    path: 'colony',
    loadChildren: () => import('./colony/colony.module').then( m => m.ColonyPageModule)
  },
  {
    path: 'pay',
    loadChildren: () => import('./pay/pay.module').then( m => m.PayPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
