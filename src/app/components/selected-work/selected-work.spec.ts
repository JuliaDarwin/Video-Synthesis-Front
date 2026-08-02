import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedWork } from './selected-work';

describe('SelectedWork', () => {
  let component: SelectedWork;
  let fixture: ComponentFixture<SelectedWork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedWork],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectedWork);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
