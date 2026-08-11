import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCall } from './book-call';

describe('BookCall', () => {
  let component: BookCall;
  let fixture: ComponentFixture<BookCall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookCall],
    }).compileComponents();

    fixture = TestBed.createComponent(BookCall);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
