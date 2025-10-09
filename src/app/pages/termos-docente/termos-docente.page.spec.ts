import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TermosDocentePage } from './termos-docente.page';

describe('TermosDocentePage', () => {
  let component: TermosDocentePage;
  let fixture: ComponentFixture<TermosDocentePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TermosDocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
