import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DiceRollPageRoutingModule } from './dice-roll-routing.module';
import { DiceRollPage } from './dice-roll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiceRollPageRoutingModule
  ],
  declarations: [DiceRollPage]
})
export class DiceRollPageModule { }
