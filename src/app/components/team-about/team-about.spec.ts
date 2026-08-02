import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAbout } from './team-about';

describe('TeamAbout', () => {
  let component: TeamAbout;
  let fixture: ComponentFixture<TeamAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamAbout],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamAbout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
