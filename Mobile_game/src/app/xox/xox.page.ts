import { Component } from '@angular/core';

enum Player {
  None = '',
  X = 'X',
  O = 'O'
}

@Component({
  selector: 'app-xox',
  templateUrl: './xox.page.html',
  styleUrls: ['./xox.page.scss'],
})
export class XoxPage {
  cells: Player[] = new Array(9).fill(Player.None);
  currentPlayer: Player = Player.X;
  winner: Player | null = null;

  makeMove(index: number): void {
    if (!this.cells[index] && this.winner === null) {
      this.cells[index] = this.currentPlayer;
      this.checkWinner();
      this.currentPlayer = this.currentPlayer === Player.X ? Player.O : Player.X;
    }
  }

  checkWinner(): void {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (const combo of winningCombos) {
      const [a, b, c] = combo;
      if (
        this.cells[a] &&
        this.cells[a] === this.cells[b] &&
        this.cells[a] === this.cells[c]
      ) {
        this.winner = this.currentPlayer;
        break;
      }
    }

    if (!this.cells.includes(Player.None) && this.winner === null) {
      this.winner = Player.None;
    }
  }

  resetGame(): void {
    this.cells = new Array(9).fill(Player.None);
    this.currentPlayer = Player.X;
    this.winner = null;
  }
}