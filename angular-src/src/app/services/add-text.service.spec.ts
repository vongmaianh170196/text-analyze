import { TestBed } from '@angular/core/testing';

import { AddTextService } from './add-text.service';

describe('AddTextService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddTextService = TestBed.get(AddTextService);
    expect(service).toBeTruthy();
  });
});
