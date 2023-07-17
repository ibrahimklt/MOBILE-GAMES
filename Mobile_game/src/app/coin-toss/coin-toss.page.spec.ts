import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoinTossPage } from './coin-toss.page';

describe('CoinTossPage', () => {
  let component: CoinTossPage;
  let fixture: ComponentFixture<CoinTossPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CoinTossPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
