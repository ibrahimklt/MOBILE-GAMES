import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BottleSpinPage } from './bottle-spin.page';

describe('BottleSpinPage', () => {
  let component: BottleSpinPage;
  let fixture: ComponentFixture<BottleSpinPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BottleSpinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
