import { TestBed, inject } from '@angular/core/testing';

import { DatapracticeService } from './datapractice.service';

describe('DatapracticeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatapracticeService]
    });
  });

  it('should be created', inject([DatapracticeService], (service: DatapracticeService) => {
    expect(service).toBeTruthy();
  }));
});
