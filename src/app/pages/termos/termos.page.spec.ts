import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermosPage } from 'src/app/pages/termos/termos.page';

describe('HomePage', () => {
  let component: TermosPage;
  let fixture: ComponentFixture<TermosPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(TermosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
