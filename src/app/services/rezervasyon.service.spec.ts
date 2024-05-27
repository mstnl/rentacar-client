import { TestBed } from '@angular/core/testing';

import { RezervasyonService } from './rezervasyon.service';

describe('RezervasyonService', () => {
  let service: RezervasyonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RezervasyonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
