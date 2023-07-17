import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BottleSpinPage } from './bottle-spin.page';

const routes: Routes = [
  {
    path: '',
    component: BottleSpinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BottleSpinPageRoutingModule {}
