import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TecnologyPage } from './tecnology.page';

describe('TecnologyPage', () => {
  let component: TecnologyPage;
  let fixture: ComponentFixture<TecnologyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnologyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
