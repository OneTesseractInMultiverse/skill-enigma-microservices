import { TestBed } from '@angular/core/testing';

import { LearningSourceService } from './learning-source.service';

describe('LearningSourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LearningSourceService = TestBed.get(LearningSourceService);
    expect(service).toBeTruthy();
  });
});
