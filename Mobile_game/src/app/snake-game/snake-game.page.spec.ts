import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SnakeGamePage } from './snake-game.page';

describe('SnakeGamePage', () => {
  let component: SnakeGamePage;
  let fixture: ComponentFixture<SnakeGamePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SnakeGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
