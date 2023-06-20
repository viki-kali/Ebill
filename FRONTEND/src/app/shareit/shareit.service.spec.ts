import { TestBed } from '@angular/core/testing';

import { ShareitService } from './shareit.service';

describe('ShareitService', () => {
  let service: ShareitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
