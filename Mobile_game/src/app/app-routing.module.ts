import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bottle-spin',
    pathMatch: 'full'
  },
  {
    path: 'bottle-spin',
    loadChildren: () => import('./bottle-spin/bottle-spin.module').then(m => m.BottleSpinPageModule)
  },
  {
    path: 'coin-toss',
    loadChildren: () => import('./coin-toss/coin-toss.module').then(m => m.CoinTossPageModule)
  },
  {
    path: 'dice-roll',
    loadChildren: () => import('./dice-roll/dice-roll.module').then(m => m.DiceRollPageModule)
  },
  {
    path: 'snake-game',
    loadChildren: () => import('./snake-game/snake-game.module').then( m => m.SnakeGamePageModule)
  },
  {
    path: 'hizli-tepki-oyunu',
    loadChildren: () => import('./hizli-tepki-oyunu/hizli-tepki-oyunu.module').then( m => m.HizliTepkiOyunuPageModule)
  },
  {
    path: 'xox',
    loadChildren: () => import('./xox/xox.module').then( m => m.XoxPageModule)
  },
  
  
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }