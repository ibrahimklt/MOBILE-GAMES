import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BottleSpinPageRoutingModule } from './bottle-spin-routing.module';

import { BottleSpinPage } from './bottle-spin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BottleSpinPageRoutingModule
  ],
  declarations: [BottleSpinPage]
})
export class BottleSpinPageModule {}
