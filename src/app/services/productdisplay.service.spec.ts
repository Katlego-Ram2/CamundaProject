import { TestBed } from '@angular/core/testing';

import { ProductdisplayService } from './productdisplay.service';

describe('ProductdisplayService', () => {
  let service: ProductdisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductdisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
