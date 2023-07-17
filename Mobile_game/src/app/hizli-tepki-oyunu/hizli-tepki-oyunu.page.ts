import { Component } from '@angular/core';

@Component({
  selector: 'app-hizli-tepki-oyunu',
  templateUrl: './hizli-tepki-oyunu.page.html',
  styleUrls: ['./hizli-tepki-oyunu.page.scss'],
})
export class HizliTepkiOyunuPage {
  gameStarted = false;
  gameOver = false;
  activeLight: 'red' | 'yellow' | 'green' = 'red';
  startTime: number | undefined;
  endTime: number | undefined;
  reactionTime: number | undefined;

  startGame() {
    this.gameStarted = true;
    this.gameOver = false;
    this.resetTimer();

    setTimeout(() => {
      this.changeLight('green');
      this.startTime = Date.now();
    }, this.getRandomTime());
  }

  changeLight(light: 'red' | 'yellow' | 'green') {
    this.activeLight = light;

    if (light === 'green') {
      this.endTime = Date.now();
      this.reactionTime = this.endTime - this.startTime!;
      this.gameOver = true;
    } else {
      this.resetTimer();
    }
  }

  resetTimer() {
    this.startTime = undefined;
    this.endTime = undefined;
    this.reactionTime = undefined;
  }

  calculateReactionTime() {
    if (this.startTime && this.endTime) {
      const buttonPressTime = Date.now();
      this.reactionTime = buttonPressTime - this.endTime;
    }
  }

  getRandomTime(): number {
    return Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;
  }
}
