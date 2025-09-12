import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilhoPage } from './filho.page';

describe('FilhoPage', () => {
  let component: FilhoPage;
  let fixture: ComponentFixture<FilhoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FilhoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
