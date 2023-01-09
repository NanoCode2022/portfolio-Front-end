import { TestBed } from '@angular/core/testing';

import { MiPortfolioService } from './mi-portfolio.service';

describe('MiPortfolioService', () => {
  let service: MiPortfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiPortfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
