import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComunicadosDocentePage } from './comunicados-docente.page';

describe('ComunicadosDocentePage', () => {
  let component: ComunicadosDocentePage;
  let fixture: ComponentFixture<ComunicadosDocentePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunicadosDocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
