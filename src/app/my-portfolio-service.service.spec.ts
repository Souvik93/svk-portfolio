import { TestBed } from '@angular/core/testing';

import { MyPortfolioServiceService } from './my-portfolio-service.service';

describe('MyPortfolioServiceService', () => {
  let service: MyPortfolioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyPortfolioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
