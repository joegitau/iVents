import { TestBed } from '@angular/core/testing';

import { EventDetailsGuard } from './event-details.guard';

describe('EventDetailsGuard', () => {
  let guard: EventDetailsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EventDetailsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
