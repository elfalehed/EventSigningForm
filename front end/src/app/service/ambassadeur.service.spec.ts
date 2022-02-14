import { TestBed } from '@angular/core/testing';

import { AmbassadeurService } from './ambassadeur.service';

describe('AmbassadeurService', () => {
  let service: AmbassadeurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmbassadeurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
