import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartProject } from './start-project';

describe('StartProject', () => {
  let component: StartProject;
  let fixture: ComponentFixture<StartProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartProject],
    }).compileComponents();

    fixture = TestBed.createComponent(StartProject);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
