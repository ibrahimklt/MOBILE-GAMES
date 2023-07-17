import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SnakeGamePage } from './snake-game.page';

const routes: Routes = [
  {
    path: '',
    component: SnakeGamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SnakeGamePageRoutingModule {}
