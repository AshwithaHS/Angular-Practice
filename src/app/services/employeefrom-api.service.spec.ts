import { TestBed } from '@angular/core/testing';

import { EmployeefromApiService } from './employeefrom-api.service';

describe('EmployeefromApiService', () => {
  let service: EmployeefromApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeefromApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
