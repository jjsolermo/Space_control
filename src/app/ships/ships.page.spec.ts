import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShipsPage } from './ships.page';

describe('ShipsPage', () => {
  let component: ShipsPage;
  let fixture: ComponentFixture<ShipsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
