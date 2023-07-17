import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SnakeGamePageRoutingModule } from './snake-game-routing.module';

import { SnakeGamePage } from './snake-game.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SnakeGamePageRoutingModule
  ],
  declarations: [SnakeGamePage]
})
export class SnakeGamePageModule {}
