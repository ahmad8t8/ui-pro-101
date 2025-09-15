import { TestBed } from '@angular/core/testing';

import { AuthorizationController } from './authorization-controller';

describe('AuthorizationController', () => {
  let service: AuthorizationController;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizationController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
