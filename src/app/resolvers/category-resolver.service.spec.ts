import { TestBed } from '@angular/core/testing';

import { CategoryResolverService } from './category-resolver.service';

describe('CategoryResolverService', () => {
  let service: CategoryResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
