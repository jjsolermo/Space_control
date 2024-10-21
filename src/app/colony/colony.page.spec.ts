import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColonyPage } from './colony.page';

describe('ColonyPage', () => {
  let component: ColonyPage;
  let fixture: ComponentFixture<ColonyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ColonyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
