import { TestBed } from '@angular/core/testing';

import { RebaService } from './reba.service';

describe('RebaService', () => {
  let service: RebaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RebaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
