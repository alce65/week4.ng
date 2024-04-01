import { TestBed } from '@angular/core/testing';

import { PokeStateService } from './poke-state.service';

describe('PokeStateService', () => {
  let service: PokeStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
