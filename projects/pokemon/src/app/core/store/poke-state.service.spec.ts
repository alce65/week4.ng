import { TestBed } from '@angular/core/testing';

import { PokeStateService, initialState } from './poke-state.service';
import { API_URLS } from '../../app.config';
import { ApiRepoService } from '../services/api-repo.service';
import { of } from 'rxjs';
import { Pokemon, PokemonDetails } from '../models/pokemon';
import { StateStructure } from '../types/state';

describe('PokeStateService', () => {
  let service: PokeStateService;
  let apiService: jasmine.SpyObj<ApiRepoService>;
  const mockApiRepoSrv: jasmine.SpyObj<ApiRepoService> = jasmine.createSpyObj(
    'ApiRepoService',
    ['getAllPokemons', 'addFavorite', 'removeFavorite', 'getPokemonDetails'],
  );

  describe('When the state has NOT data', () => {
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
          PokeStateService,
          {
            provide: ApiRepoService,
            useValue: mockApiRepoSrv,
          },
        ],
      });
      apiService = TestBed.inject(
        ApiRepoService,
      ) as jasmine.SpyObj<ApiRepoService>;
      apiService.getAllPokemons.and.returnValue(of(initialState));
      service = TestBed.inject(PokeStateService);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
      service.getState().subscribe((state) => {
        expect(state).toEqual(initialState);
      });
    });

    it('should call getState', () => {
      service.getState().subscribe((data) => {
        expect(data).toEqual(initialState);
      });
    });

    it('should call goPrevious WIThOUT previousUrl', () => {
      service.getState().subscribe((state) => {
        expect(state.previousUrl).toEqual('');
      });
      service.goPrevious();
      expect(mockApiRepoSrv.getAllPokemons).toHaveBeenCalled();
    });

    it('should call goNext WIThOUT nextUrl', () => {
      service.getState().subscribe((state) => {
        expect(state.nextUrl).toEqual('');
      });
      service.goNext();
      expect(mockApiRepoSrv.getAllPokemons).toHaveBeenCalled();
    });
  });

  describe('When the state has data', () => {
    const initialState: StateStructure = {
      count: 0,
      nextUrl: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20',
      previousUrl: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20',
      favorites: [
        { id: 1, isFavorite: true } as Pokemon,
        { id: 2, isFavorite: true } as Pokemon,
      ],
      pokeData: [
        { id: 1, isFavorite: true } as Pokemon,
        { id: 2, isFavorite: true } as Pokemon,
      ],
      fullPokeData: [{ id: 1 } as PokemonDetails],
    };

    const mockApiRepoSrv: jasmine.SpyObj<ApiRepoService> = jasmine.createSpyObj(
      'ApiRepoService',
      {
        getAllPokemons: of(initialState),
        addFavorite: of({}),
        removeFavorite: of({ id: 1 }),
        getPokemonDetails: of({}),
      },
    );

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
          PokeStateService,
          {
            provide: ApiRepoService,
            useValue: mockApiRepoSrv,
          },
        ],
      });
      apiService = TestBed.inject(
        ApiRepoService,
      ) as jasmine.SpyObj<ApiRepoService>;
      service = TestBed.inject(PokeStateService);
    });

    it('should call goPrevious WITH previousUrl', () => {
      service.getState().subscribe((state) => {
        expect(state.previousUrl).toEqual(
          'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20',
        );
      });
      service.goPrevious();
      expect(apiService.getAllPokemons).toHaveBeenCalled();
    });

    it('should call goNext WITH nextURL', () => {
      service.getState().subscribe((state) => {
        expect(state.nextUrl).toEqual(
          'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20',
        );
      });
      service.goNext();
      expect(mockApiRepoSrv.getAllPokemons).toHaveBeenCalled();
    });

    it('should call toggleFavorite in a favorite', () => {
      const s = service.getState().subscribe((state) => {
        expect(state.favorites.length).toEqual(2);
      });
      s.unsubscribe();

      service.toggleFavorite({
        id: 1,
        isFavorite: true,
      } as Pokemon);
      expect(mockApiRepoSrv.addFavorite).toHaveBeenCalled();
    });

    it('should call toggleFavorite in a NOT favorite', () => {
      const s = service.getState().subscribe((state) => {
        expect(state.favorites.length).toEqual(2);
      });
      s.unsubscribe();

      service.toggleFavorite({
        id: 1,
        isFavorite: false,
      } as Pokemon);
      expect(mockApiRepoSrv.removeFavorite).toHaveBeenCalled();
    });

    it('should call getPokeDetails for fullPokeData included', () => {
      service.getState().subscribe((state) => {
        expect(state.fullPokeData.length).toBe(1);
      });
      service.getPokeDetails(1).subscribe((data) => {
        expect(data).toEqual({ id: 1 } as PokemonDetails);
      });
    });

    it('should call getPokeDetails for NOT fullPokeData included', () => {
      service.getState().subscribe((state) => {
        expect(state.fullPokeData.length).toBe(1);
      });
      service.getState;
      service.getPokeDetails(2).subscribe(() => {
        expect(mockApiRepoSrv.getPokemonDetails).toHaveBeenCalled();
      });
    });
  });
});
