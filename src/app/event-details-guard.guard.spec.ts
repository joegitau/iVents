import { TestBed } from '@angular/core/testing';

import { EventDetailsGuardGuard } from './event-details-guard.guard';

describe('EventDetailsGuardGuard', () => {
  let guard: EventDetailsGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EventDetailsGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
