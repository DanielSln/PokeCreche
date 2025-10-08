import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginProfessorPage } from './login-professor.page';

describe('LoginProfessorPage', () => {
  let component: LoginProfessorPage;
  let fixture: ComponentFixture<LoginProfessorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginProfessorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
