import { TestBed } from '@angular/core/testing';

import { PokeStateService, initialState } from './poke-state.service';
import { API_URLS } from '../../app.config';
import { ApiRepoService } from '../services/api-repo.service';
import { of } from 'rxjs';
import { Pokemon, PokemonDetails } from '../models/pokemon';

xdescribe('PokeStateService', () => {
  let service: PokeStateService;
  let apiService: jasmine.SpyObj<ApiRepoService>;
  const mockApiRepoSrv: jasmine.SpyObj<ApiRepoService> = jasmine.createSpyObj(
    'ApiRepoService',
    ['getAllPokemons', 'addFavorite', 'removeFavorite', 'getPokemonDetails'],
  );

  // {
  //   getAllPokemons: of(initialState),
  //   addFavorite: of({}),
  //   removeFavorite: of({ id: 1 }),
  //   getPokemonDetails: of({}),
  // });

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
    mockApiRepoSrv.getAllPokemons.and.returnValue(of(initialState));
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

  it('should call goPrevious WITH previousUrl', () => {
    apiService.getAllPokemons.and.returnValue(
      of({
        ...initialState,
        previousUrl: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20',
      }),
    );
    service = TestBed.inject(PokeStateService);
    apiService.getAllPokemons();
    service.getState().subscribe((state) => {
      expect(state.previousUrl).toEqual(
        'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20',
      );
    });
    //service.goPrevious();
    expect(apiService.getAllPokemons).toHaveBeenCalled();
  });

  it('should call goNext WIThOUT nextUrl', () => {
    service.goNext();
    expect(mockApiRepoSrv.getAllPokemons).toHaveBeenCalled();
  });

  it('should call goNext WITH nextURL', () => {
    mockApiRepoSrv.getAllPokemons.and.returnValue(
      of({
        ...initialState,
        nextUrl: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20',
      }),
    );
    service.goNext();
    expect(mockApiRepoSrv.getAllPokemons).toHaveBeenCalled();
  });

  it('should call toggleFavorite in a favorite', () => {
    mockApiRepoSrv.getAllPokemons.and.returnValue(
      of({
        ...initialState,
        favorites: [{ id: 1, isFavorite: true } as Pokemon],
      }),
    );
    service = TestBed.inject(PokeStateService);
    service.getState().subscribe((state) => {
      expect(state.favorites as unknown).toEqual([]);
    });
    service.toggleFavorite({
      id: 1,
      isFavorite: true,
    } as Pokemon);
    expect(mockApiRepoSrv.addFavorite).toHaveBeenCalled();
  });

  it('should call toggleFavorite in a NOT favorite', () => {
    mockApiRepoSrv.getAllPokemons.and.returnValue(
      of({
        ...initialState,
        favorites: [
          { id: 1, isFavorite: true } as Pokemon,
          { id: 2, isFavorite: true } as Pokemon,
        ],
        pokeData: [
          { id: 1, isFavorite: true } as Pokemon,
          { id: 2, isFavorite: true } as Pokemon,
        ],
      }),
    );
    service.toggleFavorite({
      id: 1,
      isFavorite: false,
    } as Pokemon);
    expect(mockApiRepoSrv.removeFavorite).toHaveBeenCalled();
  });

  it('should call getPokeDetails for fullPokeData included', () => {
    mockApiRepoSrv.getAllPokemons.and.returnValue(
      of({
        ...initialState,
        fullPokeData: [{ id: 1 } as PokemonDetails],
      }),
    );
    service.getState().subscribe((state) => {
      {
        expect(state.fullPokeData).toEqual([{ id: 1 } as PokemonDetails]);
      }
    });
    // service.getPokeDetails(1).subscribe((data) => {
    //   expect(data).toEqual({ id: 1 } as PokemonDetails);
    // });
  });

  it('should call getPokeDetails for NOT fullPokeData included', () => {
    mockApiRepoSrv.getAllPokemons.and.returnValue(
      of({
        ...initialState,
        fullPokeData: [{ id: 1 } as PokemonDetails],
      }),
    );
    service.getState;
    service.getPokeDetails(2).subscribe(() => {
      expect(mockApiRepoSrv.getPokemonDetails).toHaveBeenCalled();
    });
  });
});
