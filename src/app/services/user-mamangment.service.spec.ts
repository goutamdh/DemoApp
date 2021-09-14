import { TestBed } from '@angular/core/testing';

import { UserMamangmentService } from './user-mamangment.service';

describe('UserMamangmentService', () => {
  let service: UserMamangmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserMamangmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
