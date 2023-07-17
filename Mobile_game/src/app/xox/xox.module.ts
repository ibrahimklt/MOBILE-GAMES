import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { XoxPageRoutingModule } from './xox-routing.module';

import { XoxPage } from './xox.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    XoxPageRoutingModule
  ],
  declarations: [XoxPage]
})
export class XoxPageModule {}
