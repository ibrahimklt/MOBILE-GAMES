import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HizliTepkiOyunuPage } from './hizli-tepki-oyunu.page';

const routes: Routes = [
  {
    path: '',
    component: HizliTepkiOyunuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HizliTepkiOyunuPageRoutingModule {}
