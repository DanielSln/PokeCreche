import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroProfPage } from './cadastro-prof.page';

describe('CadastroProfPage', () => {
  let component: CadastroProfPage;
  let fixture: ComponentFixture<CadastroProfPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroProfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
