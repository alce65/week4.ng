import { TestBed } from '@angular/core/testing';

import { PokeStateService } from './poke-state.service';
import { API_URLS } from '../../app.config';
import { ApiRepoService } from '../services/api-repo.service';
import { of } from 'rxjs';

describe('PokeStateService', () => {
  let service: PokeStateService;
  const mockApiRepoSrv = jasmine.createSpyObj('ApiRepoService', {
    getAllPokemons: of({
      count: 0,
      nextUrl: null,
      previousUrl: null,
      pokeData: [],
      fullPokeData: [],
      favorites: [],
    }),
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: API_URLS,
          useValue: {
            pokeUrl: '',
            privateUrl: '',
          },
        },
        {
          provide: ApiRepoService,
          useValue: mockApiRepoSrv,
        },
      ],
    });
    service = TestBed.inject(PokeStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
