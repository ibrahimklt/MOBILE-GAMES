import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HizliTepkiOyunuPageRoutingModule } from './hizli-tepki-oyunu-routing.module';

import { HizliTepkiOyunuPage } from './hizli-tepki-oyunu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HizliTepkiOyunuPageRoutingModule
  ],
  declarations: [HizliTepkiOyunuPage]
})
export class HizliTepkiOyunuPageModule {}
