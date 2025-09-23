import { ComponentFixture, TestBed } from '@angular/core/testing';
import { calendarioalunopage } from './calendario-aluno.page.page';

describe('calendarioalunopage', () => {
  let component: calendarioalunopage;
  let fixture: ComponentFixture<calendarioalunopage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(calendarioalunopage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

