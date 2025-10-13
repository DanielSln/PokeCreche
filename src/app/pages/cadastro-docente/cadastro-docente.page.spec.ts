import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroDocentePage } from './cadastro-docente.page';

describe('CadastroDocentePage', () => {
  let component: CadastroDocentePage;
  let fixture: ComponentFixture<CadastroDocentePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
