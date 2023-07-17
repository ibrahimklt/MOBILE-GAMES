import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiceRollPage } from './dice-roll.page';

const routes: Routes = [
  {
    path: '',
    component: DiceRollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiceRollPageRoutingModule { }
