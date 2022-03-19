import { TestBed } from '@angular/core/testing';

import { IvesappService } from './ivesapp.service';

describe('IvesappService', () => {
  let service: IvesappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IvesappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
