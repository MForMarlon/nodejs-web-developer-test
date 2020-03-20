import { TestBed } from '@angular/core/testing';

import { GetJokesService } from './get-jokes.service';

describe('GetJokesService', () => {
  let service: GetJokesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetJokesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
