import { TestBed } from '@angular/core/testing';

import { AdminResolverService } from './admin-resolver.service';

describe('AdminResolverService', () => {
  let service: AdminResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
