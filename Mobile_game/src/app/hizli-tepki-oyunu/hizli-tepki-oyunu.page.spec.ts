import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HizliTepkiOyunuPage } from './hizli-tepki-oyunu.page';

describe('HizliTepkiOyunuPage', () => {
  let component: HizliTepkiOyunuPage;
  let fixture: ComponentFixture<HizliTepkiOyunuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HizliTepkiOyunuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
