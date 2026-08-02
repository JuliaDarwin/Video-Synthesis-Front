import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsHomepage } from './reviews-homepage';

describe('ReviewsHomepage', () => {
  let component: ReviewsHomepage;
  let fixture: ComponentFixture<ReviewsHomepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewsHomepage],
    }).compileComponents();

    fixture = TestBed.createComponent(ReviewsHomepage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
