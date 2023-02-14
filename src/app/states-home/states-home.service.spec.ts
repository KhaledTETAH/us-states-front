import { TestBed } from '@angular/core/testing';

import { StatesHomeService } from './states-home.service';

describe('StatesHomeService', () => {
  let service: StatesHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatesHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
