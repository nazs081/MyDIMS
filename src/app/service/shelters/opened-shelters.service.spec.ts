import { TestBed } from '@angular/core/testing';

import { OpenedSheltersService } from './opened-shelters.service';

describe('OpenedSheltersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpenedSheltersService = TestBed.get(OpenedSheltersService);
    expect(service).toBeTruthy();
  });
});
