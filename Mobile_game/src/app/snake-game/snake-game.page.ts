import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-snake-game',
  templateUrl: './snake-game.page.html',
  styleUrls: ['./snake-game.page.scss'],
})
export class SnakeGamePage implements AfterViewInit {
  @ViewChild('gameCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private context!: CanvasRenderingContext2D;
  private gridSize = 20;
  private canvasSize = 400;
  private snake: { x: number; y: number }[] = [];
  private direction: 'up' | 'down' | 'left' | 'right' = 'right';
  private intervalId: any;
  public gameRunning: boolean = false;
  public gameOver: boolean = false;
  private food: { x: number; y: number } = { x: 0, y: 0 };

  constructor() {}

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    this.context = canvas.getContext('2d')!;
  }

  startGame() {
    this.snake = [{ x: 0, y: 0 }];
    this.direction = 'right';
    this.gameRunning = true;
    this.gameOver = false;
    this.generateFood(); // Yem oluştur
    this.intervalId = setInterval(() => {
      this.update();
      this.draw();
    }, 400);
    window.addEventListener('keydown', (event) => this.handleKeyDown(event));
  }

  changeDirection(direction: 'up' | 'down' | 'left' | 'right') {
    if (!this.gameRunning) {
      return;
    }
    if (
      (direction === 'up' && this.direction !== 'down') ||
      (direction === 'down' && this.direction !== 'up') ||
      (direction === 'left' && this.direction !== 'right') ||
      (direction === 'right' && this.direction !== 'left')
    ) {
      this.direction = direction;
    }
  }

  update() {
    this.moveSnake();
    if (this.isCollision()) {
      this.gameOver = true;
      this.stopGame();
    }
    if (this.isEatingFood()) { // Yem yendi mi kontrol et
      this.generateFood(); // Yeni yem oluştur
    }
  }

  moveSnake() {
    const head = { ...this.snake[0] };
    switch (this.direction) {
      case 'up':
        head.y -= 1;
        break;
      case 'down':
        head.y += 1;
        break;
      case 'left':
        head.x -= 1;
        break;
      case 'right':
        head.x += 1;
        break;
    }
    this.snake.unshift(head);
    this.snake.pop();
  }

  isCollision() {
    const head = this.snake[0];
    return (
      head.x < 0 ||
      head.x >= this.canvasSize / this.gridSize ||
      head.y < 0 ||
      head.y >= this.canvasSize / this.gridSize ||
      this.snake.some((segment, index) => index !== 0 && segment.x === head.x && segment.y === head.y)
    );
  }

  isEatingFood() {
    const head = this.snake[0];
    return head.x === this.food.x && head.y === this.food.y; // Baş yemiyi yiyor mu kontrol et
  }

  generateFood() {
    this.food.x = Math.floor(Math.random() * (this.canvasSize / this.gridSize));
    this.food.y = Math.floor(Math.random() * (this.canvasSize / this.gridSize));
  }

  draw() {
    this.context.clearRect(0, 0, this.canvasSize, this.canvasSize);
    this.drawSnake();
    this.drawFood(); // Yemi çiz
  }

  drawSnake() {
    this.context.fillStyle = '#00f';
    this.snake.forEach((segment) => {
      this.context.fillRect(segment.x * this.gridSize, segment.y * this.gridSize, this.gridSize, this.gridSize);
    });
  }

  drawFood() {
    this.context.fillStyle = '#f00';
    this.context.fillRect(this.food.x * this.gridSize, this.food.y * this.gridSize, this.gridSize, this.gridSize);
  }

  handleKeyDown(event: KeyboardEvent) {
    if (!this.gameRunning) {
      return;
    }
    switch (event.key) {
      case 'ArrowUp':
        this.changeDirection('up');
        break;
      case 'ArrowDown':
        this.changeDirection('down');
        break;
      case 'ArrowLeft':
        this.changeDirection('left');
        break;
      case 'ArrowRight':
        this.changeDirection('right');
        break;
    }
  }

  stopGame() {
    clearInterval(this.intervalId);
    window.removeEventListener('keydown', (event) => this.handleKeyDown(event));
  }
}
