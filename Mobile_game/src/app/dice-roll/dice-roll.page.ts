import { Component } from '@angular/core';

@Component({
  selector: 'app-dice-roll',
  templateUrl: 'dice-roll.page.html',
  styleUrls: ['dice-roll.page.scss'],
})
export class DiceRollPage {
  diceResult: number | null = null;
  isRolling: boolean = false;

  rollDice() {
    if (!this.isRolling) {
      this.isRolling = true;
      const cube = document.querySelector('.cube');
      cube?.classList.remove('roll');
      cube?.classList.add('roll');

      setTimeout(() => {
        const diceResult = Math.floor(Math.random() * 6) + 1;
        this.diceResult = diceResult;
        cube?.classList.remove('roll');
        this.setDiceFace(diceResult);
        
        setTimeout(() => {
          this.isRolling = false;
          this.diceResult = null;
        }, 2000);
      }, 1000);
    }
  }

  setDiceFace(result: number) {
    const sides = document.getElementsByClassName('side');
    for (let i = 0; i < sides.length; i++) {
      sides[i].classList.add('hidden');
    }
    const sideToShow = document.getElementsByClassName('side-' + result)[0];
    sideToShow?.classList.remove('hidden');
  }
}
