import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coin-toss',
  templateUrl: './coin-toss.page.html',
  styleUrls: ['./coin-toss.page.scss'],
})
export class CoinTossPage {
  flipping: boolean = false;
  result: string = '';
  images: string[] = ['1TLyazi.png', '1TLtura.png'];

  constructor(private router: Router) {}

  goToBottleSpin() {
    this.router.navigate(['/bottle-spin']);
  }

  goToDiceRoll() {
    this.router.navigate(['/dice-roll']);
  }

  async preloadImages() {
    const imagePromises = this.images.map((image) => {
      return new Promise((resolve, reject) => {
        const ionImg = new Image();
        ionImg.src = image;
        ionImg.addEventListener('load', () => resolve(undefined)); // resolve(undefined) ile çağırıyoruz
        ionImg.addEventListener('error', () => reject());
      });
    });

    try {
      await Promise.all(imagePromises);
    } catch (error) {
      console.log('Error occurred while preloading images:', error);
    }
  }

  async flipCoin() {
    if (!this.flipping) {
      this.flipping = true;
      this.result = '';
      await this.preloadImages();
      this.shuffleImages();

      setTimeout(() => {
        const flipResult = Math.random();

        if (flipResult <= 0.5) {
          this.result = 'heads';
          console.log('It is heads');
        } else {
          this.result = 'tails';
          console.log('It is tails');
        }

        setTimeout(() => {
          this.flipping = false;
        }, 1500);
      }, 100);
    }
  }

  shuffleImages() {
    for (let i = this.images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.images[i], this.images[j]] = [this.images[j], this.images[i]];
    }
  }
}