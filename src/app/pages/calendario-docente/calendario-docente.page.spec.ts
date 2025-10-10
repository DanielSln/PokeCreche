import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarioDocentePage } from './calendario-docente.page';

describe('CalendarioDocentePage', () => {
  let component: CalendarioDocentePage;
  let fixture: ComponentFixture<CalendarioDocentePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioDocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
