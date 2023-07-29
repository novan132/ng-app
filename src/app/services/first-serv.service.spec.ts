import { TestBed } from '@angular/core/testing';

import { FirstServService } from './first-serv.service';

describe('FirstServService', () => {
  let service: FirstServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
