import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { XoxPage } from './xox.page';

const routes: Routes = [
  {
    path: '',
    component: XoxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class XoxPageRoutingModule {}
