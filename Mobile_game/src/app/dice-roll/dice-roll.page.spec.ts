import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiceRollPage } from './dice-roll.page';

describe('DiceRollPage', () => {
  let component: DiceRollPage;
  let fixture: ComponentFixture<DiceRollPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DiceRollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
