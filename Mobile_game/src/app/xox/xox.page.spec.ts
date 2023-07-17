import { ComponentFixture, TestBed } from '@angular/core/testing';
import { XoxPage } from './xox.page';

describe('XoxPage', () => {
  let component: XoxPage;
  let fixture: ComponentFixture<XoxPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(XoxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
