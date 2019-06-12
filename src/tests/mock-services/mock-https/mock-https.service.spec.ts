import { TestBed } from '@angular/core/testing';

import { MockHttpsInterceptService } from './mock-https-intercept.service';

describe('MockHttpsInterceptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockHttpsInterceptService = TestBed.get(MockHttpsInterceptService);
    expect(service).toBeTruthy();
  });
});
