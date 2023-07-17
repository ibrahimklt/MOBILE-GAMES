import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottle-spin',
  templateUrl: './bottle-spin.page.html',
  styleUrls: ['./bottle-spin.page.scss'],
})
export class BottleSpinPage {
  spinning: boolean = false;
  rotationAngle: number = 0;
  player1Score: number = 0;
  player2Score: number = 0;
  player3Score: number = 0;

  constructor(private router: Router) {}

  spinBottle() {
    if (!this.spinning) {
      this.spinning = true;
      this.rotationAngle = this.getRandomRotationAngle();
      setTimeout(() => {
        this.spinning = false;
      }, 3000); // Şişenin 3 saniye boyunca dönmesini sağlar
    }
  }

  getRandomRotationAngle(): number {
    const minAngle = 720; // En az 2 tur dönmesini sağlamak için 720 derece
    const maxAngle = 3600; // En fazla 10 tur dönmesini sağlamak için 3600 derece
    return Math.floor(Math.random() * (maxAngle - minAngle + 1) + minAngle);
  }

  increaseScore(player: string) {
    if (player === 'player1') {
      this.player1Score++;
    } else if (player === 'player2') {
      this.player2Score++;
    } else if (player === 'player3') {
      this.player3Score++;
    }
  }

  decreaseScore(player: string) {
    if (player === 'player1' && this.player1Score > 0) {
      this.player1Score--;
    } else if (player === 'player2' && this.player2Score > 0) {
      this.player2Score--;
    } else if (player === 'player3' && this.player3Score > 0) {
      this.player3Score--;
    }
  }

  goToCoinToss() {
    this.router.navigate(['/coin-toss']);
  }

  goToDiceRoll() {
    this.router.navigate(['/dice-roll']);
  }
}
