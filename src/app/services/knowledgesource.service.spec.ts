import { TestBed } from '@angular/core/testing';

import { KnowledgesourceService } from './knowledgesource.service';

describe('KnowledgesourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KnowledgesourceService = TestBed.get(KnowledgesourceService);
    expect(service).toBeTruthy();
  });
});
