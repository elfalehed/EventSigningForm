import { TestBed } from '@angular/core/testing';

import { FianceservService } from './fianceserv.service';

describe('FianceservService', () => {
  let service: FianceservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FianceservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
