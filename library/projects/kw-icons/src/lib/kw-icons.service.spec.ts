import { TestBed } from '@angular/core/testing';

import { KwIconsService } from './kw-icons.service';

describe('KwIconsService', () => {
  let service: KwIconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KwIconsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
