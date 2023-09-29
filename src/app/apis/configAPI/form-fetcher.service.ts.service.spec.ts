import { TestBed } from '@angular/core/testing';

import { FormFetcherAPI } from './form-fetcher.service';

describe('FormFetcher.Service.TsService', () => {
  let service: FormFetcherAPI;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormFetcherAPI);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
