import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCase } from './admin-case';

describe('AdminCase', () => {
  let component: AdminCase;
  let fixture: ComponentFixture<AdminCase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCase],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminCase);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
