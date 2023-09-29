import { TestBed } from '@angular/core/testing';

import { AuthentificateService } from './authentificate.service';

describe('AuthentificateService', () => {
  let service: AuthentificateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthentificateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
